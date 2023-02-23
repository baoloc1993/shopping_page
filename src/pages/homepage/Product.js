import { useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal';

function Product(props) {
  const product = props.product;
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(modalActions.showModal(product))
  }

  return (
    <>
        <div className="col-6 col-md-3 mb-4">
            <div className="card h-100">
                <img src={product.img1} className="card-img-top" alt={product.name} onClick={handleOpenModal}/>
                <div className="text-center card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{Number(product.price).toLocaleString("vi-VN")} VND</h6>
                </div>
            </div>
        </div>
        
    </>
  );
}

export default Product;
