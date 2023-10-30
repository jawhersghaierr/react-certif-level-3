import React from "react";

type DialogProps = {
  isOpen: boolean;
  closeDialog: () => void;
  isModal: boolean;
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
};

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  closeDialog,
  isModal,
  header,
  body,
  footer,
}) => {
  let overlayStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  const dialogStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "20px",
    border: "1px solid #ccc",
  };
  const borderStyle: React.CSSProperties = {
    borderBottom: "1px solid #ccc",
    margin: "0 -20px",
    padding: "10 20px",
  };

  return (
    <>
      {isOpen && (
        <div style={isModal ? overlayStyle : {}}>
          <div style={dialogStyle}>
            {!isModal && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <button onClick={closeDialog}>X</button>
              </div>
            )}
            {header && <div>{header}</div>}
            {!isModal && <div style={borderStyle}></div>}

            {body && <div>{body}</div>}
            {footer && <div>{footer}</div>}
          </div>
        </div>
      )}
    </>
  );
};
export default Dialog;
