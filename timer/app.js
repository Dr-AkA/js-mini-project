let currentOfsset=0;
let duration;
const circle=document.querySelector('circle');
const perimeter=circle.getAttribute('r')*2*Math.PI;
circle.setAttribute('stroke-dasharray',perimeter);


const durationInput=document.querySelector('#duration');
const startButton=document.querySelector('#start');
const pauseButton=document.querySelector('#pause');
const timer=new Timer(durationInput,startButton,pauseButton,{
   onStart(totalDuration)
   {
  duration=totalDuration;
    
   },
   onTick(timeRemaining)
   {
      circle.setAttribute('stroke-dashoffset',perimeter * timeRemaining/ duration-perimeter);
      

      
   },
   onComplete(){
      sound("complete.mp3");
      durationInput.value=60;
   }
});

function sound(url)
{
   var audio=new Audio(url);
   audio.play();
}
