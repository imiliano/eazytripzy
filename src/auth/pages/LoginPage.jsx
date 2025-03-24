import { Google } from "@mui/icons-material"
import { Button, Grid2, Link, TextField} from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
  return (
    <AuthLayout title="LoginPage SpicyTheme">

    <form>
      <Grid2 container spacing={1}>
        
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
        
          <Grid2 size={{ xs:12, sm:6 }}>
            <Button component={ RouterLink } to= '/' sx={{ backgroundColor: 'primary.main'}} variant='contained' fullWidth>
              Login
            </Button>
          </Grid2>

          <Grid2 size={{ xs:12, sm:6 }}>
            <Button sx={{ backgroundColor: 'primary.main'}} variant='contained' fullWidth>
              <Google sx={{ alignItems:'center'}} />
            </Button>
          </Grid2>

      </Grid2> {/**grid2 container form*/}

      <Grid2 sx={{ mt: 2}} container direction='row' justifyContent='end' >
        <Link component={ RouterLink } color='inherit' to='/auth/register'>
        Crear nueva cuenta
        </Link>
      </Grid2>
    </form>

  </AuthLayout>
  )
}

{/** "EazyTripzy: almas nómadas, espíritus inquietos." */}