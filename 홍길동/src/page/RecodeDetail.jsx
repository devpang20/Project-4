import { Link, useParams } from 'react-router-dom'
import { data } from '../data/dummy'

function RecodeDetail() {
    const param = useParams()

    const detailData = data.find((row) => row.id == param.id)

    return (
        <>
            <div>번호 : {detailData.id}</div>
            <div>제목 : {detailData.subject}</div>
            <div>내용 : {detailData.content}</div>
            <div>생성일 : {detailData.created}</div>
            <Link to={`/recode/${param.id}/edit`}>수정</Link>
            <Link to="/recode/del">삭제</Link>
        </>
    )
}

export default RecodeDetail
