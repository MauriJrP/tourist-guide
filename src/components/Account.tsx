import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import AccountMenu from './AccountMenu';

const SignInButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/sign-in');
  };

  return (
    <Button onClick={handleClick}  className="text-white">
      Iniciar sesión
    </Button>
  )
}

export default function BasicMenu() {
  let loggedIn = false;

  return (
    <>
      {!loggedIn ? <SignInButton /> : <AccountMenu />}
    </>
  );
}