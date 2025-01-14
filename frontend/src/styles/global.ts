import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-brand1:#D84B16;
        --color-brand2:#F1A800;
        --color-brand3:#ed4e00;
        --color-brand4:#993300b3;
        ;
        ;

        
        --color-grey-0:#0B0D0D;
        --color-grey-1:#212529;
        --color-grey-2:#495057;
        --color-grey-3:#868E96;
        --color-grey-4:#ADB5BD;
        --color-grey-5:#CED4DA;
        --color-grey-6:#DEE2E6;
        --color-grey-7:#E9ECEF;
        --color-grey-8:#F1F3F5;
        --color-grey-9:#F8F9FA;
        --color-grey-10:#FDFDFD;
        --color-withe-fixed:#FFFFFF;

        --color-alert-1:#CD2B31;
        --color-alert-2:#FDD8D8;
        --color-alert-3:#FFE5E5;
        --color-sucess-1:#4CAF50 ;
        --color-sucess-2:#CCEBD7;
        --color-sucess-3:#DDF3E4;

        
     
    }

    .app{
        background: var(--color-withe-fixed);
        display:flex;
        flex-direction:column;
        height:100vh;
    overflow:hidden;
        font-family: "Montserrat", sans-serif;

    }
    /* @media(min-width:1000px){
       .app{ flex-direction: row;
    }} */

     .home{
        background:radial-gradient(var(--color-brand4), var(--color-brand1));
        height: 100vh;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
       
     }
     ::-webkit-scrollbar{
    width: 5px;
    height: 2px;

   
}

::-webkit-scrollbar-thumb{
    background-color: var(--color-brand2);
}

.principal_box{
    width: 100%;
    display:flex;
}
.pedidosPage{
    display:flex;
    flex-direction:column;
    width:100%;
}
`;
