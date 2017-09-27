import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'

const DashboardContainer = connect(
  ({ location }) => ({ location })
)(Dashboard)

export default DashboardContainer
