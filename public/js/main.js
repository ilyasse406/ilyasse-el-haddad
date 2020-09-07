// 2
let maBoolean = true
// 3
let monArray = []
// 4
let monObjet = {
    
}
// 5
let monString = "chien"
// 6
 monInt = 5
// 7
let objet = {
    
    sePresenter () {
        
    }

}

// 8

let fonct = (a, b) => {

}

// 9

if (monInt < 8) {
    console.log("il est plus petit")
} else {
    
}

// 10

for (let i = 0; i < 10; i++) {
    console.log(i);
    
}

// 11

let date = new Date()
console.log(date)

// 12

let maj = (a) => {
    a = a.substr(0).toUpperCase()
    return a
    
}

console.log(maj("string"));



// 13

let kill = (a) => {
    a = a.substr(0, 1).toUpperCase() + a.substr(1, 4).toLowerCase() + a.substr(-1).toUpperCase()
    return a

}
console.log(kill("string"))


// 14

let alerte = (a) => {
    alert(a.length)
}

alerte("csgsgfsgsg")

// 15

let random = () => {
    alert(Math.trunc(Math.random()*100))
    
}

random()


// 16

let random2 = () => {
    let x = +prompt("choissis un chiffre !")
    let y = +prompt("choissis un deuxieme chiffre !")
    alert(Math.floor(Math.random() * x) - y)
    
    
}
random2()





