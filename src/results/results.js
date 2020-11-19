import React from 'react';
import JSONPretty from 'react-json-pretty';

function Results({results}){
    let data;
    if(results){
        data = <JSONPretty id="json-pretty" data={results}></JSONPretty>;
    }
    
    return(
        <ul>
            {data}
        </ul>
    )
}

export default Results;