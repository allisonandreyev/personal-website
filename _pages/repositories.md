---
layout: page
permalink: /repositories/
title: repositories
nav: true
nav_order: 4
---

{% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

<script>
  document.querySelectorAll('[data-repo-pin-check]').forEach(async (card) => {
    const link = card.querySelector('a[href^="https://github.com/"]');
    const fullName = link.getAttribute('href').replace('https://github.com/', '');
    try {
      const res = await fetch(`https://api.github.com/repos/${fullName}`);
      if (!res.ok) {
        card.remove();
        return;
      }
      const data = await res.json();
      if (data.private) {
        card.remove();
        return;
      }
    } catch (e) {
      card.remove();
      return;
    }
    card.querySelectorAll('img[data-src]').forEach((img) => {
      img.src = img.dataset.src;
    });
  });
</script>
