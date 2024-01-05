// routes.js
// import { Outlet } from 'react-router-dom';
import App from '../App';

const AppRoutes = [
  {
    path: '/',
    element: <App />,
    // children: [
    //   { path: '/', element: <Home /> },
    //   { path: 'pedido', element: <Order /> },
    // ],
  },
  //   {
  //     path: '/admin',
  //     element: <Outlet />,
  //     children: [
  //       { path: 'login', element: <Login /> },
  //       {
  //         path: 'dashboard',
  //         element: (
  //           <PrivateRoute element={<HomeDashboard />} />
  //         ),
  //       },
  //       {
  //         path: 'mesas',
  //         element: <PrivateRoute element={<Tables />} />,
  //       },
  //     ],
  //   },
];

export default AppRoutes;
