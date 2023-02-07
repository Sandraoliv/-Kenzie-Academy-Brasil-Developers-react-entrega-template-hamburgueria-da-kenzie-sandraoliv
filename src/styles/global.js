import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    outline: none;
    text-decoration: none;
    font-family: 'Inter' ;
    }
    button{
        cursor: pointer;
    }
    :root{
    --primary: #27AE60 ;
    --primary-ligth:#93D7AF;
    --secondary:#EB5757;

    --grey1:#333333;
    --grey2:#828282;
    --grey3:#E0E0E0;
    --grey4:#F5F5F5;

    --negative:#E60000;
    --warnning:#FFCD07;
    --sucsses:#168821;
     
   
    } 
    .load{
        font-size: 1rem;
        color: #168821;
        margin-left: 20px;
    }
   

header{
    height: 139px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
   
    background-color: var(--grey4);
}
    img{
        width: 158.94px;
        height: 36.83px;
    }
    form{
        background-color:white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 95%;
        border: 2px solid var(--grey3);
        border-radius: 10px;
        padding: 6px;
        gap: 5px;
        align-items: center;
    }
      input{
       
       height: 45px;
       border: none;
    }
    button{
        color:var(--grey4);
        height: 38px;
        width: 107px;
        border: none;
        border-radius:8px;
        background-color: var(--primary);
       }
       main{
        width: 100vw;
        height: 100vh;
        margin :0 auto;
       
       }
  

       @media (min-width:769px) {
        header{
            padding:  0 109px;
            flex-direction: row;
            justify-content:space-between;
            align-items: center;
        }
        section{
            width: 70%;
            padding: 0 12px;
            

        }
        form{
            width: 382px;
            height: 60px;  
        }

       }
    
`;
