import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard'; // 使用相对路径
import Button from '../Button'; // 导入按钮组件
import * as styles from './ProductForm.module.css';

const ProductForm = () => {
  const [product, setProduct] = useState({
    image: '',      // 图片数据或链接
    imageAlt: '',   // 图片描述
    name: '',
    price: 0,
    originalPrice: 0,
    meta: '',
  });

  // 处理表单字段变化的函数

  // 处理图片上传的函数
  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      // 将选择的文件转换为数据 URL，并设置到 product 状态中
      const reader = new FileReader();
      reader.onload = (e) => {
        setProduct({
          ...product,
          image: e.target.result, // 图片数据 URL
          imageAlt: selectedFile.name, // 图片描述使用文件名
        });
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  // 处理表单提交的函数
  const handleSubmit = (event) => {
    event.preventDefault();
    // 提交表单的逻辑，可以将表单数据发送到服务器等
  };

  return (
    <div className={styles.formContainer}>
      <h2>Add Product</h2>
      <form>
        {/* 表单字段，用于输入产品信息 */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload} // 处理图片上传
        />
        {/* 其他表单字段 */}
        <Button type="submit">Submit</Button> {/* 提交按钮 */}
        <Button type="button">Cancel</Button> {/* 取消按钮 */}
      </form>
      {/* 添加产品预览 */}
      <ProductCard {...product} />
    </div>
  );
};

export default ProductForm;
