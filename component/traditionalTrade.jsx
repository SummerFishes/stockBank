import React, { useState } from "react"
import TradeInput from "./tradeInput"
import { Button,Modal,Table } from 'antd';
import {MessageOutlined} from '@ant-design/icons'
export default function TraditionalTrade(props){

    const {fre,selectFre} = props
    
    //传输数据
    const [tradePost,setTradePost] = useState(
        {
            'clientName' : '',
            'ticker' : '',
            'ric' : '',
            'size' : '',
            'price' : '',
            'currency' : '',
            'sector' : '',
            'salesperson' : '',
            'hp' : 'HT',
            'flag' : ''
        }
    )
    

    function onClickHandler(evt) {
        console.log(evt)
        const tradeE1 = evt.target.className  || evt.currentTarget.className
        //0买1卖
        tradePost.flag = -1
        if(tradeE1 === "ant-btn ant-btn-default trade-btn trade-buy") tradePost.flag = 0
        else if(tradeE1 === "ant-btn ant-btn-default trade-btn trade-sell") tradePost.flag = 1
        setTradePost(tradePost)
        console.log("tradePost",tradePost)
        setVisible(true)
    }
        
    function getData(){  
        if(tradePost.clientName == "" || tradePost.ticker == "" || tradePost.ric == "" || tradePost.size =="" 
        || tradePost.price == "" || tradePost.currency == "" ||tradePost.sector == "" || tradePost.sector == ""
        || tradePost.salesperson == ""){
            Modal.error({
                content: "提交失败，请完善数据",
                centered: true,
                destroyOnClose: true,
                onOk() {}
            })
        }else{
            setVisible(false)
            fetch(`/trade/addTrade`,{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(tradePost)
            }).then(res => {
                if(res.ok){
                    return res.json()
                }
                return {value:[]}
            }).then(data => {
                //实时更新
                selectFre(fre)
                Modal.info({
                    title: 'Response :',
                    content: data.result,
                    centered: true,
                    destroyOnClose: true,
                    icon: <MessageOutlined />,
                    onOk() {}
                })
                // alert(data.result)
            })
        }    
    }

    const columns = [
        {
          title: 'Client Name',
          dataIndex: 'clientName',
          align: 'center',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Ticker',
          dataIndex: 'ticker',
          align: 'center',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'RIC',
          dataIndex: 'ric',
          align: 'center',
          render: (text) => <a>{text}</a>,
        },
        {
            title: 'Size',
            dataIndex: 'size',
            align: 'center',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            align: 'center',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Currency',
            dataIndex: 'currency',
            align: 'center',
            render: (text) => <a>{text}</a>,
          },
          {
            title: 'Issue Sector',
            dataIndex: 'sector',
            align: 'center',
            render: (text) => <a>{text}</a>,
          },
          {
              title: 'Salesperson',
              dataIndex: 'salesperson',
              align: 'center',
              render: (text) => <a>{text}</a>,
          },
          {
              title: 'HT/PT',
              dataIndex: 'hp',
              align: 'center',
              render: (text) => <a>{text}</a>,
          }
    ];
    const [visible, setVisible] = useState(false);
    const data = [tradePost]
    const hideModal = () => {
        setVisible(false);
      };

    return <div className="trade-traditional">
        <div className="trade-input-items">
            <TradeInput type="input" label="Client Name" tradePost={tradePost} setTradePost={setTradePost}/>
            <TradeInput type="input" label="Ticker" tradePost={tradePost} setTradePost={setTradePost}/>
            <TradeInput type="input" label="RIC" tradePost={tradePost} setTradePost={setTradePost}/>
            <TradeInput type="input" label="Size" tradePost={tradePost} setTradePost={setTradePost}/>
            <TradeInput type="input" label="Price" tradePost={tradePost} setTradePost={setTradePost}/>
            <TradeInput type="input" label="Currency" tradePost={tradePost} setTradePost={setTradePost}/>
            <TradeInput type="input" label="Issue Sector" tradePost={tradePost} setTradePost={setTradePost}/>
            <TradeInput type="input" label="Salesperson" tradePost={tradePost} setTradePost={setTradePost}/>
            <TradeInput type="select" label="HT/PT" options={["HT","PT"]} tradePost={tradePost} setTradePost={setTradePost}/>
        </div>
        <div className="trade-submit-btns">
            <Button className="trade-btn trade-buy" onClick={e => onClickHandler(e)}>Buy</Button>
            <Button className="trade-btn trade-sell" onClick={e => onClickHandler(e)}>Sell</Button>
            <Modal title="确认订单(请录入所有数据) :" visible={visible} centered={true} destroyOnClose={true} width={1000} onOk={getData} onCancel={hideModal}>
                <Table columns={columns} dataSource={data} bordered pagination={false}/>
            </Modal>
        </div>
    </div>
}


