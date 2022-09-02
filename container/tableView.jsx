import React,{useEffect, useState} from "react"
import FreGroup from '../component/freGroup'
import Table from '../component/table'
import { Pagination } from 'antd';

export default function TableView(props) {
    //获取表格数据
    let val1 = props.tableData.value
    const [val,setVal] = useState(val1)
    const len = val.length
    useEffect(() => {
        setVal(val1)
    },[val1])
    useEffect(() => {
        setVal(val)
    },[val])
    //显示当前页数据，实现分页
    const [current, setCurrent] = useState(1)
    const [list, setList] = useState({})
    const [dePageSize,setPage] = useState(10)

    //重新拼凑tableData，因为props属性的不可更改特性
    const newTableData = {
        'value': val.slice((current - 1) * dePageSize, current * dePageSize),
        'buyNotional': props.tableData.buyNotional,
        'netNotional': props.tableData.netNotional,
        'quantity': props.tableData.quantity,
        'sellNotional': props.tableData.sellNotional,
        'totalBuy': props.tableData.totalBuy,
        'totalSell': props.tableData.totalSell,
        "records": props.tableData.records
    }
    
    useEffect(() => {
        setCurrent(1)
        setList(newTableData)
        setPage(dePageSize)
    },[props.fre])

    useEffect(() => {
        setList(newTableData)
        setPage(dePageSize)
    },[JSON.stringify(newTableData)])
    
    const onChange = (page,pageSize) => {
        console.log("当前页",page,pageSize);
        setCurrent(page);
        newTableData.value = val.slice((page - 1) * pageSize, page * pageSize)
        setList(newTableData)
      };
    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
        setPage(pageSize)
    };

    return <section className="table-area">
        <FreGroup selectFre = {props.selectFre} fre={props.fre}/>
        <Table tableData = {list} fre={props.fre} setVal={setVal}/>
        <div className="sperate-line"></div>
        <Pagination style={{display:"flex",alignItems:"center",justifyContent:"flex-end"}} 
        current={current} onChange={onChange} total={len} defaultPageSize={dePageSize} showSizeChanger onShowSizeChange={onShowSizeChange}/>
        <div className="sperate-line"></div>
    </section>
}