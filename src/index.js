const messages = ["xavier", "coco", "jorge", "pau", "daniela", "diego"];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
