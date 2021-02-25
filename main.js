let tar = document.querySelector('.main');
let todo = document.querySelector("#todo");
let help=document.querySelector(".help");
// If input is emplty then warn the user

function display() {
    console.log('yo')
}

// ADD FULL BLOCK
function add() {

    var val = todo.value
    // if (task.length==0) {}
    if(val.length==0){

        help.style.display = 'block';

    }else{

    help.style.display = 'none';
    // column
    let column = document.createElement('div');
    column.setAttribute('class', 'column list box is-full');
    // span
    let span1 = document.createElement('span');
    span1.setAttribute('class', 'icon check is-medium');
    let span2 = document.createElement('span');
    span2.setAttribute('class', 'icon is-pulled-right del');
    let spanTxt = document.createElement('span');
    spanTxt.setAttribute('class', 'ml-2 val subtitle is-4');
    // icon-text
    let icon_text = document.createElement('span');
    icon_text.setAttribute('class', 'icon-text');
    // check-icon
    let icon1 = document.createElement('img');
    icon1.setAttribute('src', './cir.svg');
    // text
    let txt = document.createTextNode(val);
    // delete-icon
    let icon2 = document.createElement('img');
    icon2.setAttribute('src', './delete.svg')
    // Append >>
    tar.appendChild(column);
    column.appendChild(icon_text);

    icon_text.appendChild(span1);
    span1.appendChild(icon1);

    icon_text.appendChild(spanTxt);
    spanTxt.appendChild(txt);

    column.appendChild(span2);
    span2.appendChild(icon2);

    }
    // column.appendChild(txt);





    // Check Button
    let check = document.querySelectorAll('.check img');

    check.forEach(e => {
        e.onclick = (y) => {
            let cond = e.attributes[0].value == './check.svg'
            // Toggle icon
            if (cond) {
                e.setAttribute('src', './cir.svg');

            } else {
                e.setAttribute('src', './check.svg');
            }
            // Strike throug adjacent text when checked
            e.parentElement.nextElementSibling.classList.toggle('s')
        }
    })
// Delete Button
let del=document.querySelectorAll('.del')
del.forEach(e=>{
	e.onclick=()=>{
	let c=e.parentElement.style.display = 'none';
	console.log(c)

	}
})
// Refresh Input
todo.value = '';



// Edit Task
/*let txt=document.querySelectorAll('.val');
txt.forEach(e=>{
    e.onclick=()=>{
        
        e.classList.toggle("input")
        e.classList.toggle("is-small")

    }
})*/


}

console.log(tar)