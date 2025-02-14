---
layout: base.njk
title: Countries List
---

# Countries List

<ul>
{% for c in countries %}
  <li><a href="{{ c.cca3 }}">{{ c.cca3 }} - {{ c.name.common }}</a></li>
{% endfor %}
</ul>
