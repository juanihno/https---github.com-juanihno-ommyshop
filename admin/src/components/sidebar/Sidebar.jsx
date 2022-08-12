import './sidebar.css'
import React, { useState } from 'react'
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const [homeActive, setHomeActive] = useState(true)
  const [userActive, setUserActive] = useState(false)
  const [productActive, setProductActive] = useState(false)

  const handleActive = (active) => {
    active === 'home' ? setHomeActive(true) : setHomeActive(false)
    active === 'user' ? setUserActive(true) : setUserActive(false)
    active === 'product' ? setProductActive(true) : setProductActive(false)
  }

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li
                className={`sidebarListItem ${homeActive ? 'active' : ''}`}
                onClick={() => handleActive('home')}
              >
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            {/* ----------------Future update------------------ */}
            {/* <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li> */}
            {/* ----------------/Future update------------------ */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li
                className={`sidebarListItem ${userActive ? 'active' : ''}`}
                onClick={() => handleActive('user')}
              >
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li
                className={`sidebarListItem ${productActive ? 'active' : ''}`}
                onClick={() => handleActive('product')}
              >
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            {/* ----------------Future update------------------ */}
            {/* <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li> */}
            {/* ----------------/Future update------------------ */}
          </ul>
        </div>
        {/* ----------------Future update------------------ */}
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div> */}
        {/* ----------------/Future update------------------ */}
      </div>
    </div>
  )
}
