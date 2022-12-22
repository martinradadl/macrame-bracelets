import React, { useState } from 'react';


export const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleClose = () => {
      setIsModalOpen(false);
    };
    return {isModalOpen, showModal, handleClose}
}