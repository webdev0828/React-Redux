import React from 'react'
import classNames from 'classnames'
import { Col } from 'shards-react'
import SidebarNavItems from './SidebarNavItems'

const MainSidebar = () => {
  const classes = classNames('main-sidebar', 'px-0', 'col-3', 'open')
  return (
    <Col tag="aside" className={classes} lg={{ size: 1 }} md={{ size: 3 }}>
      <SidebarNavItems />
    </Col>
  )
}

export default MainSidebar
