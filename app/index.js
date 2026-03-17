const http = require("http");

const server = http.createServer((req, res) => {
  res.write("DevOps CI/CD Virtual Lab Deployed using Git, Terraform, Ansible, Docker & Kubernetes");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});