let Type = ["Brass", "String", "Woodwind", "Percussion"];
let Quality = ["Broken", "Bad", "Good", "Perfect"];
let Sounds = ["Electric", "Acoustic"];

gibHtml();

function gibHtml() {

    let name = document.getElementById('Name');
    let cost = document.getElementById('Cost');
    let type = document.getElementById('Type');
    let quality = document.getElementById('Quality');
    let sound = document.getElementById('Sound');
    let submit = document.getElementById('submit');

    let checkStock = false;

    submit.addEventListener('click', () => {
        let myInstrument = new Instrument(name.value, checkStock, cost.value, type.value, quality.value, sound.value);
    })
}

class Instrument {

    constructor(Iname, Iavailable, Icost, Itype, Iquality, Isound) {
        
        this.Iname = Iname;
        this.Iavailable = Iavailable;
        this.Icost = Icost;
        this.Itype = Itype;
        this.Iquality = Iquality;
        this.Isound = Isound;

        this.addHtml();
    }
    addHtml() {

        let available = document.getElementById('Available');
        let checkStock = false;
        let instrument = document.getElementById('Inst');

        if (available.checked == true) {
            this.Iavailable = true;
        } else {
            this.Iavailable = false;
        }

        let htmlString = `<div>
        <h3 id='info${this.Iname}'>name: ${this.Iname}, available:${this.Iavailable}, cost: ${this.Icost}, type: ${this.Itype}, quality: ${this.Iquality}, sound: ${this.Isound}</h3>
        <button id="fix${this.Iname}">Fix</button> <button id="breakIt${this.Iname}">Break</button> <button id="play${this.Iname}">Play</button>
        </div>`

        instrument.innerHTML += htmlString;
        this.addEventListener();
    }
    addEventListener() {

        let fix = document.getElementById(`fix${this.Iname}`);
        fix.addEventListener('click', () => {
            this.fix();
        })
        let breakIt = document.getElementById(`breakIt${this.Iname}`);
        breakIt.addEventListener('click', () => {
            this.breakIt();
        })
        let play = document.getElementById(`play${this.Iname}`);
        play.addEventListener('click', () => {
            this.play();
        });
    }
    fix() {
        let info = document.getElementById(`info${this.Iname}`);
        if (this.Iquality === "perfect") {
            info.innerHTML += "<h4 id='soundeffect'>The instrument is already perfect</h4>";
            return
        } else if (this.Iquality === "broken") {
            this.Iquality = "bad"
            console.log("Instrument restored")


        } else if (this.Iquality === "bad") {
            this.Iquality = "good"
            console.log("Instrument restored")


        } else if (this.Iquality === "good") {
            this.Iquality = "perfect"
            console.log("Instrument restored")

        }
        info.innerHTML = `name: ${this.Iname}, available:${this.Iavailable}, cost: ${this.Icost}, type: ${this.Itype}, quality: ${this.Iquality}, sound: ${this.Isound}`;
    }
    breakIt() {
        let info = document.getElementById(`info${this.Iname}`);
        if (this.Iquality === "broken") {
            info.innerHTML += "<h4 id='soundeffect'>The instrument is already broken</h4>";
            return
        } else if (this.Iquality == "bad") {
            this.Iquality = "broken"
            console.log("Instrument broken")

        } else if (this.Iquality === "good") {
            this.Iquality = "bad"
            console.log("Instrument broken")

        } else if (this.Iquality === "perfect") {
            this.Iquality = "good"
            console.log("Instrument broken")

        }
        info.innerHTML = `name: ${this.Iname}, available:${this.Iavailable}, cost: ${this.Icost}, type: ${this.Itype}, quality: ${this.Iquality}, sound: ${this.Isound}`;
    }
    play() {
        let info = document.getElementById(`info${this.Iname}`);
        info.innerHTML += `<h4 id='soundeffect'>${this.Iname} makes a ${this.Iquality} ${this.Isound} ${this.Itype} sound</h4>`;

    }
}