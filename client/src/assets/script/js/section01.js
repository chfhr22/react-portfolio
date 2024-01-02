import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const section01 = () => {
    const tl = gsap.timeline();

    tl.set('.icon', {y: 100, opacity: 0})
    tl.set('.main__cont .t1', {y: 100, opacity: 0})
    tl.set('.main__cont .t2', {y: -100, opacity: 0})
    tl.set('.b1', {x: 200, opacity: 0})
    tl.set('.b2', {x: -200, opacity: 0})
    tl.set('.main__text', {opacity: 0})
    tl.set('.main__btn', {y: 50, opacity: 0})
    tl.set('#header', {y: -100, opacity: 0})
    tl.to('.icon01', {
        y: 0, 
        opacity: 1,
        duration: 2,
        ease: 'elastic.out'
    }, 'ani')
    tl.to('.icon02', {
        y: 0, 
        opacity: 1,
        duration: 2,
        ease: 'elastic.out'
    }, 'ani+=0.2')
    tl.to('.icon03', {
        y: 0, 
        opacity: 1,
        duration: 2,
        ease: 'elastic.out'
    }, 'ani+=0.4')
    tl.to('.icon04', {
        y: 0, 
        opacity: 1,
        duration: 2,
        ease: 'elastic.out'
    }, 'ani+=0.6')
    tl.to('.icon05', {
        y: 0, 
        opacity: 1,
        duration: 2,
        ease: 'elastic.out'
    }, 'ani+=0.8')
    tl.to('.icon06', {
        y: 0, 
        opacity: 1,
        duration: 2,
        ease: 'elastic.out'
    }, 'ani+=1')
    tl.to('.icon07', {
        y: 0, 
        opacity: 1,
        duration: 2,
        ease: 'elastic.out'
    }, 'ani+=1.2')
    tl.to('.icon08', {
        y: 0, 
        opacity: 1,
        duration: 2,
        ease: 'elastic.out'
    }, 'ani+=1.4')
    tl.to('.icon09', {
        y: 0, 
        opacity: 1,
        duration: 2,
        ease: 'elastic.out'
    }, 'ani+=1.6')
    tl.to('.main__cont .t1', {
        y: 0,
        opacity: 1,
        duration: 2.5,
        ease: 'power4.out'
    }, 'ani+=2')
    tl.to('.main__cont .t2', {
        y: 0,
        opacity: 1,
        duration: 2.5,
        ease: 'power4.out'
    }, 'ani+=2.4')
    tl.to('.b1', {
        x: 0,
        opacity: 1,
        duration: 2
    }, 'ani+=3.2')
    tl.to('.b2', {
        x: 0,
        opacity: 1,
        duration: 2
    }, 'ani+=3.2')
    tl.to('.main__text', {
        opacity: 1,
        duration: 2
    }, 'ani+=4')
    tl.to('.main__btn', {
        y: 0,
        opacity: 1,
        duration: 1
    }, 'ani+=4')
    tl.to('#header', {
        y: 0,
        opacity: 1,
        duration: 1
    }, 'ani+=4')

    const ani01 = gsap.timeline();

    ani01.to('.main__cont .t1', {xPercent: 300}, 'text')
    ani01.to('.main__cont .t2', {xPercent: -300}, 'text')
    ani01.to('.icon09', {yPercent: -300}, 'text')

    ScrollTrigger.create({
        animation: ani01,
        trigger: "#section01",
        start: "top top",
        end: "+=1000",
        scrub: 5,
        pin: true
    })

    return () => {
        tl.kill();
        ani01.kill();
    };
}