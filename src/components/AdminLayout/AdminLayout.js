import React from 'react';

import AccountNav from '../AccountNav';
import Container from '../Container';

import * as styles from './AdminLayout.module.css';
import AdminNav from "../AdminNav"

const AdminLayout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Container size={'large'}>
        <div className={styles.layout}>
          <AdminNav />
          <div className={styles.childrenContainer}>{children}</div>
        </div>
      </Container>
    </div>
  );
};

export default AdminLayout;
