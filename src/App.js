
import './App.css';
import Counter from './Counter';
import Gridcomponent from './Gridcomponent';
import PostdataComponent from './PostdataComponent';
import Home from './Home';
import { BrowserRouter,
  Route,
Routes
} from 'react-router-dom';

function App() {
  return (
    <div >
      {/* <Counter /> */}
      {/* <Gridcomponent />
      <PostdataComponent/> */}




<BrowserRouter>
<Home/>
<Routes>
  <Route exact path='/counter' element={<Counter />}/>
  <Route exact path='/gridcomponen' element={<Gridcomponent />}/>
   <Route exact path='postdataComponent' element={<PostdataComponent/>}/> 
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
