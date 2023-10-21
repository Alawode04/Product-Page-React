import Descriptionpg from "../description/Descriptionpg"
import Image from "../ImagePic/Imagepage"
import Pricepg from "../price/Pricepg"
import Namepg from "../name/Namepg"
import "./Product.css"

const Product = ({price, pname, image, description}) => {
  return (
    <>
    <div className="card">
      <div className="image">
         <Image imageUrl={image} altText={pname} />
     </div>
      <div>
          <Namepg pname={pname} />
          <Pricepg price={price}/>
          <Descriptionpg description={description} />
      </div>
    </div>
    </>
  )
}

export default Product