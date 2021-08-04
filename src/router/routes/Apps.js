import { lazy } from 'react'
import { Redirect } from 'react-router-dom'
import chat from '../../views/apps/chat'
const AppRoutes = [
  {
    name:'botty-chat',
    path: '/apps/chat',
    layout: 'HorizontalLayout',
    appLayout: true,
    className: 'chat-application',
    component: chat
  }
]

export default AppRoutes
