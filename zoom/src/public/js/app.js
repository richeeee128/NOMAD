// 서버로의 연결
const frontSocket = new WebSocket(`ws://${window.location.host}`);

frontSocket.addEventListener("open", () => {
  console.log("connected to browser");
});

frontSocket.addEventListener("message", (message) => {
  console.log("New message:", message.data);
});

frontSocket.addEventListener("close", () => {
  console.log("Disconnected from server");
});

setTimeout(() => {
  frontSocket.send("hello frome the brower");
}, 5000);
