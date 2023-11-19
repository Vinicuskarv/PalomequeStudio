import './buttonMaster.css';
import { Link } from 'react-router-dom';

function ButtonMaster({value, nameclass, linck}) {
    return (
        <Link to={linck}><input type='button' className={nameclass} value={value}/></Link> 

        
    );
  }
  export default ButtonMaster;