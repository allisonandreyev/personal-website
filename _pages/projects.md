---
layout: page
title: projects
permalink: /projects/
description: A growing collection of some cool projects.
nav: true
nav_order: 3
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">

{% assign all_tags = "" | split: "" %}
{% for project in site.projects %}
{% if project.tags %}
{% for tag in project.tags %}
{% unless all_tags contains tag %}
{% assign all_tags = all_tags | push: tag %}
{% endunless %}
{% endfor %}
{% endif %}
{% endfor %}
{% assign all_tags = all_tags | sort %}

{% if all_tags.size > 0 %}

<div class="tag-filter">
  <button class="tag-filter-btn active" data-tag="all">All</button>
  {% for tag in all_tags %}
    <button class="tag-filter-btn" data-tag="{{ tag }}">{{ tag }}</button>
  {% endfor %}
</div>
{% endif %}

{% assign sorted_projects = site.projects | sort: "importance" %}

{% if page.horizontal %}

<div class="container">
  <div class="row row-cols-1 row-cols-md-2">
  {% for project in sorted_projects %}
    {% include projects_horizontal.liquid %}
  {% endfor %}
  </div>
</div>
{% else %}
<div class="row row-cols-1 row-cols-md-3">
  {% for project in sorted_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>
{% endif %}

</div>

<script>
(function () {
  const buttons = document.querySelectorAll('.tag-filter-btn');
  const allBtn = document.querySelector('[data-tag="all"]');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const tag = this.dataset.tag;

      if (tag === 'all') {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        allBtn.classList.add('active');
      } else {
        allBtn.classList.remove('active');
        this.classList.toggle('active');
        const anyActive = Array.from(buttons).some(function (b) {
          return b.dataset.tag !== 'all' && b.classList.contains('active');
        });
        if (!anyActive) allBtn.classList.add('active');
      }

      const activeTags = Array.from(buttons)
        .filter(function (b) { return b.dataset.tag !== 'all' && b.classList.contains('active'); })
        .map(function (b) { return b.dataset.tag; });

      document.querySelectorAll('.col[data-tags]').forEach(function (col) {
        if (activeTags.length === 0) {
          col.style.display = '';
        } else {
          const colTags = col.dataset.tags ? col.dataset.tags.split(',') : [];
          col.style.display = activeTags.some(function (t) { return colTags.includes(t); }) ? '' : 'none';
        }
      });
    });
  });
})();
</script>
