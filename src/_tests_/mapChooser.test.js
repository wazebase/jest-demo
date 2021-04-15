import mapChooser from '../mapChooser';

describe('mapChooser',function() {
  it('returns image based on input passed in', function() {
      let expected = 'portland.jpg';
      let actual = mapChooser('portland');
      expect(actual).toEqual(expected);
      })
    it('returns defaul image if no input passed in', function() {
        let expected = 'default.jpg';
        let actual = mapChooser('');
        expect(actual).toEqual(expected);
        })
     
})