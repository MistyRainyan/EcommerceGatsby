import { Link, navigate } from 'gatsby';
import React from 'react';
import * as styles from './AdminNav.module.css';

const AdminNav = (props) => {
  const handleLogout = () => {
    window.localStorage.removeItem('key');
    navigate('/');
  };

  return (
    <div className={styles.root}>
      <div className={styles.webRoot}>
        <Link
          activeClassName={styles.activeLink}
          to={'/admin-dashboard/dashboard-overview/'}
          className={styles.webLink}
        >
          Dashboard Overview
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/admin-dashboard/product-management/'}
          className={styles.webLink}
        >
          Product Management
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/admin-dashboard/order-management/'}
          className={styles.webLink}
        >
          Order Management
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/admin-dashboard/customer-management/'}
          className={styles.webLink}
        >
          Customer Management
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/admin-dashboard/inventory-management/'}
          className={styles.webLink}
        >
          Inventory Management
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/admin-dashboard/sales-reports/'}
          className={styles.webLink}
        >
          Sales Reports
        </Link>
         <Link
          activeClassName={styles.activeLink}
          to={'/admin-dashboard/user-permissions/'}
          className={styles.webLink}
        >
          User Permissions
        </Link>
         <Link
          activeClassName={styles.activeLink}
          to={'/admin-dashboard/marketing-promotions/'}
          className={styles.webLink}
        >
          Marketing and Promotions
        </Link>
         <Link
          activeClassName={styles.activeLink}
          to={'/admin-dashboard/settings-configuration/'}
          className={styles.webLink}
        >
          Settings and Configuration
        </Link>
         <Link
          activeClassName={styles.activeLink}
          to={'/admin-dashboard/logs-audit/'}
          className={styles.webLink}
        >
          Logs and Audit Trails
        </Link>
        <span
          role={'presentation'}
          onClick={handleLogout}
          className={styles.webLink}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default AdminNav;
