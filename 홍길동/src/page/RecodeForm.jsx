import { useState } from 'react'

function RecodeForm() {
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')

    const handleSumbit = (e) => {
        e.preventDefault()

        fetch('/* 실제 api 주소 */', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                subject: subject,
                content: content,
            }),
        })
            .then((res) => res.json())
            .then(console.log)
    }

    return (
        <>
            <form onSubmit={handleSumbit}>
                <div>
                    제목: <input name="subject" type="text" onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div>
                    내용: <textarea name="content" onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <button type="submit">등록</button>
            </form>
        </>
    )
}

export default RecodeForm
