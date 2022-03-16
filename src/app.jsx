import React, { useState, useEffect} from 'react';
import Greeter from './Components/greeter';
const App = () => {
    const [username, setUsername] = useState(' ');
    const [loaded, setLoaded] = useState(false);
    const [ count, setCount ] =useState(0);

   
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 3000);
    },[] );

   

    if (loaded == false) {
        return (< >
            <header>Website Loading...</header>
            <button onClick={() => setLoaded(true)}> Click me to load</button>
        </>

        );


    } else{
        return( 
        < >
            <h1>
                <Greeter phrase="Hello" name="Rod" />
                <Greeter phrase="Hello" name="Drew" />
                <Greeter phrase="Hello" name="Ken" />

            </h1>
            <input value={username} onChange={e => setUsername(e.target.value)} />
            <p> You are Logging in as {username}</p>
        </> 
        )    

    }   
    
    
};


export default App;