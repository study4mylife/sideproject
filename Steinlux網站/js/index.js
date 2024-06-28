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
