const container = document.querySelector('#container');
const grid = document.querySelector('#grid');

container.appendChild(grid);
let gridNum = 16

for(x=0; x< gridNum; x++) {
    const col = document.createElement('div');
    col.classList.add('col');
    col.id='col'
    grid.appendChild(col);
   
    for(n=0; n<gridNum ;n++) {
    const row = document.createElement('div');
    row.classList.add('row');
    col.appendChild(row);
    row.id='row'
    row.addEventListener("mouseenter",blackClick);
    }

}

function add(){
    if (document.getElementById('gridNum').value > 2 && document.getElementById('gridNum').value < 101){
    let grid = document.getElementById('grid');
    grid.innerHTML = '';
for(x=0; x< document.getElementById('gridNum').value; x++) {
    const col = document.createElement('div');
    col.classList.add('col');
    grid.appendChild(col);
   
    for(n=0; n<document.getElementById('gridNum').value ;n++) {
    const row = document.createElement('div');
    row.classList.add('row');
    col.appendChild(row);
    row.addEventListener("mouseenter",blackClick);
    }
}
}
    else {
    alert('Woops! Something went wrong. Make sure you entered a number between 2-100!')
                 

    }
}

function reset() {
    let grid = document.getElementById('grid');
    grid.innerHTML = '';
    for(x=0; x< 16; x++) {
        const col = document.createElement('div');
        col.classList.add('col');
        grid.appendChild(col);
       
        for(n=0; n<16 ;n++) {
        const row = document.createElement('div');
        row.classList.add('row');
        col.appendChild(row);
        row.addEventListener("mouseenter",blackClick);
        }
}
}

function wipe() {
    const wipes = document.querySelectorAll(".black")
    wipes.forEach ((wipes) => {
    wipes.classList.remove('black')
})
}

function blackClick(){
    this.classList.add('black'); 
    this.id = 'black';
}
