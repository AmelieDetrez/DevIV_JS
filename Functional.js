let Instrument = [{
    name: "Violin",
    strategy: "Electric",
    quality: "good"
},{
    name: "Guitar",
    strategy: "Acoustic",
    quality: "perfect"
},
];

function electric(name){
    return function makeSound(quality){
            console.log(name + ' makes a '+ quality + " " + "electric sound");
    }
}

function acoustic(name){
    return function makeSound(quality){
            console.log(name + ' makes a '+ quality + " " + "acoustic sound");
    }
}

function changeBehaviour(index){
    return function changeBehaviour(strategy){
        let instru = Instrument;
        instru[index].strategy = strategy;
        return instru;
    }
}


function soundBehaviour(name){
return function soundBehaviour(quality){
    return function soundBehaviour(strategy){
        if( strategy == "Acoustic") acoustic(name)(quality);    
        if( strategy == "Electric") electric(name)(quality); 
    
    }
}
}

function logInstruments(array){
    array.map((a) =>{
        soundBehaviour(a.name)(a.quality)(a.strategy);
       
    })
}

const testing = logInstruments(Instrument);
const changeStrategy = changeBehaviour(1)("Electric");
const logchange = logInstruments(changeStrategy);

//alle functies behalve changeBehaviour(lijn 26) zijn puur: Er wordt telkens maar 1 variabele meegegeven en binnenin de functie wordt de meegegeven variabel bewerkt maar geen andere side effects.
//changebehaviour is inpuur aangezien deze een lokale variabele bevat.
