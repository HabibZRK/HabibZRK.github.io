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
          {% if certificate.url and certificate.url contains '/file/' %}
            <a href="{{ certificate.url }}" class="btn btn--info certificate-view-btn" data-preview-url="{{ certificate.url }}">View</a>
          {% endif %}
          {% if certificate['assignment-url'] and certificate['assignment-url'] contains '/file/' %}
            <a href="{{ certificate['assignment-url'] }}" class="btn btn--info" target="_blank">Assignment</a>
          {% endif %}
          {% if certificate['dialogue-url'] and certificate['dialogue-url'] contains '/file/' %}
            <a href="{{ certificate['dialogue-url'] }}" class="btn btn--url" target="_blank">Dialogue</a>
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

<!-- In-page certificate viewer modal -->
<style>
  #certificate-viewer-overlay { position: fixed; inset:0; background: rgba(0,0,0,0.55); display:none; z-index: 9999; align-items: center; justify-content: center; padding: 2vh 2vw; }
  #certificate-viewer { background: #111; width: 90vw; height: 90vh; max-width: 1400px; border: 2px solid var(--global-border-color); border-radius: 6px; position: relative; display:flex; flex-direction: column; }
  #certificate-viewer header { display:flex; align-items:center; justify-content: space-between; padding: .4rem .75rem; background: #222; color:#fff; font-size: .9rem; }
  #certificate-viewer iframe { flex:1; width:100%; border:0; background:#fff; }
  #certificate-viewer-close { cursor:pointer; background:#444; color:#fff; border:0; padding:.35rem .6rem; border-radius:4px; font-size:.8rem; line-height:1; }
  #certificate-viewer-close:hover { background:#666; }
  body.certificate-viewer-open { overflow:hidden; }
  @media (max-width: 699px) { #certificate-viewer { width: 100vw; height: 100vh; border-radius:0; } }
</style>
<div id="certificate-viewer-overlay" role="dialog" aria-modal="true" aria-label="Certificate preview">
  <div id="certificate-viewer">
    <header>
      <span id="certificate-viewer-title">Certificate Preview</span>
      <div style="display:flex; gap:.5rem; align-items:center;">
        <a id="certificate-viewer-open-new" href="#" target="_blank" class="btn btn--primary" style="margin:0; font-size:.7rem;">Open in new tab</a>
        <button id="certificate-viewer-close" aria-label="Close preview">✕</button>
      </div>
    </header>
    <iframe id="certificate-viewer-frame" title="Certificate preview" loading="lazy" referrerpolicy="no-referrer"></iframe>
  </div>
</div>

<script>
(function(){
  const overlay = document.getElementById('certificate-viewer-overlay');
  if(!overlay) return; // safety
  const frame = document.getElementById('certificate-viewer-frame');
  const titleEl = document.getElementById('certificate-viewer-title');
  const openNew = document.getElementById('certificate-viewer-open-new');
  const closeBtn = document.getElementById('certificate-viewer-close');

  function openPreview(url, title){
    frame.src = url;
    openNew.href = url;
    titleEl.textContent = title || 'Certificate Preview';
    overlay.style.display = 'flex';
    document.body.classList.add('certificate-viewer-open');
    frame.focus();
  }
  function closePreview(){
    overlay.style.display = 'none';
    frame.src = 'about:blank';
    document.body.classList.remove('certificate-viewer-open');
  }
  closeBtn.addEventListener('click', closePreview);
  overlay.addEventListener('click', e => { if(e.target === overlay) closePreview(); });
  document.addEventListener('keyup', e => { if(e.key === 'Escape') closePreview(); });

  document.querySelectorAll('.certificate-view-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const url = btn.getAttribute('data-preview-url');
      if(!url) return;
      const title = btn.closest('.certificate-item')?.querySelector('.certificate-title')?.textContent?.trim();
      openPreview(url, title);
    });
  });
})();
</script>
