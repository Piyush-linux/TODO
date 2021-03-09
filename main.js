// jshint esversion:8
let tar = document.querySelector('.main');
let todo = document.querySelector("#todo");
let help = document.querySelector(".help");

class Task {
    constructor(task) {
        this.task = task;
        this.data = localStorage;
    }
    add() {
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
        icon1.setAttribute('src', 'img/cir.svg');
        // text
        let txt = document.createTextNode(this.task);
        // delete-icon
        let icon2 = document.createElement('img');
        icon2.setAttribute('src', 'img/delete.svg');
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
        this.data.setItem(this.task, this.task);
        console.log(localStorage);
    }
    delete(ele) {
      // remove form storage
            this.data.removeItem(ele.innerText);
            console.log(ele.innerText);
            // delete animation
            let c = ele.style;
            c.transition = '1s';
            c.marginLeft = '100px';
            c.opacity = '.1';
            // setTimeout(() => { c.display = 'none'; }, 1000);
            setTimeout(() => { tar.removeChild(ele); }, 1000);
            console.log("%cDeleted !", "color:green");
    }
    check(e) {
         let cond = e.attributes[0].value == 'img/check.svg';
            // Toggle icon
            if (cond) {
                e.setAttribute('src', 'img/cir.svg');

            } else {
                e.setAttribute('src', 'img/check.svg');
            }
            // Strike throug adjacent text when checked
            e.parentElement.nextElementSibling.classList.toggle('s');
    }
    store(){

    }
}
// When Page is loaded
document.onreadystatechange = function() {
    var state = document.readyState;
    if (state == 'interactive') {
        document.querySelector('body').style.visibility = "hidden";
        document.querySelector('#load').style.visibility = "visible";
    } else if (state == 'complete') {
        setTimeout(function() {
            document.getElementById('interactive');
            document.querySelector('body').style.visibility = "visible";
            document.getElementById('load').style.visibility = "hidden";
        }, 2000);
    }
};
// When doument is loaded Restore Task
window.onload = () => {
    obj = localStorage;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          // Get task
          let task=new Task(key);
          // add task
          task.add();
        }
    }
    // outter Delete
    let del = document.querySelectorAll('.del');
    del.forEach(e => {
        e.onclick = () => task.delete(e.parentElement);
    });
    // Check Button
    let check = document.querySelectorAll('.check img');
    check.forEach(e => { e.onclick = () => task.check(e); });
};
// If input is emplty then warn the user

// ADD FULL BLOCK
function add() {
    // var val = todo.value;
    let block = new Task(todo.value);
    if (todo.value.length == 0) {
        help.style.display = 'block';
    } else {
        block.add();
    }
    // Check Button
    let check = document.querySelectorAll('.check img');
    check.forEach(e => {e.onclick = () => block.check(e);});
    // Delete Button
    let del = document.querySelectorAll('.del');
    del.forEach(e => {e.onclick = () => block.delete(e.parentElement);});
    // Refresh Input
    todo.value = '';

    // Hold Priortise : dbclick -> select -> addTag + del
    let task = document.querySelectorAll('.list');
    let pop = document.querySelector('.popup');
    task.forEach(e => {
        e.ondblclick = () => {
            // Make BG blur & Get Popup select box
            document.querySelector('main').style.opacity = '.2';
            pop.style.display = 'block';
            pop.style.visibility = 'visible';
            pop.style.opacity = '1';
            // Select TAG
            let sel = document.querySelector('#selTag'); // target select
            sel.oninput = () => {
                let tag = document.createElement('div'); // create tag
                let txt = sel.value.toLowerCase();
                // set arrt based on select value
                if (txt == 'all') {
                    tag.setAttribute('class', 'tag ml-3 is-small has-text-weight-bold');
                } else if (txt == 'imp') {
                    tag.setAttribute('class',
                        'tag ml-3 is-danger is-small has-text-weight-bold');
                } else if (txt == 'normal') {
                    tag.setAttribute('class',
                        'tag ml-3 is-info is-small has-text-weight-bold');
                } else if (txt == 'other') {
                    tag.setAttribute('class',
                        'tag ml-3 is-dark is-small has-text-weight-bold');
                }
                let tagTxt = document.createTextNode(sel.value); // Ceate Tag Text
                let tagDel =
                    document.createElement('button'); // Create delete button for tag
                tagDel.setAttribute('class', 'delete is-small ml-1');
                // Append: txt+del )- TAG )- Task
                tag.appendChild(tagTxt);
                tag.appendChild(tagDel);
                e.appendChild(tag);
                pop.style.display = 'none';
                pop.style.visibility = 'collapse';
                document.querySelector('main').style.opacity = '1';
            };
        };
    });

    // Edit Task
    /*let txt=document.querySelectorAll('.val');
    txt.forEach(e=>{
        e.onclick=()=>{

            e.classList.toggle("input")
            e.classList.toggle("is-small")

        }
    })*/
}