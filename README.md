# 🎨 Graph Coloring Visualizer

An interactive **Graph Coloring Visualizer** developed using **HTML5, CSS3, JavaScript, and the HTML5 Canvas API**. This project demonstrates the **Greedy Graph Coloring Algorithm**, a classic solution to the Graph Coloring Problem in **Graph Theory** and **Artificial Intelligence (Constraint Satisfaction Problems)**.

The visualizer generates a random graph, colors its vertices step-by-step with smooth animations, and ensures that no two adjacent vertices share the same color.

---

# 📖 Overview

Graph Coloring is a well-known NP-hard problem in Computer Science where each vertex of a graph is assigned a color such that no two connected vertices have the same color.

This project provides an interactive visualization of the **Greedy Graph Coloring Algorithm**, helping students understand how graph coloring works through real-time animation.

---

# 📸 Application Preview

> **Graph Coloring Visualizer**

![Application Screenshot](Screenshot%202026-07-25%20234000.png)

---

# ✨ Features

- 🎲 Random graph generation
- 🎨 Animated graph coloring visualization
- 📊 Displays total colors used
- 🔢 User-defined number of graph nodes
- ⚡ Greedy Graph Coloring Algorithm
- 🌙 Modern dark-themed user interface
- 🖥️ Interactive Canvas visualization
- 📱 Lightweight and responsive design

---

# 🧠 Algorithm Used

## Greedy Graph Coloring Algorithm

The Greedy Graph Coloring Algorithm assigns colors to vertices one by one.

### Working Procedure

1. Generate a random graph.
2. Select the first vertex.
3. Check the colors assigned to all adjacent vertices.
4. Choose the first available color that is not used by neighboring vertices.
5. Assign the color.
6. Repeat until every vertex has been colored.

Although this algorithm does not always produce the optimal coloring, it provides an efficient approximation suitable for many real-world applications.

---

# 🔄 Algorithm Workflow

```
Start

↓

Generate Random Graph

↓

Select First Vertex

↓

Check Adjacent Vertices

↓

Find First Available Color

↓

Assign Color

↓

Move to Next Vertex

↓

Repeat Until All Vertices Are Colored

↓

Display Number of Colors Used

↓

End
```

---

# ⏱️ Time Complexity

### Graph Generation

```
O(V²)
```

### Greedy Graph Coloring

```
O(V + E)
```

Where:

- **V** = Number of Vertices
- **E** = Number of Edges

---

# 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- HTML5 Canvas API

---

# 📂 Project Structure

```
GRAPH-COLORING-PROJECT-AI/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── Screenshot 2026-07-25 234000.png
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/Revaan23/GRAPH-COLORING-PROJECT-AI.git
```

Navigate to the project directory

```bash
cd GRAPH-COLORING-PROJECT-AI
```

Open the project

Simply open **index.html** in your preferred web browser.

Or use **Visual Studio Code** with the **Live Server** extension.

---

# 🎮 How to Use

### Step 1

Enter the desired number of nodes.

### Step 2

Click **Generate Graph**.

A random graph will be generated.

### Step 3

Click **Start Coloring**.

The Greedy Graph Coloring Algorithm begins assigning colors to each vertex.

### Step 4

Watch the animation as each node is colored.

### Step 5

The application displays the total number of colors used.

### Step 6

Click **Reset** to clear the graph and generate a new one.

---

# 🖥️ User Interface

The application includes:

- Control Panel
- Node Count Input
- Generate Graph Button
- Start Coloring Button
- Reset Button
- Interactive Graph Canvas
- Animated Graph Coloring
- Result Display

---

# 🎨 Coloring Rules

The algorithm guarantees that:

- Adjacent vertices never share the same color.
- Previously assigned colors are reused whenever possible.
- The graph is colored efficiently using a greedy strategy.

---

# 📚 Applications

Graph Coloring has numerous practical applications, including:

- 📅 Examination Timetable Scheduling
- 🏫 University Course Scheduling
- 📡 Frequency Assignment in Wireless Networks
- 💻 Register Allocation in Compilers
- 🗺️ Map Coloring
- 🚦 Traffic Signal Scheduling
- 📈 Resource Allocation
- 🧩 Constraint Satisfaction Problems
- 🤖 Artificial Intelligence
- 🎮 Game Development

---

# 📖 Learning Outcomes

This project demonstrates concepts including:

- Graph Theory
- Graph Coloring Problem
- Constraint Satisfaction Problems (CSP)
- Greedy Algorithms
- Algorithm Visualization
- HTML5 Canvas
- JavaScript Programming
- Interactive Web Development

---

# 🚀 Future Enhancements

- Backtracking Graph Coloring Algorithm
- Welsh–Powell Algorithm
- DSATUR Algorithm
- User-created custom graphs
- Drag-and-drop nodes
- Weighted graph support
- Directed graph support
- Graph import/export
- Performance comparison between algorithms
- Step-by-step execution mode
- Light/Dark theme switch
- Mobile responsive design

---

# 👨‍💻 Author

**Revaan J.R.**

**B.Tech – Artificial Intelligence and Data Science**

---

# 🤝 Contributing

Contributions are welcome!

1. Fork this repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

---

# 📄 License

This project is licensed under the **MIT License**.

---

## ⭐ If you found this project useful, please consider giving it a ⭐ Star on GitHub!
