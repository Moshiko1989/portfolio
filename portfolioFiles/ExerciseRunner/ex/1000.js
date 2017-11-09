console.log('Metushelah');
var gNextId         = 1001;
var gPersons = [];
var gIdOfPersonsMap = {};


function createPerson(name, papaId, mamaId) {
    
    var newPerson = {
    id: gNextId++,
    name: name,
    birthDate: new Date(1978, 10, 2), 
    childs: [],
    parrants: []
    };
    
    gIdOfPersonsMap[newPerson.id] = newPerson;
    console.log('Map: ', gIdOfPersonsMap);
    // console.log('papa', papa, mama)    
    
    gPersons.push(newPerson);
    
    if (papaId !== (null || undefined)) {
        var papa = gIdOfPersonsMap[papaId];
        newPerson.parrants.push(papa);
        papa.childs.push(newPerson);
    } 
    if (mamaId !== (null || undefined)) {
        var mama = gIdOfPersonsMap[mamaId];
        newPerson.parrants.push(mama);
        mama.childs.push(newPerson);
    }
    
    
    return newPerson;
}
function initPerson() {
    var papa = createPerson('david');
    var mama = createPerson('hana');
    createPerson('tal');
    var name = prompt('Please enter a name (quit to stop): ');
    while (name !== 'quit') {
        var idPap = +prompt('Please enter parrent id: ');
        var idMam = +prompt('Please enter parrent id: ');
        createPerson(name, idPap, idMam);
        name = prompt('Please enter a name (quit to stop): ');
    }
} 
initPerson();
console.log('DONE!');





// var person1 = createPerson('Mike');
// console.log('Expected person', person1);
// console.log('Expected prsns arr of idx0: ', gPersons);
// // console.log('Expected prsnMap', gIdOfPersonsMap);

// var person2 = createPerson('Hana');
// console.log('Expected person', person2);
// console.log('Expected prsns arr of idx01: ', gPersons);



// console.log('Expected prsnMap', gIdOfPersonsMap);


// var person3 = createPerson('Haim', 1001, 1002);
// console.log('Person 2: ', person3);



