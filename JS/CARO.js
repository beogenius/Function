
const ROWS=10;
const CELLS=10;
let arr = [];
let PLAYER=1;
function drawGameBoard(){
    let html='';
    for (let i=0; i < ROWS;i++){
        arr[i]=[]
        html += '<tr>';
        for (let j=0; j < CELLS ; j++){
            arr[i][j]="*";
            html+='<td id="cell- ' + i + '-' +j+'" onclick="play('+i+','+j+'">';
            html+='</td>';
        }
        html += '</tr>';
    }
    document.getElementById('content').innerHTML = html;
}

function play(x,y){
    if(PLAYER===1){
        arr[x][y]='X';
        document.getElementById('cell-'+x+'-'+y).innerHTML = html ;
    PLAYER=2;
    }
    else
    {
        document.getElementById('cell-'+x+'-'+y).innerHTML = html ;
    PLAYER=1;
        arr[x][y]='O';
    }
    checkWin(x,y);
}

console.log(arr);
drawGameBoard();

function checkWin(){
    //checkwin Ngang
    let count = 0;

}


function isGameOver(number){
    return number === 5;
}