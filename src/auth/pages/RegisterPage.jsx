import { Button, Grid2, Link, TextField, Typography} from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title="RegisterPage SpicyTheme">

    <form>
      <Grid2 container spacing={1}>
        
        <Grid2 size={12}>
          <TextField
          type='text'
          label='nombre'
          placeholder='John Doe'
          fullWidth
          >
          </TextField>
        </Grid2> {/** grid2 */}
        
        <Grid2 size={12}>
          <TextField
          type='email'
          label='correo'
          placeholder='email@google.com'
          fullWidth
          >
          </TextField>
        </Grid2> {/** grid2 */}
        
        <Grid2 size={12}>
          <TextField
          type='password'
          label='password'
          placeholder='keepitsimple'
          fullWidth
          >
          </TextField>
        </Grid2> {/** grid2 */}
        
          <Grid2 size={ 12 }>
            <Button sx={{ backgroundColor: 'primary.main'}} variant='contained' fullWidth>
              Crear cuenta
            </Button>
          </Grid2>

      </Grid2> {/**grid2 container form*/}

      <Grid2 sx={{ mt: 2}} container direction='row' justifyContent='end' >
        <Typography sx={{ mr:1 }} >¿Ya tienes cuenta?</Typography>
        <Link component={ RouterLink } color='inherit' to='/auth/login'>
        Ingresar
        </Link>
      </Grid2>
    </form>

  </AuthLayout>
  )
}

{/** "EazyTripzy: almas nómadas, espíritus inquietos." */}