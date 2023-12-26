// src/pages/admin-dashboard/dashboard-overview.js
import React from "react"
import * as styles from './dashboard-overview.module.css'; // 确保CSS模块文件的路径正确
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import Breadcrumbs from '../../components/Breadcrumbs';
import Layout from '../../components/Layout/Layout';
import { isAuth } from '../../helpers/general';
import { navigate } from 'gatsby';



const DashboardOverview = (props) => {
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
            { link: '/admin-dashboard/dashboard-overview/', label: 'Dashboard Overview' },
          ]}
        />


      </AdminLayout>
    </Layout>
  );


};

export default DashboardOverview;