import UserProfile from './UserProfile'
import Settings from './Settings'

export default {
  path: '/profile',
  indexRoute: UserProfile,
  childRoutes: Settings
}
