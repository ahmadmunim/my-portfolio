<script lang="ts">
  import { onMount } from 'svelte';
  import { createObserver } from '$lib/utils';

  import content from '$lib/content/content.json';
  const { experiences } = content;

  let sectionEl: HTMLElement;
  let expHeaderVisible = false;
  let expVisible = false;

  onMount(() => {
    createObserver(sectionEl, () => { expHeaderVisible = true; });
    createObserver(sectionEl, () => { expVisible = true; }, 0.15);
  });
</script>

<section class="experience" id="experience-col" bind:this={sectionEl}>
  <div class="experience-inner">
    <h2 class="col-heading" class:animate={expHeaderVisible}>Productive Results, Lasting Impact</h2>
    <p class="col-subtext" class:animate={expHeaderVisible}>Every project I take on ships with a clear outcome. Here's the proof.</p>
    <div class="experience-cards">
      {#each experiences as exp, i}
        <div class="experience-card" class:animate={expVisible} style="--row-delay: {Math.floor(i / 2) * 800}ms">
        
          <div class="exp-header">
            <p class="exp-title">{exp.title}</p>
            <p class="exp-company">{exp.company}</p>
          </div>

          <p class="exp-problem">{exp.problem}</p>

          <div class="exp-arrow">
            <i class="fa-solid fa-arrow-down"></i>
          </div>

          <p class="exp-solution">{exp.solution}</p>

          <div class="exp-impact">
            <span class="impact-text">{exp.impact}</span>
          </div>
          
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .experience {
    width: 100%;
    padding: 4rem 0;
    scroll-margin-top: 80px;
  }

  .experience-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
  }

  .col-heading {
    font-family: 'Spectral', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: var(--color-text-primary);
    margin: 0 0 0.5rem 0;
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .col-heading.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .col-subtext {
    font-family: 'Google Sans Flex', sans-serif;
    font-size: 1rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin: 0 0 2rem 0;
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s;
  }

  .col-subtext.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .experience-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  .experience-card {
    padding: 1.5rem 2rem;
    border-radius: 1rem;
    border: 1.5px solid var(--color-border);
    background-color: var(--color-surface);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 4px 4px 0px var(--color-accent);
    transition: transform 0.2s ease, box-shadow 0.2s ease,
                opacity 0.5s ease var(--row-delay, 0ms),
                translate 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) var(--row-delay, 0ms);
    opacity: 0;
    translate: 0 30px;
  }

  .experience-card.animate {
    opacity: 1;
    translate: 0 0;
  }

  .experience-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px var(--color-accent);
  }

  .exp-header {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .exp-title {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0;
  }

  .exp-company {
    font-family: 'Google Sans Flex', sans-serif;
    font-size: 0.85rem;
    color: var(--color-text-secondary);
    margin: 0;
  }

  .exp-problem,
  .exp-solution {
    font-family: 'Google Sans Flex', sans-serif;
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
    margin: 0;
  }

  .exp-arrow {
    display: flex;
    justify-content: center;
    color: var(--color-text-secondary);
    font-size: 1.1rem;
  }

  .exp-impact {
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid var(--color-border);
    text-align: center;
  }

  .impact-text {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--color-accent);
  }

  /* ===================== */
  /* RESPONSIVE            */
  /* ===================== */
  @media (max-width: 900px) {
    .experience-cards {
      grid-template-columns: 1fr;
    }
  }
</style>