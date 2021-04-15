import none from '../images/none.png';
import portland from '../images/portland.png';
import astoria from '../images/astoria.png';

const Map = ({...props}) => {
   
   return (
<div>
    <img src={props.showPortland?portland:props.showAstoria?astoria:none} alt='no store'></img>
</div>
    )
}

export default Map;