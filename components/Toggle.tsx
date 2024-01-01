"use client";
import React, { FC, useState } from "react";
import Modal from "./Modal";
import View from "./View";

interface ToggleI {
  name: string;
}

const Toggle: FC<ToggleI> = ({ name }) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  return <>{!isModal ? <Modal name={name} /> : <View name={name} />}</>;
};

export default Toggle;
