
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'admin', component: () => import('pages/Admin.vue') },
      { path: 'players', component: () => import('pages/Players.vue') },
      { path: 'teams', component: () => import('pages/Teams.vue') },
      { path: 'events', component: () => import('pages/Events.vue') },
      { path: 'login', component: () => import('pages/Login.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
