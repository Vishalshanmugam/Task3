import React, { useEffect, useState } from "react";
import { Table, Button, Input, message, Card } from "antd";
import api from "../services/api";
import TaskOutputModal from "../components/TaskOutputModal";

interface Task {
  id: string;
  command: string;
  status: string;
  output: string;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");
  const [selectedOutput, setSelectedOutput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const fetchTasks = async () => {
    try {
      const response = await api.get("/tasks");
      setTasks(response.data);
    } catch {
      message.error("Failed to fetch tasks.");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTask = async (id: string) => {
    try {
      await api.delete(`/tasks/${id}`);
      message.success("Task deleted successfully");
      fetchTasks();
    } catch {
      message.error("Failed to delete task");
    }
  };

  const columns = [
    { title: "Command", dataIndex: "command", key: "command" },
    { title: "Status", dataIndex: "status", key: "status" },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: Task) => (
        <>
          <Button
            type="link"
            onClick={() => {
              setSelectedOutput(record.output);
              setModalVisible(true);
            }}
          >
            View Output
          </Button>
          <Button type="link" danger onClick={() => deleteTask(record.id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  const filteredTasks = tasks.filter((task) =>
    task.command.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card title="Task History" style={{ margin: "30px auto", maxWidth: 800 }}>
      <Input.Search
        placeholder="Search commands..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: 20 }}
      />
      <Table dataSource={filteredTasks} columns={columns} rowKey="id" />
      <TaskOutputModal
        visible={modalVisible}
        output={selectedOutput}
        onClose={() => setModalVisible(false)}
      />
    </Card>
  );
};

export default TaskList;

