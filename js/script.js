import { Popover, initMDB } from "mdb-ui-kit";
initMDB({ Popover });

import { Collapse, initMDB } from "mdb-ui-kit";
initMDB({ Collapse });

//Lenis Smooth Scrolling
import Lenis from "@studio-freight/lenis";
const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//Disable Right Click -- does not work?
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);