import './App.scss'
import { RouterProvider, createBrowserRouter, redirect, Outlet} from 'react-router-dom';
import Intro from './pages/main/Intro/Intro'
import DemoIntro from './pages/main/DemoIntro/DemoIntro';
import CreatePage from './pages/create-nft/CreatePage/CreatePage.tsx';
import Demo from './pages/demo/Demo/Demo.tsx';
import Main from './pages/dashboard/Main/Main.tsx';
import TransferPage from './pages/transfer-nft/TransferPage/TransferPage.tsx';
import DashboardProvider from './store/dashboard_context.tsx';


const router = createBrowserRouter([
  {
    path:'/',
    loader: ()=>redirect('/intro'),
  },
  {
    path: '/intro',
    element: <Outlet />,
    children: [
      { index: true,
        element: <Intro />,
      },
      {
        path:'mission',
        element: <DemoIntro />,
      },
    ],
  },
  {
    path: '/demo',
    element: <Demo />,
    children: [
      {
        path:'create-nft',
        element: <CreatePage />,
      },
      {
        path:'dashboard',
        element: <Outlet />,
        children: [
          {index: true, element: <Main />},
          {
            path:'explore',
            element:<></>,
          },
          {
            path:'sell-nft',
            element:<></>,
          }
        ]
      },
      {
        path:'transfer-nft',
        element: <TransferPage />,
      },
    ]
  }
  // {
  //   path:'*',
  //   element: <PageNotFound />,
  // }
]);

function App() {
  return <DashboardProvider>
    <RouterProvider router={router} />
  </DashboardProvider>;
}

export default App;