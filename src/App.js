import React, { Fragment } from 'react';
import Login from './pages/login';
import Home from './pages/home';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// import styles from './styles/main.less';


function App() {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          {/* exact表示是否精确匹配 */}
          <Route exact path="/" component={Home} />
          {/* <Redirect>表示以上都没有匹配成功的会，默认跳转的路由 */}
          <Redirect to={"/home"} />
        </Switch>
      </HashRouter>
    </Fragment>
  );
}

export default App;
