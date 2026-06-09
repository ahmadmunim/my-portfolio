<script lang="ts">
  import { handleNavClick } from '$lib/utils';
  let navLinks = [
    { label: 'About Me', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Resume', href: '/resume.pdf' },
  ];
</script>

<header>
  <nav>
    <a href="/" class="brand">
      <span class="logo-mark">
        <img src="/img/logo.svg" width="50" height="50" alt="Logo">
      </span>
      <span class="brand-name">Ahmad Munim</span>
    </a>

    <ul class="nav-links">
      {#each navLinks as link}
        <li>
          <a href={link.href} onclick={(e) => handleNavClick(e, link.href)}>{link.label}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    z-index: 100;
    width: 100%;
    background-color: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
  }

  nav {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: var(--color-text-primary);
  }

  .logo-mark {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-accent);
    line-height: 1;
  }

  .brand-name {
    font-family: var(--header-font);
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-text-primary);
  }

  .nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-links a {
    text-decoration: none;
    font-family: var(--header-font);
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--color-text-secondary);
    transition: color 0.2s ease;
  }

  .nav-links a:hover {
    color: var(--color-text-primary);
  }

  /* ===================== */
  /* RESPONSIVE            */
  /* ===================== */
  @media (max-width: 460px) {
    .brand-name {
      display: none;
    }
  }
</style>