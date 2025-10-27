const canvas = document.getElementById("graphCanvas");
const ctx = canvas.getContext("2d");
let nodes = [];
let edges = [];
let colors = ["#58a6ff", "#3fb950", "#f85149", "#d29922", "#a371f7", "#ff9bce"];
let usedColors = {};

function generateGraph() {
  const n = parseInt(document.getElementById("nodeCount").value);
  nodes = [];
  edges = [];
  usedColors = {};

  // Random positions for nodes
  for (let i = 0; i < n; i++) {
    nodes.push({
      id: i,
      x: Math.random() * (canvas.width - 100) + 50,
      y: Math.random() * (canvas.height - 100) + 50,
      color: null
    });
  }

  // Random edges
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (Math.random() < 0.35) edges.push([i, j]);
    }
  }

  drawGraph();
  document.getElementById("result").innerText = "Graph generated!";
}

function drawGraph() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw edges
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#30363d";
  edges.forEach(([a, b]) => {
    const n1 = nodes[a];
    const n2 = nodes[b];
    ctx.beginPath();
    ctx.moveTo(n1.x, n1.y);
    ctx.lineTo(n2.x, n2.y);
    ctx.stroke();
  });

  // Draw nodes
  nodes.forEach(n => {
    ctx.beginPath();
    ctx.arc(n.x, n.y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = n.color || "#161b22";
    ctx.fill();
    ctx.strokeStyle = "#58a6ff";
    ctx.stroke();
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 14px Segoe UI";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(n.id + 1, n.x, n.y);
  });
}

async function colorGraph() {
  document.getElementById("result").innerText = "Coloring graph...";

  for (let i = 0; i < nodes.length; i++) {
    let available = [...colors];
    for (let [a, b] of edges) {
      if (a === i && nodes[b].color) available = available.filter(c => c !== nodes[b].color);
      if (b === i && nodes[a].color) available = available.filter(c => c !== nodes[a].color);
    }

    const chosen = available[0] || "#999";
    nodes[i].color = chosen;
    usedColors[chosen] = true;
    drawGraph();
    await new Promise(r => setTimeout(r, 600)); // animation delay
  }

  document.getElementById("result").innerText = `Graph successfully colored using ${Object.keys(usedColors).length} colors.`;
}

function resetGraph() {
  nodes = [];
  edges = [];
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("result").innerText = "Graph reset!";
}
