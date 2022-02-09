import s from "./Modal.module.css";
import PropTypes from "prop-types";

const Modal = ({ imageURL, onModalClose, onKeyPress }) => {
  return (
    <div
      id="overlay"
      className={s.overlay}
      onClick={(e) => {
        onModalClose(e.target.id);
      }}
      //   onKeyPress={() => {
      //     onKeyPress(e.target);
      //   }}
    >
      <div className={s.modal}>
        <img className={s.image} src={imageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  imageURL: PropTypes.string.isRequired,
  // onKeyPress: PropTypes.func.isRequired,
};
