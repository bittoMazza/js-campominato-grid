/* La creazione della griglia avviene nell eventListener di "Generate-grid"
Facciamo un ciclo for in cui creiamo dinamicamente i singoli quadrati;
Il contenuto di questi quadrati sarà l'indice del for;
Iniziamo mettendo condizione indice < 100;
Creiamo una Funzione in cui viene creato un div e il suo eventListener,
qui dentro aggiungiamo il toggle('active') e stampiamo il log passando l'indice 
come argomento della funzione;
*/

const generateButton = document.getElementById('generate-grid-btn');
const gridWrapper = document.getElementById('grid-wrapper')

generateButton.addEventListener('click',function(){
    for(let i = 0 ; i < 100 ; i++){
       const newBox = createBox(i); 
       newBox.innerHTML = i;
       gridWrapper.append(newBox);
    }
})


function createBox(index){
    let newSquare = document.createElement('div');
    newSquare.classList.add('square')
    newSquare.addEventListener('click',function(){
        newSquare.classList.toggle('active')
        console.log('Hai cliccato la casella numero : ' + index);
    })
    return newSquare
}