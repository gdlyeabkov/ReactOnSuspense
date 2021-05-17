import { React, Suspense } from 'react';
import {ReactDOM} from 'react-dom'
import {Users} from './Users';
import {Posts} from './Posts';
import {useResource} from './resource';
import logo from './logo.svg';
import './App.css';
const resource = useResource
function App() {
  return (
    <div className="App">
      <h1>Suspense for data fetching</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Users resource={resource}/>  
        <Posts resource={resource}/>
      </Suspense>
    </div>
  );
}

export default App;
