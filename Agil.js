/*OBTENER ELEMENTOS DEL DOM*/

const getById = id => document.getElementById(id);

const getByClass = className => document.getElementsByClassName(className);

const getByName = elementName => document.getElementsByName(elementName);

const getByTag = tagName => document.getElementsByTagName(tagName);

/* AGREGAR ESTILOS A ELEMENTO DEL DOM */

const setStyles = (element,styles) => {
	/*
		Hacemos uso de Object.assign para copiar todos los estilos declarados por nosotros 
		al objeto style de un elemento del DOM
	*/
	Object.assign(element.style,styles);
}
