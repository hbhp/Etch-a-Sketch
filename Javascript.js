const container = document.querySelector('#container');
const grid = document.querySelector('#grid');

container.appendChild(grid);

for(x=0; x<16 ;x++) {
    const col = document.createElement('div');
    col.classList.add('col');
    grid.appendChild(col);
    
    for(n=0; n<16 ;n++) {
    const row = document.createElement('div');
    row.classList.add('row');
    col.appendChild(row);
    }

}