const pipes=[
    {
        question:"Two pipes A and B can fill a cistern in 20 and 30 minutes respectively, and a third pipe C can empty it in 40 minutes. How long will it take to fill the cistern if all the 3 pipes are opened at the same time?",
        option:["7 1/7 mins.","15 1/7 mins.","17 1/7 mins.","19 1/7 mins."],
        answer:2
    },
    {
        question:"Two taps can separately fill a cistern 10 minutes and 15 minutes respectively and when the waste pipe is open, they can together fill it in 18 minutes. The waste pipe can empty the full cistern in?",
        option:["7 mins.","9 mins.","13 mins.","23 mins."],
        answer:1
    },
    {
        question:"A cistern is normally filled in 8 hours but takes two hours longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in?",
        option:["16 hrs","20 hrs","25 hrs","40 hrs"],
        answer:3
    },
    {
        question:"Two pipes can fill a tank in 18 minutes and 15 minutes. An outlet pipe can empty the tank in 45 minutes. If all the pipes are opened when the tank is empty, then how many minutes will it take to fill the tank?",
        option:["9 mins.","10 mins."," 11 mins.","12 mins."],
        answer:1
    },
    {
        question:"Pipe A can fill a tank in 16 minutes and pipe B cam empty it in 24 minutes. If both the pipes are opened together after how many minutes should pipe B be closed, so that the tank is filled in 30 minutes?",
        option:["19 mins.","20 mins.","21 mins.","22 mins."],
        answer:2
    },
    {
        question:"Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes and 10 minutes respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P, Q and R respectively. What is the proportion of solution R in the liquid in the tank after 3 minutes?",
        option:["5/11","6/11","7/11","8/11"],
        answer:1
    },
    {
        question:"A pump can fill a tank with water in 2 hours. Because of a leak, it took 2 1/3 hours to fill the tank. The leak can drain all the water of the tank in:",
        option:["10 hrs","12 hrs","14 hrs","16 hrs"],
        answer:2
    },
    {
        question:"A tap can fill a tank in 6 hours. After half the tank is filled, three more similar taps are opened. What is the total time taken to fill the tank completely?",
        option:["3 hrs 15 min","3 hrs 45 min","4 hrs","4 hrs 15 min"],
        answer:1
    },
    {
        question:"A large tanker can be filled by two pipes A and B in 60 minutes and 40 minutes respectively. How many minutes will it take to fill the tanker from empty state if B is used for half the time and A and B fill it together for the other half?",
        option:["15 min","20 min","27.5 min","30 min"],
        answer:3
    },
    {
        question:"One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, then the slower pipe alone will be able to fill the tank in:",
        option:["81 min.","108 min.","144 min.","192 min."],
        answer:2
    }
]
/*const array=[{
    question:"",
    option:["","","",""],
    answer:
}]*/
let index=0;
const container=document.getElementById("container");
const container2=document.getElementById("container2");
const first=document.getElementById("first");
const image=document.getElementById("image");
const text=document.getElementById("text");
let x=document.getElementById("name");
const input=document.getElementById("input");
const below=document.getElementById("below-text");
const category=document.getElementById("select-category");
const btn=document.getElementById("buttons");
const line=document.getElementById("line");
const enter=document.getElementById("Enter");
let effect=document.getElementById("effect");
let showTimer=document.getElementById("showTimer");
enter.addEventListener("click",enterclick);

function enterclick(){
    let d=document.getElementById("effect").value;//reading input value given by the user
    text.innerHTML="<strong>Hello</strong>"+" "+d.bold()+"<strong>!</strong>";//print or insert value to the text div.+ d.bold() method is use for taking input values to make bold in js.
}
first.addEventListener("click",fbutton);
function fbutton(){
    image.style.visibility="hidden";
    text.style.visibility="hidden";
    x.style.visibility="hidden";
    input.style.visibility="hidden";
    below.style.visibility="hidden";
    category.style.visibility="hidden";
    btn.style.visibility="hidden";
    line.style.visibility="hidden";
    container.innerHTML=`<div style="margin:1rem">Pipes and Cisterns</div>`;
    container.innerHTML+=`<div style="text-align:center; font-size:2rem;border:2px solid rgb(31, 168, 231); 
    border-radius:10rem;width:3rem; height:3rem;position:stick" id="newTimer">0</div>`
    let refreshIntervalId=setInterval(()=>{
        if(timer>=10)
         {
             clearInterval(refreshIntervalId);
         }
        console.log("hello");
        const newTimer=document.getElementById("newTimer");
        newTimer.innerHTML=timer;
        timer++;
    },1000)
    
        
    container.innerHTML+=`<div style="text-align:right;margin:1rem">SCORE:${index}</div>`;
    //here....
    ready();
    }
function ready(){
    let style=document.createElement("div");
    style.width="200px"
    style.height="50px";
    style.borderradius="2";
    let currentquestion=pipes[index];
    container.innerHTML+=`<div style="margin:1rem">${currentquestion.question}</div>`;
    for(let i=0;i<currentquestion.option.length;i++){
        let y=currentquestion.option[i];
        container.innerHTML+=`<button style="margin:1rem;text-align:left">${y}</button>`;
    }
    
     
}

function timerstart(){
        // var d=new Date();
        // console.log(d);
        // var s=d.getSeconds();
        
}








































