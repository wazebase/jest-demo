import { render, screen } from '@testing-library/react';
import App from '../App';
import {shallow} from 'enzyme';

describe('App',function(){



it('renders learn react link', () => {
 let mountedApp = shallow(<App />);

});

it('renders a StoreLocator', () => {
  let mountedApp = shallow(<App />);
  const locators = mountedApp.find('StoreLocator');
  expect(locators.length).toBe(1);
});

});