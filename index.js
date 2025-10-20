export function render() {
  const container =
    document.getElementById("app") || document.createElement("div");
  const child = document.createElement("div");
  child.textContent = "Testing with DOM";
  container.appendChild(child);
}

render();
