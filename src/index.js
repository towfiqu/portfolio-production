const menuIcon = document.querySelector('.menu-icon');
const mobileNav = document.querySelector('.mobile-nav-links');
const overlay = document.querySelector('.overlay');
const footer = document.querySelector('.footer');

let menuOpen = false;

menuIcon.addEventListener('click', () => {
  menuOpen = !menuOpen;

  mobileNav.classList.toggle('translate-x-0');
  overlay.classList.toggle('block');
  if (overlay.classList.contains('block')) {
    overlay.classList.remove('none');
  } else {
    overlay.classList.add('none');
  }

  if (menuOpen) {
    menuIcon.innerHTML = `
      <svg  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path  d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
    `;
  }

  if (!menuOpen) {
    menuIcon.innerHTML = `
      <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
    
    `;
  }
});

menuIcon.innerHTML = `
      <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
    
    `;
