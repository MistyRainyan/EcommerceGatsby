import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

const OrderIndexPage = (props) => {
  useEffect(() => {
    navigate('/admin-dashboard/dashboard-overview/');
  }, []);

  return <React.Fragment />;
};

export default OrderIndexPage;
