/**
 * NPM packages.
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

/**
 * Project packages.
 */
import SignUp from './../../sign-up/components/sign-up.component';

/**
 * Building the "SharedFullHeightCenteredForm".
 */
const FullHeightContainer = (props) => (
  <section className='section is-flex full-height valign-center'>
    <div className="container">
      <div className="columns">
        <div className="column is-centered">
          { props.children }
        </div>
      </div>
    </div>
  </section>
);

const WelcomeTitle = () => (
  <div className="content is-medium has-text-centered">
    <h1 className='title'>Welcome to <span className='-is-affinitas is-primary'>Affinitas</span></h1>
  </div>
);

const CenteredForm = (props) => (
  <div className="columns">
    <div className="column is-one-third"></div>
    <div className="column is-one-third">
      { props.children }
    </div>
    <div className="column is-one-third"></div>
  </div>
);

const Content = () => (
  <Router>
    <Route exact path='/sign_up' component={SignUp} />
  </Router>
);

const SharedFullHeightCenteredForm = () => (
  <FullHeightContainer>
    <WelcomeTitle />

    <CenteredForm>
      <Content />
    </CenteredForm>
  </FullHeightContainer>
);

export default SharedFullHeightCenteredForm;
