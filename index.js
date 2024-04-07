
//ajouter les Event listener sur mes cases 
const cases = document.querySelectorAll(".col");
const playerOne = ("red");
const playerTwo = ("blue");
const resultat = document.querySelector(".resultat");
let gagnant = false;
let gagnantblue = false;
let solution = [// Tableau dans le tableau pour pouvoir séparer les lignes
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"]
];
let solutionsgrid = []
let playerTurn = 1;
let indexnbr = [];
let grid = [];
let gridblue = [];
const elementh3 = document.getElementById('h3');




for ( i = 0, l = cases.length; i < l; i++) {
    cases[i].addEventListener ("click", (e) => {
        elementh3.innerHTML = "Que le meilleur Gagne !";
        if (grid.length > 2){
        elementh3.innerHTML = "La partie est serrée ...";
        };
        if (playerTurn === 2 && e.target.style.background === "white"){// 3 === pour signaler strictement égal à 
        e.target.style.background = playerOne;  
        resultat.innerHTML = e.target.style.background
        //grid.push (playerOne);
        playerTurn = 1;
        resultat.innerHTML = `<h2> Au tour du Joueur <font color="blue">  Bleu </font> </h2>`; 
        let gridContainer  = e.target.id;
        grid.push (gridContainer);

        }   else if (e.target.style.background === "white") {
            e.target.style.background = playerTwo; 
            resultat.innerHTML = e.target.style.background
            //grid.push (playerTwo);
            playerTurn = 2;
            resultat.innerHTML = `<h2> Au tour du Joueur <font color="red"> Rouge </font> </h2>`;
            let gridContainerblue = e.target.id;
            gridblue.push (gridContainerblue);
        }
        
        //console.log (grid);
            if (grid.length > 2){
                console.log (grid);
            
                for (j = 0; j < 8; j++) {
                    if (
                    (grid[0] === solution[j][0] || grid[0] === solution[j][1] || grid[0] === solution[j][2]) &&
                    (grid[1] === solution[j][0] || grid[1] === solution[j][1] || grid[1] === solution[j][2]) &&
                    (grid[2] === solution[j][0] || grid[2] === solution[j][1] || grid[2] === solution[j][2]) ){
                    console.log (grid);
                    gagnant = true;
                    console.log (gagnant);
                    };
                }
                    if (gagnant === true){
                    console.log (gagnant);
                    alert ("Le joueur rouge a gagné!");
                    console.log (grid);
                    //console.log (solution[j]);
                    location.reload();
                    }
                    // else {
                    // grid.splice([0])
                    // //};
           }


           if (gridblue.length > 2){
            console.log (grid);
        
            for (j = 0; j < 8; j++) {
                if (
                (gridblue[0] === solution[j][0] || gridblue[0] === solution[j][1] || gridblue[0] === solution[j][2]) &&
                (gridblue[1] === solution[j][0] || gridblue[1] === solution[j][1] || gridblue[1] === solution[j][2]) &&
                (gridblue[2] === solution[j][0] || gridblue[2] === solution[j][1] || gridblue[2] === solution[j][2]) ){
                console.log (gridblue);
                gagnantblue = true;
                console.log (gagnantblue);
                };
            }
                if (gagnantblue === true){
                console.log (gagnant);
                alert ("Le joueur bleu a gagné!");
                location.reload();
                console.log (gridblue);
                //console.log (solution[j]);
                }
                // else {
                // gridblue.splice([0])
                // };
       }
       if (gridblue.length > 4){
        
        alert ("Egalité !");
        location.reload();
        console.log (test)
    }

       console.log (e.target.style.background)

    });

};


    //     for (let j = 0; j < solution.length; j++) {
    //         let combinaison = solution[j];
    //         let a = grid[combinaison[0]];
    //         let b = grid[combinaison[1]];
    //         let c = grid[combinaison[2]];
    //         //console.log (a);

    //         if (a === "" || b === "" || c === "") {
    //             continue;
    //         }

    //         if (a === b && b === c) {
    //             gagnant = true;
    //             resultat.innerHTML = `Le joueur ${a} a gagné!`;
    //             break;
    //         }
    //     }
    // }
//--------------------------------------------------------------------------------------
    // for (let i = 0; i < 8; i++) {
    //     let gridContainer = document.getElementById(`case-${i}`);
    //     grid = gridContainer.style.background;
    //     console.log (grid);
    // }

        //if (Object.keys(gameState).length === 9 && !winner) {
           // resultDisplay.innerHTML = "It's a tie!";
        //}








//let intersection = solution.filter(val => grid.includes(val));
//console.log (intersection);



// solution.forEach((value, index) => {
//     console.log (solution.slice(index,index+3));
//     console.log (solutionslice);
//     console.log (grid);
// });

// cases.forEach ((col)=> {
//     console.log(cases);
//     if (playerTurn == null){
//     col.addEventListener ("click", (e) => {
//     e.target.style.background = playerOne;
//     playerTurn = playerOne;
//     });}
//     else {
//     col.addEventListener ("click", (e) => {
//     e.target.style.background = playerTwo;
//     });}

// });


