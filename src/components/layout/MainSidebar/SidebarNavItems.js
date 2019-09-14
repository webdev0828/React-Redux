import React from 'react'
import { Nav } from 'shards-react'

import SidebarNavItem from './SidebarNavItem'

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navItems: [
        {
          to: '/dashboard',
          htmlBefore: `<img src=${require('./../../../assets/images/icons/dashboard_icon.svg')} />`,
          htmlAfter: '',
        },
        {
          htmlBefore: `<img src=${require('./../../../assets/images/icons/sessions_icon.svg')} />`,
          to: '/users',
        },
        {
          htmlBefore: `<img src=${require('./../../../assets/images/icons/meetings_icon.svg')} />`,
          to: '/meeting',
        },
        {
          htmlBefore: `<img src=${require('./../../../assets/images/icons/files_icon.svg')} />`,
          to: '/files',
        },
        {
          htmlBefore: `<img src=${require('./../../../assets/images/icons/conversations_icon.svg')} />`,
          to: '/conversations',
        },
        {
          htmlBefore: `<img src=${require('./../../../assets/images/icons/settings_icon.svg')} />`,
          to: '/settings',
        },
      ],
    }
  }

  render() {
    const { navItems: items } = this.state
    return (
      <div className="nav-wrapper">
        <div className="logo">
          <img src={require('./../../../assets/images/logo.png')} alt="logo" />
        </div>
        <Nav className="nav--no-borders flex-column">
          {items.map((item, idx) => (
            <SidebarNavItem key={idx} item={item} />
          ))}
        </Nav>
      </div>
    )
  }
}

export default SidebarNavItems
