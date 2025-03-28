// import styles from "./page.module.css";
"use client";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import SortDropdown from "./components/SortDropdown";
import { fetchAllProducts } from "./store/slices/productData";
import { useDispatch } from "react-redux";

const categoryOptions = [
  { value: "", label: "Sort By Category" },
  { value: "automotive", label: "Automotive" },
  { value: "beauty", label: "Beauty" },
  { value: "books", label: "Books" },
  { value: "computers", label: "Computers" },
  { value: "clothing", label: "Clothing" },
  { value: "electronics", label: "Electronics" },
  { value: "games", label: "Games" },
  { value: "garden", label: "Garden" },
  { value: "grocery", label: "Grocery" },
  { value: "health", label: "Health" },
  { value: "home", label: "Home" },
  { value: "industrial", label: "Industrial" },
  { value: "jewelry", label: "Jewelry" },
  { value: "kids", label: "Kids" },
  { value: "movies", label: "Moives" },
  { value: "music", label: "Music" },
  { value: "outdoors", label: "Outdoors" },
  { value: "shoes", label: "Shoes" },
  { value: "sports", label: "Sports" },
  { value: "tools", label: "Tools" },
  { value: "toys", label: "Toys" },
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
  const products = dispatch(fetchAllProducts());

  const logProducts = () => {
    console.log(products);
  };
  return (
    <div className="container">
      <form className="p-2 d-flex">
        <SearchBar />
        <SortDropdown
          value="category"
          id="category"
          options={categoryOptions}
        />
        <SortDropdown value="price" id="price" options={priceOptions} />
      </form>
      <div className="container">
        <button type="button" onClick={logProducts}>
          Log products
        </button>
        <div className="row">
          {/* {products.map((product) => {
            return (
              <div className="col-sm" key={product.id}>
                <ProductCard
                  category={product.category}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}
