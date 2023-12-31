"use client";
import React, { FC, useState } from "react";
import Modal from "./Modal";
import View from "./View";

interface ToggleI {
  name: string;
}

const Toggle: FC<ToggleI> = ({ name }) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  return (
    <>
      {isModal ? (
        <Modal name={name} toggle={() => setIsModal(false)} />
      ) : (
        <View name={name} toggle={() => setIsModal(true)} />
      )}
    </>
  );
};

export default Toggle;
