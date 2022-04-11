//import * as Vibrant from 'node-vibrant'
const Vibrant = require('node-vibrant');
//const fs = require('fs');

//Vibrant.from('./src/assets/heros/test.jpg').getPalette().then( palette => console.log(palette.DarkMuted.hsl));

module.exports = () => {
  return {
    tags: ['navMain', 'page'],
    title: 'Bibiane Zimba',
    eleventyComputed: {
      hero: async (data) => ({
        src: 'test.jpg',
        alt: 'blabla, yay',
        palette: await Vibrant.from('./src/assets/heros/test.jpg').getPalette()
      })
    }
  }
}