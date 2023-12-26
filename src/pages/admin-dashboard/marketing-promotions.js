// src/pages/admin-dashboard/marketing-promotions.js
import React from "react"
import * as styles from './marketing-promotions.module.css';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import Breadcrumbs from '../../components/Breadcrumbs';
import Layout from '../../components/Layout/Layout';
import { isAuth } from '../../helpers/general';
import { navigate } from 'gatsby';



const MarketingPromotions = (props) => {
  if (isAuth() === false) {
    navigate('/login');
  }


   return (
    <Layout>
      <AdminLayout>
        <Breadcrumbs
          crumbs={[
            { link: '/', label: 'Home' },
            { link: '/admin-dashboard', label: 'Dashboard' },
            { link: '/admin-dashboard/marketing-promotions/', label: 'Marketing and Promotions' },
          ]}
        />
        {/*<h1>Orders</h1>*/}
        {/*<div className={`${styles.tableHeaderContainer} ${styles.gridStyle}`}>*/}
        {/*  <span className={styles.tableHeader}>Order #</span>*/}
        {/*  <span className={styles.tableHeader}>Order Placed</span>*/}
        {/*  <span className={styles.tableHeader}>Last Update</span>*/}
        {/*  <span className={styles.tableHeader}>Status</span>*/}
        {/*</div>*/}

        {/*<OrderItem order={sampleOrder1} headerStyling={styles.gridStyle} />*/}
        {/*<OrderItem order={sampleOrder2} headerStyling={styles.gridStyle} />*/}
      </AdminLayout>
    </Layout>
  );


};

export default MarketingPromotions;