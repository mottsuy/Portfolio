import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import { far } from '@fortawesome/free-regular-svg-icons'; 
import TopPage from './pages/index';
import Study from './pages/study';
import ScrollTop from './lib/ScrollTop';


library.add(fas, far);

const handleLocationChange = (prevState, nextState) => {
  if (nextState.location.action !== "POP") {
    window.scrollTo(0, 0);
  }
};

export default () => (
  <BrowserRouter>
    <ScrollTop />
    <Switch>
      <Route exact path="/" component={TopPage} onChange={handleLocationChange}/>
      <Route path="/study" component={Study} />
    </Switch>
  </BrowserRouter>
  )
