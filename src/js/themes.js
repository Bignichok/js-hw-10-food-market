const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const switchInput = document.querySelector('.js-switch-input');
const storageTheme = localStorage.getItem('theme');

switchInput.addEventListener('change', themeSwitcher);

function themeSwitcher(e) {
  if (e.target.checked) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);

    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);

    localStorage.setItem('theme', Theme.LIGHT);
  }
}

export function checkLocalStorage() {
  if (storageTheme) {
    body.classList.add(storageTheme);
    storageTheme === Theme.DARK ? (switchInput.checked = true) : '';
  }
}
