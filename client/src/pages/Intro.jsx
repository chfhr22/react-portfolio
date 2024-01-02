import React, { useEffect } from 'react'

// img
import svg01 from '../assets/img/1.svg';
import svg02 from '../assets/img/2.svg';
import svg03 from '../assets/img/3.svg';
import svg04 from '../assets/img/4.svg';
import svg05 from '../assets/img/5.svg';
import svg06 from '../assets/img/6.svg';
import svg07 from '../assets/img/7.svg';
import svg08 from '../assets/img/8.svg';
import svg09 from '../assets/img/9.svg';
import arrow from '../assets/img/arrow.svg';

// script 
import {section01} from '../assets/script/js/section01'
import {smooth} from '../assets/script/js/smooth'

const Intro = () => {
    useEffect(() => {
        section01();
        smooth();
    }, [])

  return (
    <section id="section01">
            <div className="main__wrap">
                <div className="main__cont">
                    <p className="t1">Front-end</p>
                    <p className="t2">developer</p>
                </div>
            </div>
            <div className="icons">
                <span className="icon01 icon"><img src={svg01} alt="svg" /></span>
                <span className="icon02 icon"><img src={svg02} alt="svg" /></span>
                <span className="icon03 icon"><img src={svg03} alt="svg" /></span>
                <span className="icon04 icon"><img src={svg04} alt="svg" /></span>
                <span className="icon05 icon"><img src={svg05} alt="svg" /></span>
                <span className="icon06 icon"><img src={svg06} alt="svg" /></span>
                <span className="icon07 icon"><img src={svg07} alt="svg" /></span>
                <span className="icon08 icon"><img src={svg08} alt="svg" /></span>
                <span className="icon09 icon"><img src={svg09} alt="svg" /></span>
            </div>
            <div className="main__text__wrap">
                <div className="braket b1">&#123;</div>
                <div className="main__text">
                    <p>프론트엔드 개발자는 마법사와 같다.</p>
                    <p>그들의 주문은 코드이며, 그들은 사용자 경험을 변화시키는 마법을 부린다. </p>
                    <p>이들의 마법은 웹의 현실을 창조한다.</p>
                </div>
                <div className="braket b2">&#125;</div>
            </div>
            <div className="main__btn">
                Get start
                <img src={arrow} alt="arrow" />
            </div>
        </section>
  )
}

export default Intro