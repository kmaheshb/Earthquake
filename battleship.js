/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const SHOT = readline();
let matrix = new Array(10);
for (let i=0;i<10;i++)
    matrix[i] = new Array(10);

for (let i = 0; i < 10; i++) {
    const LINE = readline();
    console.error(LINE);
    for (let j =0;j<10;j++) {
        matrix[i][j] = LINE.charAt(j);
    }
}

let sizes = [0,0,0,0,0,0];

for (let i=0;i<10;i++) {
    for (let j=0;j<10;j++) {

        if (matrix[i][j] == '.')
            continue;
        if (i>0 && matrix[i-1][j] != '.')
            continue;
        if (i<9 && matrix[i+1][j] != '.')
            continue;

        let size = 0;
        while (j<10 && matrix[i][j] != '.') {
            size++;
            j++;
        }
        sizes[size] += 1;
    }
}

for (let j=0;j<10;j++) {
    for (let i=0;i<10;i++) {

        if (matrix[i][j] == '.')
            continue;
        if (j>0 && matrix[i][j-1] != '.')
            continue;
        if (j<9 && matrix[i][j+1] != '.')
            continue;
        
        let size = 0;
        while (i< 10 && matrix[i][j] != '.') {
            size++;
            i++;
        }
        sizes[size] += 1;
        
    }
}

for (let i=0;i<sizes.length;i++)
    console.error(sizes[i]);

let isClose = false;

if (sizes[0] != 0 || sizes[1] != 0 || sizes[2] != 1 || sizes[3] != 2 || sizes[4] != 1 || sizes[5] != 1)
    isClose = true;

console.error(isClose);

for (let i=0;i<9;i++) {
    for (let j=0;j<9;j++) {
        if (matrix[i][j] != '.') {
            if (matrix[i][j-1] != '.' && matrix[i+1][j] != '.')
                isClose = true;
            if (j< 9 && matrix[i][j+1] != '.' && matrix[i+1][j] != '.')
                isClose = true;
        }
        if (j > 0 && matrix[i][j] != '.' && matrix[i+1][j-1] != '.')
            isClose = true;
        if (j<9 && matrix[i][j] != '.' && matrix[i+1][j+1] != '.')
            isClose = true;
    }
}
console.error(isClose);
if (isClose) {
    console.log("INVALID");
    return;
}

console.error(SHOT);
let b = SHOT.charCodeAt(0) - 65;
let a = SHOT.charAt(1);
console.error(a);
if (SHOT.length == 3)
    a = a*10 + +(SHOT.charAt(2));
a -= 1;
console.error(a + " " + b);
if (matrix[a][b] == '.') {
    console.log("MISSED");
    return;
}

let result = "";

if (matrix[a][b] == '+') {
    result += "TOUCHE";
}

let isShip = false;
let i=b;
let j=b;
matrix[a][b] = '_';

while (i>=0 && matrix[a][i] != '.') {
    if (matrix[a][i] == '+')
        isShip = true;
    i--;
}
while (j<10 && matrix[a][j] != '.') {
    if (matrix[a][j] == '+')
        isShip = true;
    j++;
}

if (!isShip && j-i > 2) {
    result += " COULE " + (j-i-1);
}

i = a;
j = a;

while (i >= 0 && matrix[i][b] != '.') {
    if (matrix[i][b] == '+')
        isShip = true;
    i--;
}

while (j < 10 && matrix[j][b] != '.') {
    if (matrix[j][b] == '+')
        isShip = true;
    j++;
}

if (!isShip && j-i > 2) {
    result += " COULE " + (j-i-1);
}

isShip = false;
for (let i=0;i<10;i++) {
    for (let j=0;j<10;j++) {
        if (matrix[i][j] == '+')
            isShip = true;
    }
}

if (!isShip) {
    result += " THEN LOSE";
}

console.log(result);
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

//console.log('answer');
