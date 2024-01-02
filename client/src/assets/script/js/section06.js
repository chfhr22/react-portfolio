import gsap from "gsap";

export const section06 = () => {
    const tl = gsap.timeline();

    tl.set('.b7', {x: 100, opacity: 0})
    tl.set('.b8', {x: -100, opacity: 0})
    tl.set('.script__text', {opacity: 0})

    tl.to('.b7', {
        x: 0, 
        opacity: 1,
        duration: 1
    }, 'script')
    tl.to('.b8', {
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
        trigger: "#section06",
        start: "top center",
    })
}