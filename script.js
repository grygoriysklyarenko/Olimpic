const sports = [
	['1F93A','fencing'],
	['26F8','figure skating'],
	['26F7','skier'],
	['1F3C2','snowboarder'],
	['1F3CC','golfing'],
	['1F6A3','rowing boat'],
	['1F3CA','swimming'],
	['1F938','gymnastics'],
	['1F93E','handball']
];

let newSports = sports.map(function(value){
  value[0] = String.fromCodePoint(parseInt(value[0], 16));
  return value;
})

const winners = [
	['fencing','gold','fr'],
	['fencing','silver','it'],
	['fencing','bronze','us'],


	['figure skating','gold','ca'],
	['figure skating','silver','ru'],
	['figure skating','bronze','us'],


	['skier','gold','no'],
	['skier','silver','ru'],
	['skier','bronze','fr'],


	['snowboarder','gold','us'],
	['snowboarder','silver','jp'],
	['snowboarder','bronze','au'],


	['golfing','gold','gb'],
	['golfing','silver','se'],
	['golfing','bronze','us'],


	['rowing boat','gold','us'],
	['rowing boat','silver','gb'],
	['rowing boat','bronze','ro'],


	['swimming','gold','us'],
	['swimming','silver','gb'],
	['swimming','bronze','au'],


	['gymnastics','gold','ru'],
	['gymnastics','silver','ru'],
	['gymnastics','bronze','ua'],


	['handball','gold','dk'],
	['handball','silver','fr'],
	['handball','bronze','de'],
];

const olympic = ['1F535','26AB','1F534','1F7E1','1F7E2'];

let newOlympic = olympic.map(function(value){
  value = `<td style="background-color: #cae9fe">${String.fromCodePoint(parseInt(value, 16))}</td>`;
  return value;
})

const medals = [
	['1F947','gold'],
	['1F948','silver'],
	['1F949','bronze'],
];

const continents = [
	['fr','Europe'],
	['it','Europe'],
	['us','The Americas'],
	['ca','The Americas'],
	['ru','Europe'],
	['no','Europe'],
	['jp','Asia'],
	['au','Oceania'],
	['gb','Europe'],
	['se','Europe'],
	['ro','Europe'],
	['ua','Europe'],
	['dk','Europe'],
	['de','Europe']
];

let newWinners = winners.map(function(value){
  medals.forEach(function(medal){
    if(value[1]==medal[1]){
      value[3]=medal[0];
    }
  })
  return value;
})
.map(function(country){
  continents.forEach(function(value){
    switch (value[1]) {
      case 'Europe':
        value[2] = olympic[0];
        break;
      case 'The Americas':
        value[2] = olympic[2];
        break;
      case 'Asia':
        value[2] = olympic[3];
        break;
      case 'Oceania':
        value[2] = olympic[4];
    }

    if(country[2] == value[0]){
      country[4] = value[2];
    }
  })
  return country;
})

console.log(newWinners);

let trs = [];

newSports.forEach(function(i){
  let tds = [];

  olympic.forEach(function(j){
    let id = i[1]+j;
    let divs=[];

     newWinners.forEach(function(value){
      if(id == value[0]+value[4]){
        if (value[3] == "1F947"){
          div = `<div style="background-color: #efde59">&#x${value[3]} - ${value[2]}</div>`;
        } else if (value[3] == "1F948"){
          div = `<div style="background-color: #c6c6c6">&#x${value[3]} - ${value[2]}</div>`;
        } else if (value[3] == "1F949"){
          div = `<div style="background-color: #fd9922">&#x${value[3]} - ${value[2]}</div>`;
        }
      } else if (id != value[0]+value[4]){
        div = null;
      }

      divs.push(div);
    });

    td = `<td id="${id}">${divs.join(``)}</td>`;
    tds.push(td);
  });

  tr = `<tr><td style="background-color: #e5fff2">${i[0]}</td>${tds.join(``)}</tr>`;
  trs.push(tr);
});

document.write(`
<table>
  <thead>
    <td style="border:none"></td>
    ${newOlympic.join(``)}
  </thead>
  <tbody>
    ${trs.join(``)}
  </tbody>
</table>`);
