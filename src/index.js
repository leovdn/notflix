import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import cadastroVideo from './pages/cadastro/Video';
import erro404 from './pages/erro404';
import cadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={cadastroVideo} />
      <Route path="/cadastro/categoria" component={cadastroCategoria} />
      <Route component={erro404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
