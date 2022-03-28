import { Modal,  } from 'antd';
import React, { useState } from 'react';

const Modals = ({isModalVisible, handleOk,handleCancel}) =>  {


    return(
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    )
}
export default Modals;