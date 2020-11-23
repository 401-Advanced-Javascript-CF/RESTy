import React from 'react';
import {Link} from 'react-router-dom'
import './history.scss';

function History({storage, setMethod, setUrl, body, setBody}){
    let items = 'No History';

    async function handleClick(e){
        let results = e.target.innerText.split(':');
        let method = results[1].split(' ')[0];
        let url = results[2].split(' ')[1] + results[3] + results[4];
        await setMethod(method);
        await setUrl(url);
        
    }    

    if(storage){
        console.log(storage);
    items = storage.storage.map((item, i) => <section><Link className="history" to="/" key={i} onClick={handleClick}>Method:{item.method} Url: {item.url} Body: {item.body}</Link><br/></section>);
    }
    
    return (
    <ul id="ul">
        {items}
    </ul>
    )
}

export default History;