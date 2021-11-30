var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = '...';
document.body.appendChild(btn);

// schijf hier tussen je code
btn.innerHTML = 'switch light on'                                                           // change text on button from ... to switch light on (starting point)
document.body.style.backgroundColor = 'black'                                               // change background style color to black (starting point, lights out)
btn.onclick = (buttonSwitch)                                                                // if you click on btn, you execute the buttonSwitch function

function buttonSwitch() {
    if (btn.innerHTML == 'switch light on'){                                                // belangrijk dat je 2x == gebruikt. anders deed hij het maar 1x 1 kant op!!!
        btn.innerHTML = 'switch light off';                                                 // change text from on to off + color from black to yellow. repeat in else if statement
        document.body.style.backgroundColor = 'yellow';
        console.log ('the light is on');
    }
    else if (btn.innerHTML == 'switch light off'){                                          // belangrijk dat je 2x == gebruikt. anders deed hij het maar 1x 1 kant op!!!
        btn.innerHTML = 'switch light on';
        document.body.style.backgroundColor = 'black';
        console.log ('the light is off');
    }
}
// schijf hier tussen je code