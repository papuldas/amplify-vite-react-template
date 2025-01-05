import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from "aws-amplify/data";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import SkipManagement from './components/SkipManagement';
import OrderManagement from './components/OrderManagement';
import AuditTrail from './components/AuditTrail';
import WeighbridgeManagement from './components/WeighbridgeManagement';
const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const { user, signOut } = useAuthenticator();

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }

  return (
  /*
   <main>
        <h1>{user?.signInDetails?.loginId}'s todos</h1>
        <button onClick={createTodo}>+ new</button>
        <ul>
          {todos.map((todo) => (
            <li onClick={() => deleteTodo(todo.id)}
            key={todo.id}>{todo.content}</li>
          ))}
        </ul>
        <div>
          🥳 App successfully hosted. Try creating a new todo.
          <br />
          <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
            Review next step of this tutorial.
          </a>
        </div>
        <button onClick={signOut}>Sign out</button>
      </main>*/

          <Router>
                  <div style={{ display: 'flex', height: '100vh' }}>
                    {/* Sidebar */}
                    <div style={{ width: '20%',  padding: '20px' }}>
                      <h3>Management App</h3>
                      <nav>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          <li><Link to="/">Dashboard</Link></li>
                          <li><Link to="/skip-management">Skip Management</Link></li>
                          <li><Link to="/order-management">Order Management</Link></li>
                          <li><Link to="/audit-trail">Audit Trail</Link></li>
                          <li><Link to="/weighbridge-management">Weighbridge Management</Link></li>
                        </ul>
                      </nav>
                    </div>

                    {/* Content Area */}
                    <div style={{ flex: 1, padding: '20px' }}>
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/skip-management" element={<SkipManagement />} />
                        <Route path="/order-management" element={<OrderManagement />} />
                        <Route path="/audit-trail" element={<AuditTrail />} />
                        <Route path="/weighbridge-management" element={<WeighbridgeManagement />} />
                      </Routes>
                    </div>
                  </div>
                </Router>
  );
}

export default App;
