import React from 'react'

import speech from '../assets/img/speech-bubble02.svg';
import RepleArea from '../components/reple/RepleArea';

const Comment = () => {
  return (
    <section id="section06">
            <div className="comment__wrap">
                <div className="comment__braket__wrap">
                    <div className="braket b7">&#123;</div>
                        <div className="comment__text">comment</div>
                    <div className="braket b8">&#125;</div>
                </div>
                <div className="comment__conts">

                    <div className="left">
                        <div className="comment__img">
                            <img src={speech} alt="speechBubble" />
                        </div>
                    </div>

                    <div className="right">
                        <RepleArea />
                    </div>

                </div>
            </div>
        </section>
  )
}

export default Comment