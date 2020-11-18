import React, {useState} from 'react';
import Footer from '../footer/footer.js';
import Header from '../header/header.js';
import Crud from '../crud/crud.js';
import Results from '../results/results.js';

function App() {
  const [list, setList] = useState(false);
  console.log(list);
  return (
    <div>
    <Header />
    <Crud results={setList}/>
    <Results results={list} />
    <Footer />
    </div>
  );
}

export default App;
