img="";
s="";
object=[];
function setup()
{
  canvas = createCanvas(650,500);
  canvas.center();
  obdec=ml5.objectDetector("cocossd",ml);
  document.getElementById("s").innerHTML="status: Detecting Objects";
}
function preload(){
    
}
function draw(){
    image(img,0,0,650,500);
    if(s!=""){
      for ( i = 0; i < object.length; i++) {
        document.getElementById("s").innerHTML="status: Detected Object";  
      
    fill("#0000FF");
    pst=floor(object[i].confidence*100);
    text(object[i].label+pst+"%",object[i].x,object[i].y);

    noFill();


    rect(object[i].x,object[i].y,object[i].width,object[i].height);

      }
    }
}

function ml()
{
console.log("moadelloaded");
status=true;
obdec.detect(img,gotResult);
}
function gotResult(error,results)
{
if(error){
  console.error(error);
}
else{console.log(results);
  object=results;
}
}