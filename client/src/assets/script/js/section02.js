import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const section02 = () => {
    const tl = gsap.timeline();
    tl.set('.b3', {x: 100, opacity: 0})
    tl.set('.b4', {x: -100, opacity: 0})
    tl.set('.about__text', {opacity: 0})
    tl.to('.b3', {
        x: 0, 
        opacity: 1,
        duration: 1
    }, 'about')
    tl.to('.b4', {
        x: 0, 
        opacity: 1,
        duration: 1
    }, 'about')
    tl.to('.about__text', {
        opacity: 1,
        duration: 1
    })

    ScrollTrigger.create({
        animation: tl,
        trigger: "#section02",
        start: "top center",
    })

    const tl2 = gsap.timeline();
    tl2.from('.about__cont .cont1', {autoAlpha: 0, duration: 1, y: 50}, "+=1")
    tl2.from('.about__cont .cont2', {autoAlpha: 0, duration: 1, y: 50}, "+=1")
    tl2.from('.about__cont .cont3', {autoAlpha: 0, duration: 1, y: 50}, "+=1")
    tl2.from('.about__cont .cont4', {autoAlpha: 0, duration: 1, y: 50}, "+=1")
    tl2.from('.about__cont .cont5', {autoAlpha: 0, duration: 1, y: 50}, "+=1")
    tl2.from('.about__cont .cont6', {autoAlpha: 0, duration: 1, y: 50}, "+=1")

    ScrollTrigger.create({
        animation: tl2,
        trigger: "#section02",
        start: "top top",
        end: "+=6000",
        scrub: 4,
        pin: true
    })
}