import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import cart from "./assets/images/shopping-cart.png";
import carts from "./assets/images/cart.png";
import star from "./assets/images/star.png";
import plus from "./assets/images/plus.png";
import minus from "./assets/images/minus.png";

function App() {
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
  const [branddata, setBranddata] = useState([]);
  const [catdata, setCatdata] = useState([]);

  const brandch = (event) => {
    setbrandf(event.target.value);
    if (categoryf != "") {
      setData(
        save.filter(
          (item) =>
            item.category == categoryf && item.brand == event.target.value
        )
      );
      setBranddata(data);
    } else {
      setData(save.filter((item) => item.brand == event.target.value));
      setBranddata(data);
    }
  };
  const categorych = (event) => {
    setCategoryf(event.target.value);
    if (brandf != "") {
      setData(
        save.filter(
          (item) => item.category == event.target.value && item.brand == brandf
        )
      );
      setCatdata(data);
    } else {
      setData(save.filter((item) => item.category == event.target.value));
    }
  };
  const ratingch = (event) => {
    setRatingf(event.target.value);
    if (event.target.value === "lowr") {
      const sortedData = [...save].sort((a, b) => {
        return a.rating - b.rating;
      });
      setData(sortedData);
    } else {
      const sortedData = [...save].sort((a, b) => {
        return b.rating - a.rating;
      });
      setData(sortedData);
    }
  };
  const discountch = (event) => {
    setDiscountf(event.target.value);
    if (event.target.value === "lowd") {
      const sortedData = [...save].sort((a, b) => {
        return a.discountPercentage - b.discountPercentage;
      });
      setData(sortedData);
    } else {
      const sortedData = [...save].sort((a, b) => {
        return b.discountPercentage - a.discountPercentage;
      });
      setData(sortedData);
    }
  };
  const pricech = (event) => {
    setpricef(event.target.value);
    if (event.target.value === "low") {
      const sortedData = [...save].sort((a, b) => {
        return a.price - b.price;
      });
      setData(sortedData);
    } else {
      const sortedData = [...save].sort((a, b) => {
        return b.price - a.price;
      });
      setData(sortedData);
    }
  };

  const clearfilter = () => {
    setData(save);
    setbrandf("");
    setCategoryf("");
    setRatingf("");
    setDiscountf("");
    setpricef("");
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

  const addcart = () => {
    setAdded(added + 1);
    alert("Item is added");
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
              <option value="">Select category</option>
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
              <option value="">Select rating</option>
              <option value="lowr">Low to High</option>
              <option value="highr">High to Low</option>
            </select>
          </div>
          <div className="filter">
            <h4>Discount</h4>
            <select className="drop" value={discountf} onChange={discountch}>
              <option value="">Select discount</option>
              <option value="lowd">Low to High</option>
              <option value="highd">High to Low</option>
            </select>
          </div>
          <div className="filter">
            <h4>Price</h4>
            <select className="drop" value={pricef} onChange={pricech}>
              <option value="">Select range</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
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
                  <option value="">Select brand</option>
                  {brand.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <button className="clear" onClick={clearfilter}>
                  Clear filter
                </button>
                <button className="clear" onClick={()=>setAdded(0)}>
                  Empty Cart
                </button>
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
                      ({item.discountPercentage.toFixed(0)}% off)
                    </span>
                  </h2>
                  <span className="stock">Available Stock : {item.stock}</span>
                  {item.stock < 50 ? (
                    <span className="stocke">hurry! only a few items left</span>
                  ) : null}
                  <div className="additem" onClick={addcart}>
                    <img src={carts} className="plus" />
                    <span className="carttext"> Add to cart</span>
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
