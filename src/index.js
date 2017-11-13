/**
 * NPM packages.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from 'react-router-dom';

/**
 * Project packages.
 */
import FullHeightCenteredForm from './app/modules/shared/components/full-height-centered-form.component';
// import SignUpComponent from './app/modules/sign-up/components/sign-up.component';
// import registerServiceWorker from './app/registerServiceWorker';

/**
 * Styles.
 */
import './assets/css/theme/box-modal.css';
import './assets/css/theme/box.css';
import './assets/css/theme/buttons.css';
import './assets/css/theme/colors.css';
import './assets/css/theme/figures.css';
import './assets/css/theme/form.css';
import './assets/css/theme/general.css';
import './assets/css/theme/inputs.css';
import './assets/css/theme/loading-screen.css';
import './assets/css/theme/modifiers.css';
import './assets/css/theme/navbar.css';
import './assets/css/theme/section.css';
import './assets/css/theme/select.css';
import './assets/css/theme/tabs.css';
import './assets/css/theme/typography.css';

import './assets/css/third-party/bulma/bulma.css';
import './assets/css/third-party/font-awesome/css/font-awesome.min.css';
import './assets/css/third-party/font-awesome/fonts/fontawesome-webfont.eot';
import './assets/css/third-party/font-awesome/fonts/fontawesome-webfont.svg';
import './assets/css/third-party/font-awesome/fonts/fontawesome-webfont.ttf';
import './assets/css/third-party/font-awesome/fonts/fontawesome-webfont.woff';
import './assets/css/third-party/font-awesome/fonts/fontawesome-webfont.woff2';
import './assets/css/third-party/font-awesome/fonts/FontAwesome.otf';

/**
 * Application.
 */
const App = () => (
  <Router>
    <div className="full-height">
      <Route exact path='/' render={ () => (<Redirect to='/sign_up' />) } />
      <Route exact path='/sign_up' component={FullHeightCenteredForm}/>
    </div>
  </Router>
);

const component     = {instance: null};
component.instance  = <App/>;

const container             = {instance: {inTheDOM: null}, selector: null};
container.selector          = '#root';
container.instance.inTheDOM = document.querySelector(container.selector);

ReactDOM.render(component.instance, container.instance.inTheDOM);
// registerServiceWorker();
