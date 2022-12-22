import React, { Fragment } from "react";
import { BraceletImg } from "../../components/bracelet-img";
import { Link } from "react-router-dom";
import "../../styles/gallery.css";
import { bracelets } from "../../data/example";
import { useModal } from "../../hooks/useModal";
import { Modal } from "antd";
import { SelectedBracelet } from "../selected-bracelet";
import { useState } from "react";
import { colors } from "../../styles/global";

const Gallery = () => {
  const { isModalOpen, showModal, handleClose } = useModal();
  const [selectedBracelet, setSelectedBracelet] = useState(null);

  const handleSelBracelet = (id) => {
    setSelectedBracelet(id);
    showModal();
  };

  return (
    <div>
      <h3 className="gal-descr">
        Las manillas están organizadas en orden cronológico, desde la primera
        que hice.
      </h3>
      <div class="container">
        {bracelets.map((elem) => {
          return (
            <Fragment>
              <div type="primary" onClick={() => handleSelBracelet(elem.id)}>
                <div className="img-container">
                  <BraceletImg brImg={elem.image} />
                  <div className="img-bg"></div>
                </div>
              </div>
            </Fragment>
          );
        })}
        <Modal
          title="Detalles"
          open={isModalOpen}
          destroyOnClose
          onCancel={handleClose}
          footer={null}
          bodyStyle={{ background: colors.gray}}
          wrapClassName="sel-bracelet-modal"

        >
          <SelectedBracelet id={selectedBracelet}></SelectedBracelet>
        </Modal>
      </div>
    </div>
  );
};

export { Gallery };
