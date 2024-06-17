import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data/dummy'

function RecodeEdit() {
    const [editData, setEditData] = useState({ subject: '', content: '' })
    const [isLoading, setIsLoading] = useState(false)
    const [subject, setSubject] = useState()
    const [content, setContent] = useState()

    const param = useParams()

    useEffect(() => {
        const temp = data.find((row) => row.id == param.id)
        setEditData(temp)
        setIsLoading(true)
    })

    const handleSumbit = () => {
        e.preventDefault()

        fetch('/* 실제 api 주소 */', {
            method: 'patch',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                subject: subject,
                content: content,
            }),
        })
            .then((res) => res.json())
            .then(console.log)
    }

    if (!isLoading) return <>Loading...</>

    return (
        <>
            <form onSubmit={handleSumbit}>
                <div>
                    제목:{' '}
                    <input
                        name="subject"
                        type="text"
                        value={editData.subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <div>
                    내용:{' '}
                    <textarea name="content" value={editData.content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <button type="submit">수정</button>
            </form>
        </>
    )
}

export default RecodeEdit
