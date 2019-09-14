import React from 'react'
import { NavLink as RouteNavLink } from 'react-router-dom'
import { NavItem, NavLink } from 'shards-react'

const SidebarNavItem = ({ item }) => (
  <NavItem>
    <div className="activePan"></div>
    <NavLink tag={RouteNavLink} to={item.to}>
      {item.htmlBefore && (
        <div
          className="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
        />
      )}
      {item.htmlAfter && (
        <div
          className="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
        />
      )}
    </NavLink>
  </NavItem>
)

export default SidebarNavItem
