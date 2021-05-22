let Type = ["Brass", "String", "Woodwind", "Percussion"];
let Quality = ["Broken", "Bad", "Good", "Perfect"];
let Sounds = ["Electric", "Acoustic"];

gibHtml();

function gibHtml() {
    let name = document.getElementById('Name');
    let cost = document.getElementById('Cost');
    let type = document.getElementById('Type');
    let quality = document.getElementById('Quality');
    let available = document.getElementById('Available');
    let checkStock = false;
    let sound = document.getElementById('Sound');
    let submit = document.getElementById('submit');
    let instrument = document.getElementById('Inst');

    submit.addEventListener('click', () => {
        if (available.checked == true) {
            checkStock = true;
        } else {
            checkStock = false;
        }
        
        let htmlString = `<div>
        <h3 id='info'>name: ${name.value}, available:${checkStock}, cost: ${cost.value}, type: ${type.value}, quality: ${quality.value}, sound: ${sound.value}</h3>
        <button id="fix">Fix</button> <button id="breakIt">Break</button> <button id="play">Play</button>
        </div>`
        
        
        instrument.innerHTML += htmlString;
        let fix = document.getElementById('fix');
        let breakIt = document.getElementById('breakIt');

        fix.addEventListener('click',()=>{
            let info  = document.getElementById('info');
            if(quality.value === "perfect"){
                info.innerHTML += "<h4 id='soundeffect'>The instrument is already broken</h4>";
                return
            }
           else  if(quality.value ==="broken"){
                quality.value = "bad"
                console.log("Instrument restored")
               
                
            }
            else if(quality.value === "bad"){
                quality.value = "good"
                console.log("Instrument restored")
               
              
            }
           else if(quality.value === "good"){
                quality.value = "perfect"
                console.log("Instrument restored")
               
            }
            info.innerHTML = `name: ${name.value}, available:${checkStock}, cost: ${cost.value}, type: ${type.value}, quality: ${quality.value}, sound: ${sound.value}`;
        })

        breakIt.addEventListener('click',()=>{
            if(quality.value === "broken"){
                info.innerHTML += "<h4 id='soundeffect'>The instrument is already broken</h4>";
                return
            }
            else if(quality.value == "bad"){
                quality.value = "broken"
                console.log("Instrument broken")
                
            }
           else if(quality.value === "good"){
                quality.value = "bad"
                console.log("Instrument broken")
                
            }
            else if(quality.value === "perfect"){
                quality.value = "good"
                console.log("Instrument broken")
                
            }
            info.innerHTML = `name: ${name.value}, available:${checkStock}, cost: ${cost.value}, type: ${type.value}, quality: ${quality.value}, sound: ${sound.value}`;
        })
        let play = document.getElementById('play');

        play.addEventListener('click',()=>{
            info.innerHTML += `<h4 id='soundeffect'>${name.value} plays a ${quality.value} ${sound.value} sound</h4>`
        })
      
    })
}