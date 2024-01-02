import React, { useEffect } from 'react'

// script 
import {hotizon} from '../assets/script/js/hotizon'
import {smooth} from '../assets/script/js/smooth'


const Script = () => {
    useEffect(() => {
        hotizon();
        smooth();
    })
  return (
    <section id="horizontal">
        
            <section id="section__h01" className="parallax__item">
                <div className="script__braket__wrap">
                    <div className="braket b07">&#123;</div>
                    <div className="script__text">script</div>
                    <div className="braket b08">&#125;</div>
                </div>
                <div className="script__wrap">
                    <div className="script__img__wrap">
                        <div className="script__img"></div>
                    </div>
                    <div className="script__desc__wrap">
                        <div className="script__title">SLIDER EFFECT</div>
                        <div className="script__desc">
                            제이쿼리와 자바스크립트를 이용하여 슬라이드 효과를 여러가지 형태로 연습하였습니다. FADEIN / FADEOUT, 상하 또는 좌우로 움직이는 효과를 구현하였습니다.
                        </div>
                    </div>
                </div>
            </section>

            <section id="section__h01" className="parallax__item">
                <div className="script__wrap">
                    <div className="script__img__wrap">
                        <div className="script__img"></div>
                    </div>
                    <div className="script__desc__wrap">
                        <div className="script__title">SLIDER EFFECT</div>
                        <div className="script__desc">
                            제이쿼리와 자바스크립트를 이용하여 슬라이드 효과를 여러가지 형태로 연습하였습니다. FADEIN / FADEOUT, 상하 또는 좌우로 움직이는 효과를 구현하였습니다.
                        </div>
                    </div>
                </div>
            </section>

            <section id="section__h01" className="parallax__item">
                <div className="script__wrap">
                    <div className="script__img__wrap">
                        <div className="script__img"></div>
                    </div>
                    <div className="script__desc__wrap">
                        <div className="script__title">SLIDER EFFECT</div>
                        <div className="script__desc">
                            제이쿼리와 자바스크립트를 이용하여 슬라이드 효과를 여러가지 형태로 연습하였습니다. FADEIN / FADEOUT, 상하 또는 좌우로 움직이는 효과를 구현하였습니다.
                        </div>
                    </div>
                </div>
            </section>

            <section id="section__h01" className="parallax__item">
                <div className="script__wrap">
                    <div className="script__img__wrap">
                        <div className="script__img"></div>
                    </div>
                    <div className="script__desc__wrap">
                        <div className="script__title">SLIDER EFFECT</div>
                        <div className="script__desc">
                            제이쿼리와 자바스크립트를 이용하여 슬라이드 효과를 여러가지 형태로 연습하였습니다. FADEIN / FADEOUT, 상하 또는 좌우로 움직이는 효과를 구현하였습니다.
                        </div>
                    </div>
                </div>
            </section>

        </section>
  )
}

export default Script