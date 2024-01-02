import React, { useEffect } from 'react'

// img
import profil from '../assets/img/profil02.png'

// script 
import {section03} from '../assets/script/js/section03'
import {smooth} from '../assets/script/js/smooth'

const AboutPhoto = () => {
    useEffect(() => {
        section03();
        smooth();
    }, [])
  return (
    <section id="section03">
            <div className="about__img__wrap">
                <div className="about__img">
                    <img src={profil} alt="profilImage" />
                </div>
                <div className="about__box__wrap">
                    <div className="about__box box01">Careful</div>
                    <div className="about__box box02">Faithful</div>
                    <div className="about__box box03">Steady</div>
                    <div className="about__box box04">Responsible</div>
                    <div className="about__box box05">Trying</div>
                    <div className="about__box box06">Meticulous</div>
                    <div className="about__box box07">Soft</div>
                </div>
                <div className="about__parallax__text__wrap">
                    <div className="about__parallax__text__box tb01">
                        GREEN GREEN GREEN GREEN GREEN GREEN
                    </div>
                    <div className="about__parallax__text__box tb02">
                        HOPE HOPE HOPE HOPE
                    </div>
                    <div className="about__parallax__text__box tb03">
                        GROW GROW GROW GROW GROW GROW
                    </div>
                    <div className="about__parallax__text__box tb04">
                        GOAL GOAL GOAL GOAL GOAL
                    </div>
                    <div className="about__parallax__text__box tb05">
                        WORK WORK WORK
                    </div>
                    <div className="about__parallax__text__box tb06">
                        PLAY PLAY PLAY PLAY
                    </div>
                </div>
            </div>
        </section>
  )
}

export default AboutPhoto