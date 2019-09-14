import React from 'react'
import classNames from 'classnames'
import { Container, Navbar } from 'shards-react'

import NavbarSearch from './NavbarSearch'
import UserProfile from './UserProfile'

const MainNavbar = () => {
  const classes = classNames('main-navbar', 'bg-white', 'sticky-top')

  return (
    <div className={classes}>
      <Container className="p-0">
        <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
          <NavbarSearch />
          <UserProfile />
        </Navbar>
      </Container>
    </div>
  )
}

export default MainNavbar
