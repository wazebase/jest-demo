import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header.js';
import {shallow} from 'enzyme';
import logo from '../../images/wired-brain-coffee-logo.png';

describe('Header', function(){

let mountedHeader;

beforeEach(()=> {
  mountedHeader = shallow(<Header />);
})

it('renders without crashing', () => {
 shallow(<Header />);
});

it('renders a logo', ()=> {
 
 expect(mountedHeader.find("img").prop("src")).toEqual(logo);
});

});