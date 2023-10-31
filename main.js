const etudiant1 = {
    name : "Pierre",
    age : 19,
    platPrefere : "pizza",
    booleenPrefere : true,
    pseudoGithub : "Pierrot69280",
}

const etudiant2 = {
    name : "Mey",
    age : 17,
    platPrefere : "boeuf bourguignon",
    booleenPrefere : false,
    pseudoGithub : "MeyDetour",
}

const etudiant3 = {
    name : "Natan",
    age : 19,
    platPrefere : "pates a la bolognaise",
    booleenPrefere : false,
    pseudoGithub : "Natanbinisti"
}

const etudiant4 = {
    name : "Malakaya",
    age : 21,
    platPrefere : "pates a la carbonara",
    booleenPrefere : true,
    pseudoGithub : "MalakayaLvg"
}

const etudiant5 = {
    name : "Raphael",
    age : 18,
    platPrefere : "risotto",
    booleenPrefere : true,
    pseudoGithub : "raphaelmoynat"
}

const etudiants = [etudiant1, etudiant2, etudiant3, etudiant4, etudiant5]

const divEtudiants = document.querySelector(".etudiants")


//card.innerHTML += etudiant

function makeCardFromStudent(student){
    let cardTemplate = `<div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="#">
                <div class="card-body">
                    <p></p>
                    <p class="card-text">${student.name}</p>
                    <p class="card-text">${student.age}</p>
                    <p class="card-text">${student.platPrefere}</p>
                    <p class="card-text">${student.booleenPrefere}</p>
                    <p class="card-text">${student.pseudoGithub}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>`
    return cardTemplate
}

etudiants.forEach((etudiant)=>{
    divEtudiants.innerHTML += makeCardFromStudent(etudiant)
})




