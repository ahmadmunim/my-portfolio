<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  const roles = ['Data', 'Backend', 'Software'];
  let currentIndex = 0;
  let displayedWord = roles[0];
  let animating = false;
  let interval: ReturnType<typeof setInterval>;

  onMount(() => {
    interval = setInterval(() => {
      animating = true;
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % roles.length;
        displayedWord = roles[currentIndex];
        animating = false;
      }, 300);
    }, 2500);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<section class="hero">
  <div class="hero-inner">

    <!-- Left: content -->
    <div class="hero-left">
      <h1 class="hero-title">
        <span class="role-word" class:fade-out={animating}>{displayedWord}</span>
        <br />
        <span class="role-static">Engineer</span>
      </h1>

      <p class="hero-hook">
        I build data pipelines and backend systems that scale, perform, and don't break.
      </p>

      <p class="hero-intro">
        Computer Science graduate with hands-on experience building ETL pipelines, RAG systems, and data infrastructures. Available for full-time roles and freelance engagements.
      </p>

      <div class="connect-block">
        <h2 class="connect-heading">Let's Connect!</h2>
        <p class="connect-text">
          Got a pipeline to build, a system to scale, or a project that needs a reliable engineer? If you have something worth building, let's talk.
        </p>

        <div class="social-icons">
          <a href="mailto:ahmadmunim0803@gmail.com" class="icon-link" aria-label="Email">
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a href="https://linkedin.com/in/ahmadmunim" target="_blank" rel="noopener noreferrer" class="icon-link" aria-label="LinkedIn">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/ahmadmunim" target="_blank" rel="noopener noreferrer" class="icon-link" aria-label="GitHub">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://freelancer.com/u/ahmadmunim0803" target="_blank" rel="noopener noreferrer" class="icon-link" aria-label="Freelancer">
            <i class="fa-solid fa-dove"></i>
          </a>
        </div>

        <div class="resume-cta">
          <span class="resume-label">Hiring? Here's my resume</span>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" class="icon-link" aria-label="Download Resume">
            <i class="fa-solid fa-file-arrow-down"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Right: photo + name -->
    <div class="hero-right">
      <div class="photo-placeholder" aria-label="Profile photo placeholder">
        <img src="/img/ahmad-munim.jpg" alt="Ahmad Munim" />
      </div>
      <p class="hero-name">
        <span class="name-logo"><img src="/img/logo.svg" width="50" height="50" alt="Logo"></span>
        Ahmad Munim
      </p>
    </div>

  </div>

</section>

<!-- Wave divider -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 25 1440 320">
  <!-- Filled wave shape (no stroke) -->
  <path
    fill="var(--color-bg)"
    fill-opacity="1"
    d="M0,256L48,229.3C96,203,192,149,288,133.3C384,117,480,139,576,154.7C672,171,768,181,864,192C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
  />
  <!-- Curve line only (stroke, no fill) -->
  <path
    fill="none"
    stroke="var(--color-border)"
    stroke-width="2"
    d="M0,256L48,229.3C96,203,192,149,288,133.3C384,117,480,139,576,154.7C672,171,768,181,864,192C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128"
  />
</svg>

<style>
  .hero {
    width: 100%;
    padding: 4rem 0 0 0;
    background-color: var(--color-bg);
  }

  .hero-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  /* --- Left --- */
  .hero-left {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .hero-title {
    font-family: 'Spectral', sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    line-height: 1.1;
    margin: 0;
    color: var(--color-text-primary);
  }

  .role-word {
    display: inline-block;
    min-width: 205px;
    color: var(--color-accent);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .role-word.fade-out {
    opacity: 0;
    transform: translateY(-6px);
  }

  .role-static {
    color: var(--color-text-primary);
  }

  .hero-hook {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    line-height: 1.5;
    color: var(--color-text-primary);
    margin: 0;
  }

  .hero-intro {
    font-family: 'Google Sans Flex', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin: 0;
  }

  /* --- Connect block --- */
  .connect-block {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .connect-heading {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    margin: 0;
    color: var(--color-text-primary);
  }

  .connect-text {
    font-family: 'Google Sans Flex', sans-serif;
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
    margin: 0;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .icon-link {
    color: var(--color-text-secondary);
    font-size: 1.4rem;
    transition: color 0.2s ease;
    text-decoration: none;
  }

  .icon-link:hover {
    color: var(--color-accent);
  }

  .resume-cta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .resume-label {
    font-family: 'Google Sans Flex', sans-serif;
    font-size: 0.95rem;
    color: var(--color-text-secondary);
  }

  /* --- Right --- */
  .hero-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    align-self: start;
  }

  .photo-placeholder {
    width: 100%;
    max-width: 320px;
    aspect-ratio: 3 / 4;
    background-color: var(--color-placeholder);
    border-radius: 1rem;
    border: 1px solid var(--color-accent);
    overflow: hidden;
    box-shadow: 4px 4px 0px var(--color-accent);
  }

  .photo-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  .hero-name {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-text-primary);
    margin: 0;
  }

  .name-logo {
    font-family: var(--font-display);
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--color-accent);
  }

  /* ===================== */
  /* RESPONSIVE            */
  /* ===================== */
  @media (max-width: 520px) {
    .hero-inner {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .hero-right {
      order: -1;
    }

    .photo-placeholder {
      max-width: 220px;
    }
  }
</style>