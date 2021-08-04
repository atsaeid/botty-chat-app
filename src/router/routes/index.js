// ** Routes Imports
import AppRoutes from './Apps'
import PagesRoutes from './Pages'

// ** Document title
const TemplateTitle = '%s - Botty Chat App'

// ** Default Route
const DefaultRoute = '/apps/chat'

// ** Merge Routes
const Routes = [
  ...AppRoutes,
  ...PagesRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
