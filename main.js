let tar= document.querySelector('.list')
let todo=document.querySelector("#todo");

function display () {
	console.log('yo')
}

// ADD FULL BLOCK
function add () {

var task = todo.value
	// column
	let column=document.createElement('div');
	column.setAttribute('class','column task box is-full');
	// span
	let span1=document.createElement('span');
	span1.setAttribute('class','icon check');
	let span2=document.createElement('span');
	span2.setAttribute('class','icon is-pulled-right del');
	let spanTxt=document.createElement('span');
	spanTxt.setAttribute('class','ml-2 list');
	// icon-text
	let icon_text=document.createElement('span');
	icon_text.setAttribute('class','icon-text');
	// check-icon
	let icon1=document.createElement('img');
	icon1.setAttribute('src','./cir.svg');
	// text
	let txt=document.createTextNode(task);
	// delete-icon
	let icon2=document.createElement('img');
	icon2.setAttribute('src','./delete.svg')
	// Append >>
	tar.appendChild(column);
	column.appendChild(icon_text);

	icon_text.appendChild(span1);
	span1.appendChild(icon1);

	icon_text.appendChild(spanTxt);
	spanTxt.appendChild(txt);

	column.appendChild(span2);
	span2.appendChild(icon2);

	// column.appendChild(txt);




	
// Check Button
let check=document.querySelectorAll('.check');

check.forEach(e=>{
	e.onclick=()=>{
		console.log(e)
	}
})

console.log(check)
// Refresh Input
todo.value='';
}




// Delete Button