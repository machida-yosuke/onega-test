//https://github.com/airbnb/lottie-web/tree/43_threejs_renderer
//https://github.com/airbnb/lottie-web/issues/579

import bodymovin from '../module/bodymovin.min';

export default class DogManager {
  constructor (opts = {}) {
    this.dog = opts.dog;
    this.anime = bodymovin.loadAnimation({
      container: this.dog,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: './bodymovin/data.json'
    });
    this.hasStatus = 'op'
    this.initHundle()
  }

  waitStatus(){
    this.hasStatus = 'wait'
  }

  initHundle(){
    this.anime.addEventListener('data_ready',()=>{
      this.anime.playSegments([0,24] ,true);
    })

    this.anime.addEventListener('complete',()=>{
      console.log(this.hasStatus);
      if (this.hasStatus === 'op') {
        this.anime.playSegments([0,30] ,true);
      }

      if (this.hasStatus === 'wait') {
        this.anime.playSegments([31,60] ,true);
      }
    })
  }


};
