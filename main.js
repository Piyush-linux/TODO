let tar = document.querySelector('.main');
let todo = document.querySelector("#todo");
let help = document.querySelector(".help");
// When Page is loaded
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.querySelector('body').style.visibility="hidden";
       document.querySelector('#load').style.visibility="visible";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.querySelector('body').style.visibility="visible";
         document.getElementById('load').style.visibility="hidden";
      },2000);
  }
}
// When doument is loaded Restore Task
window.onload=()=>{
		obj = localStorage;
    	for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
		// column
        let column = document.createElement('div');
        column.setAttribute('class', 'column list box is-full');
        // span
        let span1 = document.createElement('span');
        span1.setAttribute('class', 'icon check is-medium');
        let span2 = document.createElement('span');
        span2.setAttribute('class', 'icon is-pulled-right del');
        let spanTxt = document.createElement('span');
        spanTxt.setAttribute('class', 'ml-2 val subtitle is-5');
        // icon-text
        let icon_text = document.createElement('span');
        icon_text.setAttribute('class', 'icon-text');
        // check-icon
        let icon1 = document.createElement('img');
        icon1.setAttribute('src', './cir.svg');
        // text
        let txt = document.createTextNode(obj[key]);
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
	}
	// outter Delete
let del = document.querySelectorAll('.del')
del.forEach(e => {
        e.onclick = () => {
        	// remove form storage
            localStorage.removeItem(e.parentElement.innerText,e.parentElement.innerText)
            console.log(e.parentElement.innerText)
            let c = e.parentElement.style
            c.transition = '1s';
            c.marginLeft = '100px';
            c.opacity = '.1';
            setTimeout(e=> {
            c.display = 'none';
            }, 1000);
            console.log("%cDeleted !","color:green")

        }
        console.log(e)
    })
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
            console.log(e.parentElement.parentElement)
        }
    })
}
// If input is emplty then warn the user



// ADD FULL BLOCK
function add() {

	localStorage.removeItem('todo2')
    var val = todo.value;
    // if (task.length==0) {}
    if (val.length == 0) {

        help.style.display = 'block';

    } else {

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
        spanTxt.setAttribute('class', 'ml-2 val subtitle is-5');
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

        // Store
        localStorage.setItem(val,val)
        console.log(localStorage)


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
            console.log(e.parentElement.parentElement)
        }
    })
    
    // Delete Button
    let del = document.querySelectorAll('.del')
    del.forEach(e => {
        e.onclick = () => {
        	// remove form storage
            localStorage.removeItem(e.parentElement.innerText,e.parentElement.innerText)
            console.log(e.parentElement.innerText)
            let c = e.parentElement.style
            c.transition = '1s';
            c.marginLeft = '100px';
            c.opacity = '.1';
            setTimeout(e=> {
            c.display = 'none';
            }, 1000);
            console.log("%cDeleted !","color:green")

        }
    })
    // Refresh Input
    todo.value = '';

// Hold Priortise : dbclick -> select -> addTag + del
let task=document.querySelectorAll('.list');
let pop = document.querySelector('.popup');
task.forEach(e=>{
    e.ondblclick=()=>{
    	// Make BG blur & Get Popup select box
        document.querySelector('main').style.opacity = '.2'
        pop.style.display = 'block';
        pop.style.visibility = 'visible';
        pop.style.opacity = '1';
        // Select TAG
        let sel=document.querySelector('#selTag');//target select
        sel.oninput=()=>{
        	let tag=document.createElement('div');//create tag
    	    let txt=sel.value.toLowerCase()
    	    // set arrt based on select value
    	    if (txt=='all') {
    	    	tag.setAttribute('class', 'tag ml-3 is-small has-text-weight-bold');
    	    }else if(txt=='imp'){
    	    	tag.setAttribute('class', 'tag ml-3 is-danger is-small has-text-weight-bold');
    	    }else if(txt=='normal'){
    	    	tag.setAttribute('class', 'tag ml-3 is-info is-small has-text-weight-bold');
    	    }else if(txt=='other'){
    	    	tag.setAttribute('class', 'tag ml-3 is-dark is-small has-text-weight-bold');
    	    }
        	let tagTxt=document.createTextNode(sel.value);//Ceate Tag Text
    	    let tagDel=document.createElement('button');//Create delete button for tag
    	    tagDel.setAttribute('class','delete is-small ml-1')
    	    // Append: txt+del )- TAG )- Task
    	    tag.appendChild(tagTxt);
    	    tag.appendChild(tagDel)
	        e.appendChild(tag);
	       	pop.style.display = 'none'
	       	pop.style.visibility = 'collapse'
	       	document.querySelector('main').style.opacity = '1'
	       	console.log('selected')
        }

    }
})

    // Edit Task
    /*let txt=document.querySelectorAll('.val');
    txt.forEach(e=>{
        e.onclick=()=>{

            e.classList.toggle("input")
            e.classList.toggle("is-small")

        }
    })*/
}


