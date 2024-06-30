function topBtn(){
    window.scrollTo(0,0)
}

function toggleDropdown(element, show) {
  const dropdownToggle = element.querySelector('.dropdown-toggle');
  const dropdownMenu = element.querySelector('.dropdown-menu');
  
  if (show) {
    dropdownToggle.classList.add('show');
    dropdownMenu.classList.add('show');
  } 
  else {
    dropdownToggle.classList.remove('show');
    dropdownMenu.classList.remove('show');
  }
}

document.querySelectorAll('.nav-item.dropdown').forEach(item => {
  item.addEventListener('mouseover', () => toggleDropdown(item, true));
  item.addEventListener('mouseout', () => toggleDropdown(item, false));
});


// script.js
document.addEventListener('DOMContentLoaded', function() {
  const hiddenElements = document.querySelectorAll('.hidden-element');

  function checkScroll() {
      const triggerPoint = window.innerHeight / 5 * 3; // 視窗高度的80%

      hiddenElements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;

          if (elementTop < triggerPoint) {
              element.classList.add('visible');
            }
      });
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // 初始化檢查
});
