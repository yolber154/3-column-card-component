let conteiner = document.querySelector(".conteiner")
let column = document.querySelectorAll(".conteiner .column")

let activo

column.forEach((element) => {
	element.addEventListener("click", fn)
})

function fn(){
	this.classList.toggle("active")

	if(activo && activo !== this) activo.classList.remove("active")
	activo = this
}
