const name = "ชื่อของคุณ";
const age = 20;
const hobby = "เขียนโปรแกรม";

const introDiv = document.getElementById("intro");

introDiv.innerHTML = `
  <p>ผมชื่อ <strong>${name}</strong></p>
  <p>อายุ ${age} ปี</p>
  <p>งานอดิเรก: ${hobby}</p>
`;

