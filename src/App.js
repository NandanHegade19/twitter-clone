import './App.css';
import Newsfeed from './Components/Newsfeed';
import Sidebar from './Components/Sidebar';
import Widgets from './Components/Widgets';


function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Newsfeed/>
      <Widgets/>
    </div>
  );
}

export default App;
