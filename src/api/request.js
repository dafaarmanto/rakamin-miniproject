import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const getProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const url =
    'https://63b3e5ddea89e3e3db5089ae.mockapi.io/api/v1/products?page=1&limit=10';

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [url]);

  return { products, loading, error };
};

export const getProductDetail = () => {
  const { id } = useParams();
  const url = `https://63b3e5ddea89e3e3db5089ae.mockapi.io/api/v1/products/${id}`;

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [url]);

  return { product, loading, error };
};
