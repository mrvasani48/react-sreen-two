import React, { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from 'utils/routes'

const LoadingScreen = lazy(() => import('pages/LoadingScreen'));

function AppRoutes() {
  const appRoutes = useRoutes(routes)

  return (
    <>
      <Suspense fallback={<LoadingScreen />}>{appRoutes}</Suspense>
    </>
  )
}

export default AppRoutes
