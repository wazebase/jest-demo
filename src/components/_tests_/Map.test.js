import React from 'react';
import {shallow} from 'enzyme';
import Map from '../Map'
import none from '../../images/none.png';
import portland from '../../images/portland.png';
import astoria from '../../images/astoria.png';

describe('Map',function(){
let mountedMap;
beforeEach(()=> {
   mountedMap = shallow(<Map/>);
})

it('renders learn react link', () => {
   let mountedMap = shallow(<Map />);
});

it('contains an image',()=> {
   let image = mountedMap.find('img');
   expect(image.length).toBe(1);
})

it('displays the none map when no params are given',()=> {
 expect(mountedMap.find('img').prop('src')).toEqual(none);

})

})

describe('displays portland or none image depending on state', ()=> {
   let mountedMap;
   let props;

   beforeEach(()=> {
      props = {
         showPortland:true
      };

      mountedMap = shallow(<Map {...props}/>)
   })

   it('portland state is true',()=> {
      expect(mountedMap.find('img').props('src')['src']).toEqual(portland);
   })
})

describe('displays portland or none image depending on state', ()=> {
   let mountedMap;
   let props;

   beforeEach(()=> {
      props = {
         showAstoria:true
      };

      mountedMap = shallow(<Map {...props}/>)
   })

   it('portland state is true',()=> {
      expect(mountedMap.find('img').props('src')['src']).toEqual(astoria);
   })

})