import * as React from 'react';
import {Route} from 'react-router-dom';
import {
  SplashMain,
  Welcome,
  SettingContainer,
  MainContainer
} from '../routes';
import '../style/app.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route
          exact={true}
          path="/"
          component={SplashMain}
        />
        <Route path="/welcome" component={Welcome} />
        <Route path="/setting" component={SettingContainer} />
        <Route path="/main" component={MainContainer} />
      </div>
    );
  }
}

export default App;
