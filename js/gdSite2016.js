/**----------===| Created by Odee on 5/17/16.|===----------**/

(function() { //IIFE:Immediately-Invoked Function Expression. Scope Encapsulation

  "use strict";

  /**-----------=====| IMPORT | REQUIRE |=====-----------**/
  /** DESCRIPTIONS:
   ** FILES IMPORTED FROM OTHER JS FILES
   ** SEPERATE JS FILES FOR EASIER READABILITY AND MAINTENANCE
   **----------------------------------------------------------------**/

  /**----------=====| nextPreviousNav |=====----------**/
  const nextPreviousNav = require('./nextPreviousArrows');
  // const nextPreviousImage = new nextPreviousNav.NextPreviousClass();
  /**----------=====| anim |=====----------**/
  const anim = require('./animationFunctions');
  /**----------=====| twoKolumns |=====----------**/
  const twoKolumns = require('./twoColumns');

  //ANIMATION TIME
  let animTymSlow = 1;
  let animTymFast = .25;
  //let anim = new anim.animationFunctions();
  /**----------------------------------------------------------------**/
  console.log(`
    Filename: codeArchitecture_X.js);
    Import || Require: nextPreviousArrows.js
    Import || Require: animationFunctions.js
    Import || Require: twoColumns.js
    `);
  /**----------------------------------------------------------------**/

  /*
   console.log (`
   Things to do:
   - Activate the image navigations
   - Include the youTube video on OwnPhones
   - Modules: Seperate the class and function from the Ajax and animation
   - More research on Promise, Ajax & JSON

   May 16, 2016:
   - Promise
   - Arrow function
   - String literals
   - Transferred JS code to external js file

   May 17, 2016:
   - Image arrow navigations
   - computer crashed @ 7pm. Restarted 5x.

   May 18, 2016:
   - Integrated YouTube video
   - Image slider

   May 19, 2016:
   - Image description

   May 23 - 24:
   - Re-wrote class for generating div element
   - Seperated the class and style from each other. Make a separate calls in ajax for... of... loops
   - Easier to read and update

  May 25, Wednesday:
  - Start working on the page animations

  May 29, 30, 31 - June 6: NEXT PREVIOUS NAVIGATION
  - Worked on the next previous image navigation.
  - Finally got it to work by declaring class for each project
  - and push them to an array to be used in the animation events

  June 7: Tuesday: VIDEO
  - Started to work on the video
  June 8 - 9:
  - Video Height and Width:
  June 10: Friday AM
  - Video height and width working but code needs cleaning
  - Everything seems to be working fine.

  - TO DO:
    - START CLEANING CODE SO I CAN START BUILDING THE LANDING PAGE
      - DELETE FUNCTIONS THAT ARE NOT BEING USED
      - CLEAN UP ALL THE COMMENTS: KEEP JUST THE IMPORTANT ONES!
    - SCREEN QUERIES: FONT SIZE, DISPLAY PERCENTAGE
    - CONVERT ALL BOOTSTRAP DEPENDENCIES TO LOCAL JS
      - BEST TO NOT RELY ON BOOTSTRAP

   `);
   */

  /************ ANIMATION ENGINE ************/
  var tMx = TweenMax;
  var easeSine = Sine.easeOut;
  var easePower = Power3.easeOut;
  // var animTymSlow = .5;
  // var zeroTym = 0;

  // let fLog = function(logTHis) {
  //   console.log(logTHis);
  // };

  // /**----------=====| fRoundToTwo Function |=====----------**/
  // /** Description:
  //  ** fRoundToTwo: rounds the decimals to two.
  //  **------------------------------------------------------**/
  // let fRoundToTwo = function(num) {
  //   return +(Math.round(num + "e+2") + "e-2");
  // };

  //let numero = 0;
  // let fNxtPrvDosKolumn = function(rightArrow, leftArrow, imgContainer, imgContainerWidth, imgWidth) {
  //   //let numero = 0;
  //   rightArrow.click(function() {
  //     numero++;
  //     console.log(numero);
  //   });
  // }

  /**----------=====| DOM CACHING |=====----------**/
  let outWindowWidth = window.outerWidth;
  let inWindowWidth = window.innerWidth;
  let inWindowHeight = window.innerHeight;
  let container = $(".container");
  let containerWidth = (container.width());
  //let containerId = $("#containerId");
  //console.log(`containerWidth: ${containerWidth}`);

  let introFluidContainer = $(".introFluidContainer");
  let introFluidContainerWidth = (introFluidContainer.width());
  //console.log(`introFluidContainerWidth: ${introFluidContainerWidth}`);

  let introContainer = $(".introContainer");
  let introContainerWidth = (introContainer.width());

  let logoContainer = $(".logoContainer");
  //let logoContainerHeight = logoContainer.height();
  //let heightPercentage = inWindowHeight * .05;
  //console.log(`logoContainerHeight: ${logoContainerHeight}`);
  //console.log(`heightPercentage: ${heightPercentage}`);

  let mainContainer = $(".mainContainer");
  let mainContainerWidth = (mainContainer.width());
  let mainContainerId = $("#mainContainerId");
  //console.log (`mainContainerWidth: `);

  /**----------===| use for dynamically populated |===----------**/
  let gdContainer = $(".gdContainer");
  let gdContainerWidth = (gdContainer.width());
  let gdContainerId = $("#gdContainerId");

  let glyphicon;

  /**----------===| FONT SIZE VARIABLES |===----------**/
  const logoTitleSmlFontSize = "4em";
  const logoTitleMidFontSize = "7em";
  const logoTitleLrgFontSize = "8em";

  const logoSubTitleSmlFontSize = "1em";
  const logoSubTitleMidFontSize = "1.2em";
  const logoSubTitleLrgFontSize = "1.6em";

  const introCalloutFontSize = ".9em";
  const codingBtnFontSize = ".9em";

  const headerSmlFontSize = "1.4em";
  const headerMidFontSize = "1.6em";
  const headerLrgFontSize = "1.8em";

  const projTitleSmlFontSize = "1.6em";
  const projTitleMidFontSize = "1.8em";
  const projTitleLrgFontSize = "2em";

  const projSubTitleSmlFontSize = "1em";
  const projSubTitleMidFontSize = "1em";
  const projSubTitleLrgFontSize = "1.2em";

  const projDescSmlFontSize = "1em";
  const projDescMidFontSize = "1em";
  const projDescLrgFontSize = "1.2em";

  const imgDescSmlFontSize = "1em";
  const imgDescMidFontSize = "1em";
  const imgDescLrgFontSize = "1.2em";
  // const imgDescSmlFontSize = "12px";
  // const imgDescMidFontSize = "12px";
  // const imgDescLrgFontSize = "16px";

  /**----------===| ARRAYS: USE FOR ANIMATIONS |===----------**/
  let aIntroImages = [];

  let aSectionsCount = [];
  let aSectionsRightColumnPercent = [];
  let aSectionHeaders = [];
  let aSectionHeadrLeftColmn = [];
  let aSectionHeadrRightColmn = [];
  let aSectionHeadrTitles = [];

  let aProjectsCount = [];
  let aProjectRightColumnPercent = [];
  let aProjContainerIds = [];
  let aProjLeftColDivIds = [];
  let aProjRightColDivIds = [];

  let aProjImagesLength = [];

  let aProjectDisplay = [];

  let aLeftShaderIds = [];
  let aRightShaderIds = [];
  let aCarouselControl = [];

  let aParagraphContainer = [];
  //let aProjParagDivIds = [];
  let aProjParagLeftDivIds = [];
  let aProjParagRightDivIds = [];

  let aParagraphRightColumnPercent = [];
  let aParagraphLeftColumnWidth = [];
  let aParagraphRightColumnWidth = [];

  let aParaghProjTitleIds = [];
  let aParaghProjSubTitleIds = [];
  let aParagraphProjDescription = [];

  let aImagesCount = [];
  let aFluidContainerIds = [];
  let aImageFluidContainerIds = [];

  let aImagesRightColumnPercent = [];
  let aFluidContainerWidth = [];
  let aFluidContainerHeight = [];
  let aImagesOrigWidth = [];
  let aImagesOrigHeight = [];

  //TEST
  let a2ColImgProjRightCol = [];
  let a2ColImgProjCount = [];

  //let aTempClickedCount = [1, 2, 3, 4]
  let aImages = [];
  let aImageIds = [];
  let aImagesWidth = [];
  let aImagesHeight = [];
  let aImageDescriptIds = [];

  let aVideoColumnPercent = [];
  let aVideoWidth = [];
  let aVideoHeight = [];

  let aKounter = [];
  let aKontainer = [];

  let fluidContainerW;
  let imageW;

  let aNextNum = [];

  //class instances array:
  let aNxtPrv = [];

  /**----------=====| JS CSS STYLE |=====----------**/
  /** Description:
   ** CSS within the ES6.
   ** Usage:
   ** Provides for a dynamic parameters referencing.
   **----------------------------------------------**/
  class CSSStyle {
    constructor() {}

    fCSSstyle(elemId, elemWidth, elemHeight) {
      elemId.css({
        /*"padding-left"    : "-15px",
         "padding-right"   : "-15px",*/
        //"background"      : "url(" + imgSrc + ") no-repeat",
        //"background-size" : "cover", //cover 100%
        "width": elemWidth, //"1300px", //containerWidth,
        "height": elemHeight, //ImageHeight(origWt, origHt), "100%", //
        "border": "0px solid red",
        "background-color": "teal",
        "position": "relative" //relative absolute
      //"float"           : "left"
      /*"overflow"        : "hidden"//hidden; visible*/
      });
    }
  }

  let mainContainerCSS = new CSSStyle();
  mainContainerCSS.fCSSstyle(mainContainerId, mainContainerWidth, "200px");


  let fDivStyle = function(divClassName, divHeight, divWidth, divOverflow = "visible", borderColor) {
    //twoColTest.fTwoColumnsQueries (90, 544);
    //console.log ("twoColTest.LeftColumn2: ", twoColTest.LeftColumn);
    //console.log ("twoColTest.RightColumn2: ", twoColTest.RightColumn);
    divClassName.css({
      "width": divWidth,
      "height": divHeight,
      "position": "relative", //relative absolute
      "float": "left",
      "overflow": divOverflow, //hidden; visible
      //"border"  : "0px solid " + borderColor
      //"border-bottom" : "10px solid",
      "border-color": borderColor
    });
  };

  let fImgDivStyle = function(divNameId, imgSrc, divHeight, divWidth, divOverflow) {
    divNameId.css({
      //"padding-left"    : "-15px",
      //"padding-right"   : "-15px",
      "background": "url(" + imgSrc + ") no-repeat",
      "background-size": "cover", //cover 100%
      "width": divWidth,
      "height": divHeight,
      "background-color": "teal",
      "position": "relative", //relative absolute
      "float": "left",
      "display": "block",
      "overflow": divOverflow, //"hidden", //hidden; visible
      //"border"          : "0px solid red"
      "border-color": "red"
    });
  };

  let fParagStyle = function(divClassName) {
    divClassName.css({
      "width": "100%",
      //"height"          : "100%",
      /*"font-family"     : "Open Sans",
       "font-weight"     : "300",
       "font-size"       : "1.2em",*/
      "background-color": "beige",
      "position": "relative", //relative absolute
      "float": "left"
    //"display"         : "block",
    //"border"          : "1px solid red"
    });
  };
  let fImgDescriptIdStyle = function(divNameId, imgHeight) {
    divNameId.css({
      "font-size": "2em",
      "width": "100%",
      "padding-top": "0px",
      "height": "50px",
      "padding-right": "30px",
      "letter-spacing": "1px",
      "text-shadow": "2px 2px 2px rgba(0, 0, 0, .3)",
      "margin-top": imgHeight + "px"
    });
  };

  /***************************| CLASS DECLARATIONS |***************************/

  /**----------=====| TwoColumnsQueriesClass Class |=====----------------------------------------------------**/
  /** Description:
   ** Class to calculate the two columns within the container.
   ** Provided percentage argument is pulled from json and is use for the right column converted to pixel.
   ** The left column will have the container's width minus the right column width.
   **--------------------------------------------------------------------------------------------------**/
  // class TwoColumnsQueriesClass {
  //   constructor() {}
  //
  //   fTwoColumnsQueries(rightColumnPercentage, imgOrigWidth, imgOrigHeight) {
  //     if (gdContainerWidth <= 600) {
  //       rightColumnPercentage = 95;
  //       this.RightColumn = Math.round(gdContainerWidth * (rightColumnPercentage / 100));
  //     // this.LeftColumn = Math.round(gdContainerWidth - this.RightColumn);
  //     // this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
  //     // this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
  //     } else {
  //       rightColumnPercentage = rightColumnPercentage;
  //       this.RightColumn = Math.round(gdContainerWidth * (rightColumnPercentage / 100));
  //     // this.LeftColumn = Math.round(gdContainerWidth - this.RightColumn);
  //     // this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
  //     // this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
  //     }
  //     this.LeftColumn = Math.round(gdContainerWidth - this.RightColumn);
  //     this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
  //     this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
  //   }
  // }

  /**----------===| Columns: Class Instances |===----------**/
  let twoColumnsIntroSection = new twoKolumns.TwoColumnsQueriesClass();
  let twoColumnsHeaderSection = new twoKolumns.TwoColumnsQueriesClass();
  let twoColumnsImgProjects = new twoKolumns.TwoColumnsQueriesClass();
  let twoColumnsParagProjects = new twoKolumns.TwoColumnsQueriesClass();
  let twoColumnsImages = new twoKolumns.TwoColumnsQueriesClass();
  let twoColumnsVideo = new twoKolumns.TwoColumnsQueriesClass();
  //let twoColumnsImgProjectsAnim = new twoKolumns.TwoColumnsQueriesClass();
  let twoColumnsImagesAnim = new twoKolumns.TwoColumnsQueriesClass();

  /**----------=====| CreateElementDiv Class |=====----------**/
  /** Description:
   ** Parent class template for creating basic generic divs.
   ** To minimize the creation of multiple methods that are similar in functionalities.
   **--------------------------------------------------------**/
  class CreateElementDiv {
    constructor() {
      //this.divName;
      //elemNameClass, elemNameId, divName) {
      //this.InstanceVarOrProperty = instanceVar;
      //this.RightColumn           = rightColumn;
      //this.LeftColumn            = columnDiv;
      //this.ElemNameClass;// = elemNameClass;
      //this.ElemNameId;//    = elemNameId;
      //this.DivName;// = divName;
      /**---------- To access these properties outside, use classInstance.property ----------**/
    }

    /** Generic method for creating div element **/
    fCreateDiv(title, counter, appendedTo) {
      this.divName = document.createElement("div");
      this.divName.id = title + counter; //set id // title + "Id_" + counter;
      this.divName.className = title + "Class"; //set className
      //let divNameId     = $ ("#" + title + "Id_" + counter); //get id
      $(this.divName).appendTo(appendedTo);
    //divName.innerHTML = ("<!--/*****************/-->"); //for testing
    }
  }

  /**------------=====| CreateBasicElement Class |=====------------**/
  /** Description:
   ** CreateBasicElement class: For creating basic elements like divs.
   **--------------------------------------------------------------**/
  class CreateBasicElement {
    constructor() {
      this.titleName;
    }

    fCreateBasicElement(titleId, counter, titleClass, appendedTo) {
      this.titleName = document.createElement("div");
      this.titleName.id = titleId + counter; //set id // title + "Id_" + counter;
      this.titleName.className = titleClass; //set className
      //let titleNameId     = $ ("#" + title + "Id_" + counter); //get id
      $(this.titleName).appendTo(appendedTo);
    //fDivStyle(divClass, divHeight, divWidth, divOverflow, "grey");
    }
  }

  class BasicTextContent extends CreateBasicElement {
    constructor() {
      super();
    }

    fBasicTextContent(titleId, counter, titleClass, appendedTo, textString) {
      super.fCreateBasicElement(titleId, counter, titleClass, appendedTo);
      this.titleName.innerHTML = textString;
    }
  }

  /**------------=====| fBasicDivStyle CSS |=====------------*, "relative"*/
  let fBasicDivStyle = function(divName, divHeight, divWidth, divPosition) {
    //console.log("divName: ", divName);
    divName.css({
      "width": divWidth,
      "height": divHeight,
      "position": divPosition, //relative absolute
      "float": "left"
    //"overflow": divOverflow, //hidden; visible
    //"border": "0px solid red" //+ borderColor
    //"border-bottom" : "10px solid",
    //"border-color": borderColor
    });
  //anim.fAnimateHeightWidth(divName, divHeight, divHeight, animTymSlow);
  };
  /**------------=====| fBasicIntroStyle CSS |=====------------**/
  let fBasicIntroStyle = function(divName, divHeight, divWidth) {
    //console.log("divName: ", divName);
    divName.css({
      "width": divWidth,
      "height": divHeight
    //"position": "absolute", //relative absolute
    //"float": "left",
    //"z-index": "100",
    //"margin-top": inWindowHeight - (divHeight + heightPercentage),
    //"border": "1px solid yellow"
    });
  //anim.fAnimateHeightWidth(divName, divHeight, divHeight, animTymSlow);
  };
  let fLogoContainer = function(borderColor) {
    let logoContainer = $(".logoContainer");
    //let logoContainerHeight = logoContainer.height();
    //let heightPercentage = inWindowHeight * .05;
    //console.log ("winHeight: ", winHeight);
    //console.log ("heightPercentage: ", heightPercentage);
    //logoContainer.css ({"top": (winHeight + (logoContainerHeight - 300))});
    logoContainer.css({
      //"margin-top": inWindowHeight - (logoContainerHeight + heightPercentage)
      "border-top": "4px double" + borderColor,
      "border-bottom": "6px double" + borderColor
    });
  };
  /**-----{ fLogoContainer: Adjust the logo container's top position }-----**/
  //fLogoContainer();

  /**------------=====| fBasicImageStyle CSS |=====------------**/
  let fBasicImageStyle = function(divName, divHeight, divWidth, imgSrc) {
    divName.css({
      "width": divWidth,
      "height": divHeight,
      //"background": "url(" + imgSrc + ")  center center fixed",
      "background": "url(" + imgSrc + ") no-repeat",
      "background-size": "cover", //cover 100%
      "position": "relative", //relative absolute
      "float": "left"
    //"overflow": divOverflow, //hidden; visible
    //"border"  : "0px solid " + borderColor
    //"border-top": "0px solid red"
    //"border-color": borderColor
    });
  };
  /**------------=====| fBasicImageStyle CSS |=====------------**/
  let fIntroImageStyle = function(divName, divHeight, divWidth, imgSrc) {
    divName.css({
      "width": divWidth,
      "height": divHeight,
      "background": "url(" + imgSrc + ")  center center fixed",
      //"background": "url(" + imgSrc + ") no-repeat",
      "background-size": "cover", //cover 100%
      "position": "relative", //relative absolute
      "float": "left"
    //"overflow": divOverflow, //hidden; visible
    //"border"  : "0px solid " + borderColor
    //"border-top": "0px solid red"
    //"border-color": borderColor
    });
  };

  const createDiv = new CreateBasicElement();
  const sectionHeaderText = new BasicTextContent();

  //const createDiv = new CreateBasicElement();
  const imageBasicDiv = new CreateBasicElement();

  /**------------=====| End CreateBasicElement Class |=====------------**/

  /**----------=====| ProjectDiv Class |=====----------**/
  /** Description:
   ** ProjectDiv class template is an extension of the CreateElementDiv class.
   ** For creating project container divs.
   ***********************/
  class ProjectDiv extends CreateElementDiv {
    constructor() {
      super();
    }

    fCreateProjDiv(title, counter, appendedTo, divHeight, divWidth, divOverflow) {
      super.fCreateDiv(title, counter, appendedTo);
      let divClass = $("." + title + "Class"); //get class
      fDivStyle(divClass, divHeight, divWidth, divOverflow, "grey");
    }
  }

  /**----------=====| ColumnDiv Class |=====----------**/
  /** Description:
   ** ColumnDiv class template is an extension of the CreateElementDiv class.
   ** For creating column divs.
   ***********************/
  class ColumnDiv extends CreateElementDiv {
    constructor() {
      super();
    }

    fCreateColumnDiv(title, counter, appendedTo, divHeight, divWidth, divOverflow) {
      super.fCreateDiv(title, counter, appendedTo);
      let divClass = $("." + title + "Class"); //get class
      let divNameId = $("#" + title + counter); //get id
      fDivStyle(divNameId, divHeight, divWidth, divOverflow, "black"); //DELETE COLOR
    //divClass.css({"height": "250px"}); //testing
    }
  }

  /**----------=====| ImgDiv Class |=====----------**/
  /** Description:
   ** ImgDiv class template is an extension
   ** of the CreateElementDiv class.
   ** For creating image divs.
   **----------------------------------------------**/
  class ImgDiv extends CreateElementDiv {
    constructor() {
      super();
    }

    fCreateImgDiv(title, counter, appendedTo, imgSrc, divHeight, divWidth, divOverflow) {
      super.fCreateDiv(title, counter, appendedTo);
      //let divClass = $ ("." + title + "Class"); //get class
      /** getting the div id name has to follow the same convention
       ** as it was set on the parent class.
       ** this.divName.id        = title + "Id_" + counter; //set id name
       ** let divNameId = $ ("#" + title + "Id_" + counter); //get id name
       ** additional id name customization has to be set at the instance level.
       ** see: imgDiv.fCreateImgDiv (proj.title+"_Image", i3, fluidContainerIds...
       ****************************************************************************/
      let divNameId = $("#" + title + counter); //get id //("#" + title + "Id_" + counter)
      fImgDivStyle(divNameId, imgSrc, divHeight, divWidth, divOverflow);
    }
  }

  /**----------=====| TextContent Class |=====----------**/
  /** Description:
   ** TextContent class template is an extension
   ** of the CreateElementDiv class.
   ** For creating innerHTML divs. ************/
  /**------------**/
  class TextContent extends CreateElementDiv {
    constructor() {
      super();
    }

    fCreateSimpleTextDiv(title, counter, appendedTo, textString) {
      super.fCreateDiv(title, counter, appendedTo);
      this.divName.innerHTML = textString;
    }
    fCreateTextDiv(title, counter, titleClass, appendedTo, textString) {
      super.fCreateDiv(title, counter, appendedTo);
      //this.titleName = document.createElement("div");
      //this.titleName.id = titleId + counter; //set id // title + "Id_" + counter;
      this.divName.className = titleClass; //set className
      //let titleNameId     = $ ("#" + title + "Id_" + counter); //get id
      //$(this.titleName).appendTo(appendedTo);
      this.divName.innerHTML = textString;
    //fDivStyle(divClass, divHeight, divWidth, divOverflow, "grey");
    }
  }

  /**----------=====| CreateElementVideo Class |=====----------**/
  /** Description:
   ** Class template for creating div specifically for YouTube video.
   ***********************/
  class CreateElementVideo {
    constructor() {}

    fCreateVideoDiv(videoId, appendedTo, divHeight, divWidth) {
      let divName = document.createElement("div");
      divName.id = videoId; //set id
      let divClass = $("." + videoId + "Class"); //get class
      let divId = $("#" + videoId); //get id
      fDivStyle(divClass, divHeight, divWidth, "red"); //DELETE COLOR
      $(divName).appendTo(appendedTo);
    }
  }

  /**----------=====| CreateElementA Class |=====----------**/
  /** Description:
   ** Class template for creating basic "a" tag.
   ***********************/
  class CreateElementAny {
    constructor() {}

    /** Generic method for creating a tag element **/
    fCreateTag(tagType, className, title, counter, appendedTo) {
      let divName = document.createElement(tagType);
      divName.id = title + "Id_" + counter; //set id
      divName.className = className; //title + "Class";
      divName.href = "#modalCarousel";
      //let divNameId     = $ ("#" + title + "Id_" + counter); //get id
      $(divName).appendTo(appendedTo);
    }
  }
  /**----------=====| CREATE BUTTON ELEMENT CLASS |=====----------**/
  /** Description:
   ** Class template for creating basic "BUTTON" tag.
   ***********************/
  class CreateElementButton {
    constructor() {}

    /** Generic method for creating a tag element **/
    fCreateBtn(className, idName, counter, appendedTo, label) {
      let divName = document.createElement("BUTTON");
      divName.id = idName + "Id_" + counter; //set id
      divName.className = className; //title + "Class";
      //divName.href = "#modalCarousel";
      //let divNameId     = $ ("#" + title + "Id_" + counter); //get id
      $(divName).appendTo(appendedTo);
      let buttonLabel = document.createTextNode(label);
      $(buttonLabel).appendTo(divName);
    }
  }
  const createButton = new CreateElementButton();

  //TEST QUERIES
  // console.log("outWindowWidth: ", outWindowWidth);
  // console.log("inWindowWidth: ", inWindowWidth);
  // console.log("gdContainerWidth: ", gdContainerWidth);

  // let fScreenQueriesX = () => {
  //   //console.log("gdContainerWidth:2 ", gdContainerWidth);
  //   //let projTitleClass = document.getElementsbyClassName(projTitleClass)
  //   if (gdContainerWidth >= "200px") {
  //     //console.log("gdContainerWidth:3 ", gdContainerWidth);
  //     //className = $("." + className);
  //     //let className = document.getElementsbyClassName(className)
  //     let projTitleClass = $(".projTitleClass");
  //     //console.log("projTitleClass: ", projTitleClass);
  //     projTitleClass.css({
  //       "font-size": "1em",
  //       "color": "red"
  //     })
  //   } else {
  //     //console.log("gdContainerWidth:4 ", gdContainerWidth);
  //     let projTitleClass = $(".projTitleClass");
  //     projTitleClass.css({
  //       "font-size": "3em",
  //       "color": "red"
  //     })
  //   }
  // }
  //fScreenQueries();
  //projTitleClass = $(".projTitleClass");
  // fScreenQueries(projTitleClass);
  // projTitleClass.css({
  //   "font-size": "1em",
  //   "color": "red"
  // })
  //console.log("projTitleClass: ", projTitleClass);

  /**----------===| COLUMNS PERCENTAGE |===----------**/
  let fIntroColumnQueriesXX = (screenWidth, elemWidth, columnPercentage) => {
    // console.log("screenWidth: ", screenWidth);
    // console.log("elemWidth: ", elemWidth);
    // console.log("columnPercentage: ", columnPercentage);
    if (screenWidth <= 500) {
      elemWidth = 95;
    } else {
      elemWidth = columnPercentage
    }
  };
  // /**-----------=====| anim.fAnimateHeightWidth Function |=====-----------**/
  // /** Descriptions:
  //  ** Animates element's height and width
  //  **----------------------------------------------------------------**/
  // let anim.fAnimateHeightWidth = function(elem, eHeight, eWidth, animTym) {
  //   //tMx.to (elem, animTym, {css: {height: eHeight, width: eWidth}, ease: easePower});
  //   tMx.to(elem, animTym, {
  //     height: eHeight,
  //     width: eWidth,
  //     ease: easePower
  //   });
  // };

  // let fFontSizer = function(elem, sizeFont) {
  //   tMx.to(elem, animTymSlow, {
  //     fontSize: sizeFont,
  //     ease: easePower
  //   });
  // // tMx.to(elem, animTymSlow, {
  // //   scale: sizeFont,
  // //   ease: easePower
  // // });
  // };

  // class TextQueriesClass {
  //   constructor() {
  //     //   this.gdContnrWidth = gdContnrWidth;
  //     //   this.elem = elem;
  //     //   this.smlFntSize = smlFntSize;
  //     //   this.midFntSize = midFntSize;
  //     //   this.lrgFntSize = lrgFntSize;
  //   }
  //
  //   fTextQueries(gdContnrWidth, elem, smlFntSize, midFntSize, lrgFntSize) {
  //     //console.log("gdContnrWidth: ", gdContnrWidth);
  //     if (gdContnrWidth <= 400) {
  //       fFontSizer(elem, smlFntSize); //"4em"
  //       elem.css({
  //         "padding-left": "20px"
  //       })
  //     //fFontSizer(logoSubTitle, ".8em");
  //     } else if (gdContnrWidth > 400 && gdContnrWidth <= 600) {
  //       fFontSizer(elem, midFntSize); //"4em"
  //       elem.css({
  //         "padding-left": "20px"
  //       })
  //     // fFontSizer(logoTitle, "7em");
  //     // fFontSizer(logoSubTitle, "1.2em");
  //     } else {
  //       fFontSizer(elem, lrgFntSize); //"4em"
  //       elem.css({
  //         "padding-left": "0px"
  //       })
  //     // fFontSizer(logoTitle, "8em");
  //     // fFontSizer(logoSubTitle, "1.4em");
  //     }
  //   }
  // }
  let logoText = new twoKolumns.TextQueriesClass();
  let headerText = new twoKolumns.TextQueriesClass();

  // class ScreenQueriesClass {
  //   constructor() {
  //     //this.ColumnPercentage;
  //     //console.log("constructor: this.ColumnPercentage: ", this.ColumnPercentage);
  //   }
  //   fScreenQueries(gdContnrWidth, divName) {
  //     //console.log("fScreenQueries: this.ColumnPercentage: ", this.ColumnPercentage);
  //     // if (gdContnrWidth < 400) {
  //     //   fFontSizer(logoTitle, "4em");
  //     //   fFontSizer(logoSubTitle, ".8em");
  //     //   this.ColumnPercentage = 95;
  //     // } else if (gdContnrWidth >= 400 && gdContnrWidth <= 500) {
  //     //   fFontSizer(logoTitle, "7em");
  //     //   fFontSizer(logoSubTitle, "1.2em");
  //     //   this.ColumnPercentage = 90;
  //     // } else {
  //     //   fFontSizer(logoTitle, "8em");
  //     //   fFontSizer(logoSubTitle, "1.4em");
  //     //   this.ColumnPercentage = columnPercentage;
  //     // }
  //     //console.log("this.ColumnPercentage: ", this.ColumnPercentage);
  //     console.log("gdContnrWidth: ", gdContnrWidth);
  //     if (gdContnrWidth <= 600) {
  //       console.log("<= 600");
  //       this.ColumnPercentage = 95;
  //     // let rightColumnDivWidth = Math.round(gdContnrWidth * (this.ColumnPercentage / 100));
  //     // console.log("rightColumnDivWidth: ", rightColumnDivWidth);
  //     // divNameWidth = divName
  //     } else {
  //       console.log("else > 600");
  //       this.ColumnPercentage = logoTitleColumnPercent;
  //     }
  //   }
  // }
  // let logoColumn = new ScreenQueriesClass();

  /**----------=====| OPEN TO NEW WINDOW CLASS |=====----------**/
  /** DESCRIPTION:
   *  To open new html blank window
   *  Instead of using href
   *  location.href doesn't offer opening to a seperate window
   *  window.open does but it's a pop-up window and end users can filter it
   *------------------------------------------------------------------------*/
  class OpenWindow {
    constructor() {}

    fWindowOpen(idName, pageToOpen) {
      idName.click(() => {
        console.log("clicked!")
        // location.href = "http://www.google.com";
        window.open(pageToOpen, '_blank'); //, "toolbar=no,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
      })
    }
  }
  const openLink = new OpenWindow();

  //openLink.fWindowOpen(idName, pageToOpen)

  /**----------=====| FUNCTION FOR ROLLOVER AND ROLLOUT |=====----------**/
  function fRollEvents(elem, origColor) {
    elem.mouseover(() => {
      elem.css({
        "color": "Orange",
        "cursor": "pointer",
        "text-decoration": "none"
      })
    })
    elem.mouseout(() => {
      elem.css({
        "color": origColor
      })
    })
  }

  /**------------=====| fTempBorderStyle CSS |=====------------**/
  let fTempBorderStyle = function(divName) {
    //console.log("divName: ", divName);
    divName.css({
      "border": "1px solid red"
    });
  };




  /**----------=====| END OF CLASS DECLARATIONS |=====----------**/

  /**----------=====| CLASS INSTANCES |=====----------**/
  //const projectContainer = new ProjectDiv();
  //const columnDiv = new ColumnDiv();
  //let rightColumn = new ColumnDiv ();
  //let imgContainer = new ColumnDiv ();
  //const imgDiv = new ImgDiv();
  const textDiv = new TextContent();

  const tagElement = new CreateElementAny();
  //const rightArrowShader = new CreateElementAny();
  //const leftArrow = new CreateElementAny();
  //const rightArrow = new CreateElementAny();

  const youTubeVideo = new CreateElementVideo();

  /**----------=====| FUNCTION TO OPEN|CLOSE TOGGLE : CODING THIS SITE |=====----------**/
  let fToggleBtn = (btn, targetElem) => {
    btn.click(() => {
      targetElem.slideToggle("slow");
    });
  }

  /**----------=====| FUNCTION FOR CONVERTING HEX COLOR TO RGBA |=====----------**/
  /** http://jsfiddle.net/subodhghulaxe/t568u/ **/
  //function fConvertHex(hex, opacity) {
  let fConvertHex = (hex, opacity) => {
    hex = hex.replace('#', '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    let result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
    return result;
  }

  /*********************( PROMISE AJAX • START •  JSON )*********************/
  if (window.Promise) {
    console.log('Promise found');
  }

  /**----------===| Miscellaneous variables: Clean up later |===----------**/
  const additionalHeight = 60;
  const arbitraryNum = 10;

  let date = new Date();
  console.log(date);

  /**----------------------------------------------------------------------------------------------**/
  /**--------------------============| ~ PROMISE • AJAX • JSON ~  |============--------------------**/
  /**----------------------------------------------------------------------------------------------**/
  // console.log(`
  // /**|======================================================|**/
  // /**|               PROMISE • AJAX • JSON                  |**/
  // /**|        ELEMENTS CREATION & DATA ACQUISITIONS         |**/
  // /**|======================================================|**/
  // `);
  let codingThisSiteId;
  let logoContainerDivId;
  let logoLeftColDivId;
  let logoRightColDivId;
  let logoTitleColumnPercent;
  let logoTitleClass;
  let logoSubTitleClass;
  let logoTitleId;
  let logoSubTitleId;
  let introCalloutId;
  let toggleBtn;
  //let codingThisSiteId;


  let introImageIds;
  let myIntroImage;
  let introBackgroungImage;
  let rightColumnHeight;

  let randColorTheme;

  const fIntroAjax = () => {
    let promise = $.get("./js/json/introImages.json");
    promise.then(function(data) {
      let jx = 0;
      for (let introData of data.GDSiteIntro) {
        /**----------===| CREATE CODING CONTAINER DIV INSIDE INTROCONTAINER |===----------**/
        createDiv.fCreateBasicElement(introData.title + "_CodingContainer", jx, "codingContainer", introContainer);
        let codingContainerId = $("#" + introData.title + "_CodingContainer" + jx); //GET ID
        /**----------===| CREATE CODING TEXT DIV INSIDE CODINGCONTAINER |===----------**/
        createDiv.fCreateBasicElement(introData.title + "_CodingThisSite", jx, "codingThisSite", codingContainerId);
        codingThisSiteId = $("#" + introData.title + "_CodingThisSite" + jx); //GET ID
        const codingThisSite = $(".codingThisSite"); //GET CLASSNAME
        let codingThisSiteHeight = codingThisSiteId.height();
        fBasicDivStyle(codingThisSiteId, "auto", gdContainerWidth, "absolute"); //CSS
        let centerOnScreenY = (inWindowHeight / 2) - (codingThisSiteHeight / 2);
        codingThisSiteId.css({
          "margin-top": centerOnScreenY
        })
        /**----------===| CREATE CODING PARAGRAPHS |===----------**/
        textDiv.fCreateTextDiv("codingTitle", jx, "codingTitleClass", codingThisSiteId, introData.codingTitle);
        textDiv.fCreateTextDiv("codingDescription", jx, "codingDescriptionClass", codingThisSiteId, introData.codingThisSite);

        /**----------===| CREATE LOGO CONTAINER DIV INSIDE INTROCONTAINER DIV |===----------**/
        createDiv.fCreateBasicElement(introData.title + "_LogoContainer", jx, "logoContainer", introContainer);
        logoContainerDivId = $("#" + introData.title + "_LogoContainer" + jx); //GET ID
        /**----------===| LOGO TITLE CONTAINER COLUMNS PERCENTAGE |===----------**/
        logoTitleColumnPercent = introData.logoTitleColumnPercent; //json supplied
        twoColumnsIntroSection.fTwoColumnsQueries(gdContainerWidth, logoTitleColumnPercent, 0, 0);

        /**----------===| CREATE LOGO TITLE LEFT COLUMNS |===----------**/
        createDiv.fCreateBasicElement(introData.title + "_IntroLeftColmn", jx, "introLeftColumnClass", logoContainerDivId);
        logoLeftColDivId = $("#" + introData.title + "_IntroLeftColmn" + jx); //GET ID
        fBasicDivStyle(logoLeftColDivId, arbitraryNum, twoColumnsIntroSection.LeftColumn, "relative"); //CSS

        /**----------===| CREATE LOGO TITLE RIGHT COLUMNS |===----------**/
        createDiv.fCreateBasicElement(introData.title + "_IntroRightColmn", jx, "introRightColumnClass", logoContainerDivId);
        logoRightColDivId = $("#" + introData.title + "_IntroRightColmn" + jx); //GET ID
        fBasicDivStyle(logoRightColDivId, "auto", "auto", "relative"); //CSS

        // let introRightColumnClass = $(".introRightColumnClass");
        // console.log("introRightColumnClass :", introRightColumnClass);
        // let introRightColumnHeight = introRightColumnClass.height();
        // console.log("introRightColumnHeight :", introRightColumnHeight);
        //TEMP
        // logoLeftColDivId.css({
        //   "border-top": "2px solid red"
        // })
        // logoRightColDivId.css({
        //   "border-top": "2px solid yellowGreen",
        //   "border-bottom": "1px solid cyan"
        // })

        /**----------===| CREATE LOGO TITLES |===----------**/
        textDiv.fCreateTextDiv(introData.title + "_LogoTitle", jx, "logoTitleClass", logoRightColDivId, introData.introTitle); //R.LLOYD GONZALES
        logoTitleId = $("#" + introData.title + "_LogoTitle" + jx);
        logoText.fTextQueries(gdContainerWidth, logoTitleId, logoTitleSmlFontSize, logoTitleMidFontSize, logoTitleLrgFontSize);

        /**----------===| CREATE INTRO SUB-TITLES |===----------**/
        textDiv.fCreateTextDiv(introData.title + "_LogoSubTitle", jx, "logoSubTitleClass", logoRightColDivId, introData.intoSubTitle); //Passionate about Arts, Designs & Coding
        logoSubTitleId = $("#" + introData.title + "_LogoSubTitle" + jx);
        logoText.fTextQueries(gdContainerWidth, logoSubTitleId, logoSubTitleSmlFontSize, logoSubTitleMidFontSize, logoSubTitleLrgFontSize);

        /**----------===| CREATE CALLOUT |===----------**/
        textDiv.fCreateTextDiv(introData.title + "_Callout", jx, "calloutClass", logoRightColDivId, introData.callout); //Portfolio: Scroll Down
        introCalloutId = $("#" + introData.title + "_Callout" + jx);
        logoText.fTextQueries(gdContainerWidth, introCalloutId, introCalloutFontSize, introCalloutFontSize, introCalloutFontSize);

        /**----------===| TOGGLE "CODE THIS SITE" DESCRIPTION |===----------**/

        /**----------===| CREATE BUTTON ELEMENT |===----------**/
        createButton.fCreateBtn("btn btn-link codingBtn", "_Btn", jx, logoRightColDivId, "coding this site"); //introFluidContainer
        toggleBtn = $(".codingBtn"); //get clasname
        const closeCoding = $(".closeCoding"); //get clasname
        logoText.fTextQueries(gdContainerWidth, toggleBtn, codingBtnFontSize, codingBtnFontSize, codingBtnFontSize);
        let toggleBtnId = $("#" + introData.title + "_Btn" + jx);
        logoText.fTextQueries(gdContainerWidth, toggleBtn, codingBtnFontSize, codingBtnFontSize, codingBtnFontSize);

        /**----------===| LOGO CONTAINER: BASIC CSS |===----------**/

        rightColumnHeight = logoRightColDivId.height(); // + 30;

        fBasicIntroStyle(logoContainerDivId, "auto", gdContainerWidth);
        logoContainerDivId.css({
          //"border": "1px solid pink",
          "margin-top": inWindowHeight - (rightColumnHeight + 40)
        })

        fToggleBtn(toggleBtn, codingThisSite);
        fToggleBtn(closeCoding, codingThisSite);
        fRollEvents(toggleBtn, "#949494")
        fRollEvents(closeCoding, "#5780a2")

        /**----------===| CREATE IMAGE DIV INSIDE INTROFLUIDCONTAINER |===----------**/
        imageBasicDiv.fCreateBasicElement(introData.title + "_IntroImg", jx, "introDivClass", introFluidContainer);
        /**----------===| NEW IMAGE CREATION |===----------**/
        myIntroImage = new Image();
        let imagesPath = "./images/" + introData.title + "/";
        /**-----====={ Load image randomly }=====-----**/
        var randImg = introData.images[Math.floor(introData.images.length * Math.random())];
        myIntroImage.src = imagesPath + randImg.imgName; //introData.images[0].imgName; //randImg;
        /**----------===| IMAGE DIV: IDS |===----------**/
        introImageIds = $("#" + introData.title + "_IntroImg" + jx);
        console.log("introImageIds: ", introImageIds);

        /**----------===| COLOR THEME: INTRO SUB TITLE |===----------**/
        randColorTheme = randImg.colorTheme;
        logoSubTitleId.css({
          "color": randColorTheme
        })
        /**----------===| COLOR THEME: INTRO LOGO CONTAINER |===----------**/
        let hex2Rgb = fConvertHex(randColorTheme, 50)
        logoContainerDivId.css({
          "border-top": "4px double " + hex2Rgb,
          "border-bottom": "6px double " + hex2Rgb
        });

        /**----------===| IMAGE DIV: CSS |===----------**/
        /*        Populating the div with image        *
        **--------------------------------------------**/
        // let inWindowHeight = window.innerHeight; // / 2;
        // let inWindowWidth = window.innerWidth;
        // let inWindowWidth = window.innerWidth;
        // let inWindowHeight = window.innerHeight;
        fIntroImageStyle(introImageIds, inWindowHeight, inWindowWidth, myIntroImage.src);
      }
    })
  }
  /**----------===| INVOKE FUNCTION |===----------**/
  fIntroAjax();

  //let logoContainer = $(".logoContainer");
  // function toggleClass() {
  //   //$("." + divClass).toggle();
  //   logoContainer.toggle();
  //   logoContainer.css({
  //     "display": "inline"
  //   });
  // }

  const fRunAjax = () => {
    let promise = $.get("./js/json/ajaxData2_simple.json");
    //let promise = $.get("./js/json/ajaxData2_2ProjectsV.json");
    //let promise = $.get("./js/json/ajaxData2_EvenSimpler.json");
    //let promise = $.get("./js/json/ajaxData2_1Project.json");
    //let promise = $.get("./js/json/ajaxData2_2Projects.json");

    promise.then(function(data) {
      let j1 = 0;
      let j2 = 0;
      let j3 = 0;

      // console.log(`
      // /**|===============================|**/
      // /**|      SECTIONS JSON LOOP       |**/
      // /**|===============================|**/
      // `);

      //TEMP fScreenQueries();
      for (let sect of data.GDSite) {
        j1++;

        /**----------===| LINKS TO OPEM TO ANOTHER WINDOW |===----------**/
        let nycBikeFlashSample = $('#nycBikeFlashSample');
        //let nycBikeFlashSample = document.getElementById("nycBikeFlashSample");
        // nycBikeFlashSample.css({
        //   "cursor": "pointer",
        //   "hover": "red"
        // })
        fRollEvents(nycBikeFlashSample, "white");

        // nycBikeFlashSample.hover(function() {
        //   $(this).fadeOut(100);
        //   $(this).fadeIn(500);
        // });

        openLink.fWindowOpen(nycBikeFlashSample, "http://www.google.com");

        aSectionsCount[aSectionsCount.length] = sect;
        // console.log(`
        //   <•----------------------------------•>
        //   aSectionsCount.length:j1 :  ${aSectionsCount.length}
        //   ${sect.title}
        //   <•----------------------------------•>
        //   `);

        /**----------===| INVOKE SECTION COLUMNS |===----------**/
        twoColumnsHeaderSection.fTwoColumnsQueries(gdContainerWidth, sect.headerRightColumnPercent, arbitraryNum, arbitraryNum);

        //logoTitleColumnPercent = sect.headerRightColumnPercent;

        /**----------===| push to array |===----------**/
        aSectionsRightColumnPercent[aSectionsRightColumnPercent.length] = sect.headerRightColumnPercent;

        /**----------===| CREATE SECTION HEADER CONTAINER |===----------------------------------------**/
        createDiv.fCreateBasicElement(sect.title, j1, "sectionHeaderClass", gdContainer);
        /**----------===| Sections Header: Container Ids |===----------**/
        let sectDivIds = $("#" + sect.title + j1);
        /**s----------===| Basic CSS: (id, height, width) |===----------**/
        fBasicDivStyle(sectDivIds, "auto", gdContainerWidth, "relative");

        /**----------===| push to array |===----------**/
        aSectionHeaders[aSectionHeaders.length] = sectDivIds;

        /**----------===| CREATE SECTION HEADER DIVIDER |===----------------------------------------**/
        createDiv.fCreateBasicElement("sectDivider", j1, "sectionDividerClass", sectDivIds);
        let sectDividerIds = $("#" + "sectDivider" + j1);
        /**----------===| COLOR THEME: DIVIDER |===----------**/
        sectDividerIds.css({
          "background-color": randColorTheme
        })

        /**----------===| CREATE HEADER LEFT COLUMN |===------------------------------------------------------------**/
        createDiv.fCreateBasicElement(sect.title + "_Left", j1, "sectionHeaderLeftColmnClass", sectDivIds);
        /**----------===| Left Column: Ids |===----------**/
        let sectLeftIds = $("#" + sect.title + "_Left" + j1);
        /**s----------===| Left Column: Basic CSS |===----------**/
        fBasicDivStyle(sectLeftIds, arbitraryNum, twoColumnsHeaderSection.LeftColumn, "relative");
        /**----------===| push to array |===----------**/
        aSectionHeadrLeftColmn[aSectionHeadrLeftColmn.length] = sectLeftIds;

        /**----------===| CREATE HEADER RIGHT COLUMN |===-------------------------------------------------------------**/
        createDiv.fCreateBasicElement(sect.title + "_Right", j1, "sectionHeaderRightColmnClass", sectDivIds);
        /**----------===| Sections Header Right Column: Ids |===----------**/
        let sectRightIds = $("#" + sect.title + "_Right" + j1);
        /**s----------===| Sections Header Right Column: Basic Style |===----------**/
        fBasicDivStyle(sectRightIds, "auto", twoColumnsHeaderSection.RightColumn, "relative");
        /**----------===| push to array use for animation |===----------**/
        aSectionHeadrRightColmn[aSectionHeadrRightColmn.length] = sectRightIds;
        /**----------===| Sections Header Title Text |===----------**/
        sectionHeaderText.fBasicTextContent(sect.title + "_Text", j1, "sectionHeaderTxtContentClass", sectRightIds, sect.sectionTitle);
        /**----------===| Sections Header Title Text: Ids |===----------**/
        let sectionTitleIds = $("#" + sect.title + "_Text" + j1);
        /**s----------===| Sections Header Title Text: Basic Style |===----------**/
        fBasicDivStyle(sectionTitleIds, "auto", twoColumnsHeaderSection.RightColumn, "relative");
        headerText.fTextQueries(gdContainerWidth, sectionTitleIds, headerSmlFontSize, headerMidFontSize, headerLrgFontSize);
        /**----------===| push to array use for animation |===----------**/
        aSectionHeadrTitles[aSectionHeadrTitles.length] = sectionTitleIds;

        // console.log(`
        // /**|===============================|**/
        // /**|      PROJECTS JSON LOOP       |**/
        // /**|===============================|**/
        // `);
        for (let proj of sect.projects) {
          j2++;
          /**----------===| Divider tag for DOM and style inspection in the browser dev view for testing |===----------**/
          tagElement.fCreateTag("i", "Divider:-------------------====•", proj.title, j2, gdContainer);
          /**----------===| PUSH TO ARRAY: PROJECT COUNT |===----------**/
          aProjectsCount[aProjectsCount.length] = proj;
          /**----------===| INVOKE PROJECT COLUMNS |===----------**/
          twoColumnsImgProjects.fTwoColumnsQueries(gdContainerWidth, proj.imgRightColumnPercent, proj.imagesWidth, proj.imagesHeight);
          /**----------===| PUSH TO ARRAY: PROJECT RIGHT COLUMNS |===----------**/
          aProjectRightColumnPercent[aProjectRightColumnPercent.length] = proj.imgRightColumnPercent;
          aImagesOrigWidth[aImagesOrigWidth.length] = proj.imagesWidth;
          aImagesOrigHeight[aImagesOrigHeight.length] = proj.imagesHeight;

          /**----------===| CREATE PROJECT IMAGE CONTAINER |===----------**/
          createDiv.fCreateBasicElement(proj.title + "_ProjContainer", j2, "projectContainerClass", gdContainer);
          /**----------===| Project Container Ids |===----------**/
          const projContainerIds = $("#" + proj.title + "_ProjContainer" + j2);
          /**p----------===| Project Container: Basic Style |===----------**/
          fBasicDivStyle(projContainerIds, "auto", gdContainerWidth); // ID, HEIGHT, WID, "relative"TH
          /**----------===| push to array use for animation |===----------**/
          aProjContainerIds[aProjContainerIds.length] = projContainerIds;

          /**----------===| CREATE PROJECT IMAGE CONTAINER: LEFT COLUMN |===----------**/
          createDiv.fCreateBasicElement(proj.title + "_Left", j2, "projectLeftColmnClass", projContainerIds);
          /**----------===| Left Column Ids |===----------**/
          let projContainrLeftColDivIds = $("#" + proj.title + "_Left" + j2);
          /**p----------===| Left Column: Basic Style |===----------**/
          fBasicDivStyle(projContainrLeftColDivIds, arbitraryNum, twoColumnsImgProjects.LeftColumn); // other css properties: ".projectLeftColmnClass" in css fil, "relative"e.
          /**----------===| push to array |===----------**/
          aProjLeftColDivIds[aProjLeftColDivIds.length] = projContainrLeftColDivIds;

          /**----------===| CREATE PROJECT IMAGE CONTAINER: RIGHT COLUMN |===----------**/
          /** function parameters:(Id, Class, appendTo)
          **--------------------------------------------------------------------**/
          createDiv.fCreateBasicElement(proj.title + "_ProjRight", j2, "projectRightColmnClass", projContainerIds);
          /**----------===| Right Column: Ids |===----------**/
          let projRightColDivIds = $("#" + proj.title + "_ProjRight" + j2);
          /**----------===| Right Column: Basic CSS |===----------------------------------**/
          fBasicDivStyle(projRightColDivIds, twoColumnsImgProjects.NewHeight + additionalHeight, twoColumnsImgProjects.RightColumn, "relative");
          /**----------===| push ids to array: images display |===----------**/
          aProjRightColDivIds[aProjRightColDivIds.length] = projRightColDivIds;

          /**----------===| PUSH DISPLAY TYPES TO ARRAY  |===----------**/
          aProjectDisplay[aProjectDisplay.length] = proj.displayType;

          aProjImagesLength[aProjImagesLength.length] = proj.images.length + 1;
          //console.log("aProjImagesLength.length: j2 ", aProjImagesLength.length);
          //console.log("proj.images.length + 1: j2 ", proj.images.length + 1);

          /**----------===| CREATE FLUID-CONTAINER INSIDE RIGHT COLUMN |===----------**/
          createDiv.fCreateBasicElement(proj.title + "_FluidContainer_", j2, "fluidContainerClass", projRightColDivIds);
          /**----------===| FLUID-CONTAINER: IDS |===----------**/
          const fluidContainerIds = $("#" + proj.title + "_FluidContainer_" + j2);
          /**----------===| push to array |===----------**/
          aFluidContainerIds[aFluidContainerIds.length] = fluidContainerIds;
          /**----------===| FLUID-CONTAINER WIDTH |===----------**/
          const fluidContainerWidth = twoColumnsImgProjects.RightColumn * (proj.images.length + 1);
          /**----------===| FLUID-CONTAINER HEIGHT |===----------**/
          const fluidContainerHeight = twoColumnsImgProjects.NewHeight + additionalHeight;
          /**----------===| push to array |===----------**/
          aFluidContainerWidth[aFluidContainerWidth.length] = fluidContainerWidth;
          aFluidContainerHeight[aFluidContainerHeight.length] = fluidContainerHeight;
          /**----------===| FLUID-CONTAINER: BASIC CSS |===----------**/
          fBasicDivStyle(fluidContainerIds, fluidContainerHeight, fluidContainerWidth, "relative");

          /**----------===| CAROUSEL CONTROL: LEFT |===----------**/
          tagElement.fCreateTag("a", "carousel-control left", "leftCarousel", j2, projRightColDivIds);
          //   let carouselControl = $(".carousel-control");
          //   carouselControl.css({
          //     "height": imageDivClass.height()
          //   })

          const leftShaderIds = $("#leftCarouselId_" + j2); //get ids

          /**----------===| push to array |===----------**/
          aLeftShaderIds[aLeftShaderIds.length] = leftShaderIds; //push to array
          //   console.log("leftShaderIds: ", leftShaderIds, j2);
          //   console.log("aLeftShaderIds: ", aLeftShaderIds);
          /**----------===| CREATE GLYPHICON LEFT ARROW |===----------**/
          tagElement.fCreateTag("i", "glyphicon glyphicon-menu-left", "leftArrow", j2, leftShaderIds); //glyphicon glyphicon-menu-left glyphicon-chevron-left

          /**----------===| CAROUSEL CONTROL: RIGHT |===----------**/
          tagElement.fCreateTag("a", "carousel-control right", "rightCarousel", j2, projRightColDivIds);
          const rightShaderIds = $("#rightCarouselId_" + j2); //GET IDS
          aRightShaderIds[aRightShaderIds.length] = rightShaderIds; //PUSH

          /**----------===| KEEPING THE CAROUSELCONTROL HEIGHT SAME AS THE IMAGE HEIGHT |===----------**/
          fBasicDivStyle(leftShaderIds, twoColumnsImgProjects.NewHeight, "null", "absolute");
          fBasicDivStyle(rightShaderIds, twoColumnsImgProjects.NewHeight, "null", "absolute");

          /**----------===| CREATE NEW NEXT PREVIOUS CLASS INSTANCES |===----------**/
          const nxtPrv = new nextPreviousNav.NextPrevNavClass();
          /**----------===| push to array |===----------**/
          aNxtPrv[aNxtPrv.length] = nxtPrv;
          /**----------===| INVOKE NEXT PREVIOUS CLASS INSTANCE |===----------**/
          nxtPrv.fNextPrevNavigation(rightShaderIds, leftShaderIds, fluidContainerIds, twoColumnsImgProjects.RightColumn, fluidContainerWidth);

          /**----------===| CREATE GLYPHICON RIGHT ARROW |===----------**/
          tagElement.fCreateTag("i", "glyphicon glyphicon-menu-right", "rightArrow", j2, rightShaderIds); ////glyphicon glyphicon-menu-right  glyphicon-chevron-right

          /**----------===| On first enter the site all left image arrows are hidden |===----------**/
          leftShaderIds.hide();

          glyphicon = $(".glyphicon"); //GET CLASSNAME

          /**----------===| J2: VIDEO ONLY  |===----------**/
          if (proj.displayType === "video") {
            rightShaderIds.hide();
            /**----------===| Right Column: CSS Height & Width |===----------------------------------**/
            fBasicDivStyle(projRightColDivIds, twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn, "relative");
          }

          /**----------==========| PROJECT PARAGRAPHS |==========----------**/
          /**----------===| PARAGRAPH COLUMNS PERCENTAGE |===----------**/
          twoColumnsParagProjects.fTwoColumnsQueries(gdContainerWidth, proj.paragraphRightColumnPercent, 0, 0);
          /**----------===| push to aray |===----------**/
          aParagraphRightColumnPercent[aParagraphRightColumnPercent.length] = proj.paragraphRightColumnPercent;
          aParagraphLeftColumnWidth[aParagraphLeftColumnWidth.length] = twoColumnsParagProjects.LeftColumn;

          /**----------===| CREATE PARAGRAPH CONTAINER |===----------**/
          createDiv.fCreateBasicElement(proj.title + "_Paragraph", j2, "paragraphContainerClass", gdContainer);
          /**----------===| Project Paragraph Container: Ids |===----------**/
          let projParagDivIds = $("#" + proj.title + "_Paragraph" + j2);
          /**----------===| Project Paragraph Container: Basic CSS |===----------**/
          fBasicDivStyle(projParagDivIds, "auto", gdContainerWidth, "relative");
          /**----------===| Push to array |===----------**/
          aParagraphContainer[aParagraphContainer.length] = projParagDivIds;

          /**----------===| CREATE PARAGRAPH LEFT COLUMNS |===----------**/
          createDiv.fCreateBasicElement(proj.title + "_ParagLeftColmn", j2, "paragraphLeftColumnClass", projParagDivIds);
          /**----------===| Project Paragraph Left Column: Ids |===----------**/
          let paragLeftColDivIds = $("#" + proj.title + "_ParagLeftColmn" + j2);

          /**----------===| Project Paragraph Left Column: Basic CSS |===----------**/
          fBasicDivStyle(paragLeftColDivIds, arbitraryNum, twoColumnsParagProjects.LeftColumn, "relative");
          /**----------===| Project Paragraph Left Column:: Push to array |===----------**/
          aProjParagLeftDivIds[aProjParagLeftDivIds.length] = paragLeftColDivIds;

          /**----------===| CREATE PARAGRAPH RIGHT COLUMNS |===----------**/
          createDiv.fCreateBasicElement(proj.title + "_ParagRightColmn", j2, "paragraphRightColumnClass", projParagDivIds);
          /**----------===| Project Paragraph Right Column: Ids |===----------**/
          let paragRightColDivIds = $("#" + proj.title + "_ParagRightColmn" + j2);
          aProjParagRightDivIds[aProjParagRightDivIds.length] = paragRightColDivIds;
          /**----------===| Project Paragraph Right Column: Basic CSS |===----------**/
          fBasicDivStyle(paragRightColDivIds, "auto", twoColumnsParagProjects.RightColumn, "relative");

          /**----------===| Project Paragraph Right Column:: Push to array |===----------**/
          aParagraphRightColumnWidth[aParagraphRightColumnWidth.length] = twoColumnsParagProjects.RightColumn;
          //console.log("aParagraphRightColumnWidth: ", aParagraphRightColumnWidth);

          /**----------===| CREATE PROJECT TITLES |===----------**/
          textDiv.fCreateTextDiv(proj.title + "_ProjTitle", j2, "projTitleClass", paragRightColDivIds, proj.title);
          // Get Id
          let paraghProjTitleIds = $("#" + proj.title + "_ProjTitle" + j2);
          // Pust to array
          aParaghProjTitleIds[aParaghProjTitleIds.length] = paraghProjTitleIds;
          // Apply text screen queries
          headerText.fTextQueries(gdContainerWidth, paraghProjTitleIds, projTitleSmlFontSize, projTitleMidFontSize, projTitleLrgFontSize);

          /**----------===| CREATE PROJECT SUB-TITLES |===----------**/
          textDiv.fCreateTextDiv(proj.title + "_ProjSubTitle", j2, "projSubTitleClass", paragRightColDivIds, proj.subTitle);
          // Get Id
          let paraghProjSubTitleIds = $("#" + proj.title + "_ProjSubTitle" + j2);
          // Pust to array
          aParaghProjSubTitleIds[aParaghProjSubTitleIds.length] = paraghProjSubTitleIds;
          // Apply text screen queries
          headerText.fTextQueries(gdContainerWidth, paraghProjSubTitleIds, projSubTitleSmlFontSize, projSubTitleMidFontSize, projSubTitleLrgFontSize);


          /**----------===| CREATE PROJECT DESCRIPTIONS |===----------**/
          textDiv.fCreateTextDiv(proj.title + "_ProjDescription", j2, "projDescriptionClass", paragRightColDivIds, proj.projDescription);
          // Get Id
          let paraghProjDescriptionIds = $("#" + proj.title + "_ProjDescription" + j2);
          // Pust to array
          aParagraphProjDescription[aParagraphProjDescription.length] = paraghProjDescriptionIds;
          // Apply text screen queries
          headerText.fTextQueries(gdContainerWidth, paraghProjDescriptionIds, projDescSmlFontSize, projDescMidFontSize, projDescLrgFontSize);


          //console.log("gdContainerWidth:3 ", gdContainerWidth);
          let projTitleClass = $(".projTitleClass");
          //console.log("projTitleClass: ", projTitleClass);
          //fScreenQueries();

          // console.log(`
          // /**|===============================|**/
          // /**|       IMAGES JSON LOOP        |**/
          // /**|===============================|**/
          // `);

          for (let imgs of proj.images) {
            j3++;
            // console.log(`
            //   <•----------------------------------•>
            //   aImagesCount.length:j3 :  ${aImagesCount.length}
            //   ${imgs.imgTitle}
            //   <•----------------------------------•>
            //   `);
            if (proj.displayType === "image") {
              /**----------===| push to array use for animation |===----------**/
              aImagesCount[aImagesCount.length] = imgs;
              /**----------===| RIGHT COLUMN PERCENTAGE |===----------**/
              twoColumnsImages.fTwoColumnsQueries(gdContainerWidth, proj.imgRightColumnPercent, proj.imagesWidth, proj.imagesHeight);
              /**----------===| push to array |===----------**/
              aImagesRightColumnPercent[aImagesRightColumnPercent.length] = proj.imgRightColumnPercent;
              aImagesWidth[aImagesWidth.length] = twoColumnsImages.RightColumn;
              aImagesHeight[aImagesHeight.length] = twoColumnsImages.NewHeight;

              /**----------===| CREATE IMAGE DIV INSIDE FLUID-CONTAINER |===----------**/
              imageBasicDiv.fCreateBasicElement(proj.title + "_Image", j3, "imageDivClass", fluidContainerIds);
              let imageIds = $("#" + proj.title + "_Image" + j3); //GET IDS
              aImageIds[aImageIds.length] = imageIds; //PUSH

              /**----------===| IMAGE CREATION |===----------**/
              let myImage = new Image();
              let imagesPath = "./images/" + proj.title + "/"; //FILEPATH
              myImage.src = imagesPath + imgs.imgName; //CONCAT
              aImages[aImages.length] = myImage.src; //PUSH
              /**----------===| IMAGE DIV: CSS |===----------**/
              /*        Populating the div with image        *
              **--------------------------------------------**/
              let columnHeight = twoColumnsImages.NewHeight;
              let columnWidth = twoColumnsImages.RightColumn;
              fBasicImageStyle(imageIds, columnHeight, columnWidth, myImage.src); //

              /**----------===| IMAGE DESCRIPTIONS |===----------**/
              textDiv.fCreateTextDiv("imgDescription_", j3, "imgDescription_Class", imageIds, imgs.imgDescription);

              /*** TEST: Put this outside ajax and into a class **/
              let imageDescriptIds = $("#imgDescription_" + j3); //id = imgDescription_j3
              aImageDescriptIds[aImageDescriptIds.length] = imageDescriptIds;
              let imageDescriptClass = $(".imgDescription_Class"); // + proj.title + "_Class");
              //fImgDescriptIdStyle(imageDescriptIds, twoColumnsImgProjects.NewHeight);
              //.imgDescription_Class
              imageDescriptIds.css({
                "margin-top": twoColumnsImgProjects.NewHeight + "px"
              });
              headerText.fTextQueries(gdContainerWidth, imageDescriptIds, imgDescSmlFontSize, imgDescMidFontSize, imgDescLrgFontSize);

            } else {
              /**----------===| J3: VIDEO ONLY  |===----------**/
              /**----------===| push to array |===----------**/
              aVideoColumnPercent[aVideoColumnPercent.length] = proj.imgRightColumnPercent;
              /**----------===| FLUID-CONTAINER: CSS: VIDEO |===----------**/
              fBasicDivStyle(fluidContainerIds, twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn, "relative");
              /**----------===| CREATE YOUTUBE VIDEO PLACEHOLDER  |===----------**/
              //instanceName.fCreateVideoDiv(videoId, appendedTo, divHeight, divWidth)
              youTubeVideo.fCreateVideoDiv("video-placeholder", fluidContainerIds, twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn);
              let videoPlaceholder = $("#video-placeholder");
              /**----------===| videoPlaceholder: Height & Width CSS |===----------**/
              fBasicDivStyle(videoPlaceholder, twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn, "relative");
            } //END VIDEO
          }
        }
      }

      console.log("--------------------| AJAX • END •  JSON |--------------------");

    }) // End Promise

    /** promise failure **/
    // function(data) {
    //   console.log("Request Failed!")
    // }

  }

  /**----------===| INVOKE fRunAjax  |===----------**/
  fRunAjax();

  // console.log(`
  // /**|======================================================|**/
  // /**|                      ANIMATION:                      |**/
  // /**|                 ARRAY STATIC EVENTS                  |**/
  // /**|======================================================|**/
  // `);

  /***----------=====| INTRO ANIMATION |=====----------***/
  let fEventIntro = () => {
    /**----------===| FULL LANDING PAGE IMAGE DIV |===----------**/
    let inWindowHeight = window.innerHeight; // / 2;
    let inWindowWidth = window.innerWidth;
    fIntroImageStyle(introImageIds, inWindowHeight, inWindowWidth, myIntroImage.src);

    /**----------===| CALCULATE LEFT & RIGHT COLUMN WIDTHS |===----------**/
    /** Description:
        Invoke fTwoColumnsQueries to  calculates Left and Right columns widths based on the percentage passed to the class
        Usage: twoColumnsIntroSection.LeftColumn, twoColumnsIntroSection.RightColumn... **/
    twoColumnsIntroSection.fTwoColumnsQueries(gdContainerWidth, logoTitleColumnPercent, arbitraryNum, arbitraryNum);

    /**----------===| LOGO CONTAINER |===----------**/
    //fBasicDivStyle(logoLeftColDivId, arbitraryNum, twoColumnsIntroSection.LeftColumn, "relative");
    anim.fAnimateHeightWidth(logoLeftColDivId, arbitraryNum, twoColumnsIntroSection.LeftColumn, animTymSlow);
    //fBasicDivStyle(logoRightColDivId, "auto", twoColumnsIntroSection.RightColumn - 20, "relative");
    fBasicDivStyle(logoRightColDivId, "auto", "auto", "relative");
    //anim.fAnimateHeightWidth(logoRightColDivId, "auto", "auto", animTymSlow);

    // rightColumnHeight = logoRightColDivId.height() + 30;
    // let rightColumnWidth = logoRightColDivId.width();

    //introRightColumnClass
    //let rightColumnHeightFrTwoColumns = twoColumnsIntroSection.NewHeight;
    // console.log("rightColumnHeight: ", rightColumnHeight);
    // console.log("rightColumnWidth: ", rightColumnWidth);
    //console.log("rightColumnHeightFrTwoColumns: ", rightColumnHeightFrTwoColumns);


    //fBasicIntroStyle(logoContainerDivId, 400, gdContainerWidth);
    //let marginTop = inWindowHeight - rightColumnHeight
    //anim.fAnimateHeightWidth(logoContainerDivId, rightColumnHeight, gdContainerWidth, animTymSlow);
    anim.fAnimateHeightWidth(logoContainerDivId, "auto", gdContainerWidth, animTymSlow);
    //fBasicIntroStyle(logoContainerDivId, rightColumnHeight + 20, gdContainerWidth);
    logoContainerDivId.css({
      "margin-top": inWindowHeight - (rightColumnHeight + 40) // - 800 //(400 + (inWindowHeight / 5)) //"100px" //-(inWindowHeight / 4)
    })
    //anim.fAnimateHeightWidth(logoContainerDivId, rightColumnHeightFrTwoColumns, gdContainerWidth, animTymSlow);

    console.log("logoTitleId.height(): ", logoTitleId.height());
    console.log("logoSubTitleId.height(): ", logoSubTitleId.height());
    console.log("introCalloutId.height(): ", introCalloutId.height());
    console.log("toggleBtn.height(): ", toggleBtn.height());

    /**----------===| SCREEN QUERIES |===----------**/
    /** logoTitleColumnPercent = introData.logoTitleColumnPercent;
     *  Calculates the percentage width for the Left & Right Columns based on gdContainerWidth
        If gdContainerWidth is < 600 the Right Column should be 95% wide and 80% wide if >. **/
    //logoColumn.fScreenQueries(gdContainerWidth);
    //console.log("logoColumn.ColumnPercentage: ", logoColumn.ColumnPercentage);
    //console.log("twoColumnsIntroSection.LeftColumn: ", twoColumnsIntroSection.LeftColumn);
    //console.log("twoColumnsIntroSection.RightColumn: ", twoColumnsIntroSection.RightColumn);
    //console.log("logoTitleColumnPercent: ", logoTitleColumnPercent);
    //logoText.fTextQueries(gdContainerWidth, logoTitleClass, logoSubTitleClass);
    logoText.fTextQueries(gdContainerWidth, logoTitleId, logoTitleSmlFontSize, logoTitleMidFontSize, logoTitleLrgFontSize);
    logoText.fTextQueries(gdContainerWidth, logoSubTitleId, logoSubTitleSmlFontSize, logoSubTitleMidFontSize, logoSubTitleLrgFontSize);
    logoText.fTextQueries(gdContainerWidth, introCalloutId, introCalloutFontSize, introCalloutFontSize, introCalloutFontSize);
    logoText.fTextQueries(gdContainerWidth, toggleBtn, codingBtnFontSize, codingBtnFontSize, codingBtnFontSize);

    //logoColumn.fScreenQueries(gdContainerWidth, logoColumn.ColumnPercentage, logoTitleClass, logoSubTitleClass)

    // // anim.fAnimateHeightWidth(logoContainerDivId, 400, gdContainerWidth, animTymSlow);

    //anim.fAnimateHeightWidth(logoRightColDivId, "auto", twoColumnsIntroSection.RightColumn - 50, animTymSlow);
    //anim.fAnimateHeightWidth(logoRightColDivId, "auto", "auto", animTymSlow);

    // // console.log("logoRightColDivId.height(): ", logoRightColDivId.height());
    // // let rightColumnHeight = logoRightColDivId.height();
    // anim.fAnimateHeightWidth(logoLeftColDivId, arbitraryNum, twoColumnsIntroSection.LeftColumn, animTymSlow);

    // //TEMP
    // logoLeftColDivId.css({
    //   "border-top": "2px solid red"
    // })
    // logoRightColDivId.css({
    //   "border-top": "2px solid yellowGreen"
    // })
    /**----------===| CODING CONTAINER |===----------**/
    fBasicDivStyle(codingThisSiteId, "auto", gdContainerWidth, "relative");
  }

  /***----------=====| SECTION HEADER ANIMATION |=====----------***/
  let fEventHeaders = () => {
    /**----------===| IMAGE DIV: IDS |===----------**/
    //introImageIds = $("#" + introData.title + "_IntroImg" + 1);
    /**----------===| IMAGE DIV: CSS |===----------**/
    /*        Populating the div with image        *
    **--------------------------------------------**/
    // let inWindowHeight = window.innerHeight / 2;
    // let inWindowWidth = window.innerWidth;
    // fBasicImageStyle(introImageIds, inWindowHeight, inWindowWidth, myIntroImage.src);

    // let projTitleClass = $(".projTitleClass");
    // console.log("projTitleClass: ", projTitleClass);

    for (let e1 = 0; e1 < aSectionsCount.length; e1++) {
      /**----------===| INVOKE SECTION COLUMNS |===----------**/
      twoColumnsHeaderSection.fTwoColumnsQueries(gdContainerWidth, aSectionsRightColumnPercent[e1], arbitraryNum, arbitraryNum);
      /**----------===| Basic CSS: (id, height, width) |===----------**/
      //fBasicDivStyle(aSectionHeaders[e1], "auto", gdContainerWidth, "relative");

      //logoColumn.fScreenQueries(gdContainerWidth);

      /**----------===| Left Column: Basic CSS |===----------**/
      //fBasicDivStyle(aSectionHeadrLeftColmn[e1], arbitraryNum, twoColumnsHeaderSection.LeftColumn, "relative");
      anim.fAnimateHeightWidth(aSectionHeadrLeftColmn[e1], arbitraryNum, twoColumnsHeaderSection.LeftColumn, animTymSlow);
      /**----------===| Sections Header Right Column: Basic Style |===----------**/
      //fBasicDivStyle(aSectionHeadrRightColmn[e1], "auto", twoColumnsHeaderSection.RightColumn, "relative");
      /**----------===| Sections Header Title Text: Basic Style |===----------**/
      //fBasicDivStyle(aSectionHeadrTitles[e1], "auto", twoColumnsHeaderSection.RightColumn, "relative");
      //gdContainerWidth = (gdContainer.width());
      anim.fAnimateHeightWidth(aSectionHeaders[e1], "auto", gdContainerWidth, animTymSlow);

      //anim.fAnimateHeightWidth(aSectionHeadrLeftColmn[e1], arbitraryNum, twoColumnsHeaderSection.LeftColumn, animTymFast);
      anim.fAnimateHeightWidth(aSectionHeadrRightColmn[e1], "auto", "auto", animTymSlow); //twoColumnsHeaderSection.RightColumn
      anim.fAnimateHeightWidth(aSectionHeadrTitles[e1], "auto", "auto", animTymSlow);
      headerText.fTextQueries(gdContainerWidth, aSectionHeadrTitles[e1], headerSmlFontSize, headerMidFontSize, headerLrgFontSize);


      aSectionHeadrLeftColmn[e1].css({
        //"background-color": "cyan",
        "border-top": "4px solid red"
      })
      aSectionHeadrRightColmn[e1].css({
        //"background-color": "cyan",
        "border-top": "4px solid yellowGreen"
      })

      // TEMP
      // aSectionHeadrTitles[e1].css({
      //   "border-bottom": "1px solid white"
      // })

    } // end of aSectionsCount.length
  }

  /***----------=====| PROJECTS ANIMATION |=====----------***/
  let fEventProjects = () => {
    for (let e2 = 0; e2 < aProjectsCount.length; e2++) {
      /**----------===| PROJECT COLUMNS PERCENTAGE |===----------**/
      twoColumnsImgProjects.fTwoColumnsQueries(gdContainerWidth, aProjectRightColumnPercent[e2], aImagesOrigWidth[e2], aImagesOrigHeight[e2]);
      /**----------===| Project Container: Basic Style |===----------**/
      fBasicDivStyle(aProjContainerIds[e2], "auto", gdContainerWidth, "relative");
      //anim.fAnimateHeightWidth(aProjContainerIds[e2], "auto", gdContainerWidth, animTymSlow);
      /**----------===| Left Column: Basic Style |===----------**/
      fBasicDivStyle(aProjLeftColDivIds[e2], arbitraryNum, twoColumnsImgProjects.LeftColumn, "relative");
      //anim.fAnimateHeightWidth(aProjLeftColDivIds[e2], arbitraryNum, twoColumnsImgProjects.LeftColumn, animTymSlow);
      /**----------===| Right Column: Basic CSS |===----------**/
      fBasicDivStyle(aProjRightColDivIds[e2], twoColumnsImgProjects.NewHeight + additionalHeight, twoColumnsImgProjects.RightColumn, "relative");
      //anim.fAnimateHeightWidth(aProjRightColDivIds[e2], twoColumnsImgProjects.NewHeight + additionalHeight, twoColumnsImgProjects.RightColumn, animTymSlow);
      //fBasicDivStyle(aProjRightColDivIds[e2], twoColumnsImgProjects.NewHeight + additionalHeight, "auto", "relative");

      //if (aProjectDisplay[e2] === "image") {
      //additionalHeight = 60;
      /**----------===| Project Container Right Column: Basic CSS |===----------**/
      fBasicDivStyle(aFluidContainerIds[e2], twoColumnsImgProjects.NewHeight + additionalHeight, twoColumnsImgProjects.RightColumn * aProjImagesLength[e2], "relative");
      //anim.fAnimateHeightWidth(aFluidContainerIds[e2], twoColumnsImgProjects.NewHeight + additionalHeight, twoColumnsImgProjects.RightColumn * aProjImagesLength[e2], animTymSlow);
      /**----------===| Keep the fluid container height and width synch |===----------**/

      /**----------===| E2: VIDEO |===----------**/
      if (aProjectDisplay[e2] === "video") {
        //console.log("aProjectDisplay[e2]: ", aProjectDisplay[e2]);
        //console.log("aFluidContainerIds[e2]: ", aFluidContainerIds[e2]);
        /**----------===| Right Column: Basic CSS |===----------**/
        fBasicDivStyle(aProjRightColDivIds[e2], twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn, "relative");
        /**----------===| FLUID-CONTAINER: CSS: VIDEO |===----------**/
        fBasicDivStyle(aFluidContainerIds[e2], twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn, "relative");
        /**----------===| VIDEO ID |===----------**/
        let videoPlaceholder = $("#video-placeholder");
        /**----------===| videoPlaceholder: Height & Width CSS |===----------**/
        fBasicDivStyle(videoPlaceholder, twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn, "relative");
        //anim.fAnimateHeightWidth(videoPlaceholder, twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn, animTymSlow);
        //anim.fXSlider(videoPlaceholder, 0);

        //fBasicDivStyle(aProjRightColDivIds[e2], twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn, "relative");
        //fBasicDivStyle(aFluidContainerIds[e2], twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn * aProjImagesLength[e2], "relative");
        //fluidContainerWidth = twoColumnsImgProjects.RightColumn;
        // let xTestId = $("#OwnPhones_FluidContainer_4");
        // xTestId.css({
        //   //"width": twoColumnsImgProjects.RightColumn
        // });
        //youTubeVideo.fCreateVideoDiv("video-placeholder", OwnPhones_FluidContainer_4, twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn);
        //console.log("twoColumnsImgProjects.NewHeight:video ", twoColumnsImgProjects.NewHeight);
        //console.log("twoColumnsImgProjects.RightColumn:video ", twoColumnsImgProjects.RightColumn);

      }
      //let rightArrow = aRightShaderIds[e2];
      //let leftArrow = aLeftShaderIds[e2];
      aNxtPrv[e2].ImgContainer = aFluidContainerIds[e2];
      aNxtPrv[e2].ImgContainerWidth = twoColumnsImgProjects.RightColumn;
      aNxtPrv[e2].fluidContainerWidth = twoColumnsImgProjects.RightColumn * aProjImagesLength[e2];

      /**----------===| SETTING LEFT & RIGHT NAV HEIGHT |===----------**/
      fBasicDivStyle(aLeftShaderIds[e2], twoColumnsImgProjects.NewHeight, "null", "absolute");
      fBasicDivStyle(aRightShaderIds[e2], twoColumnsImgProjects.NewHeight, "null", "absolute");
      //   glyphicon.css({
      //     "top": "50%"
      //   })

      anim.fXSlider(aFluidContainerIds[e2], -(aNxtPrv[e2].ImgContainerWidth * aNxtPrv[e2].Num));
      // anim.fXSlider(aImageFluidContainerIds[0], -(nxtPrev2Columns.NxtPos));
      //a2ColImgProjRightCol[a2ColImgProjRightCol.length] = twoColumnsImgProjects.RightColumn;

      // TEST e2
      // console.log(e2, "e2:-----------------------------------");
      // //console.log("aNxtPrv[e2]:e2 ", aNxtPrv[e2]);
      // console.log("aFluidContainerIds[e2]:e2 ", aFluidContainerIds[e2]);
      // console.log("aNxtPrv[e2].ImgContainerWidth:e2 ", aNxtPrv[e2].ImgContainerWidth);
      // console.log("aNxtPrv[e2].fluidContainerWidth:e2 ", aNxtPrv[e2].fluidContainerWidth);
      // console.log("aNxtPrv[e2].Num:e2 ", aNxtPrv[e2].Num);
      //console.log("e2:----------------------------------------------------");
      /**----------===| Project Paragraph Columns |===----------**/
      twoColumnsParagProjects.fTwoColumnsQueries(gdContainerWidth, aParagraphRightColumnPercent[e2], 0, 0);
      /**----------===| Project Paragraph Container: Basic CSS |===----------**/
      fBasicDivStyle(aParagraphContainer[e2], "auto", gdContainerWidth, "relative");
      /**----------===| Project Paragraph Left Column: Basic CSS |===----------**/
      fBasicDivStyle(aProjParagLeftDivIds[e2], arbitraryNum, twoColumnsParagProjects.LeftColumn, "relative");
      /**----------===| Project Paragraph Right Column: Basic CSS |===----------**/
      fBasicDivStyle(aProjParagRightDivIds[e2], "auto", twoColumnsParagProjects.RightColumn, "relative");

      headerText.fTextQueries(gdContainerWidth, aParaghProjTitleIds[e2], projTitleSmlFontSize, projTitleMidFontSize, projTitleLrgFontSize);
      headerText.fTextQueries(gdContainerWidth, aParaghProjSubTitleIds[e2], projSubTitleSmlFontSize, projSubTitleMidFontSize, projSubTitleLrgFontSize);
      headerText.fTextQueries(gdContainerWidth, aParagraphProjDescription[e2], projDescSmlFontSize, projDescMidFontSize, projDescLrgFontSize);

    //} else {
    /**----------===| Video Project Container Right Column: Basic CSS |===----------**/
    //fBasicDivStyle(aFluidContainerIds[3], twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn); // * aProjImagesLength[e2], "relative");
    //console.log("aFluidContainerIds[3]: ", aFluidContainerIds[3]);
    //}
    }
  }

  /***----------=====| IMAGES ANIMATION |=====----------***/
  let fEventVisualContent = () => {
    for (let i3 = 0; i3 < aImagesCount.length; i3++) {
      /**----------===| INVOKE PROJECTS IMAGES COLUMNS |===----------**/
      twoColumnsImagesAnim.fTwoColumnsQueries(gdContainerWidth, aImagesRightColumnPercent[i3], aImagesWidth[i3], aImagesHeight[i3]);
      //console.log("aImagesRightColumnPercent[i3]: ", aImagesRightColumnPercent[i3]);
      /***----------=====| Images divs height and width |=====-------------------***/
      anim.fAnimateHeightWidth(aImageIds[i3], twoColumnsImagesAnim.NewHeight, twoColumnsImagesAnim.RightColumn, animTymSlow);
      //console.log("twoColumnsImagesAnim.RightColumn:i3 ", twoColumnsImagesAnim.RightColumn);
      aImageDescriptIds[i3].css({
        "margin-top": twoColumnsImagesAnim.NewHeight + "px"
      });
      headerText.fTextQueries(gdContainerWidth, aImageDescriptIds[i3], imgDescSmlFontSize, imgDescMidFontSize, imgDescLrgFontSize);

      twoColumnsVideo.fTwoColumnsQueries(gdContainerWidth, aVideoColumnPercent[i3], aVideoWidth[i3], aVideoHeight[i3]);
      /**----------===| VIDEO ONLY  |===----------**/
      if (aProjectDisplay[i3] === "video") {
        //rightShaderIds.hide();
        //console.log("video----------------------------------------", i3);
        //console.dir("twoColumnsVideo: ", twoColumnsVideo);
        //twoColumnsVideo.fTwoColumnsQueries(100, 1280, 720); //aImagesWidth[i3], aImagesHeight[i3]);
        //twoColumnsVideo.fTwoColumnsQueries(aVideoColumnPercent[i3], aVideoWidth[i3], aVideoHeight[i3]);
        //let videoPlaceholder = $("#video-placeholder");
        /**----------===| videoPlaceholder: Height & Width CSS |===----------**/
        //fBasicDivStyle(videoPlaceholder, twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn, "relative");
        //fBasicDivStyle(videoPlaceholder, twoColumnsVideo.NewHeight, twoColumnsVideo.RightColumn, "relative");

        // videoPlaceholder.css({
        //   "height": twoColumnsImgProjects.NewHeight + "px",
        //   "width": twoColumnsVideo.RightColumn + "px"
        // });
        // console.log("aVideoColumnPercent[1]: ", aVideoColumnPercent[1]);
        // console.log("aVideoWidth[i3]: ", aVideoWidth[i3]);
        // console.log("twoColumnsVideo: ", twoColumnsVideo);
        // console.log("videoPlaceholder: ", videoPlaceholder);
        //console.log("----------------------------------------video");
      }

    } /**----===| END IMAGES ANIMATION: |-------------------------------•**/
  }
  // console.log(`
  // /**|======================================================|**/
  // /**|                      ANIMATION:                      |**/
  // /**|                WINDOW RESIZE FUNCTION                |**/
  // /**|======================================================|**/
  // `);
  let fOnWindowResize = function() {
    gdContainerWidth = (gdContainer.width());
    //console.log(`gdContainerWidth: ${gdContainerWidth}`);
    //console.log(`window.innerWidth: ${window.innerWidth}`);
    fEventIntro();
    fEventHeaders();
    fEventProjects();
    fEventVisualContent();

  }; // End fOnWindowResize

  /**-----------=====| fInitMediaQueries Function |=====-----------**/
  /** Function to initialize fMediaQueries function on load
   *  TweenMax.ticker is used to add and remove the event listener
   *  ix: counter
   ****************************************************************/
  /************ ANIMATION ENGINE ************/
  //var tMx = TweenMax;
  //  var easeSine = Sine.easeOut;
  //  var easePower = Power3.easeOut;
  //  var animTymSlow = .5;
  //  var zeroTym = 0;
  // var ix = 0;
  // var fInitMediaQueries = function() {
  //   tMx.ticker.addEventListener("tick", fTimer);
  //   function fTimer() {
  //     /**-----===( Load Media Queries )===-----**/
  //     //fOnWindowResize();
  //     $(window).on('resize', fOnWindowResize);
  //     ix++;
  //     console.log("ix: ", ix);
  //     if (ix >= 1) {
  //       fRemoveEvntListnr(fTimer);
  //     }
  //   }
  // };
  // var fRemoveEvntListnr = function(myFunct) {
  //   tMx.ticker.removeEventListener("tick", myFunct);
  // };

  //fInitMediaQueries();
  /**-----------=====| End fInitMediaQueries |=====-----------**/

  $(window).on('resize', fOnWindowResize);
  //$(window).on('resize', fInitMediaQueries);
  /**----------=====| End Window Resize Function |=====----------**/

  /**-----------=====| EXPORTS |=====-----------**/
  /** DESCRIPTIONS:
   ** TWO COLUMN CALCULATION
   ** Webpack: module.exports
   **----------------------------------------------------------------**/
  //module.exports.TwoColumnsQueriesClass = TwoColumnsQueriesClass;
  //module.exports.sampleFunction = sampleFunction;

}());
