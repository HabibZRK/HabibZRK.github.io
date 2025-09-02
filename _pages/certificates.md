---
layout: archive
permalink: /certificates/
author_profile: true
---

{% include base_path %}

<p>
  Below is a collection of certificates I've earned through various professional development courses, specializations, and learning programs.
</p>

<style>
  .certificate-item {
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    position: relative;
  }
  
  .certificate-title {
    font-size: 1.1rem !important;
    margin-bottom: 0.5rem;
  }
  
  .certificate-star {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #ffd700;
    font-size: 1.2rem;
    z-index: 2;
  }
  
  .certificate-description {
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
    max-height: none;
    display: block;
    width: 100%;
    flex-grow: 1;
  }
  
  .btn {
    margin-top: auto;
    align-self: flex-start;
  }
  
  .certificate-buttons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: auto;
  }
  
  .certificate-buttons .btn {
    margin-top: 0;
  }
  
  .certificate-category {
    margin-top: 2rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5rem;
  }
  
  .certificate-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 2rem;
  }
  
  .certificate-organization {
    color: #2a7ae2;
    font-size: 1.1em;
    font-weight: 500;
    margin-bottom: 5px;
  }
  
  .certificate-organization a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px dotted;
  }
  
  .certificate-organization a:hover {
    border-bottom: 1px solid;
  }
  
  .org-logo-container {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  
  .org-logo {
    max-height: 30px;
    max-width: 80px;
    margin-right: 10px;
  }
</style>

{% assign certificates_by_subject = site.data.certificates | group_by: "subject" %}

{% for subject_group in certificates_by_subject %}
  <h2 class="certificate-category">{{ subject_group.name }}</h2>
  <div class="certificate-grid">
    {% assign sorted_certificates = subject_group.items | sort: 'date' | reverse %}
    {% for certificate in sorted_certificates %}
      <div class="certificate-item">
        {% if certificate.star == 1 %}
          <div class="certificate-star">
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
        {% endif %}
        <div class="certificate-title-container">
          <h2 class="certificate-title">{{ certificate.title }}</h2>
          {% if certificate.grade and certificate.grade != "" %}
            <span class="certificate-grade">({{ certificate.grade }})</span>
          {% endif %}
        </div>
        <div class="certificate-meta">
          {% if certificate.logo != "" or certificate.organization_url != "" %}
          <div class="org-logo-container">
            {% if certificate.logo and certificate.logo != "" %}
              <img src="{{ certificate.logo }}" alt="{{ certificate.organization }} logo" class="org-logo">
            {% endif %}
            <p class="certificate-organization">
              {% if certificate.organization_url and certificate.organization_url != "" %}
                <a href="{{ certificate.organization_url }}" target="_blank"><strong>{{ certificate.organization }}</strong></a>
              {% else %}
                <strong>{{ certificate.organization }}</strong>
              {% endif %}
            </p>
          </div>
          {% else %}
          <p class="certificate-organization">
            <strong>{{ certificate.organization }}</strong>
          </p>
          {% endif %}
          <p>{{ certificate.date | date: "%d.%m.%Y" }}{% if certificate.location %}, {{ certificate.location }}{% endif %}</p>
        </div>
        <p class="certificate-description">{{ certificate.description }}</p>
        <div class="certificate-buttons">
          {% if certificate.url contains "http" %}
            <a href="{{ certificate.url }}" class="btn btn--info" target="_blank">View Certificate</a>
          {% elsif certificate.url %}
            <a href="{{ certificate.url | prepend: base_path }}" class="btn btn--info">View Certificate</a>
          {% endif %}
          {% if certificate.external_url and certificate.external_url != "" %}
            <a href="{{ certificate.external_url }}" class="btn btn--primary" target="_blank">
              <i class="fa fa-external-link" aria-hidden="true"></i> External Link
            </a>
          {% endif %}
        </div>
      </div>
    {% endfor %}
  </div>
{% endfor %}
