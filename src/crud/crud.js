import React from 'react';
import './crud.scss';

function Crud({results, isStorage, setStorage, method, setMethod, url, setUrl, body, setBody, headers, setHeaders}){


async function handleChange(e) {
    e.preventDefault();
    console.log(url);
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
        let getResponse = await fetch(url, {
            mode: 'cors',
            method,
            body,
            headers,
        });
        let getData = await getResponse.json();
        // console.log(getData);
        // props.results(getData)
        await results(getData);
        await setBody(undefined);
        if(isStorage){
            let getStorage = JSON.parse(localStorage.getItem('method'));
            getStorage = [...getStorage, {url, method}];
            localStorage.setItem('method', JSON.stringify(getStorage));
        }
        else{
            localStorage.setItem('method', JSON.stringify([{url, method}]));
        }
        await setStorage(true);

}

return (
    <div>
            <form onSubmit={addCrud}>
                URL:<input type="text" name="url" onChange={handleChange} value={url}/><br/>
                HEADERS: <textarea type="text" name="headers" value={headers} onChange={handleChange}></textarea>
                BODY: <textarea type="text" name="body" value={body} onChange={handleChange}></textarea>
                <select name="method" onChange={handleChange}>
                    <option value={method}>{method}</option>
                    <option value="POST">POST</option>
                    <option value="GET">GET</option>
                    <option value="DELETE">DELETE</option>
                    <option value="PUT">PUT</option>
                </select>
                {/* <button onClick={handleChange} name='method' value='POST'>POST</button>
                <button onClick={handleChange} name='method' value='PUT'>PUT</button>
                <button onClick={handleChange} name='method' value='GET'>GET</button>
                <button onClick={handleChange} name='method' value='DELETE'>DELETE</button><br/> */}
                <button type='submit'>GO</button>
            </form>
<h3>{url} {method}</h3>
    </div>
)

}

export default Crud;
