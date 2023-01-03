import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border mb-4 rounded overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div
          style={{ backgroundImage: `url('${product.images}')` }}
          className="w-full h-64 bg-blue bg-cover"
        ></div>
      </Link>
      <div className="p-3">
        <h3 className="font-bold text-xl mb-3">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <div className="font-medium mb-3">${product.price}</div>
        <div className="font-medium mb-3">{product.description}</div>
        <Link
          className="bg-blue-500 text-white p-2 flex justify-center"
          to={`/product/${product.id}`}
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
