import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import './App.css';
import { RepositoryInfo } from './github.types';

const token = localStorage.getItem("token");

function App() {
  const [repos, setRepos] = React.useState<RepositoryInfo[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);


  if (!token) {
    window.location.href = "/authenticate";
  }

  React.useEffect(() => {
    fetch('/repositories', {
      headers: {
        'Authorization': `${token}`
      }
    })
      .then((response) => {
        if (response.status === 401) {
          window.location.href = "/authenticate";
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      });
  }, []);


  const listItems = repos.map((repo) =>
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={repo.name}
          secondary={repo.description || "No description"}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Your repositories
        </p>
      </header>
      {loading && <Typography variant="h6">Loading...</Typography>}
      {!loading && repos.length === 0 && <Typography variant="h6">No repositories found</Typography>}
      {!loading && repos.length > 0 && ( 
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {listItems}
      </List>
      )}
    </div>
  );
}

export default App;
