
function Clothes({ anyClothes }) {

  return(<div className="products">
    { anyClothes.map((elem => {
      const {id, name, price, image} = elem;
      return(<div className="product-card" key={ id }>
          <img src={ image }  width="400" height="500"  alt="clothe" />
          <h3>{ name }</h3>
          <h4>$ { price }</h4>
          </div>);
    }))}
  </div>)
}

export default Clothes;