<script lang="ts">
  import { onMount } from 'svelte';
  import { createObserver } from '$lib/utils';

  let sectionEl: HTMLElement;
  let collageEl: HTMLElement;
  let visible = false;

  onMount(() => {
    createObserver(sectionEl, () => { visible = true; });
  });
</script>

<!-- ======================== -->
<!-- ABOUT ME SECTION         -->
<!-- ======================== -->
<section class="about" id="about" bind:this={sectionEl}>
  <div class="about-inner">
    
    <h2 class="section-heading">About Me</h2>
    <div class="about-content">

      <!-- Left: image collage -->
      <div class="collage" bind:this={collageEl}>
        <div class="collage-img img-top-left" class:animate={visible}>
          <img src="/img/slideshow/csgames2025-2.jpg" alt="Ahmad Munim and a man sitting at table using their laptops during CS Games 2025.">
        </div>

        <div class="collage-img img-top-right" class:animate={visible}>
          <img src="/img/slideshow/csgames2023.jpg" alt="Ahmad Munim and a man sitting at table during a hackathon. One is looking at his laptop, and Ahmad is looking at the person's laptop.">
        </div>

        <div class="collage-img img-mid-left" class:animate={visible}>
          <img src="/img/slideshow/code.jpg" alt="Laptop screen showing code editor with code on it.">
        </div>

        <div class="collage-img img-bot-right" class:animate={visible}>
          <img src="/img/slideshow/csgames2025.jpg" alt="Ahmad Munim sitting at a table looking at two monitors during CS Games 2025. The main monitor shows a code editor.">
        </div>

        <div class="collage-img img-mid-center" class:animate={visible}>
          <img src="/img/slideshow/csgames2024.jpg" alt="Ahmad Munim sitting at a table looking to his left from camera and smiling.">
        </div>
      </div>

      <!-- Right: bio text -->
      <div class="about-bio" class:animate={visible}>
        <hr class="divider" />
        <p>
          I completed my Bachelor of Science in Computer Science (Honours) at the University of Windsor, graduating in 2025 w/ distinction. During my time there I was part of the Outstanding Scholars Program: an honor awarded to the top 1% of students for exceptional academics, and built hands-on experience across software engineering, data analytics, databases, and AI/ML, and served the Computer Science Society as a Event Coordinator and Treasurer.
        </p>
        <p>
          Today, I build backend systems and data infrastructure that organizations can rely on. My work spans data pipelines and database design that turn raw, inconsistent data into something clean and production-ready, RAG systems powered by reliable ingestion and chunking, and backend engineering through APIs, automation workflows, and cloud services built to scale without breaking under pressure.
        </p>
        <p>
          I care about doing the job right. That means designing systems with intention, implementing solutions that hold up under real-world conditions, and solving the business problem, not just the technical one. When a system is broken, I don't just patch it, I understand why it broke.
        </p>
        <p>
          I build systems that work. The work that happens behind the scenes but makes everything else possible.
        </p>
        <a href="#experience-col" class="cta-btn" onclick={(e) => {
            e.preventDefault();
            document.getElementById('experience-col')?.scrollIntoView({ behavior: 'smooth' });
          }}>
          Real Work, Real Impact
          <i class="fa-solid fa-arrow-right"></i>
        </a>
        <hr class="divider" />
      </div>

    </div>
  </div>
</section>

<style>
  /* ===================== */
  /* SHARED                */
  /* ===================== */
  .section-heading {
    font-family: var(--title-font);
    font-size: 2rem;
    font-weight: 800;
    color: var(--color-text-primary);
    text-align: center;
  }

  .divider {
    border: none;
    border-top: 1px solid var(--color-border);
    margin: 1.5rem 0;
  }

  /* ===================== */
  /* ABOUT ME              */
  /* ===================== */
  .about {
    width: 100%;
    padding-top: 4rem;
  }

  .about-inner {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    align-items: center;
  }

  /* --- Collage --- */
  .collage {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
  }

  .collage-img {
    position: absolute;
    background-color: var(--color-placeholder);
    border: 1.5px solid var(--color-border);
    border-radius: 1.25rem;
    overflow: hidden;
    opacity: 0;
  }

  .collage-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Top-left: fades in from top-left */
  .img-top-left {
    width: 26%;
    aspect-ratio: 1 / 1;
    top: 0%;
    left: 0%;
    z-index: 2;
    border: 1px solid black;
    transform: translate(-20px, -20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  /* Top-right: fades in from top-right */
  .img-top-right {
    width: 30%;
    aspect-ratio: 1 / 1;
    top: 0;
    right: -5%;
    z-index: 1;
    border: 1px solid black;
    transform: translate(20px, -20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  /* Bottom-left: fades in from bottom-left */
  .img-mid-left {
    width: 40%;
    aspect-ratio: 1 / 1;
    top: 57%;
    left: 0%;
    z-index: 1;
    border: 1px solid black;
    transform: translate(-20px, 20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  /* Bottom-right: fades in from bottom-right */
  .img-bot-right {
    width: 36%;
    aspect-ratio: 1 / 1;
    bottom: 0;
    right: 0;
    z-index: 2;
    border: 1px solid black;
    transform: translate(20px, 20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  /* Center: fades in from top, delayed */
  .img-mid-center {
    width: 52%;
    aspect-ratio: 1 / 1;
    top: 8%;
    left: 24%;
    z-index: 2;
    border: 1px solid black;
    transform: translateY(-20px);
    transition: opacity 0.6s ease 0.65s, transform 0.6s ease 0.65s;
  }

  /* Animate state */
  .collage-img.animate {
    opacity: 1;
    transform: translate(0, 0);
  }

  /* ===================== */
  /* RESPONSIVE            */
  /* ===================== */
  @media (max-width: 850px) {
    .section-heading {
      margin: 0 0 3.5rem 0;
    }

    .about-content {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .collage {
      max-width: 500px;
      margin: 0 auto;
    }
  }

  /* --- Bio text --- */
  .about-bio {
    display: flex;
    flex-direction: column;
    gap: 0;
    opacity: 0;
    transform: translateX(40px);
    transition: opacity 0.3s ease 0.5s, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s;
  }

  .about-bio.animate {
    opacity: 1;
    transform: translateX(0);
  }

  .about-bio a.cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    align-self: flex-start;
    font-family: var(--body-font);
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--color-text-primary);
    border: 1.5px solid var(--color-text-primary);
    border-radius: 999px;
    padding: 0.6rem 1.4rem;
    text-decoration: none;
    transition: background-color 0.25s ease, color 0.25s ease;
    margin: 0.5rem 0;
  }

  .about-bio a.cta-btn:hover {
    background-color: var(--color-text-primary);
    color: var(--color-bg);
  }

  .about-bio p {
    font-family: var(--body-font);
    font-size: 1rem;
    line-height: 1.8;
    color: var(--color-text-secondary);
    margin: 0.75rem 0;
  }
</style>