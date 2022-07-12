import * as React from 'react';
import {Router} from './src/router.js';
import {QueryClient, QueryClientProvider} from 'react-query';
import {useState} from 'react';
import {init} from './Utils/database.js'; 

const App = () => {
  const queryClient = new QueryClient();
  const [initDB, setInitDB] = useState(false);
  React.useEffect(() => {
    init()
      .then(() => {
        setInitDB(true);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
};

export default App;
