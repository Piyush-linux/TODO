// jshint esversion:8
let tar = document.querySelector('.main');
let todo = document.querySelector("#todo");
let help = document.querySelector(".help");
// task
const Task={
    add:(val)=>{
        help.style.display = 'none';
        let template=`<!-- todo -->
                     <span class="icon-text is-large">
                     <!-- icon:check -->
                       <span class="icon check">
                        <img src="img/cir.svg" alt="">
                       </span>
                       <!-- task:val -->
                       <span class="ml-2 val subtitle is-5">
                            ${val}
                       </span>
                     </span>
                       <!-- delete:del -->
                     <span class="icon is-pulled-right del">
                       <img src="img/delete.svg" alt="">
                     </span>
         `;
         // block
         let column=document.createElement('div');
         column.setAttribute('class', 'column list box is-full');
         // appending
         column.innerHTML=template;
         tar.append(column);
         // Store
         localStorage.setItem(val,val);
         console.log(localStorage);
    },
    delete:(ele)=>{
            // remove form storage
            localStorage.removeItem(ele.innerText);
            console.log(ele.innerText);
            // delete animation
            let c = ele.style;
            c.transition = '1s';
            c.marginLeft = '100px';
            c.opacity = '.1';
            // setTimeout(() => { c.display = 'none'; }, 1000);
            console.log(`DELETED : ${ele.innerText}`);
            setTimeout(() => { tar.removeChild(ele); }, 1000);
    },
    check:(e)=>{
        let cond = e.attributes[0].value == 'img/check.svg';
            // Toggle icon
            if (cond) {
                e.setAttribute('src', 'img/cir.svg');
            } else {
                e.setAttribute('src', 'img/check.svg');
            }
            // Strike throug adjacent text when checked
            e.parentElement.nextElementSibling.classList.toggle('s');
    },
};

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
        Task.add(key);
        }
    }
    // outter Delete
    let del = document.querySelectorAll('.del');//TODO: not getting deleted without adding
    del.forEach(e => {e.onclick = () => Task.delete(e.parentElement); });
    // Check Button
    let check = document.querySelectorAll('.check img');
    check.forEach(e => { e.onclick = () => Task.check(e); }); 

  };
// ADD FULL BLOCK
function add() {
    // var val = todo.value;
    if (todo.value.length == 0) {
        help.style.display = 'block';
    } else {
        Task.add(todo.value);
    }
    // Check Button
    let check = document.querySelectorAll('.check img');
    check.forEach(e => {e.onclick = () => Task.check(e); });
    // Delete Button
    let del = document.querySelectorAll('.del');
    del.forEach(e => {e.onclick = () => Task.delete(e.parentElement); });
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