import React, { Fragment } from "react";
import { BraceletInStock } from "../components/bracelet-in-stock";
import { Link } from "react-router-dom";
import "../styles/gallery.css";
import { bracelets } from "../data/example";
import { useState } from "react";
import { useModal } from "../hooks/useModal";
import { Modal } from "antd";
import { colors } from "../styles/global";
import { SelectedBracelet } from "./selected-bracelet";


const InStock = () => {
  const { isModalOpen, showModal, handleClose } = useModal();
  const [selectedBracelet, setSelectedBracelet] = useState(null);

  const handleSelBracelet = (id) => {
    setSelectedBracelet(id);
    showModal();
  };

  return (
    <div>
      <div class="in-stock-descr">
        <h3>Las manillas en stock tienen 20% de descuento</h3>
      </div>
      <div class="container">
        {bracelets.map((elem) => {
          return elem.inStock ? (
            <Fragment>
              <div type="primary" onClick={() => handleSelBracelet(elem.id)}>
                <BraceletInStock bracelet={elem} />
              </div>
            </Fragment>
          ) : null;
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

export { InStock };
