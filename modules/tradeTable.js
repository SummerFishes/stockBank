import setTableData from "./setTable.js"

// #####  fetch  #####

// export default function getTableData(fre){
//     console.log(`./data/${fre}.json`)
//     fetch(`./data/${fre}.json`).then(res => {
//         if (res.ok){
//             return res.json()
//         }
//     }).then(data => {
//         console.log("data.value="+data.value)
//         console.log("len="+data.value.length)
//         setTableData(data)
//     })
// }


// ##### XMLHttpRequest #####

export default function getTableData(fre){
    const requestURL = `./data/${fre}.json`;
    const request = new XMLHttpRequest();
    console.log(requestURL)
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function(){
        let data = request.response;
        setTableData(data
            )
    }
}
//done