import React from 'react';


function History({storage, isStorage, setMethod, setUrl}){
    let items = 'No History';

    function handleClick(e){
        let results = e.target.innerText.split(':');
        let method = results[1].split(' ')[0];
        let url = results[2].split(' ')[1] + results[3] + results[4];
        setMethod(method);
        setUrl(url);

    }    

    if(isStorage){
    items = storage('method').map(item => <button onClick={handleClick}>Method:{item.method} Url: {item.url}</button>);
    }
    
    return (
    <ul id="ul">
        {items}
    </ul>
    )
}

export default History;