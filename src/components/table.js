import React from 'react'
import { Table } from 'antd'


export default function({columns, data, page, change}) {
    return (
        <Table columns={columns} dataSource={data} onChange={change} scroll={{scrollToFirstRowOnChange: true}}  pagination={{total:page?.total}} />
    )
}