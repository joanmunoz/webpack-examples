// import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css';

export default () => {
  const image = document.createElement('img');
  image.src = small;
  document.body.appendChild(image);
};

// const bigImage = document.createElement('img');
// bigImage.src = big;

// window.onload = function() {
//   document.body.appendChild(image);
//   document.body.appendChild(bigImage);
// }
