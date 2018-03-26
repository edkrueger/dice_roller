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

    // set the source for the new image
    this.faceImgSrc = 'dice_images/inverted-dice-' + this.faceNum + '.png';

    // modify the image to the correct roll
    var faceImg = document.querySelector('#die');
    faceImg.src = this.faceImgSrc;

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




