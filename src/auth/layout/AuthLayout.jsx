import { Grid2, Typography } from "@mui/material"

export const AuthLayout = ({ children, title = '' }) => {
  return (
<>
    <Grid2 
    container
    padding={ 1 }
    direction='column'
    alignItems='center'
    justifyContent='center'
    sx={{ minHeight: '100vh', backgroundColor: 'primary.main'}}
    >
      
        <Grid2
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: 5 }}>

            <Typography sx={{ mb: 2, color: 'secondary.main', fontWeight: 700, textAlign: 'center'}} variant="h5">
                { title } 
            </Typography>

            { children }

        </Grid2>

    </Grid2> {/**grid2 container -> main */}
        
</>
  )
}
