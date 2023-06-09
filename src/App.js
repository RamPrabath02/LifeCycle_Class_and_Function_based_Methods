import React from "react";
import { Layout, Menu } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import ToDoList from "./pages/ToDoList";
import FeedbackForm from "./pages/FeedbackForm";
import ClassLC from "./pages/ClassLC";
import FunctionLC from "./pages/FunctionLC";

const { Footer } = Layout;
const { Content, Sider } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="dark">
          <Menu.Item key="1">
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/todo-list">To-Do List</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/ClassLC">ClassLC</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/FunctionLC">FunctionLC</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/feedback">Feedback Form</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/home" element={<Home />} />
              <Route path="/todo-list" element={<ToDoList />} />
              <Route path="/ClassLC" element={<ClassLC />} />
              <Route path="/FunctionLC" element={<FunctionLC />} />
              <Route path="/feedback" element={<FeedbackForm />} />
            </Routes>
          </div>
        </Content>
        <Footer>
          <h1>Footer1</h1>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
