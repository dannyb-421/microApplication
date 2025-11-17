import { useState, useEffect } from "react";
import axios from "axios";
import { Box, TextField, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:4000/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Add a new user
  const addUser = async () => {
    if (!name) return;

    // Debugging log for frontend
    console.log("Adding user:", name);

    try {
      await axios.post("http://localhost:4000/users", { name });
      setName("");
      fetchUsers();
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  const columns = [{ field: "name", headerName: "Name", flex: 1 }];

  return (
    <Box sx={{ maxWidth: 500, margin: "40px auto" }}>
      {/* Add user input */}
      <Box sx={{ display: "flex", gap: 1, marginBottom: 2 }}>
        <TextField
          fullWidth
          placeholder="New user name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="contained" onClick={addUser}>
          Add
        </Button>
      </Box>

      {/* Users DataGrid */}
      <Box sx={{ height: '70vh', width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
        />
      </Box>
    </Box>
  );
}

export default App;
