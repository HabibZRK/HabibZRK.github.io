---
layout: archive
permalink: /de/zertifikate/
author_profile: true
lang: de
translation_en: /certificates/
---

{% include base_path %}

<p>Hier finden Sie eine Sammlung meiner Zertifikate aus Weiterbildungen, Spezialisierungen und Lernprogrammen.</p>

<style>
  .certificate-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-bottom: 2rem; }
  .certificate-item { display: flex; flex-direction: column; height: 100%; border: 1px solid #ddd; border-radius: 5px; padding: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
  .certificate-title { font-size: 1.1rem !important; margin-bottom: .5rem; }
  .certificate-category { margin-top: 2rem; margin-bottom: 1rem; border-bottom: 1px solid #ddd; padding-bottom: .5rem; }
  .certificate-description { flex-grow: 1; }
  .certificate-buttons { display: flex; gap: 10px; flex-wrap: wrap; margin-top: auto; }
  .certificate-buttons .btn { margin-top: 0; }
  .certificate-organization { color: #2a7ae2; font-size: 1.1em; font-weight: 500; margin-bottom: 5px; }
</style>

{% assign certificates_by_subject = site.data.certificates | group_by: "subject" %}
{% for subject_group in certificates_by_subject %}
  <h2 class="certificate-category">
    {% case subject_group.name %}
      {% when "Engineering" %}Ingenieurwesen
      {% when "Language" %}Sprachen
      {% when "Translation" %}Übersetzung
      {% when "Robotics" %}Robotik
      {% when "Software" %}Software
      {% when "Miscellaneous" %}Sonstiges
      {% else %}{{ subject_group.name }}
    {% endcase %}
  </h2>
  <div class="certificate-grid">
    {% assign sorted_certificates = subject_group.items | sort: 'date' | reverse %}
    {% for certificate in sorted_certificates %}
      <div class="certificate-item">
        <div class="certificate-title-container">
          <h2 class="certificate-title">{{ certificate.title }}</h2>
          {% if certificate.grade and certificate.grade != "" %}<span class="certificate-grade">({{ certificate.grade }})</span>{% endif %}
        </div>
        <div class="certificate-meta">
          <p class="certificate-organization"><strong>{{ certificate.organization }}</strong></p>
          <p>{{ certificate.date | date: "%d.%m.%Y" }}{% if certificate.location %}, {{ certificate.location }}{% endif %}</p>
        </div>
        <p class="certificate-description">{{ certificate.description }}</p>
        <div class="certificate-buttons">
          {% if certificate.url and certificate.url contains '/file/' %}<a href="{{ certificate.url }}" class="btn btn--info" target="_blank">Ansehen</a>{% endif %}
          {% if certificate['assignment-url'] and certificate['assignment-url'] contains '/file/' %}<a href="{{ certificate['assignment-url'] }}" class="btn btn--info" target="_blank">Aufgabe</a>{% endif %}
          {% if certificate['dialogue-url'] and certificate['dialogue-url'] contains '/file/' %}<a href="{{ certificate['dialogue-url'] }}" class="btn btn--url" target="_blank">Dialog</a>{% endif %}
          {% if certificate.folder and certificate.folder != '' %}<a href="{{ certificate.folder }}" class="btn btn--primary" target="_blank">Alle Kurse</a>{% endif %}
          {% if certificate.external_url and certificate.external_url != "" %}<a href="{{ certificate.external_url }}" class="btn btn--primary" target="_blank">Externer Link</a>{% endif %}
        </div>
      </div>
    {% endfor %}
  </div>
{% endfor %}
