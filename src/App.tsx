import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import TaskForm from "./pages/TaskForm";
import TaskList from "./pages/TaskList";

const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <Link to="/">Run Task</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/tasks">View Tasks</Link>
            </Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<TaskForm />} />
            <Route path="/tasks" element={<TaskList />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;

