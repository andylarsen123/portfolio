/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica Neue', sans-serif;
  background: #f8f8f8;
  color: #111;
  line-height: 1.6;
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
}

header h1 {
  font-size: 2rem;
  letter-spacing: -1px;
}

nav a {
  margin-left: 20px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

nav a:hover {
  color: #555;
}

#hero {
  margin-bottom: 60px;
  padding: 40px 0;
}

#hero h2 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.project-list {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
}

.project {
  padding: 20px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 8px;
}

section {
  margin-bottom: 80px;
}

footer {
  text-align: center;
  font-size: 0.9rem;
  color: #777;
  margin-top: 40px;
}

