import './App.scss'
import { RouterProvider, createBrowserRouter, redirect, Outlet} from 'react-router-dom';
import Intro from './pages/main/Intro/Intro'
import DemoIntro from './pages/main/DemoIntro/DemoIntro';

const router = createBrowserRouter([
  {
    path:'/',
    loader: ()=>redirect('/demo'),
  },
  {
    path: '/demo',
    element: <Outlet />,
    children: [
      { index: true,
        element: <Intro />,
      },
      {
        path:'intro',
        element: <DemoIntro />,
      }
    ],
  },
  // {
  //   path:'*',
  //   element: <PageNotFound />,
  // }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;