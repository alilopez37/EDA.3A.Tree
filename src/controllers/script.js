import { bst } from "./dependencies.js";
import Contacto from "../models/Contacto.js";

let btn = document.getElementById("btn-add")
btn.addEventListener("click", ()=> {
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let phoneNumber = document.getElementById("phoneNumber").value
    let contacto = new Contacto(firstName, lastName, phoneNumber)
    console.log(bst)
    if (bst.add(contacto))
        alert("Registro exitoso")
    else
        alert("Ocurrio un problema")
})
