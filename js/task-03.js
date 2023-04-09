const images = [
  {
    html: '<img src="https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="White and Black Long Fur Cat">',
  },
  {
    html: '<img src="https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Orange and White Koi Fish Near Yellow Koi Fish">',
  },
  {
    html: '<img src="https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Group of Horses Running">',
  },
];


const myElement = document.querySelector(".gallery");



for (let i = 0; i < images.length; i++) {
  const li = document.createElement("li");
  li.classList.add('item');
  const img = document.createElement("img");
  li.insertAdjacentHTML('beforeend', images[i].html);
  myElement.appendChild(li);
}
