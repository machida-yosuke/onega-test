
import DogManager from './lib/DogManager';
const dog = document.getElementsByClassName('dog')[0];
const dogManager = new DogManager({
  dog
})


dog.addEventListener('click',()=>{
  dogManager.waitStatus();
})
