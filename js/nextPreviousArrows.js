/**----------===| Created by Odee on 5/17/16.|===----------**/

(function() { //IIFE:Immediately-Invoked Function Expression. Scope Encapsulation

  "use strict";

  /**-----------=====| IMPORT | REQUIRE |=====-----------**/
  /** DESCRIPTIONS:
   ** FILES IMPORTED FROM OTHER JS FILES
   ** SEPERATE JS FILES FOR EASIER READABILITY AND MAINTENANCE
   **----------------------------------------------------------------**/
  let anim = require('./animationFunctions');

  //let TwoColumnsClass = require('./codeArchitecture_X'); //.TwoColumnsClass;
  //let twoColmn = new TwoColumnsClass();
  //let sampleTest = require('./codeArchitecture_X');
  //let sample = new sampleTest.sampleFunction();
  //sampleTest.sampleFunction();
  /**----------------------------------------------------------------**/
  console.log(`
  Filename: nextPreviousArrows.js
  Import || Require: animationFunctions.js
  `);
  /**----------------------------------------------------------------**/

  // class TwoColumnsClass {
  //   constructor() { //rightColumn, leftColumn, newHeight, resizePercent) {
  //     this.RightColumn; // = rightColumn; // = RightColumn; //right column property that's accessible outside through the Class
  //   // this.LeftColumn; // = leftColumn; // = LeftColumn; //left column property
  //   // this.NewHeight; // = newHeight;
  //   // this.ResizePercent; // = resizePercent;
  //   /**---------- To access these properties outside, use classInstance.property ----------**/
  //   /**---------- But an instance of the fTwoColumns method has to be invoked first! ----------**/
  //   }
  //
  //   fTwoColumns(rightColumnPercentage, imgOrigWidth, imgOrigHeight) {
  //     this.RightColumn = Math.round(gdContainerWidth * (rightColumnPercentage / 100));
  //     this.LeftColumn = Math.round(gdContainerWidth - this.RightColumn);
  //     this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
  //     this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
  //   //this.Stringy = "Hello from TwoColumn";
  //   //console.log("nextPreviousImage.Num:2c ", nextPreviousImage.Num); //test
  //   //console.log("this.ResizePercent: ", this.ResizePercent);
  //   //resizePercent      = fRoundToTwo (resizePercent);
  //   //console.log (`Right Column: ${this.RightColumn} | Left Column: ${this.LeftColumn}`);
  //   }
  // }
  //
  // // let fTwoColumnsAnimation = function(elem, rightColumnPercentage, parentElemWidth) {
  // //   let elemWidth = Math.round(parentElemWidth * (rightColumnPercentage / 100));
  // //   elem.css({
  // //     "width": elemWidth
  // //   })
  // // }


  class NextPrevNavClass {
    constructor() {
      this.String = "Hello from NextPreviousTwoColumnsClass constructor. Accessible outside when the method is not define.";
    // this.RightArrow = rightArrow;
    // this.LeftArrow = leftArrow;
    // this.ImgContainer = imgContainer;
    // this.ImgContainerWidth; // = imgContainerWidth;
    // this.fluidContainerWidth = fluidContainerWidth;
    }

    fNextPrevNavigation(
      rightArrow, leftArrow, imgContainer, imgContainerWidth, fluidContainerWidth) { //}, rightColumnPercentage, imgOrigWidth, imgOrigHeight) {
      this.String = "Hello from fNextPreviousTwoColumnsClass method";
      this.RightArrow = rightArrow;
      this.LeftArrow = leftArrow;
      this.ImgContainer = imgContainer;
      this.ImgContainerWidth = imgContainerWidth;
      this.fluidContainerWidth = fluidContainerWidth;

      this.Num = 0;
      let num = 0;
      let containerXPos = 0;
      this.fluidContainerLeftPosition = 0;
      let fluidContainerLeftPosition;

      /**-----------=====| Next button function |=====-----------**/
      rightArrow.click(() => {
        num++;
        this.Num = num;
        containerXPos = this.ImgContainerWidth * num;
        leftArrow.show();
        // console.log(`
        //     np:${imgContainer}-----------------------------------------
        //     image width:                    ${this.ImgContainerWidth}
        //     multiplied by numbr of clicks:  ${num}
        //                                     ------------------
        //     container x position:           ${containerXPos}
        //     fluid-container width:          ${this.fluidContainerWidth - (this.ImgContainerWidth * 2)}
        //     this.Num: same as clicks        ${this.Num}
        //     np:---------------------------------------------------`)
        /**-----| If the current x position greater or equals to the fluid-container width |-----**/
        this.fluidContainerLeftPosition = (this.fluidContainerWidth - (this.ImgContainerWidth * 2))
        if (containerXPos >= this.fluidContainerLeftPosition) {
          rightArrow.hide();
        }
        /**-----| fXSlider: Slides the image container to the left |-----**/
        anim.fXSlider(imgContainer, -(containerXPos));
      //console.log(rightArrow, num, ":np---------------------------------------------------");
      });

      /**-----------=====| Previous button function |=====-----------**/
      leftArrow.click(() => {
        num--;
        this.Num = num;
        containerXPos = this.ImgContainerWidth * num;
        rightArrow.show();
        // console.log(`
        //     image width:                    ${this.ImgContainerWidth}
        //     multiplied by numbr of clicks:  ${num}
        //                                     ------------------
        //     container x position:           ${containerXPos}
        //     fluid-container width:          ${this.fluidContainerWidth - (this.ImgContainerWidth * 2)}
        //     this.Num: same as clicks        ${this.Num}
        // `)
        /**-----| when it hits the beginning of the image container |-----**/
        if (containerXPos <= 0) {
          leftArrow.hide();
        }
        /**-----| fXSlider: Slides the image container to the right |-----**/
        anim.fXSlider(imgContainer, -(containerXPos));
      });
    }
  }

  /**-----------=====| EXPORTS |=====-----------**/
  /** DESCRIPTIONS:
   ** IMAGE NAVIGATION MODULES
   ** NEXT & PREVIOUS ARROW NAVS
   ** Webpack: module.exports
   **----------------------------------------------------------------**/
  module.exports.NextPrevNavClass = NextPrevNavClass;
  //module.exports.NextPreviousTwoColumnsClass = NextPreviousTwoColumnsClass;


  /**----------------------------------------------------------------**/
  console.log(`
   Filename: nextPreviousArrows.js
   Exports: module.exports.NextPrevNavClass = NextPrevNavClass `);
  /**----------------------------------------------------------------**/


}());
