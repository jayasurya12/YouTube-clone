import React from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Home from './pages/Home'
import userReducer from './store/Reducer/Reducer'
const App = () => {
  const store=createStore(userReducer)
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
