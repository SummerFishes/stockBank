import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchChartData = createAsyncThunk('chart/fetch', async (fre,{dispatch}) => {
    let startTime = "", endTime = ""
    let gap = 0
    getNowDate()
    function getNowDate(){
        let date = new Date();
        startTime = calculateDate(date)
        switch(fre){
            case '1D':
                gap = 1
                break
            case '1W':
                gap = 7
                break
            case '2W':
                gap = 14
                break
            case '1M':
                gap = 30
                break
            case '3M':
                gap = 90
                break
            case '6M':
                gap = 180
                break
            case '1Y':
                gap = 365
                break
            case 'YTD':
                gap = 3650
                break
            default:
                break
        }
        date.setDate(date.getDate() - gap + 1)
        endTime = calculateDate(date)
    }

    function calculateDate(date){
        let seperator1 = "-";
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        let currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    }


    const graphPost = {
        'startTime' : startTime,
        'endTime' : endTime
    }
    const res = await fetch(`/trade/showGraph`,{
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(graphPost)
            })

    let data = {value: []}
    if(res.ok){
        data = await res.json()
        console.log("chart数据：",data)
    }
    return data
})

const chartReducer = createSlice({
    name: 'chart',
    initialState: {data: {value: []}, loading: false},
    reducers: {
        setChartData(state,action) {
            state.data = action.payload
        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchChartData.pending, (state,action) => {
            state.loading = true
        })
        .addCase(fetchChartData.fulfilled, (state,action) => {
            state.loading = false
            state.data = action.payload
        })
        .addCase(fetchChartData.rejected, (state,action) => {
            state.loading = false
        })
    }
})

export const {setChartData} = chartReducer.actions

export default chartReducer.reducer