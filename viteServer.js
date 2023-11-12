// 引入Vite
import { createServer } from 'vite';

async function startServer() {
  // 創建Vite伺服器
  const vite = await createServer({
    server: {
      port: 3000, // 指定伺服器端口
    },
  });

  // 啟動伺服器
  await vite.listen();
  console.log('open vite 3000')
}

// 呼叫函數啟動伺服器
startServer();
