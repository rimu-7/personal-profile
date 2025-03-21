import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className='h-16 w-16'>
      <Link to={'/'}>
      <img src={logo} alt="Logo" />
      </Link>
    </div>
  );
}


export default Logo;