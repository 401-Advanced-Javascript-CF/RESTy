import React, {useState} from 'react';
import Footer from '../footer/footer.js';
import Header from '../header/header.js';
import Crud from '../crud/crud.js';
import Results from '../results/results.js';
import History from '../history/history.js';

function App() {
  const [list, setList] = useState(false);
  const [storage, setStorage] = useState(true);
  const [methods, setMethods] = useState('');
  const [urls, setUrls] = useState('');

  function getStorage(name){
    return JSON.parse(localStorage.getItem(name))
  }
  return (
    <div>
    <Header />
    <Crud results={setList} setStorage={setStorage} methods={methods} setMethods={setMethods} urls={urls} setUrls={setUrls} />
    <Results results={list} />
    <History storage={getStorage} isStorage={storage} setMethod={setMethods} setUrl={setUrls}/>
    <Footer />
    </div>
  );
}

export default App;
