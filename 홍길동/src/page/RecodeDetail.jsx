import { Link, Router, useNavigate, useParams } from 'react-router-dom'
import { data } from '../data/dummy'

function RecodeDetail() {
    const param = useParams()
    const navigate = useNavigate()

    const detailData = data.find((row) => row.id == param.id)

    const handelDel = (id) => {
        fetch(`https://dummyjson.com/posts/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then(console.log)
        navigate('/recode/list')
    }

    return (
        <>
            <div>번호 : {detailData.id}</div>
            <div>제목 : {detailData.subject}</div>
            <div>내용 : {detailData.content}</div>
            <div>생성일 : {detailData.created}</div>
            <Link to={`/recode/${param.id}/edit`}>수정</Link>
            <button onClick={() => handelDel(detailData.id)}>삭제</button>
        </>
    )
}

export default RecodeDetail
