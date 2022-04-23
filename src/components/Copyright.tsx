import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.gob.mx/sectur" >
        Secretar&iacute;a de Turismo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}