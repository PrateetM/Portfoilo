

document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
  
    // Add fade-in animation to each project when scrolled into view
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    });
  
    projects.forEach(project => {
      observer.observe(project);
    });
  });
  
  // Add hover animation
  document.querySelectorAll('.project').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.classList.add('hover-animate');
    });
  
    item.addEventListener('mouseout', () => {
      item.classList.remove('hover-animate');
    });
  });
  