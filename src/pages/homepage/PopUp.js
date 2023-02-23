import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../store/modal';
import { Modal, Button, Icon  } from "react-bootstrap";
import './PopUp.css';
import { cartActions } from '../../store/cart';


function PopUp() {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.modal.isShowModal);
  const product = useSelector(state => state.modal.productDetail);

  const closeModal = () => {
    dispatch(modalActions.hideModal())
  };

  const handleAddToCart = () => {
    dispatch(cartActions.add(product));
    dispatch(modalActions.hideModal())
  };

  return (
    <>

      <Modal show={isOpen} onHide={closeModal} size={'lg'}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="row">
          <div className="col-md-6">
            <img src={product.img1} alt={product.name} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="text-left card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-subtitle mb-2 text-muted">{Number(product.price).toLocaleString("vi-VN")} VND</p>
            </div>
            <p>{product.short_desc}</p>
            <Button variant="secondary" onClick={handleAddToCart}>
                {/* <Icon className="bi bi-cart-fill me-2" /> */}

                Add to Cart
            </Button>
          </div>
        </div>
      </Modal.Body>
      </Modal>
    </>
  );
}

export default PopUp;
