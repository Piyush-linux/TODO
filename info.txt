# TODO => https://piyush-linux.github.io/TODO/
---

## Wireframe [tag] :: https://dribbble.com/shots/4739703-To-do-List-Interaction-UI-Animation
[I(txt)] + [B_add]
    - add => ( [B_check] + [txt>>-Task] + [B_delete] )-column

## Pseudo Code
1. add button to add Complete Block with check,text,delete
    - [x] Get text from input
    - [x] When added Refresh input tab
    - [_] If input is blank then warn them !
2. When click check , full block get strike
    - [x] First target check button 
    - [x] Then relate to its adjacent text to strike && Animate icon as complete
3. When click delete , full block get removed
    - [x] First target check button 
    - [x] Then relate to its parent
    - [x] And remove self (display:none)

## Task
- [x] Wireframe
- [_] Functionality
- [_] Style > Layout , Respopnsive , Design , Icon

*NOTES*
MindMap with IDE like indentation
I()=>Input tag
fun()=> function
[block]=>DOM,button