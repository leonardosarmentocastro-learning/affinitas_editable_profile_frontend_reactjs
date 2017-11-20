/**
 * NPM packages.
 */
import React, { Component } from 'react';

/** Class component. */
class SignUpFormSelectField extends Component {
  render() {
    /** Extracting custom properties. */
    const { label, listOfItems } = this.props;

    const template = (
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <div className="select -is-affinitas">
            <select>
              <option />
              {listOfItems.map(item => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );

    return template;
  }
}

/** Functional component. */
/** TODO */

export default SignUpFormSelectField;
