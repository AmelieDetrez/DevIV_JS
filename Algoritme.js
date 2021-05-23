var instrument = [{
    name: "Violin",
    sound: "Acoustic",
    quality: "perfect"
 },{
    name: "Guitar",
    sound: "Acoustic",
    quality: "perfect"
 },{
    name: "Flute",
    sound: "Acoustic",
    quality: "broken"
 },{
    name: "Drum",
    sound: "Electric",
    quality: "bad"
 }];

 instrument.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})
console.log(instrument);




function BubbleSort(instru) {
    const sortedInstru = Array.from(instru);
    let swap;
    do {
      swap = false;
      for (let i = 1; i < sortedInstru.length; ++i) {
        if (sortedInstru[i - 1].price > sortedInstru[i].price) {
          [sortedInstru[i], sortedInstru[i - 1]] = [sortedInstru[i - 1], sortedInstru[i]];
          swap = true;
        }
      }
    } while (swap)
    return sortedInstru;
  }

  console.log(BubbleSort([{
    name: "Violin",
    sound: "Acoustic",
    quality: "perfect",
    price: 890
 },{
    name: "Guitar",
    sound: "Acoustic",
    quality: "perfect",
    price: 350
 },{
    name: "Flute",
    sound: "Acoustic",
    quality: "broken",
    price: 50
 },{
    name: "Drum",
    sound: "Electric",
    quality: "bad",
    price: 420
 }]));