import React from 'react'
import { Table } from 'antd'


export default function({columns, data}) {
    return (
        <Table columns={columns} dataSource={data} />
    )
}