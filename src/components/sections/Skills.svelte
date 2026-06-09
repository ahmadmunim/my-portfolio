<script lang="ts">
  import { onMount } from 'svelte';
  import { createObserver } from '$lib/utils';

  import content from '$lib/content/content.json';
  const { skillCategories } = content;

  let activeCategory = skillCategories[0];
  let animationKey = 0;
  let sectionEl: HTMLElement;
  let visible = false;

  function selectCategory(category: typeof skillCategories[0]) {
    activeCategory = category;
    animationKey++;
  }

  onMount(() => {
    createObserver(sectionEl, () => { visible = true; });
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
</svelte:head>

<section class="skills" id="skills" bind:this={sectionEl}>
  <div class="skills-inner">

    <div class="skills-header" class:animate={visible}>
      <h2 class="section-heading">My Skills</h2>
      <p class="skills-intro">
        Explore my technical skills across different domains. Click on any category
        to see the specific technologies and tools that I work with.
      </p>
    </div>

    <!-- Category cards -->
    <div class="category-cards">
      {#each skillCategories as category, i}
        <button
          class="category-card"
          class:active={activeCategory.id === category.id}
          class:animate={visible}
          style="--card-delay: {i * 120}ms"
          onclick={() => selectCategory(category)}
        >
          <div class="card-icon">
            <i class={category.icon}></i>
          </div>
          <span class="card-label">{category.label}</span>
          <span class="card-desc">{category.description}</span>
        </button>

        <!-- Mobile inline dropdown -->
        {#if activeCategory.id === category.id}
          <div class="mobile-chips">
            {#key animationKey}
              {#each activeCategory.skills as skill, i}
                <span class="chip" style="--chip-delay: {i * 80}ms">
                  <i class="{skill.icon} chip-icon"></i>
                  {skill.name}
                </span>
              {/each}
            {/key}
          </div>
        {/if}
      {/each}
    </div>

    <!-- Skills display (desktop only) -->
    <div class="skills-display">
      <div class="skill-chips">
        {#key animationKey}
          {#each activeCategory.skills as skill, i}
            <span class="chip" style="animation-delay: {i * 80}ms">
              <i class="{skill.icon} chip-icon"></i>
              {skill.name}
            </span>
          {/each}
        {/key}
      </div>
    </div>

  </div>
</section>

<style> 
  .skills {
    width: 100%;
    padding: 2rem 0;
  }

  .skills-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  /* --- Header animation --- */
  .skills-header {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .skills-header.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .section-heading {
    font-family: 'Spectral', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: var(--color-text-primary);
    margin: 0;
  }

  .skills-intro {
    font-family: 'Google Sans Flex', sans-serif;
    font-size: 1rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin: 0 auto;
    max-width: 560px;
  }

  /* --- Category cards --- */
  .category-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  .category-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.75rem;
    padding: 1.75rem 1.25rem;
    border-radius: 1rem;
    border: 1.5px solid var(--color-border);
    background-color: var(--color-bg);
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease,
                opacity 0.5s ease var(--card-delay, 0ms),
                transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) var(--card-delay, 0ms);
    opacity: 0;
    transform: translateY(30px);
  }

  .category-card.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .category-card:hover {
    border-color: var(--color-accent);
    color: var(--color-text-primary);
    border: 2px solid var(--color-accent);
  }

  .category-card.active {
    border-color: var(--color-accent);
    background-color: var(--color-surface);
    color: var(--color-text-primary);
    border: 2px solid var(--color-accent);
  }

  .card-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: var(--color-placeholder);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
  }

  .card-label {
    font-family: var(--header-font);
    font-size: 1.15rem;
    font-weight: 700;
  }

  .card-desc {
    font-family: 'Google Sans Flex', sans-serif;
    font-size: 0.95rem;
    line-height: 1.5;
    color: var(--color-text-secondary);
  }

  /* --- Skills display --- */
  .skills-display {
    padding: 1.75rem 2rem;
    border: 1.5px solid var(--color-border);
    border-radius: 1rem;
    background-color: var(--color-surface);
    min-height: 80px;
  }

  .skill-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    align-items: center;
  }

  .chip {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Google Sans Flex', sans-serif;
    font-size: 1rem;
    padding: 0.5rem 1.1rem;
    border-radius: 999px;
    border: 1px solid var(--color-border);
    color: var(--color-text-secondary);
    background-color: var(--color-bg);

    /* Animation */
    opacity: 0;
    transform: scale(0.85);
    animation: chipIn 0.35s ease forwards;
  }

  @keyframes chipIn {
    0% {
      opacity: 0;
      transform: scale(0.85);
    }
    60% {
      opacity: 1;
      transform: scale(1.08);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .chip-icon {
    font-size: 1.25rem;
  }

  /* --- Mobile inline chips --- */
  .mobile-chips {
    display: none;
  }
  /* ===================== */
  /* RESPONSIVE            */
  /* ===================== */
  @media (max-width: 768px) {
    .category-cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .category-cards {
      grid-template-columns: 1fr;
      gap: 0;
      row-gap: 1rem;
    }

    .category-card {
      margin-bottom: 0;
    }

    .category-card.active {
      border-radius: 1rem 1rem 0 0;
      /* border-bottom: none; */
      margin-bottom: -2rem;
    }

    /* Hide desktop skills display */
    .skills-display {
      display: none;
    }

    /* Show mobile inline chips */
    .mobile-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
      padding: 1rem 1.25rem;
      border: 2px solid var(--color-accent);
      border-top: none;
      border-radius: 0 0 1rem 1rem;
      background-color: var(--color-surface);
      margin-bottom: 1rem;
      animation: dropdownIn 0.4s ease forwards;
    }

    .mobile-chips .chip {
      opacity: 0;
      transform: scale(0.85);
      animation: chipIn 0.35s ease forwards;
      animation-delay: calc(0.4s + var(--chip-delay, 0ms));
    }
  }

  @keyframes dropdownIn {
    from {
      opacity: 0;
      max-height: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      max-height: 300px;
      transform: translateY(0);
    }
  }
</style>