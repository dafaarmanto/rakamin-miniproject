import { useNavigate } from 'react-router-dom';

import Loader from '../components/Loader';
import { getProductDetail } from '../api/request';

const Product = () => {
  const { product, error, loading } = getProductDetail();
  const navigate = useNavigate();

  if (error) {
    return <p className="p-3">Data not found!</p>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="p-3">
      <p className="pb-10 cursor-pointer" onClick={() => navigate(-1)}>
        &larr; Go Back
      </p>
      <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
      <div className="mb-3">
        <img src={product.images} width={400} height={400} alt="Image" />
      </div>
      <div className="font-bold text-xl mb-3">${product.price}</div>
      <div>{product.description}</div>
    </div>
  );
};

export default Product;
