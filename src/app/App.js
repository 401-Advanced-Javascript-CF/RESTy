import React, {useState} from 'react';
import Footer from '../footer/footer.js';
import Header from '../header/header.js';
import Crud from '../crud/crud.js';
import Results from '../results/results.js';
import History from '../history/history.js';

function App() {
  const [list, setList] = useState(false);
  const [storage, setStorage] = useState(false);
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');
  const [headers, setHeaders] = useState(undefined);
  const [body, setBody] = useState(undefined);

  function getStorage(name){
    return JSON.parse(localStorage.getItem(name))
  }
  return (
    <div>
    <Header />
    <Crud 
    results={setList}
    isStorage={storage}
    setStorage={setStorage}
    method={method}
    setMethod={setMethod}
    url={url}
    setUrl={setUrl}
    body={body}
    setBody={setBody}
    headers={headers}
    setHeaders={setHeaders}
     />
    <Results
    results={list}
    />
    <History
    storage={getStorage}
    isStorage={storage}
    setMethod={setMethod}
    setUrl={setUrl}
    />
    <Footer />
    </div>
  );
}

export default App;
