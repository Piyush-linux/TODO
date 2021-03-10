# [TODO](https://piyush-linux.github.io/TODO/)
---

## Wireframe  
- https://dribbble.com/shots/4739703-To-do-List-Interaction-UI-Animation
- [I(txt)] + [B_add]
    - add => ( [B_check] + [txt>>-Task] + [B_delete] )-column[drag-gable]

## Pseudo Code
1. [add_B]:onclick
    - [x] add Complete Block of task
    - [x] Get text from input
    - [x] When added Refresh input tab
    - [x] If input is blank then warn them !
2. [chk_B]:onclick
    - [x] Then relate to its adjacent text to strike && Animate icon as complete
    - [x] Strike text with animation with change Icon Animation
3. [del_B]:onclick full block get removed
    - [x] Then relate to its parent
    - [x] And remove self (display)
4. Store Task in LocalStroage 
    - so they can revisit and usability also increases
    - win.load(restoreTask): add->setItem(task) remove->removeItem(task)
4. [task]:onclick => You can Edit that task 
5. [task]:ondrag => You can darg up & Down
    - [ ] Draggable block
    - [ ] draggbale area with a Icon on left-side
6. [task]:onhold
    - [x] prioritize task(tag)
    - [ ] on select tag you can only see that task
8. [hamburger]:onclick => Give list tag
    - [ ] [list(+)]:onclick => Add a List
7. Introduction Image slider for User Guide::
    https://www.behance.net/gallery/72614427/To-Do-App-Concept && https://in.pinterest.com/pin/480196379024476441/ 
    - [ ] introduction Page Design
    - [ ] on Page load Execution
    - [ ] Slider Function
8. User can Download those task as image
9. Date Functionality

## Style
- [ ] Favicon
- [ ] Sharable link => title , org

## Pallete
green :: #1abc9c
violet :: #8280FF,#E8E7FF
red :: #FF7285 , #FFE2E6
yellow :: #FFCA83 , #FFF4E5
green :: 4AD991 , #DAF7E8 ,#1abc9c
grey :: #B4B4C6 ,#F0F0F7

## Architecture
- column-<task>
    = icon-text-(chk-[icon] + txt) + del-[icon]


### Future RoadMap
- Tag's
- Editable text
- Drag-able Block
- Little Animation && Styling

# Contribution
---
### Everyone is welcome to contribute, in whatever form they are comfortable with. For example:

- improve documentation,
- test features,
- fix bugs,
- or add new features.

