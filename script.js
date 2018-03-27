// make the die class
class Die {
  
  // set the number of sides on construnction
  constructor(nsides){
    this.nsides = nsides;
    return
  }
  
  // make a roll method
  roll(){

    // generate the roll
    this.faceNum = Math.floor(Math.random() * 6) + 1;
    var faceImgSrc = 'dice_images/inverted-dice-' + this.faceNum + '.png';

    // create a function to invert an image's colors
    function toggleInvertImg(imageElement){
      if (imageElement.style.filter == 'invert(100%)'){
        imageElement.style.filter = 'invert(0%)';
      } else {
        imageElement.style.filter = 'invert(100%)';
      }
    }

    // create a fuinction to make the die flash
    function flashImg(imageElement){
        var interval = setInterval(toggleInvertImg, 200, imageElement);

        setTimeout(function(){
          clearInterval(interval);
        }, 800);

    }

    // get the dice's image element
    var faceImg = document.querySelector('#die');

    // reset to ? die
    faceImg.src = "dice_images/perspective-dice-six-faces-random.png"


    // invert the colors
    flashImg(faceImg);

    // show the new roll
    setTimeout(function(){
      faceImg.src = faceImgSrc;
    }, 1000);

    return
    } 

  }
  
// create a sixsider die object
var die = new Die(6)

// listen for click on the die and roll it
var faceImg = document.querySelector('#die')
faceImg.addEventListener('click',function(){
  die.roll()
  }
);




