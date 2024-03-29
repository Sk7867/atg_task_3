const btn = document.querySelector('button');
const loader = document.querySelector('#loader');

btn.addEventListener('click', () => {
  loader.classList.remove('D-None');
  loader.classList.add('D-Block');
  btn.classList.remove('W(P74)');
  btn.classList.add('W(P98)');
  btn.classList.add('opacity-65');
  setTimeout(() => {
    loader.classList.remove('D-Block');
    loader.classList.add('D-None');
    btn.classList.add('W(P74)');
    btn.classList.remove('W(P98)');
    btn.classList.remove('opacity-65');
  }, 2000);
});
