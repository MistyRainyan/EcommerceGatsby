// src/pages/admin-dashboard/product-management.js
// import { fetchProducts } from '../api/products'; // 导入获取产品数据的 API 函数
import React, { useState, useEffect } from 'react';
import * as styles from './product-management.module.css'; // 确保CSS模块文件的路径正确
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import Breadcrumbs from '../../components/Breadcrumbs';
import Layout from '../../components/Layout/Layout';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductForm from '../../components/ProductForm/ProductForm';
import { generateMockProductData } from '../../helpers/mock';
import Button from '../../components/Button/Button';
import { isAuth } from '../../helpers/general';
import { navigate } from 'gatsby';

const ProductManagement = (props) => {
  const [products, setProducts] = useState([]);
  const [showAddProductForm, setShowAddProductForm] = useState(false);

  useEffect(() => {
    if (isAuth() === false) {
      navigate('/login');
    }
    // 获取产品列表并设置到 products 状态中,获取后端产品数据（暂时注释掉）
   // fetchProducts()
   //   .then((data) => setProducts(data))
   //   .catch((error) => console.error('Error fetching products:', error));

    // 使用模拟数据
    const mockProducts = generateMockProductData(5, 'sample'); // 获取5个样本产品
    setProducts(mockProducts);
  }, []);

  const fetchProducts = () => {
    // 实现获取产品列表的逻辑
    // ...
  };

   const handleDelete = productId => {
    // 删除产品的逻辑
    console.log('Delete product with id:', productId);
    // deleteProduct(productId).then(() => {
    //   setProducts(products.filter(product => product.id !== productId));
    // });
  };

   const handleAddProduct = () => {
    setShowAddProductForm(true); // 显示添加产品表单
  };

   return (
    <Layout>
      <AdminLayout>
        <Breadcrumbs
          crumbs={[
            { link: '/', label: 'Home' },
            { link: '/admin-dashboard', label: 'Dashboard' },
            { link: '/admin-dashboard/product-management/', label: 'Product Management' },
          ]}
        />

        <div className={styles.product}>
      <h2>Product Management</h2>
      <div className={styles.productList}>
        {products.map((product) => (
              <div key={product.id} className={styles.product}>
                <ProductCard {...product}>
                  <Button
                    type="button"
                    onClick={() => handleDelete(product.id)}
                    className={styles.buttons}
                  >
                    Delete
                  </Button>
                </ProductCard>
              </div>
            ))}
      </div>
      <div className={styles.buttons}>
        <Button type="button" onClick={handleAddProduct}>
          Add New Product
        </Button>
      </div>

      {/* 显示添加产品表单 */}
      {showAddProductForm && (
        <div className={styles.productFormContainer}>
          <ProductForm />
        </div>
      )}
    </div>

      </AdminLayout>
    </Layout>
  );


};

export default ProductManagement;