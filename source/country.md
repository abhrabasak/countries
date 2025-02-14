---
layout: base.njk
pagination:
  data: countries
  size: 1
  alias: country
permalink: "{{ country.cca3 | slugify }}/"
---

# {{ country.name }}

- **Capital**: {{ country.capital }}
- **Subregion**: {{ country.subregion }}
- **Region**: {{ country.region }}
