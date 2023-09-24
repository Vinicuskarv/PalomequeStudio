import './buttonMaster.css';

function ButtonMaster({value, nameclass }) {
    return (
        <input type='button' className={nameclass} value={value}/>
    );
  }
  export default ButtonMaster;