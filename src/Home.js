import React from 'react';
import {Link} from 'react-router-dom'

const Home =()=>{


return (
    <div>
       <Link to='/counter'><h1>Counter</h1></Link> 
       <Link to='/gridcomponen'><h1>Gridcomponent</h1></Link> 
       <Link to='/postdataComponent'><h1>PostdataComponent</h1></Link> 
        
        
    </div>
)
}
export default Home;