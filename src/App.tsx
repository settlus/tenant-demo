import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider, createBrowserRouter, redirect, Outlet } from 'react-router-dom'

import './App.scss'
import CompletePage from './pages/complete/CompletePage/CompletePage.tsx'
import GuidePage from './pages/costume-shop/Costumepage/GuidePage.tsx'
import NewItemPage from './pages/costume-shop/Costumepage/NewItemPage.tsx'
import CreatePage from './pages/create-nft/CreatePage/CreatePage.tsx'
import DashboardPage from './pages/dashboard/DashboardPage/DashboardPage.tsx'
import Demo from './pages/demo/Demo/Demo.tsx'
import ErrorPage from './pages/error/ErrorPage.tsx'
import Intro from './pages/main/Intro/Intro'
import OfferPage from './pages/offer/OfferPage.tsx'
import TransferPage from './pages/transfer-nft/TransferPage/TransferPage.tsx'
import MobileWarningBanner from './shared/MobileWarning/MobileWarning.tsx'
import ShopProvider from './store/costumeshop_context.tsx'
import DashboardProvider from './store/dashboard_context.tsx'
import MissionProvider from './store/mission_context.tsx'
import { loader } from './utils/loader.ts'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      { index: true, loader: () => redirect('/intro') },
      {
        path: '/intro',
        element: <Outlet />,
        children: [{ index: true, element: <Intro /> }],
      },
      {
        path: '/demo',
        element: <Demo />,
        children: [
          {
            path: 'costume-shop',
            element: <Outlet />,
            children: [
              { index: true, element: <GuidePage /> },
              {
                path: 'new-item',
                loader: loader,
                element: <NewItemPage />,
              },
            ],
          },
          {
            path: 'create-nft',
            element: <CreatePage />,
          },
          {
            path: 'dashboard',
            loader: loader,
            element: <DashboardPage />,
          },
          {
            path: 'offer',
            loader: loader,
            element: <OfferPage />,
          },
          {
            path: 'transfer-nft',
            loader: loader,
            element: <TransferPage />,
          },
        ],
      },
      {
        path: '/complete',
        element: <CompletePage />,
      },
      {
        path: '*',
        loader: () => redirect('/intro'),
      },
    ],
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MobileWarningBanner />
      <MissionProvider>
        <DashboardProvider>
          <ShopProvider>
            <RouterProvider router={router} />
          </ShopProvider>
        </DashboardProvider>
      </MissionProvider>
    </QueryClientProvider>
  )
}

export default App
