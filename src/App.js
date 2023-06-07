import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import cart from "./assets/images/shopping-cart.png";
import selfie from "./assets/images/selfie6.jpg";
import star from "./assets/images/star.png";
import plus from "./assets/images/plus.png";
import minus from "./assets/images/minus.png";

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState([]);
  const [brand, setBrand] = useState([]);
  const [save, setSave] = useState([]);
  const [category, setCategory] = useState([]);
  const [added, setAdded] = useState(0);
  const [brandf, setbrandf] = useState("");
  const [categoryf, setCategoryf] = useState("");
  const [ratingf, setRatingf] = useState("");
  const [discountf, setDiscountf] = useState("");
  const [pricef, setpricef] = useState("");

  const brandch = (event) => {
    setbrandf(event.target.value);
    setData(save.filter((item) => item.brand == event.target.value));
  };
  const categorych = (event) => {
    setCategoryf(event.target.value);
    setData(save.filter((item) => item.category == event.target.value));
    if (brandf != "" || ratingf != "" || discountf != "" || pricef != "") {
      setData(
        save.filter(
          (item) =>
            item.category == event.target.value &&
            (item.brand == brandf ||
              item.rating >= ratingf ||
              item.discountPercentage >= discountf ||
              item.price <= pricef)
        )
      );
    }
  };
  const ratingch = (event) => {
    setRatingf(event.target.value);
    setData(save.filter((item) => item.rating >= event.target.value));
  };
  const discountch = (event) => {
    setDiscountf(event.target.value);
    setData(
      save.filter((item) => item.discountPercentage >= event.target.value)
    );
  };
  const pricech = (event) => {
    setpricef(event.target.value);
    if (event.target.value === "over") {
      setData(save.filter((item) => item.price > event.target.value));
      console.log(event.target.value);
    } else {
      setData(save.filter((item) => item.price <= event.target.value));
      console.log(event.target.value);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=100"
      );
      const data = response.data.products;
      const brands = [...new Set(data.map((item) => item.brand))];
      const categories = [...new Set(data.map((item) => item.category))];
      setData(response.data.products);
      setSave(response.data.products);
      setBrand(brands);
      setCategory(categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <div className="filter">
            <h4>Category</h4>
            <select className="drop" value={categoryf} onChange={categorych}>
              {category.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="filter">
            <h4>Rating</h4>
            <select className="drop" value={ratingf} onChange={ratingch}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="filter">
            <h4>Discount</h4>
            <select className="drop" value={discountf} onChange={discountch}>
              <option value="50">50% or more</option>
              <option value="35">35% or more</option>
              <option value="25">25% or more</option>
              <option value="15">15% or more</option>
              <option value="10">10% or more</option>
            </select>
          </div>
          <div className="filter">
            <h4>Price</h4>
            <select className="drop" value={pricef} onChange={pricech}>
              <option value="1000">Under &#8377;1,000</option>
              <option value="5000">&#8377;1,000 - &#8377;5,000</option>
              <option value="10000">&#8377;5,000 - &#8377;10,000</option>
              <option value="20000">&#8377;10,000 - &#8377;20,000</option>
              <option value="over">Over &#8377;20,000</option>
            </select>
          </div>
        </div>
        <div className="main">
          <div className="mainh">
            <h2 className="mainht">Select your items</h2>
            <div className="added">
              <img src={cart} className="cart" />
              <span className="value">{added}</span>
            </div>
          </div>
          <div className="mainb">
            <div>
              <div className="filter">
                <h4>Brand</h4>
                <select className="dropb" value={brandf} onChange={brandch}>
                  {brand.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {data.map((item, index) => (
              <div key={index} className="container">
                <div className="divimg">
                  <img src={item.thumbnail} className="pimg" />
                </div>
                <div className="content">
                  <h3 className="ptitle pcont">{item.title}</h3>
                  <h2 className="pdescription pcont">{item.description}</h2>
                  <span className="prating pcont">
                    Rating : {item.rating} <img src={star} className="pimgs" />
                  </span>
                  <h2 className="contentp pcont">
                    <span className="sign">&#8377;</span>
                    <span className="discountp">
                      {item.price -
                        ((item.price * item.discountPercentage) / 100).toFixed(
                          0
                        )}{" "}
                    </span>

                    <span className="price">
                      M.R.P : <span className="textc">&#8377;{item.price}</span>{" "}
                    </span>
                    <span className="discount">
                      ({item.discountPercentage} % off)
                    </span>
                  </h2>
                  <span className="stock">Available Stock : {item.stock}</span>
                  {item.stock < 50 ? (
                    <span className="stocke">hurry! only a few items left</span>
                  ) : null}
                  <div className="additem">
                    <img
                      src={plus}
                      onClick={() => setAdded(added + 1)}
                      className="plus"
                    />
                    <span></span>
                    <img
                      src={minus}
                      onClick={() => setAdded(added - 1)}
                      className="minus"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
