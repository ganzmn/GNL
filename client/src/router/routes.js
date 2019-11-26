
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'admin', component: () => import('pages/Admin.vue') },
      { path: 'players', component: () => import('pages/Players.vue') },
      { path: 'PlayerProfile', component: () => import('pages/PlayerProfile.vue'), path: '/PlayerProfile/:id' },
      { path: 'EventProfile', component: () => import('pages/EventProfile.vue'), path: '/EventProfile/:id' },
      { path: 'TeamProfile', component: () => import('pages/TeamProfile.vue'), path: '/EventProfile/:id' },
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
