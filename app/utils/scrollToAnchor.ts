export const scrollToAnchor = (url: string) => {
  // Extract the anchor from the URL
  const anchor = url.split('#')[1];
  
  if (!anchor) {
    // No anchor, just navigate normally
    if (typeof window !== 'undefined') {
      window.location.href = url;
    }
    return;
  }

  // Navigate to the page first
  if (typeof window !== 'undefined') {
    window.location.href = url;
  }

  // Wait for the page to load and then scroll to the anchor
  setTimeout(() => {
    const element = document.getElementById(anchor);
    if (element) {
      // Smooth scroll to the element with offset for fixed header
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // Add a subtle highlight effect
      element.style.transition = 'background-color 0.3s ease';
      element.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
      
      // Remove the highlight after 2 seconds
      setTimeout(() => {
        element.style.backgroundColor = '';
      }, 2000);
    }
  }, 100);
};
