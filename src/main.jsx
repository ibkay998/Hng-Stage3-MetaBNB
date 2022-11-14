import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider,extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

const theme = extendTheme({
  components:{
    Drawer:{
      parts: ['dialog', 'header', 'body'],
      variants: {
        primary: {
          dialog: {
            background: 'red', 
          }
        },
        secondary: {
          dialog: {
            background: 'green'
          }
        }
      },
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  
);
