import React from "react";
import Popup from "reactjs-popup";
import PostDetailPopUp from '../../pages/PostDetailPopUp/PostDetailPopUp'
import AddPostPopUp from '../../pages/AddPostPopUp/AddPostPopUp';
import EditPostPopUp from '../../pages/EditPostPopUp/EditPostPopUp';
import './Popup.css';

const Modal = ({ props }) => (
  <Popup
    trigger={<button className="button pop-button"> Details </button>}
    modal
  >
    {close => (
      <>
        <PostDetailPopUp props={props} />
        <button
          className="button"
          onClick={() => {
            close();
          }}
        >
          Close
          </button>
      </>
    )}
  </Popup>
);

export default Modal;