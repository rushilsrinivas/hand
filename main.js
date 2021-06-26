prediction_1="";
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image'src='"+data_uri+"'>";

    });
}
console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5nPfRYJnb/model.json",modelloded);
function modelloded(){
    console.log("modelloded");
}function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="the first prediction is "+prediction_1;
     var utterthis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterthis); 
}
function check(){
    img=document.getElementById("capture_image");
    classifier.classify(img,gotresult);
}
function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
   console.log(results);
   document.getElementById("result_emotion_name").innerHTML=results[0].label;   
   
   prediction_1=results[0].label;
   speak();
   if(results[0].label=="Best"){
       document.getElementById("update_emoji").innerHTML="&#128512;";
   }
   if(results[0].label=="Victory"){
    document.getElementById("update_emoji").innerHTML="&#128532;";
}
if(results[0].label=="Amazing"){
    document.getElementById("update_emoji").innerHTML="&#128545;";
}
    }
}