import { useState } from 'react'
import { Link } from 'react-router-dom'
import { data } from '../data/dummy'

function Recode() {
    const [recordList, setRecordList] = useState(data)

    return (
        <>
            <table border="1">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>내용</th>
                        <th>생성일</th>
                    </tr>
                </thead>
                <tbody>
                    {recordList.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>
                                <Link to={`/recode/${row.id}`}>{row.subject}</Link>
                            </td>
                            <td>{row.content}</td>
                            <td>{row.created}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/recode/add">등록</Link>
        </>
    )
}

export default Recode
