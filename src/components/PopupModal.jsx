import React, { useCallback, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { useHistory } from "react-router";
import { MdClose } from "react-icons/md";
import "./PopupModal.css";

const PopupModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const history = useHistory();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div className={"popup-background"} onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <div showModal={showModal} className={"popup-modal-wrapper"}>
              <div className={"popup-modal-content"}>
                <h1>Varen er lagt til</h1>
                <p>Finn på en tekst her</p>
                <div className={"popup-redirect-buttons"}>
                  <button onClick={() => setShowModal((prev) => !prev)}>
                    Fortsett å handle
                  </button>
                  <button onClick={() => history.push("/handlekurv")}>
                    Gå til handlekurv
                  </button>
                </div>
              </div>
              <MdClose
                className={"popup-close-button"}
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};

export default PopupModal;
