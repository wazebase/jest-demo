function mapChooser(map) {
if(!map) {
    map = 'default';
}
 let mapImg = map + '.jpg';
 return mapImg;
}

export default mapChooser;