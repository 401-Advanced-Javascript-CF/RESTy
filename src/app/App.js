import React, {useState, useEffect} from 'react';
import Footer from '../footer/footer.js';
import Header from '../header/header.js';
import Crud from '../crud/crud.js';
import Results from '../results/results.js';
import History from '../history/history.js';
import If from '../if/if.js';
import Help from '../help/help.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './app.scss';

function App() {
  const [list, setList] = useState(null);
  const [storage, setStorage] = useState(false);
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');
  const [headers, setHeaders] = useState(undefined);
  const [body, setBody] = useState(undefined);
  const [isLoading, setisLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  async function fetchData(){
    let retrieval = JSON.parse(localStorage.getItem('method'));
    console.log(retrieval);
    await setStorage({storage: retrieval})
  };

  useEffect(()=> {
    fetchData();
  }, []);

  
  return (
    <div>
      <BrowserRouter>
    <Header
    storage={storage}
    isStorage={storage}
    setMethod={setMethod}
    setUrl={setUrl}
    body={body}
    setBody={setBody}
    />
     <If condition={isLoading}>
       <p>...loading</p>
     </If>
    <Switch>
    <Route exact path='/'>
    <Crud 
    setList={setList}
    list={list}
    storage={storage}
    setStorage={setStorage}
    method={method}
    setMethod={setMethod}
    url={url}
    setUrl={setUrl}
    body={body}
    setBody={setBody}
    headers={headers}
    setHeaders={setHeaders}
    setisLoading={setisLoading}
     />
    <Results list={list} />
    <History
    storage={storage}
    isStorage={storage}
    setMethod={setMethod}
    setUrl={setUrl}
    body={body}
    setBody={setBody}
    />
     </Route>
     <Route path='/help'>
       <Help />
     </Route>
    <Route path="/history">
    <History
    storage={storage}
    isStorage={storage}
    setMethod={setMethod}
    setUrl={setUrl}
    body={body}
    setBody={setBody}
    />
    </Route>
    </Switch>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
