import React from 'react';
import './crud.scss';

function Crud({setList, list, storage, setStorage, method, setMethod, url, setUrl, body, setBody, headers, setHeaders, setisLoading}){


async function handleChange(e) {
    e.preventDefault();
    const {name, value} = e.target
    if(name === 'url'){
      await setUrl(value);
    }
    else if(name === 'headers'){
        await setHeaders(value);
    }
    else if(name === 'body'){
        await setBody(value);
    }
    else if(name === 'method'){
        await setMethod(value);
    }
    // setText(url);
}

async function addCrud(e){
    e.preventDefault();
    await setisLoading(true);
        fetch(url, {
            mode: 'cors',
            method,
            body,
            headers,
        }).then(async getResponse => {
            let getData = await getResponse.json();
            console.log(getData);
            await setList(getData);
            await setBody(undefined);
            if(JSON.parse(localStorage.getItem('method'))){
                let getStorage = JSON.parse(localStorage.getItem('method'));
                if(!getStorage.contains({method, body, url})){
                    getStorage = [...getStorage, {method, body, url}];
                    localStorage.setItem('method', JSON.stringify(getStorage));
                }
            }else{
              let getStorage = [...getStorage, {method, body, url}];
                localStorage.setItem('method', JSON.stringify(getStorage));
                
            }
        
            
        })
        .catch(async error => {
            console.log(error);
            await setList(error);
        })
        await setisLoading(false);

        // props.results(getData)
        
}
const urlStyle = {
    color: "#FFFFFF"
}
return (
    <div>
            <form onSubmit={addCrud}>
                <label style={urlStyle}>URL:</label>
                <input type="text" name="url" onChange={handleChange} value={url}/>
                <select name="method" onChange={handleChange}>
                    <option value={method}>{method}</option>
                    <option value="POST">POST</option>
                    <option value="GET">GET</option>
                    <option value="DELETE">DELETE</option>
                    <option value="PUT">PUT</option>
                </select><br/>
                HEADERS: <textarea type="text" name="headers" value={headers} onChange={handleChange}></textarea>
                BODY: <textarea type="text" name="body" value={body} onChange={handleChange}></textarea>
                <button type='submit'>GO</button>
            </form>
<h3>{url} {method}</h3>
    </div>
)

}

export default Crud;
