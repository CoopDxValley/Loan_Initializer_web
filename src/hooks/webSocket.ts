import { useEffect, useState } from "react";

const useWebSocket = (url: string) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [oldMessage, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => console.log("WebSocket connected");
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prev) => [...prev, message]);
    };
    ws.onclose = () => console.log("WebSocket disconnected");
    ws.onerror = (error) => console.error("WebSocket error:", error);

    setSocket(ws);

    return () => ws.close();
  }, [url]);

  const sendNewMessage = (event: string, data: any) => {
    if (socket) {
      socket.send(JSON.stringify({ event, data }));
    }
  };

  return { oldMessage, sendNewMessage };
};

export default useWebSocket;
