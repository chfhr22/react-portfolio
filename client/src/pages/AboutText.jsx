import React, { useEffect } from 'react'

// script 
import {section02} from '../assets/script/js/section02'
import {smooth} from '../assets/script/js/smooth'

const AboutText = () => {

    useEffect(() => {
        section02();
        smooth();
    }, [])
  return (
    <section id="section02">
            <div className="about__wrap">
                <div className="about__braket__wrap">
                    <div className="braket b3">&#123;</div>
                    <div className="about__text">about me</div>
                    <div className="braket b4">&#125;</div>
                </div>
                <div className="about__cont">
                    <p className="cont1">안녕하세요, 프론트엔드 개발의 꿈을 키우는 권초록입니다.</p>
                    <p className="cont2">제 핸드폰 메모장에는 "자만은 독이다"라는 문구가 적혀있습니다.</p>
                    <p className="cont3">일정한 경지에 도달했다고 자만하게 되는 순간, 그 자만이 정체의 시작이며,</p>
                    <p className="cont4">개발자로서의 성장을 멈추는 순간이라고 생각합니다. </p>
                    <p className="cont5"> 항상 겸손한 자세로 새로운 지식을 받아들이고,</p>
                    <p className="cont6"> 끊임없는 배움을 통해 발전해나가겠습니다.</p>
                </div>
            </div>
        </section>
  )
}

export default AboutText