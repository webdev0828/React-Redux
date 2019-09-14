import React from 'react'
import { Container } from 'shards-react'

import PageHeader from './../components/dashboard/PageHeader'
import PageContent from './../components/dashboard/PageContent'

class Dashboard extends React.Component {
  render() {
    return (
      <Container fluid className="main-content-container px-4">
        <PageHeader />
        <PageContent />
      </Container>
    )
  }
}

export default Dashboard
