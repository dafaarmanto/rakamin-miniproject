import { getProducts } from '../api/Request';
import Loader from '../components/Loader';
import ProductCard from '../components/ProductCard';

const Homepage = () => {
  const { products, error, loading } = getProducts();

  if (error) {
    return <p className="p-3">Data not found!</p>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="p-3">
      <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Homepage;
