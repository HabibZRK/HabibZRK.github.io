/**
 * Sidebar Toggle Functionality
 * - Allows users to hide/show the sidebar across the website
 * - Modified to handle flush left sidebar layout
 */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarContainer = document.getElementById('sidebar-container');
    const archiveContent = document.getElementById('archive-content');
    const pageContent = document.getElementById('page-content');
    
    // Check if we should restore the hidden state
    if (localStorage.getItem('sidebar-hidden') === 'true') {
      if (sidebarContainer) {
        sidebarContainer.classList.add('sidebar-hidden');
      }
      if (archiveContent) {
        archiveContent.classList.add('content-expanded');
      }
      if (pageContent) {
        pageContent.classList.add('content-expanded');
      }
    }

    // Only add event listener if the toggle button exists
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', function() {
        sidebarContainer.classList.toggle('sidebar-hidden');
        
        if (archiveContent) {
          archiveContent.classList.toggle('content-expanded');
        }
        
        if (pageContent) {
          pageContent.classList.toggle('content-expanded');
        }
        
        // Save preference to localStorage
        localStorage.setItem('sidebar-hidden', sidebarContainer.classList.contains('sidebar-hidden'));
      });
    }
    
    // Handle window resize events to maintain proper layout
    window.addEventListener('resize', function() {
      if (window.innerWidth < 1024) {
        // On mobile, we don't want the sidebar hidden
        if (sidebarContainer && sidebarContainer.classList.contains('sidebar-hidden')) {
          sidebarContainer.classList.remove('sidebar-hidden');
        }
        if (archiveContent && archiveContent.classList.contains('content-expanded')) {
          archiveContent.classList.remove('content-expanded');
        }
        if (pageContent && pageContent.classList.contains('content-expanded')) {
          pageContent.classList.remove('content-expanded');
        }
      }
    });
  });
})();
