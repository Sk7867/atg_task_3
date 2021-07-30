const btn = document.querySelector('button');
const loader = document.querySelector('#loader');
// const btnContainer = document.querySelector('#button_Container');

btn.addEventListener('click', () => {
  loader.classList.remove('D-None');
  loader.classList.add('D-Block');
  btn.classList.remove('W(P74)');
  btn.classList.add('W(P98)');
  setTimeout(() => {
    loader.classList.remove('D-Block');
    loader.classList.add('D-None');
    btn.classList.add('W(P74)');
    btn.classList.remove('W(P98)');
  }, 2000);
});
