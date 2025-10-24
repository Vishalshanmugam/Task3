import React from "react";
import { Modal } from "antd";

interface TaskOutputModalProps {
  visible: boolean;
  output: string;
  onClose: () => void;
}

const TaskOutputModal: React.FC<TaskOutputModalProps> = ({
  visible,
  output,
  onClose,
}) => {
  return (
    <Modal
      title="Command Output"
      open={visible}
      onCancel={onClose}
      onOk={onClose}
      width={600}
    >
      <pre
        style={{
          backgroundColor: "#f5f5f5",
          padding: "10px",
          borderRadius: "6px",
          maxHeight: "400px",
          overflowY: "auto",
        }}
      >
        {output || "No output available."}
      </pre>
    </Modal>
  );
};

export default TaskOutputModal;

