import React, { useEffect, useLayoutEffect, useRef} from 'react';
import { gsap } from "gsap";


export default function Scripture() {
    const scrip = useRef(null);
    const tl = any;

  
    useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // add a box and circle animation to our timeline and play on first render

    tl.current && tl.current.progress(0).kill();
    tl.current = gsap.timeline()
      .set(fromLeft, { pointerEvents: "none" });
       to(".from-left .tile", {duration: 0.6, width: "100%",left: "0%", stagger: 0.05,
      });
       set(".from-left .tile", { left: "0", width: "0" });
       set(fromLeft, { pointerEvents: "all" });
       from(".banner .imag",{y: 500,duration: 0.5, stagger: {amount: 0.2,},},"-=.2");
       from(".banner h2",{y: 500,duration: 0.5, stagger: {amount: 0.2,},},"-=.2");
    }, app);
    return () => ctx.revert();
  }, []);
  
    return (
    <div className="scrip" ref={scrip}>
       <div class="transition-container from-left">
    <span class="tile"></span>
    <span class="tile"></span>
    <span class="tile"></span>
  </div>

    </div>
  )
}