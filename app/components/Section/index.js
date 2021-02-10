import React, { useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import SaveIcon from "@material-ui/icons/Save";
import { IconButton } from "@material-ui/core";

const Section = ({ messages }) => {
  const [show, setShow] = useState(false);
  const [sticky, addSticky] = useState(["test", "new sticky"]);
  const stickyRef = useRef(null);
  const newStickyRef = useRef(null);
  const saveSticky = () => {
    if (show && newStickyRef.current.innerHTML !== "") {
      addSticky([...sticky, newStickyRef.current.innerHTML]);
      newStickyRef.current.innerHTML = "";
    }
    setShow(false);
  };
  return (
    <section className="section">
      <div>
        <FormattedMessage {...messages.sectionTitle} />
        <IconButton aria-label="add" onClick={() => setShow(true)}>
          <AddCircleOutlineIcon />
        </IconButton>
        <IconButton aria-label="save" onClick={saveSticky}>
          <SaveIcon />
        </IconButton>
      </div>

      <div className="stickies" ref={stickyRef}>
        {sticky &&
          sticky.length > 0 &&
          sticky.map((stick, index) => (
            <div key={`stick-${index}`} className={`sticky`}>
              {stick}
            </div>
          ))}
        <div
          ref={newStickyRef}
          className={`sticky new-sticky ${show ? "show" : ""}`}
          contentEditable="true"
        />
      </div>
    </section>
  );
};

export default Section;
