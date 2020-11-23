
function Help(){
    return (
        <div>
            <h1>Help Page</h1>
            <h2>Requests</h2>
            <ul>
                <li>
                    <h3>Url: Enter the url you want to do your request on, this includes the query and any key that may need to be in theu url. Refer to the API's documentation that you are testing</h3>
                </li>
                <li>
    <h3>Body: If you are doing a put or post enter the information you want to enter: {"{\"name\":\"bob\"}"}</h3>
                </li>
                <li>
    <h3>Header: if the url you are sending a request to requres any kind of authorization, key etc enter it hear: {"\"Authorization\": \"Bearer: token\""}</h3>
                </li>
            </ul>
            <h2>Results</h2>
            <h3>The results will appear below the form with the results you wanted or with an error with the requests</h3>
            <h2>History</h2>
            <ul>
                <li>
                    <h3>The history of past requests will appear on the left side, please click these and it will autofill out the form. Then just click go</h3>
                </li>
                <li>
                    <h3>If you click on the history link, this will take you to a page full of past requests. if you click these they will redirect to you an already filled out form</h3>
                </li>
            </ul>
        </div>
    )
}

export default Help;