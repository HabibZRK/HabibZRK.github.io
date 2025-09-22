---
layout: archive
permalink: /contact/
author_profile: true
---

<style>
  .pageclip-form {
    max-width: 650px;
    margin: 2rem auto;
  }
  .pageclip-form label {
    display: block;
    margin-top: 1rem;
    font-weight: bold;
    font-size: 0.9em;
  }
  .pageclip-form input,
  .pageclip-form select,
  .pageclip-form textarea {
    width: 100%;
    padding: 0.75rem;
    margin-top: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box; /* Ensures padding doesn't affect width */
    font-family: inherit;
    font-size: 1rem;
  }
  .pageclip-form .service-fields {
    border-left: 3px solid var(--global-link-color);
    padding-left: 1.5rem;
    margin-top: 1.5rem;
    border-radius: 3px;
  }
  .pageclip-form__submit {
    display: block;
    width: 100%;
    padding: 0.75rem;
    margin-top: 2rem;
    background-color: var(--global-button-background);
    color: var(--global-button-text);
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .pageclip-form__submit:hover {
    background-color: var(--global-button-background-hover);
    color: var(--global-button-text-hover);
  }
</style>

## Let's work together

Interested in working with me? I'd love to hear from you! Just pick a service from the list and fill out the form. I'll get back to you as soon as I can.

<!-- This form will post to the URL specified in your _config.yml file. Make sure you have set 'pageclip_form_url' in that file. -->

<form action="{{ site.pageclip_form_url }}" class="pageclip-form" method="post">
  <!-- Common Fields -->
  <label for="name">Your Name</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Your Email</label>
  <input type="email" id="email" name="email" required>

  <!-- Service Selection Dropdown -->
  <label for="service">Which service are you interested in?</label>
  <select id="service" name="service" required>
    <option value="" disabled selected>-- Please choose a service --</option>
    <option value="translation">Translation (En-Ar)</option>
    <option value="resume">Resume Writing Services</option>
    <option value="proposal">Academic Research Proposal</option>
  </select>

  <!-- Service-Specific Fields (hidden by default) -->
  <!-- Translation Fields -->
  <div id="translationFields" class="service-fields" style="display: none;">
    <h4>Translation Details</h4>
    <label for="sourceLang">Source Language</label>
    <input type="text" id="sourceLang" name="sourceLanguage" placeholder="e.g., English">
    <label for="targetLang">Target Language</label>
    <input type="text" id="targetLang" name="targetLanguage" placeholder="e.g., Arabic">
    <label for="wordCount">Estimated Word Count (Optional)</label>
    <input type="number" id="wordCount" name="wordCount" placeholder="e.g., 1500">
  </div>

  <!-- Resume Writing Fields -->
  <div id="resumeFields" class="service-fields" style="display: none;">
    <h4>Resume Details</h4>
    <label for="currentRole">Your Current Role/Industry</label>
    <input type="text" id="currentRole" name="currentRole" placeholder="e.g., Software Engineer">
    
  </div>

  <!-- Academic Proposal Fields -->
  <div id="proposalFields" class="service-fields" style="display: none;">
    <h4>Proposal Details</h4>
    <label for="researchField">Field of Research</label>
    <input type="text" id="researchField" name="researchField" placeholder="e.g., Marine Engineering">
    <label for="projectSummary">Brief Project Summary</label>
    <textarea id="projectSummary" name="projectSummary" rows="4" placeholder="Describe the main goals and scope of your research..."></textarea>
  </div>

  <!-- Common Message Field -->
  <label for="message">Additional Message (Optional)</label>
  <textarea id="message" name="message" rows="5" placeholder="Is there anything else you'd like to add?"></textarea>

  <button type="submit" class="pageclip-form__submit">
    <span>Send Request</span>
  </button>
</form>

<script>
  // Wait for the page to be fully loaded before running the script
  document.addEventListener('DOMContentLoaded', function() {
    const serviceSelect = document.getElementById('service');
    // Guard against cases where the element might not be on the page
    if (!serviceSelect) return;
    const allServiceFields = document.querySelectorAll('.service-fields');

    serviceSelect.addEventListener('change', function() {
      // First, hide all specific field containers
      allServiceFields.forEach(function(field) {
        field.style.display = 'none';
      });

      // Get the selected value from the dropdown
      const selectedService = this.value;

      // If a service is selected, find and show the corresponding fields
      if (selectedService) {
        const fieldsToShow = document.getElementById(selectedService + 'Fields');
        if (fieldsToShow) {
          fieldsToShow.style.display = 'block';
        }
      }
    });
  });
</script>