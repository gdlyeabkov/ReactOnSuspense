import React,{React} from 'react';
import logo from './logo.svg';
import './App.css';
const resource=useResource
function App() {
  return (
    <div className="App">
      <h1>Suspense for data fetching</h1>
      {/* <Suspense fallback={<p>Loading posts...</p>}>
        <Posts resource={resource}/>  
      </Suspense>
      <Suspense fallback={<p>Loading users...</p>}>
        <Users resource={resource}/>  
      </Suspense> */}
      <Suspense fallback={<p>Loading...</p>}>
        <Users resource={resource}/>  
        <Posts resource={resource}/>  
      </Suspense>
    </div>
  );
}

export default App;
