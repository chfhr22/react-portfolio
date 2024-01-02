import axios from 'axios';
import React, { useState } from 'react'

const RepleWrite = () => {
    const [author, setAuthor] = useState("");
    const [password, setPassword] = useState("");
    const [content, setContent] = useState("");

  const writeHandler = (e) => {
    e.preventDefault();

    if (author === "" || password === "" || content === "") {
        return alert("빈칸을 채워주세요.");
    }

    let body = {
        author: author,
        password: password,
        content: content,
    }
    axios.post("/api/reple/write", body)
    .then((response) => {
      if(response.data.success){
        alert("댓글 작성 성공")
        window.location.reload();
      } else {
        alert("댓글 작성 실패")
      }
    })
  }

  return (
    <>
            <form className='comment__write__wrap'>
                <div className="comment__author">
                    <div className="comment__name">
                        <label htmlFor="repleAuthor" className='blind'>이름</label>
                        <input
                            className='name__input'
                            type="text"
                            name='repleAuthor'
                            id='repleAuthor'
                            placeholder='이름'
                            autoComplete='off'
                            required
                            value={author}
                            onChange={(e) => setAuthor(e.currentTarget.value)}
                        />
                    </div>
                    <div className="comment__pass">
                        <label htmlFor="replePw" className='blind'>비밀번호</label>
                        <input
                            className='pass__input'
                            type="password"
                            name='replePw'
                            id='replePw'
                            placeholder='비밀번호'
                            autoComplete='off'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                        />
                    </div>
                </div>
                <div className="comment__cont">
                    <label htmlFor="repleCont" className='blind'>내용</label>
                    <input
                        className='cont__input'
                        name='repleCont'
                        id='repleCont'
                        type="text"
                        maxLength={100}
                        placeholder='댓글을 적어주세요'
                        autoComplete='off'
                        required
                        value={content}
                        onChange={(e) => setContent(e.currentTarget.value)}
                    />
                    <button
                        className='comment__btn'
                        type='submit'
                        onClick={(e) => writeHandler(e)}
                    >
                        send
                    </button>
                </div>
            </form>
        </>
  )
}

export default RepleWrite