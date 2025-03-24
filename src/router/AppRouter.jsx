import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { ZyRoutes } from '../zyapp/routes/ZyRoutes';

export const AppRouter = () => {
  return (
    <>
    <Routes>

        {/**Login */}
        <Route path='/auth/*' element={ <AuthRoutes />} />


        {/**App */}
        <Route path='/*' element={ <ZyRoutes />} />

    </Routes>
    </>
  )
}
