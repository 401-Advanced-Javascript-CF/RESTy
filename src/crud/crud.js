import React, {useState} from 'react';

function Crud(props){
const [url, setUrl] = useState('');
const [crud, setCrud] = useState('');
// const [text, setText] = useState('');

function handleChange(e) {
    const {value} = e.target
    setUrl(value);
    // setText(url);
    console.log(url);
}

async function addCrud(e){
    e.preventDefault();
    setCrud(e.target.innerText);
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
        props.results(data)
    // setText(text + ' ' + crud);
}


return (
    <div>
            <form>
                URL:<input type="text" name="url" value={url} onChange={handleChange}/>
            </form>
                <button onClick={addCrud}>POST</button>
                <button onClick={addCrud}>PUT</button>
                <button onClick={addCrud}>GET</button>
                <button onClick={addCrud}>DELETE</button>
<h3>{url} {crud}</h3>
    </div>
)

}

export default Crud;
