import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from 'jquery';

gsap.registerPlugin(ScrollTrigger);

export const section04 = () => {
    $('.work__img__wrap').on('click', function () {
        if ($(this).hasClass('flipped')) {
          // 이미 뒤집혀있는 경우, 원래 상태로 돌립니다.
          $(this).find('.front').css('transform', 'rotateY(0deg)');
          $(this).find('.back').css('transform', 'rotateY(180deg)');
        } else {
          // 아직 뒤집히지 않았다면, 카드를 뒤집습니다.
          $(this).find('.front').css('transform', 'rotateY(-180deg)');
          $(this).find('.back').css('transform', 'rotateY(0deg)');
        }
        $(this).toggleClass('flipped');
      });
    
    const tl = gsap.timeline();
    tl.set('.b5', {x: 100, opacity: 0})
    tl.set('.b6', {x: -100, opacity: 0})
    tl.set('.work__text', {opacity: 0})
    tl.to('.b5', {
        x: 0, 
        opacity: 1,
        duration: 1
    }, 'work')
    tl.to('.b6', {
        x: 0, 
        opacity: 1,
        duration: 1
    }, 'work')
    tl.to('.work__text', {
        opacity: 1,
        duration: 1
    })

    gsap.set('.work__item', {
        yPercent: 20,
        scale: 0.4
    });
    ScrollTrigger.create({
        animation: tl,
        trigger: "#section04",
        start: "top center",
    })

    gsap.utils.toArray(".work__item").forEach(item => {
        ScrollTrigger.create({
            animation: gsap.to(item, {
                yPercent: 0,
                scale: 1,
                ease: "none",
                duration: 1
            }),
            trigger: item,
            start: "center bottom",
            end: "bottom bottom",
            scrub: 1,
        });
    });
}