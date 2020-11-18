import React from 'react';
import JSONPretty from 'react-json-pretty';

function Results(props){
    let data;
    if(props.results){
        data = <JSONPretty id="json-pretty" data={props.results}></JSONPretty>;
    }
    
    return(
        <ul>
            {data}
        </ul>
    )
}

export default Results;