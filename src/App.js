import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import routes from './pages';
//import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';

@inject('store', 'routing')
@withRouter
@observer
export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store.appStore;
  }

  handleLocalChange = lang => {
    this.store.setLocaleLang(lang);
  };

  handleToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  componentDidMount() {
    const { lang } = this.store;
    document.title =
      lang === 'zh-CN'
        ? '比特币区块浏览器 - BTC.com'
        : 'Bitcoin Block Explorer - BTC.com';
  }

  render() {
    return (
      <div className="relative">
        <div>
          <Switch>
            {routes.map((route, index) => (
              <Route key={`${route.name}-${index}`} {...route} />
            ))}
          </Switch>
        </div>
      </div>
    );
  }
}
