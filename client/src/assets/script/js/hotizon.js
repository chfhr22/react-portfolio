import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const hotizon = () => {
    const horizontal = document.querySelector("#horizontal");
    const sections = gsap.utils.toArray("#horizontal > section");

    const tl = gsap.timeline();

    tl.set('.b07', {x: 100, opacity: 0})
    tl.set('.b08', {x: -100, opacity: 0})
    tl.set('.script__text', {opacity: 0})

    tl.to('.b07', {
        x: 0, 
        opacity: 1,
        duration: 1
    }, 'script')
    tl.to('.b08', {
        x: 0, 
        opacity: 1,
        duration: 1
    }, 'script')
    tl.to('.script__text', {
        opacity: 1,
        duration: 1
    })

    ScrollTrigger.create({
        animation: tl,
        trigger: "#section__h01",
        start: "top center",
    })

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: horizontal,
            start: "top top",
            end: () => "+=" + (horizontal.offsetWidth - window.innerWidth),
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1
        }
    })
}