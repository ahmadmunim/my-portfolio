<script lang="ts">
  import { onMount } from 'svelte';
  import { createObserver } from '$lib/utils';

  import content from '$lib/content/content.json';
  const {services} = content;

  let sectionEl: HTMLElement;
  let svcHeaderVisible = false;
  let svcVisible = false;

  onMount(() => {
    createObserver(sectionEl, () => { svcHeaderVisible = true; });
    createObserver(sectionEl, () => { svcVisible = true; }, 0.15);
  });
</script>

<section class="services" id="services" bind:this={sectionEl}>
  <div class="services-inner">
    <h2 class="col-heading" class:animate={svcHeaderVisible}>What I can do for you</h2>
    <p class="col-subtext" class:animate={svcHeaderVisible}>
      Whether you need data processed and structured the right way, messy data cleaned up, or a backend system that actually holds up, I've got you covered.
    </p>
    <div class="service-cards">
      {#each services as service}
        <div class="service-card" class:animate={svcVisible}>
          <div class="service-icon-circle">
            <i class="{service.icon}"></i>
          </div>
          <span class="service-label">{service.label}</span>
          <p class="service-desc">{service.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .services {
    width: 100%;
    padding: 4rem 0;
  }

  .services-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
  }

  .col-heading {
    font-family: var(--title-font);
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
    font-family: var(--body-font);
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

  .service-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  .service-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.75rem;
    padding: 1.5rem 1rem;
    border-radius: 1rem;
    border: 1.5px solid var(--color-border);
    background-color: var(--color-surface);
    transition: transform 0.2s ease, box-shadow 0.2s ease,
                opacity 0.5s ease,
                translate 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    opacity: 0;
    translate: 0 30px;
  }

  .service-card.animate {
    opacity: 1;
    translate: 0 0;
  }

  .service-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0px var(--color-border);
  }

  .service-icon-circle {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1.5px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    color: var(--color-accent);
    flex-shrink: 0;
  }

  .service-label {
    font-family: var(--header-font);
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--color-text-primary);
  }

  .service-desc {
    font-family: var(--body-font);
    font-size: 0.82rem;
    line-height: 1.5;
    color: var(--color-text-secondary);
    margin: 0;
  }

  /* ===================== */
  /* RESPONSIVE            */
  /* ===================== */
  @media (max-width: 700px) {
    .service-cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>