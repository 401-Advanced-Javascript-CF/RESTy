import React, {useState} from 'react';
import './crud.scss';

function Crud(props){
const [url, setUrl] = useState('');
const [method, setMethod] = useState('');
const [header, setHeader] = useState('Content-Type: application/json');
const [body, setBody] = useState(undefined);
async function handleStuff(){
    if(props.methods && props.urls){
        await setUrl(props.urls);
        await props.setUrls(null);
        await setMethod(props.methods);
        await props.setMethods(null);
    
    }
}
handleStuff();

async function handleChange(e) {
    e.preventDefault();
    console.log(url);
    const {name, value} = e.target
    if(name === 'url'){
      await setUrl(value);
    }
    else if(name === 'header'){
        await setHeader(value);
    }
    else if(name === 'body'){
        await setBody(value);
    }
    else if(e.target.value === 'GET' || e.target.value === 'POST' || e.target.value === 'PUT' || e.target.value === 'DELETE'){
        await setMethod(value);
    }
    // setText(url);
}

async function addCrud(e){
    e.preventDefault();
        let getResponse = await fetch(url, {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            method,
            body
        });
        let getData = await getResponse.json();
        // console.log(getData);
        // props.results(getData)
        props.results(getData);
        setBody(undefined);
        
        let getStorage = JSON.parse(localStorage.getItem('method'));
        getStorage.push({url: url, method: method});
        localStorage.setItem('method', JSON.stringify(getStorage));
        props.setStorage(true);
        console.log(getStorage);

}

return (
    <div>
            <form onSubmit={addCrud}>
                URL:<input type="text" name="url" onChange={handleChange} defaultValue={url}/><br/>
                HEADERS: <textarea type="text" name="header" value={header} onChange={handleChange}></textarea>
                BODY: <textarea type="text" name="body" value={body} onChange={handleChange}></textarea>
                <select name="crud" onChange={handleChange}>
                    <option value={method}>{props.methods}</option>
                    <option value="POST">POST</option>
                    <option value="GET">GET</option>
                    <option value="DELETE">DELETE</option>
                    <option value="PUT">PUT</option>
                </select>
                <button onClick={handleChange} name='method' value='POST'>POST</button>
                <button onClick={handleChange} name='method' value='PUT'>PUT</button>
                <button onClick={handleChange} name='method' value='GET'>GET</button>
                <button onClick={handleChange} name='method' value='DELETE'>DELETE</button><br/>
                <button type='submit'>GO</button>
            </form>
<h3>{url} {method}</h3>
    </div>
)

}

export default Crud;
