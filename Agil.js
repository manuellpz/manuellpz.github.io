/*OBTENER ELEMENTOS DEL DOM*/

const select = element => {
	return document.querySelector(element);
}
const selectAll = elements {
	return document.querySelectorAll(elements);
}

/* AGREGAR ESTILOS A ELEMENTO DEL DOM */

const setStyles = (element,styles) => {
	/*
		Hacemos uso de Object.assign para copiar todos los estilos declarados por nosotros 
		al objeto style de un elemento del DOM
	*/
	Object.assign(element.style,styles);
}
