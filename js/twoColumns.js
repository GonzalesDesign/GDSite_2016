/**----------===| Created by Odee on 06/17/16.|===----------**/

(function() { //IIFE:Immediately-Invoked Function Expression

  "use strict";
  console.log("Filename: twoColumns.js");

  let anim = require('./animationFunctions');

  /**----------=====| fRoundToTwo Function |=====----------**/
  /** Description:
   ** fRoundToTwo: rounds the decimals to two.
   **------------------------------------------------------**/
  let fRoundToTwo = function(num) {
    return +(Math.round(num + "e+2") + "e-2");
  };

  /**----------=====| TwoColumnsQueriesClass Class |=====----------------------------------------------------**/
  /** Description:
   ** Class to calculate the two columns within the container, in all screen sizes.
   ** The right column width uses the "rightColumnPercentage" argument is used when the screen width is
   **   small but uses the percentage pulled from json at larger screen width. This is also converted to pixel.
   ** The left column will have the container's width minus the right column width.
   **--------------------------------------------------------------------------------------------------**/
  class TwoColumnsQueriesClass {
    constructor() {}

    fTwoColumnsQueries(contnrWidth, rightColumnPercentage, imgOrigWidth, imgOrigHeight) {
      if (contnrWidth <= 400) {
        this.ColumnPercentage = 100;
        this.RightColumn = Math.round(contnrWidth * (this.ColumnPercentage / 100));
        this.LeftColumn = Math.round(contnrWidth - this.RightColumn);
        this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
        this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);

      } else if (contnrWidth > 400 && contnrWidth <= 650) {
        this.ColumnPercentage = 100;
        this.RightColumn = Math.round(contnrWidth * (this.ColumnPercentage / 100));
        this.LeftColumn = Math.round(contnrWidth - this.RightColumn);
        this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
        this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);

      } else {
        this.ColumnPercentage = rightColumnPercentage;
        this.RightColumn = Math.round(contnrWidth * (this.ColumnPercentage / 100));
        this.LeftColumn = Math.round(contnrWidth - this.RightColumn);
        this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
        this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
      // this.LeftColumn = Math.round(contnrWidth - this.RightColumn);
      // this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
      // this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
      }
    //   this.LeftColumn = Math.round(contnrWidth - this.RightColumn);
    //   this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
    //   this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
    //console.log("this.NewHeight: ", this.NewHeight);
    }
  }

  /**--------------------------------------------**/
  class ThreeColumnsClass {
    constructor() {}

    fThreeColumns(contnrWidth) {
      console.log("contnrWidth: ", contnrWidth);
      let oneThird = contnrWidth / 3;
      console.log("oneThird: ", oneThird);
    }
  }
  ;
  // let oneThirdTest = new ThreeColumnsClass();
  // oneThirdTest.fThreeColumns();
  /**--------------------------------------------**/

  class TextQueriesClass {
    constructor() {
      //   this.contnrWidth = contnrWidth;
      //   this.elem = elem;
      //   this.smlFntSize = smlFntSize;
      //   this.midFntSize = midFntSize;
      //   this.lrgFntSize = lrgFntSize;
    }

    fTextQueries(contnrWidth, elem, smlFntSize, midFntSize, lrgFntSize) {
      //console.log("contnrWidth: ", contnrWidth);
      //console.log("elem.height(): ", elem.height());
      if (contnrWidth <= 400) {
        anim.fFontSizer(elem, smlFntSize); //"4em"
        elem.css({
          "padding-left": "20px"
        })
      } else if (contnrWidth > 400 && contnrWidth <= 650) {
        anim.fFontSizer(elem, midFntSize); //"4em"
        elem.css({
          "padding-left": "20px"
        })
      } else {
        anim.fFontSizer(elem, lrgFntSize); //"4em"
        elem.css({
          "padding-left": "0px"
        })
      }
    }
  }

  /**-----------=====| EXPORTS |=====-----------**/
  /** DESCRIPTIONS:
   ** TWO COLUMNS MODULE
   ** Webpack: module.exports
   **----------------------------------------------------------------**/
  module.exports.TwoColumnsQueriesClass = TwoColumnsQueriesClass;
  module.exports.TextQueriesClass = TextQueriesClass;

  module.exports.ThreeColumnsClass = ThreeColumnsClass;

  /**----------------------------------------------------------------**/
  console.log(`
  Filename: twoColumns.js
  module.exports.TwoColumnsQueriesClass = TwoColumnsQueriesClass
  `);
  /**----------------------------------------------------------------**/


}());
