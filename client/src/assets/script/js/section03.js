import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const section03 = () => {
    const tl = gsap.timeline();
    tl.set('.about__box.box01', {
        opacity: 0,
        scale: 3,
    })
    tl.set('.about__box.box02', {
        opacity: 0,
        scale: 3
    })
    tl.set('.about__box.box03', {
        opacity: 0,
        scale: 3
    })
    tl.set('.about__box.box04', {
        opacity: 0,
        scale: 3
    })
    tl.set('.about__box.box05', {
        opacity: 0,
        scale: 3
    })
    tl.set('.about__box.box06', {
        opacity: 0,
        scale: 3
    })
    tl.set('.about__box.box07', {
        opacity: 0,
        scale: 3
    })
    tl.to('.about__parallax__text__box.tb02', {
        xPercent: -400,
        yPercent: -1200,
    }, 'box')
    tl.to('.about__parallax__text__box.tb03', {
        xPercent: 400,
        yPercent: -1000,
    }, 'box')
    tl.to('.about__parallax__text__box.tb04', {
        xPercent: 400,
        yPercent: 900,
    }, 'box')
    tl.to('.about__parallax__text__box.tb05', {
        xPercent: -700,
        yPercent: -800,
    }, 'box')
    tl.to('.about__parallax__text__box.tb06', {
        xPercent: -700,
        yPercent: 800,
    }, 'box')
    tl.to('.about__parallax__text__box.tb01', {
        xPercent: 700,
    }, 'box')

    tl.to(".about__box", {
        opacity: 1, 
        ease: "bounce.out", 
        scale: 1, 
        stagger: {
            amount: 1, 
            from: "random"
        }
    }, 'box+=0.2')
    

    ScrollTrigger.create({
        animation: tl,
        trigger: "#section03",
        start: "top top",
        end: "+=9000",
        scrub: 3,
        pin: true,
        // markers: true
    })
}