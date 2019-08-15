let grados = 0;

const rotar = ()=>
{
	grados+=25;
	let elemento = document.createElement("div");
	elemento.classList.add("square");
	elemento.style.top = "250px";
	elemento.style.left = "500px";
	elemento.style.transform = "rotate("+grados+"deg)";
	document.body.appendChild(elemento);
	if(grados==1500)
	{
		clearInterval(interval);
	}
	
}

let interval = setInterval(rotar, 100);	

