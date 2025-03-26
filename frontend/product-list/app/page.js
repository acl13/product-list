// import styles from "./page.module.css";
import SearchBar from "./components/SearchBar";
import SortDropdown from "./components/SortDropdown";

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

export default function Home() {
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
    </div>
  );
}
