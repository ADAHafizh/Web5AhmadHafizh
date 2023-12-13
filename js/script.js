import { Popover, initMDB } from "mdb-ui-kit";
import Lenis from "@studio-freight/lenis";
initMDB({ Popover });

import { Collapse, initMDB } from "mdb-ui-kit";
initMDB({ Collapse });

const lenis = new Lenis({
    duration: 10,
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
