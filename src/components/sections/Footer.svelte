<script lang="ts">
  import { handleNavClick } from '$lib/utils';
  const navLinks = [
    { label: 'About Me', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Resume', href: '/resume.pdf' },
  ];
</script>

<footer class="footer">
  <div class="footer-inner">

    <!-- Left: logo + social icons -->
    <div class="footer-left">
      <div class="brand">
        <span class="name-logo">
          <img src="/img/logo.svg" width="50" height="50" alt="Logo">
        </span>
        <span class="brand-name">Ahmad Munim</span>
      </div>
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
    </div>

    <!-- Center: copyright -->
    <p class="copyright">©2026 Ahmad Munim. All rights reserved</p>

    <!-- Right: nav links -->
    <nav class="footer-nav">
      {#each navLinks as link}
        <a href={link.href} class="nav-link" onclick={(e) => handleNavClick(e, link.href)}>
          {link.label}
        </a>
      {/each}
    </nav>

  </div>
</footer>

<style>
  .footer {
    width: 100%;
    padding: 1.5rem 0;
    border-top: 1px solid var(--color-border);
    background-color: var(--color-bg);
  }

  .footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }

  /* --- Left --- */
  .footer-left {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .name-logo {
    font-family: var(--font-display);
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--color-accent);
  }

  .brand-name {
    font-family: var(--header-font);
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--color-text-primary);
  }

  .social-icons {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  .icon-link {
    color: var(--color-text-secondary);
    font-size: 1.1rem;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .icon-link:hover {
    color: var(--color-accent);
  }

  /* --- Center --- */
  .copyright {
    font-family: var(--body-font);
    font-size: 0.85rem;
    color: var(--color-text-secondary);
    text-align: center;
    margin: 0;
  }

  /* --- Right --- */
  .footer-nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.3rem;
  }

  .nav-link {
    font-family: var(--body-font);
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .nav-link:hover {
    color: var(--color-text-primary);
  }

  /* ===================== */
  /* RESPONSIVE            */
  /* ===================== */
  @media (max-width: 600px) {
    .footer-inner {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      text-align: center;
    }

    .footer-left {
      align-items: center;
    }

    .footer-nav {
      align-items: center;
    }
  }
</style>