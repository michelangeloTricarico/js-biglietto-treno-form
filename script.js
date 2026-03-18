// Made by Michelangelo Tricarico
// Project name: Biglietto del treno

//1. Load element by html code with class and id
//Input
const name_surname_element = document.querySelector(".name-surname") // Name & surname field
const km_element = document.querySelector(".km-value") // km field
const age_element = document.querySelector(".age-selection") // age field
const submit_btn_element = document.querySelector(".btn-submit") // submit button
const reset_btn_element = document.querySelector(".btn-reset") // reset button

//Output
let passenger_name_element = document.getElementById("name_surname_output") // Name and surname to compile
let offer_type_element = document.getElementById("offer_type") // Offer to compile
let cabinet_num_element = document.getElementById("cabinet_num") // Cabinet number to compile
let code_num_element = document.getElementById("code_num") // Code CP to compile
let cost_num_element = document.getElementById("cost_num") // Cost to compile

//Listen to compile ticket connected to function for the elaboration
submit_btn_element.addEventListener("submit", TiketCompilation)
reset_btn_element.addEventListener("reset", TiketReset)




