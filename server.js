import express from "express";
const app = express();
const port = 3000;
import { readFile } from 'fs';
// const coffeeData = require('./src/assets/coffee.json');

// 定义路由处理 GET 请求

// app.use(json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/coffee", (req, res) => {
  readFile("./src/assets/coffee.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.post("/api/login", (req, res) => {
  const data = {
    username: "test",
    password: "1234",
  };
  res.json(data);
});

app.delete("/api/delete1", (req, res) => {
  const index = Deletedata.find((obj) => obj.id);
  console.log(index.id);
  // // 查找要删除的对象的索引
  // const index = Deletedata.findIndex(obj => obj.id === id);
  // // console.log(id)
  if (index.id === -1) {
    // 没有找到匹配的对象
    return res.status(404).json({
      message: "Object not found",
    });
  }

  // // 删除对象
  Deletedata.splice(index, 1);
  res.json({
    message: "Object deleted successfully",
  });
});

// 启动服务器监听指定端口
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
