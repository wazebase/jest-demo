import { render, screen } from '@testing-library/react';
import App from '../App';
import React from 'react';
import {shallow} from 'enzyme';
import StoreLocator from '../StoreLocator';

describe('StoreLocator', function(){

let mountedStoreLocator;
beforeEach(()=> {
   mountedStoreLocator = shallow(<StoreLocator />);  
})
it('renders learn react link', () => {
   let mountedStoreLocator = shallow(<StoreLocator />);
   
});

it('renders header',()=> {
  const headers = mountedStoreLocator.find('Header');
   expect(headers.length).toBe(1);
})


it('renders two buttons',()=> {
const buttons = mountedStoreLocator.find('Button');
expect(buttons.length).toBe(3);
})

it('renders map', ()=> {
const maps = mountedStoreLocator.find('Map');
expect(maps.length).toBe(1);
})

});