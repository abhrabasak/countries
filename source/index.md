---
layout: base.njk
title: Countries List
---

# Countries List

<section class="flex flex-wrap gap-[10px]">
{% for c in countries %}
  <div class="grid grid-cols-[1fr 2fr] grid-rows-[1fr] max-w-[250px] outline outline-solid outline-red-100 p-[15px]">
    <div class="max-w-[250px] no-underline text-center">
      <a href="{{ c.cca3 }}">{{ c.name.common }}</a>
      {{ c.cca3 }}
    </div>
    <div>{{ flags | lookup: c.cca3 }}</div>
  </div>
{% endfor %}
</section>
