import React, { useState } from "react"
import { Button,Input,Modal,Table } from 'antd';
const {Search} = Input
export default function NLPTrade(props){
    //输入的内容
    const [val,setVal] = useState('')
    const [visible, setVisible] = useState(false);
    const [nlpData,setNlpData] = useState({})

    function inputChange(e){
        setVal(e.target.value)
    }
    
      const hideModal = () => {
        setVisible(false);
      };

    function onClickHandler(){
        if(val === ""){
            Modal.error({
                content: "提交失败，请输入数据",
                centered: true,
                destroyOnClose: true,
                onOk() {}
            })
        }else{
            const post_data = {'sentence': val}
            console.log("nlp_post_data: ", post_data)
            fetch(`http://192.168.43.192:5000/nlp`,{
            method: 'POST',
            headers: new Headers({
            'Content-Type': 'application/json'
            }),
            body: JSON.stringify(post_data)
            }).then(res => {
            if(res.ok){
            return res.json()
            }
            }).then(data => {
                setVisible(true)
                setNlpData(data)
                //alert(JSON.stringify(data))
            })
        }
        
    }

    const columns = [
        {
          title: 'Name',
          dataIndex: 'NAME',
          align: 'center',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Ticker',
          dataIndex: 'TICKER',
          align: 'center',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Notional',
          dataIndex: 'NOTIONAL',
          align: 'center',
          render: (text) => <a>{text}</a>,
        },
        {
            title: 'Result',
            dataIndex: 'result',
            align: 'center',
            render: (text) => <a>{text}</a>,
        },
    ]   

    const data = [nlpData]

    return <div className="trade-nlp" style={{display: 'none'}}>
        <div className="trade-input-item">
            <div className="trade-input-title">NLP Trade</div>
            <Input style={{width: '320px'}} className="trade-input trade-nlp-input" placeholder="text input" onChange={inputChange}/>
        </div>
        <div className="trade-submit-btns">
            <Button className="trade-btn trade-go" type="primary" onClick={onClickHandler} >Go</Button>
            {/* <Modal title="NLP Response :" visible={visible} onOk={hideModal} onCancel={hideModal} centered={true} destroyOnClose={true}>
                <p>result: {nlpData.result}</p>
                <p>name: {nlpData.NAME}</p>
                <p>ticker: {nlpData.TICKER}</p>
                <p>notional: {nlpData.NOTIONAL}</p>
            </Modal> */}
            <Modal title="命名实体识别结果如下 :" visible={visible} centered={true} width={1000} onOk={hideModal} onCancel={hideModal}>
                <Table columns={columns} dataSource={data} bordered pagination={false}/>
            </Modal>
        </div>
    </div>
}

