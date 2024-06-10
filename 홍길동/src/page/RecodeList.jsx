import { useState } from 'react'
import { Link } from 'react-router-dom'

function Recode() {
    const [recordList, setRecordList] = useState([
        {
            id: 1,
            subject: '기록 1',
            content: '첫 기록',
            created: '2024-06-10',
        },
        {
            id: 2,
            subject: '기록 2',
            content: '두번째 기록',
            created: '2024-06-10',
        },
        {
            id: 3,
            subject: '기록 3',
            content: '세번째 기록',
            created: '2024-06-10',
        },
        {
            id: 4,
            subject: '기록 4',
            content: '네번째 기록',
            created: '2024-06-10',
        },
    ])

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
        </>
    )
}

export default Recode
