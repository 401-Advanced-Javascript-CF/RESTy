import React from 'react';
import JSONPretty from 'react-json-pretty';
import './results.scss';
function Results(props){
    let data;
    // console.log(props.location.state);
    if(props.list !== null){
        data = <JSONPretty id="json-pretty" data={props.list}></JSONPretty>;
    }
    return(
        <div>
        <p>Results</p>
            <p>{data}</p>
            </div>
    )
}

export default Results;