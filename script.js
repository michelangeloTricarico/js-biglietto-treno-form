// Made by Michelangelo Tricarico
// Project name: Biglietto del treno

//1. Load element by html code with class and id
//Input
const name_surname_element = document.querySelector(".name-surname") // Name & surname field
const km_element = document.querySelector(".km-value") // km field
const age_element = document.querySelector(".age-selection") // age field
const submit_btn_element = document.querySelector(".btn-submit") // submit button
const reset_btn_element = document.querySelector(".btn-reset") // reset button
const form_element = document.querySelector("form") // reset button

//Output
let passenger_name_element = document.getElementById("name_surname_output") // Name and surname to compile
let offer_type_element = document.getElementById("offer_type") // Offer to compile
let cabinet_num_element = document.getElementById("cabinet_num") // Cabinet number to compile
let code_num_element = document.getElementById("code_num") // Code CP to compile
let cost_num_element = document.getElementById("cost_num") // Cost to compile

//Listen to compile ticket connected to function for the elaboration
form_element.addEventListener("submit", TiketCompilation)
form_element.addEventListener("reset", TiketReset)

function TiketCompilation(event){
    event.preventDefault() //not provvide submit
    console.log("compile")
    let age_passeger = age_element.value
    let km_number = km_element.value
    let cost
    let offer
    // check if a reduction can be applied  
    if (age_passeger == 2) {
        cost=(km_number * 0.21) * (1 - 20 / 100) // to consider 20%
        offer="Biglietto ridotto junior"
    }
    else if (age_passeger == 3){
        cost=(km_number * 0.21) * (1 - 40 / 100) // to consider 40%
        offer="Biglietto ridotto old"
    }
    else {
        cost=(km_number * 0.21)
        offer="Biglietto standard"
    }
    // Load data in interface
    let passenger_name = name_surname_element.value
    //console.log(passenger_name )
    passenger_name_element.innerHTML = passenger_name
    offer_type_element.innerHTML = offer 
    let cabinet=Math.floor(Math.random()*10000) // Take an int number for cabinet
    cabinet_num_element.innerHTML = cabinet
    let cod=Math.floor(Math.random()*100) // Take an int number for code CP
    code_num_element.innerHTML = cod 
    cost_num_element.innerHTML = cost.toFixed(2)+" "+"€"
    
}

// Function to delate field 
function TiketReset(event){
    event.preventDefault() //not provvide submit
    console.log("reset")
    name_surname_element.value = ""
    km_element.value = ""
    age_element.value = 1
    passenger_name_element.innerHTML = "Nome e Cognome"
    offer_type_element.innerHTML = "None" 
    cabinet_num_element.innerHTML = "None" 
    code_num_element.innerHTML = "None" 
    cost_num_element.innerHTML = "None" 
}




