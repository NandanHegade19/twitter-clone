import './App.css';
import Newsfeed from './Components/Newsfeed';
import Sidebar from './Components/Sidebar';
import Widgets from './Components/Widgets';
import { useStateValue } from './StateProvider';
import LoginPage from './Components/LoginPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ExplorePage from './Components/ExplorePage';
import MessagesPage from './Components/MessagesPage';
import BookmarksPage from './Components/BookmarksPage';
import NotificationPage from './Components/NotificationPage';


function App() {

  const [{user} , dispatch] = useStateValue();
  return (
    <div className="app">
      <Router>
        {
          user ? (
          <>
            <Sidebar/>
            <Switch>
              <Route path = '/explore'>
                <ExplorePage/>
              </Route>
              <Route path = '/notifications'>
                <NotificationPage/>
              </Route>
              <Route path = '/messages'>
                <MessagesPage/>
              </Route>
              <Route path = '/bookmark'>
                <BookmarksPage/>
              </Route>
              <Route path = "/">
                <Newsfeed/>
              </Route>
            </Switch>
            <Widgets/>
          </>
          ) : (<LoginPage/>)
        }
      </Router>
    </div>
  );
}

export default App;