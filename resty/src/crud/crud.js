import React, {useState} from 'react';

function Crud(){
const [url, setUrl] = useState('');
const [crud, setCrud] = useState('');
// const [text, setText] = useState('');

function handleChange(e) {
    const {value} = e.target
    setUrl(value);
    // setText(url);
    console.log(url);
}

function addCrud(e){
    e.preventDefault();
    setCrud(e.target.innerText);
    // setText(text + ' ' + crud);
    console.log(crud);
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
