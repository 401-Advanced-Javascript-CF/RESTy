// import react from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
function Header({storage, setMethod, setUrl, body, setBody}){
    let items;

    async function handleClick(e){
        let results = e.target.innerText.split(':');
        let method = results[1].split(' ')[0];
        let url = results[2].split(' ')[1] + results[3] + results[4];
        await setMethod(method);
        await setUrl(url);
    }    

    if(storage){
        console.log(storage);
    items = storage.storage.map((item, i) => <section><Link  to="/" key={i*500} onClick={handleClick}>Method:{item.method} Url: {item.url}</Link><br/></section>);
    }

    return (
        <header>
            <nav>
            <h1>RESTy</h1>
            <div className="navbar">
    <Link to='/'>Form</Link>
    <div class="dropdown">
        <button className="dropbtn">History
        <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
            <Link to="/history">All</Link>
        {items}
    </div>
  </div> 
    <Link to='/help'>Help</Link>
</div>
        </nav>
        </header>
        
    )
}

export default Header;