import Product from "./components/products/Product";
import "./App.css"


  const App = () => {
     const products = [
      {
        pname: "Iphone 15",
        price: "$500",
        image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg",
        description: "Iphone 15 pro",
      },

      {
        pname: "Iphone 14",
        price: "$750",
        image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro.jpg",
        description: "Iphone 14 pro",
      },

      {
        pname: "Iphone 12",
        price: "$600",
        image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg",
        description: "Iphone 12",
      },

      {
        pname: "Iphone 13",
        price: "$500",
        image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg",
        description: "Iphome 13 pro max",
      },

      {
        pname: "Iphone 12",
        price: "$900",
        image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-mini.jpg",
        description: "Iphone 12 mini",
      },

      {
        pname: "Iphone 13",
        price: "$200",
        image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg",
        description: "Iphone 13 mini",
      },

      {
        pname: "Iphone 15",
        price: "$500",
        image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg",
        description: "Iphone 15 plus",
      },
     ]

     return (
      <>
        <h1>Product Card.js</h1>
        <div className="grid">
          {products.map(({pname, image, description, price}, index) => (
            <Product key={index}
            pname={pname} 
            image={image}
            description={description}
            price={price}/>
          )
          )}
        </div>
      </>
     );
  }

  export default App 