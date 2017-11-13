/**
 * NPM packages.
 */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

/**
 * Project packages.
 */
import SignUpComponent from './../../sign-up/components/sign-up.component';

class FullHeightCenteredForm extends Component {
  render() {
    const template = (
      <section className='section is-flex full-height valign-center'>
        <div className="container">
          <div className="columns">
            {/* content */}
            <div className="column is-centered">
              <div className="content is-medium has-text-centered">
                <h1 className='title'>Welcome to <span className='-is-affinitas is-primary'>Affinitas</span></h1>
              </div>

              <div className="columns">
                <div className="column is-one-third"></div>
                <div className="column is-one-third">
                  <Router>
                    <Route exact path='/sign_up' component={SignUpComponent} />
                    { /* TODO:  <Route exact path='/sign_in' component={} /> */}
                  </Router>
                </div>
                <div className="column is-one-third"></div>
              </div>
            </div>
            {/* content */}
          </div>
        </div>
      </section>
    );

    return template;
  }
}

export default FullHeightCenteredForm;
