Snow = function() {
  // this はインスタンスを表します。
  this.x = Math.floor( Math.random() * window.parent.screen.width);
  // this.y = Math.floor( Math.random() * window.parent.screen.height);
  this.y = Math.floor( Math.random() * window.parent.screen.height);

  var element = document.createElement('div'); 
  element.className = "snow";
  element.style.top = this.y + "px";
  element.style.left = this.x + "px";

  var objBody = document.getElementsByTagName("body").item(0); 
  objBody.appendChild(element); 
};

//Main
$(window).on("load", function() {


  for (var i = 0; i < 10; i++) {
    var snow = Snow();
  }
   
  var fall = function() {
    for (var i = 0; i < 10; i++) {
      var snow = Snow();
    }
  }
  setInterval(fall, 1000);
  
  var move = function(){

    var elements = document.getElementsByClassName("snow");
    for (var i = 0; i < elements.length; i++) {
      var rect = elements[i].getBoundingClientRect() ;
      var positionY = rect.top + window.pageYOffset ;
      var positionX = rect.left + window.pageXOffset ;
      positionY += 3;
      console.log(positionY);

      if (i % 3 == 0) {
          positionX += 1;
      } else {
          positionX -= 1;
      }

   


      elements[i].style.top = positionY + "px";
      elements[i].style.left = positionX + "px";

      if (positionY > window.parent.screen.height * 3) {
        elements[i].style.display = "none";
      }
    }
  } 
  setInterval(move, 100);

});