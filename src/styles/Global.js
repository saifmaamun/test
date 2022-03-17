import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
  scroll-behavior: smooth;
}
    *{
        box-sizing:border-box;
      }
      body{
        padding:0;
        margin:0;
        width: 100%;
        font-family:${({ theme }) => theme.font};
    }
    
    button,input,select{
      font-family:${({ theme }) => theme.font};
    }
   
    ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
      }
    
      ::-webkit-scrollbar-track {
        background: #edecec;
        border-radius: 50px;
      }
    
      ::-webkit-scrollbar-thumb {
        background: #c4c4c4;
        border-radius: 50px;
      }
    
      ::-webkit-scrollbar-thumb:hover {
        background: #c4c4c4;
      }



      
`;

export default GlobalStyle;
