import DashboardContainer from './containers/DashboardContainer'
import OverviewRoute from './components/Overview'

export default store => ({
  path: '/dashboard',
  component: DashboardContainer,
  indexRoute: OverviewRoute
})
