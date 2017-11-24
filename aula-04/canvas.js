

function Draw(){
    var canvas = document.getElementById("clock");
    console.log(canvas);
    
    if (typeof canvas.getContext != "undefined") {
      var ctx = canvas.getContext("2d");
      console.log(ctx);
        
      var imgA = document.createElement("img");
      imgA.src = "images/clock.png";
      imgA.width = "150";
      imgA.height = "150";
    //   var img = ctx.canvas.childNodes[1];
      ctx.drawImage(imgA,0,0);
      
      ctx.beginPath();

      ctx.moveTo(75, 75);
      ctx.lineWidth = 2;

      ctx.lineTo(75, 20);
      ctx.stroke();

    //   ctx.lineStyle = "rgb(200,0,0)";
    //   ctx.lineWidth = 15;
    //   ctx.lineTo(74, 10);
    //   ctx.fillRect(74, 10, 2, 65);
      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    }
}