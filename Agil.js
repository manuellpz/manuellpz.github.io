/*OBTENER ELEMENTOS DEL DOM*/

const select = element => {
	return document.querySelector(element);
}
const selectAll = elements => {
	return document.querySelectorAll(elements);
}

/* AGREGAR ESTILOS A ELEMENTO DEL DOM */

const setStyles = (element, styles) => {
	/*
		Hacemos uso de Object.assign para copiar todos los estilos declarados por nosotros 
		al objeto style de un elemento del DOM
	*/
	Object.assign(element.style, styles);
}

/* CONVERTIR DECIMAL A ROMANO */
const toRoman = (number) => {
  let arrNum = number
    .toString()
    .split('')
    .map((el) => parseInt(el));
  let romans = {
    0: '',
    3000: 'MMM',
    2000: 'MM',
    1000: 'M',
    900: 'CM',
    800: 'DCCC',
    700: 'DCC',
    600: 'DC',
    500: 'D',
    400: 'CD',
    300: 'CCC',
    200: 'CC',
    100: 'C',
    90: 'XC',
    80: 'LXXX',
    70: 'LXX',
    60: 'LX',
    50: 'L',
    40: 'XL',
    30: 'XXX',
    20: 'XX',
    10: 'X',
    9: 'IX',
    8: 'VIII',
    7: 'VII',
    6: 'VI',
    5: 'V',
    4: 'IV',
    3: 'III',
    2: 'II',
    1: 'I',
  };

  let result = '';
  let mult = [1, 10, 100, 1000];
  let id = arrNum.length - 1;
  
  for (let i = 0; i < arrNum.length; i++) {
    result += romans[arrNum[i] * mult[id]];
    id--;
  }

  return result;
};
