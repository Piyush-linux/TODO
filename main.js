let tar= document.querySelector('.list')
console.log(tar)


function add () {
	column=document.createElement('div');
	column.classList.add("column task box is-full")
	let yo="Hello";
	txt=document.createTextNode("Hello")
	column.append(txt)
	// .classList.add('column')
	tar.appendChild(column);
	console.log("hello");
}