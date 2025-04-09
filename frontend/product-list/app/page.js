// import styles from "./page.module.css";
"use client";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import SortDropdown from "./components/SortDropdown";
import { fetchProducts } from "./store/slices/productData";
import { getProductCount } from "./store/slices/productCount";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import queryString from "query-string";

const categoryOptions = [
  { value: "", label: "Sort By Category" },
  { value: "Automotive", label: "Automotive" },
  { value: "Beauty", label: "Beauty" },
  { value: "Books", label: "Books" },
  { value: "Computers", label: "Computers" },
  { value: "Clothing", label: "Clothing" },
  { value: "Electronics", label: "Electronics" },
  { value: "Games", label: "Games" },
  { value: "Garden", label: "Garden" },
  { value: "Grocery", label: "Grocery" },
  { value: "Health", label: "Health" },
  { value: "Home", label: "Home" },
  { value: "Industrial", label: "Industrial" },
  { value: "Jewelery", label: "Jewelery" },
  { value: "Kids", label: "Kids" },
  { value: "Movies", label: "Movies" },
  { value: "Music", label: "Music" },
  { value: "Outdoors", label: "Outdoors" },
  { value: "Shoes", label: "Shoes" },
  { value: "Sports", label: "Sports" },
  { value: "Tools", label: "Tools" },
  { value: "Toys", label: "Toys" },
];

const priceOptions = [
  { value: "", label: "Sort By Price" },
  { value: "lowToHigh", label: "Low to High" },
  { value: "highToLow", label: "High to Low" },
];

// const products = [
//   {
//     id: 1,
//     category: "Sports",
//     name: "Sports Ball",
//     price: 100,
//     image: "https://via.placeholder.com/250?text=Product+Image",
//   },
//   {
//     id: 2,
//     category: "Music",
//     name: "Music Maker",
//     price: 120,
//     image: "https://via.placeholder.com/250?text=Product+Image",
//   },
//   {
//     id: 3,
//     category: "Tools",
//     name: "Tool box",
//     price: 80,
//     image: "https://via.placeholder.com/250?text=Product+Image",
//   },
//   {
//     id: 4,
//     category: "Home",
//     name: "Home is where the heart is",
//     price: 7000,
//     image: "https://via.placeholder.com/250?text=Product+Image",
//   },
//   {
//     id: 5,
//     category: "Games",
//     name: "Quit playin",
//     price: 500,
//     image: "https://via.placeholder.com/250?text=Product+Image",
//   },
//   {
//     id: 6,
//     category: "Computers",
//     name: "Computer takeover",
//     price: 100,
//     image: "https://via.placeholder.com/250?text=Product+Image",
//   },
//   {
//     id: 7,
//     category: "Beauty",
//     name: "Beauty Sleep",
//     price: 1000000,
//     image: "https://via.placeholder.com/250?text=Product+Image",
//   },
//   {
//     id: 8,
//     category: "Health",
//     name: "Health nut",
//     price: 23,
//     image: "https://via.placeholder.com/250?text=Product+Image",
//   },
//   {
//     id: 9,
//     category: "Books",
//     name: "Book worm",
//     price: 1,
//     image: "https://via.placeholder.com/250?text=Product+Image",
//   },
// ];

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const count = useSelector((state) => state.count.data);
  const [pages, setPages] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(fetchProducts(query));
    dispatch(getProductCount(query));
  }, [dispatch, query]);

  useEffect(() => {
    let numPages = [];
    for (let i = 1; i <= Math.ceil(count?.count / 9); i++) {
      numPages.push(i);
    }
    setPages(numPages);
  }, [count]);

  const logResult = () => {
    console.log(query);
    console.log(products);
    console.log(count);
    console.log(pages);
  };

  const handleCategoryChange = (category) => {
    setQuery(`?category=${category}`);
  };

  const handlePagination = (page) => {
    if (query !== "") {
      setQuery(`${query}&page=${page}`);
      return;
    }
    setQuery(`&page=${page}`);
  };

  return (
    <div className="container">
      <form className="p-2 d-flex">
        <SearchBar />
        <SortDropdown
          value="category"
          id="category"
          options={categoryOptions}
          onChange={handleCategoryChange}
        />
        <SortDropdown value="price" id="price" options={priceOptions} />
      </form>
      <button onClick={logResult}>Log</button>
      <div className="container">
        <div className="row">
          {products &&
            products.map((product) => (
              <div key={product.id} className="col-sm">
                <ProductCard
                  category={product.category}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  key={product.id}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        {count &&
          pages.map((page) => (
            <button
              key={page}
              className="m1 btn btn-light"
              onClick={() => handlePagination(page)}
            >
              {page}
            </button>
          ))}
      </div>
    </div>
  );
}
