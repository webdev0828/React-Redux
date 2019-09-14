import React from 'react'
import { Redirect } from 'react-router-dom'

// Layout Types
import { DefaultLayout } from './layouts'

// Route Views
import Dashboard from './views/Dashboard'

export default [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard" />,
  },
  {
    path: '/dashboard',
    layout: DefaultLayout,
    component: Dashboard,
  },
  {
    path: '/users',
    layout: DefaultLayout,
    component: Dashboard,
  },
  {
    path: '/meeting',
    layout: DefaultLayout,
    component: Dashboard,
  },
  {
    path: '/files',
    layout: DefaultLayout,
    component: Dashboard,
  },
  {
    path: '/conversations',
    layout: DefaultLayout,
    component: Dashboard,
  },
  {
    path: '/settings',
    layout: DefaultLayout,
    component: Dashboard,
  },
]
