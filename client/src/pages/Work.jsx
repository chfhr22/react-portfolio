import React, { useEffect } from 'react'

// img
import sexyBrain from '../assets/img/sexybrain.jpg';

// script 
import {section04} from '../assets/script/js/section04'
import {smooth} from '../assets/script/js/smooth'

const Work = () => {
    useEffect(() => {
        section04();
        smooth();
    })
  return (
    <section id="section04">
            <div className="work__item__wrap">
                <div className="work__braket__wrap">
                    <div className="braket b5">&#123;</div>
                    <div className="work__text">work</div>
                    <div className="braket b6">&#125;</div>
                </div>

                <div className="work__items">

                    <div className="work__item wi01">
                        <div className="work__num">01</div>
                        <div className="work__title">YOUTUBE</div>
                        <div className="work__img__wrap card">
                            
                            <div className="back">
                                <div className="back-content">
                                    <h3 className="title">SEXY BRAIN</h3>
                                    <div className="stack">PHP, MySQL</div>
                                    <p className="desc">sexy brain은 문제적 남자의 여러가지 문제들을 직접 풀어보고, 다른 유저들과 경쟁할 수 있는 사이트입니다.</p>
                                    <div className="btn">github</div>
                                </div>
                            </div>
                            <div className="work__img front">
                                <img src={sexyBrain} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="work__item wi02">
                        <div className="work__num">02</div>
                        <div className="work__title">YOUTUBE</div>
                        <div className="work__img__wrap card">
                            
                            <div className="back">
                                <div className="back-content">
                                    <h3 className="title">제목</h3>
                                    <p className="desc">내용</p>
                                </div>
                            </div>
                            <div className="work__img front">
                                <img src={sexyBrain} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="work__item wi03">
                        <div className="work__num">03</div>
                        <div className="work__title">YOUTUBE</div>
                        <div className="work__img__wrap card">
                            
                            <div className="back">
                                <div className="back-content">
                                    <h3 className="title">제목</h3>
                                    <p className="desc">내용</p>
                                </div>
                            </div>
                            <div className="work__img front">
                                <img src={sexyBrain} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
  )
}

export default Work