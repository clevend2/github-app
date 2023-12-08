import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import './App.css';
import { RepositoryInfo } from './github.types';
import ListItemButton from '@mui/material/ListItemButton';

const token = localStorage.getItem("token");

function App() {
  const [repos, setRepos] = React.useState<RepositoryInfo[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

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
        <ListItemButton
          onClick={() => window.location.href = repo.url}
        >
          <ListItemText
            primary={repo.name}
            secondary={repo.description || "No description"}
          />
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Your repositories
        </p>
      </header>
      {loading && <CircularProgress color="secondary" />}
      {!loading && repos.length === 0 && <Alert severity="info">No repositories found</Alert>}
      {!loading && repos.length > 0 && ( 
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {listItems}
      </List>
      )}
    </div>
  );
}

export default App;
