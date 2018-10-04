import React from 'react';
import App from './App';
import Main from './containers/Main';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const app = shallow(<App />);

  // expect
  expect(app.find(Main)).toHaveLength(1);

});
