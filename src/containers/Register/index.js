import { Button, Input, DatePicker } from 'antd-mobile';
import { CloseOutline } from 'antd-mobile-icons';
// import dayjs from 'dayjs';
import style from './index.module.css';
import logo from '../../assets/twitter-logo.svg';

function Register() {
  return (
    <div>
      <div className={style.header}>
        <CloseOutline className={style.closeIcon} />
        <img src={logo} alt="twitter-logo" className={style.twitterLogo} />
      </div>
      <div className={style.form}>
        <div className={style.formTitle}>create a new account</div>
        <Input className={style.input} placeholder="name" />
        <Input className={style.input} placeholder="mobile" />
        <div className={style.changeTypebutton}>use email address instead</div>
        <div className={style.dobTitle}>Date of birth</div>
        <div className={style.dobInput}>
          <div>Date of birth</div>
          <DatePicker />
        </div>
      </div>
      <div className="footer">
        <Button>next</Button>
      </div>
    </div>
  );
}

export default Register;
