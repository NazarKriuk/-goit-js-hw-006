

const form = document.querySelector('form');
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', (event) => {
  if (!form.checkValidity()) {
    event.preventDefault();
    alert('All fields are required!');
  }
});
