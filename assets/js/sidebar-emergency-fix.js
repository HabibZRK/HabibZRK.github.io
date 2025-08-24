/**
 * Sidebar initialization script
 * This script ensures the sidebar is properly initialized
 */
(function() {
  // Execute on DOM load to ensure proper toggle functionality
  document.addEventListener('DOMContentLoaded', function() {
    var sidebarContainer = document.getElementById('sidebar-container');
    var sidebar = document.querySelector('.sidebar');
    var sidebarToggle = document.getElementById('sidebar-toggle');
    var archiveContent = document.getElementById('archive-content');
    var pageContent = document.getElementById('page-content');
    
    // Initialize - make sure the sidebar is visible initially
    if (sidebarContainer) {
      // Clear inline styles that might interfere with toggling
      sidebarContainer.style.removeProperty('display');
      sidebarContainer.style.removeProperty('visibility');
      sidebarContainer.style.removeProperty('opacity');
    }
    
    if (sidebar) {
      // Clear inline styles that might interfere with toggling
      sidebar.style.removeProperty('transform');
    }
    
    // Set up toggle button click handler
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', function() {
        if (sidebarContainer) {
          sidebarContainer.classList.toggle('sidebar-hidden');
          
          // Handle content expansion
          if (archiveContent) {
            archiveContent.classList.toggle('content-expanded');
          }
          
          if (pageContent) {
            pageContent.classList.toggle('content-expanded');
          }
          
          // Store preference
          localStorage.setItem('sidebar-hidden', sidebarContainer.classList.contains('sidebar-hidden'));
        }
      });
    }
  });
})();
