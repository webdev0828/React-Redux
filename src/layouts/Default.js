import React from 'react'
import { Container, Row, Col } from 'shards-react'
import MainNavbar from '../components/layout/MainNavbar/MainNavbar'

import MainSidebar from '../components/layout/MainSidebar/MainSidebar'

const DefaultLayout = ({ children }) => (
  <Container fluid>
    <Row>
      <MainSidebar />
      <Col className="main-content p-0" tag="main">
        <MainNavbar />
        {children}
      </Col>
    </Row>
  </Container>
)

export default DefaultLayout
