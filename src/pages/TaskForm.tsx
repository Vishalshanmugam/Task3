import React, { useState } from "react";
import { Form, Input, Button, message, Card } from "antd";
import api from "../services/api";

const TaskForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await api.post("/tasks", values);
      message.success(`Task executed successfully! Status: ${response.data.status}`);
    } catch (error) {
      message.error("Failed to execute command.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card title="Run a New Command" style={{ maxWidth: 600, margin: "30px auto" }}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Command"
          name="command"
          rules={[{ required: true, message: "Please enter a command!" }]}
        >
          <Input placeholder="Enter command (e.g., echo Hello World)" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Run Command
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default TaskForm;

