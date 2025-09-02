---
layout: archive
title: "Certificates & Recognitions"
permalink: /certificates/
author_profile: true
---

{% include base_path %}

<p>
  Below is a collection of certificates I've earned through various professional development courses, specializations, and learning programs. Click any certificate to view it without leaving the site.
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

  /* Modal styles for certificate viewer */
  .certificate-modal {
    display: none;
    position: fixed;
    z-index: 100000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.9);
    overflow: auto;
  }
  
  .modal-content {
    position: relative;
    margin: 2% auto;
    padding: 0;
    width: 95%;
    max-width: 1200px;
    height: 90%;
    background: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }
  
  .modal-header {
    padding: 15px 20px;
    background: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
    border-radius: 8px 8px 0 0;
  }
  
  .modal-header h3 {
    margin: 0;
    color: #333;
  }
  
  .modal-iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0 0 8px 8px;
    flex: 1;
  }
  
  .modal-close {
    position: absolute;
    top: 10px;
    right: 20px;
    color: #666;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    z-index: 100001;
    background: white;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
  
  .modal-close:hover {
    color: #000;
    background: #f8f9fa;
  }
  
  /* Mobile responsive modal */
  @media (max-width: 768px) {
    .modal-content {
      width: 98%;
      height: 95%;
      margin: 1% auto;
    }
    
    .modal-header {
      padding: 10px 15px;
    }
    
    .modal-close {
      top: 5px;
      right: 10px;
      font-size: 24px;
      width: 30px;
      height: 30px;
    }
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
          {% if certificate.url %}
            <button onclick="openCertificateModal('{{ certificate.url }}')" class="btn btn--info">
              <i class="fa fa-eye" aria-hidden="true"></i> View Certificate
            </button>
          {% endif %}
          {% if certificate.external_url and certificate.external_url != "" %}
            <button onclick="openCertificateModal('{{ certificate.external_url }}')" class="btn btn--primary">
              <i class="fa fa-external-link" aria-hidden="true"></i> External Link
            </button>
          {% endif %}
        </div>
      </div>
    {% endfor %}
  </div>
{% endfor %}

<!-- Modal for certificate preview -->
<div id="certificateModal" class="certificate-modal">
  <div class="modal-content">
    <span class="modal-close">&times;</span>
    <div class="modal-header">
      <h3 id="modalTitle">Certificate Viewer</h3>
    </div>
    <iframe id="modalIframe" class="modal-iframe" src=""></iframe>
  </div>
</div>

<script>
function convertToEmbeddableUrl(url) {
  // Handle Google Drive URLs
  if (url.includes('drive.google.com/file/d/')) {
    const fileId = url.match(/\/file\/d\/([a-zA-Z0-9-_]+)/)[1];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }
  
  // Handle Google Drive sharing URLs
  if (url.includes('drive.google.com') && url.includes('id=')) {
    const fileId = url.match(/id=([a-zA-Z0-9-_]+)/)[1];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }
  
  // Handle other document platforms
  if (url.includes('dropbox.com')) {
    return url.replace('?dl=0', '').replace('www.dropbox.com', 'dl.dropboxusercontent.com');
  }
  
  // For other URLs, try to embed directly
  return url;
}

function openCertificateModal(url) {
  const modal = document.getElementById('certificateModal');
  const iframe = document.getElementById('modalIframe');
  const title = document.getElementById('modalTitle');
  
  // Convert URL to embeddable format
  const embedUrl = convertToEmbeddableUrl(url);
  
  // Set iframe source
  iframe.src = embedUrl;
  
  // Update modal title
  title.textContent = 'Certificate Viewer';
  
  // Show modal
  modal.style.display = 'block';
  
  // Prevent body scrolling
  document.body.style.overflow = 'hidden';
}

function closeCertificateModal() {
  const modal = document.getElementById('certificateModal');
  const iframe = document.getElementById('modalIframe');
  
  // Hide modal
  modal.style.display = 'none';
  
  // Clear iframe
  iframe.src = '';
  
  // Restore body scrolling
  document.body.style.overflow = 'auto';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('certificateModal');
  const closeBtn = document.querySelector('.modal-close');
  
  // Close modal when clicking the X
  if (closeBtn) {
    closeBtn.onclick = closeCertificateModal;
  }
  
  // Close modal when clicking outside
  window.onclick = function(event) {
    if (event.target === modal) {
      closeCertificateModal();
    }
  };
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeCertificateModal();
    }
  });
});
</script>
