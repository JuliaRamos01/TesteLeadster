import styled from "styled-components";

export const HeaderMain = styled.header`
background-color: #f1f9ff;
display: flex;
height: 60vh;
align-items: center;
justify-content: center;
`;

export const HeaderBox = styled.div`
height: 40vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

h3{
    font-size: 2.5rem;
}
`;
export const H1 = styled.h1`
    font-size: 4.5rem;
    color: #2c83fb;
    height: 15vh;
    width: 50vw;
    text-align: center;
    border-bottom: gray 1px solid;
`;

export const Button = styled.button`
text-transform: uppercase;
border: #2c83fb 2px solid;
background-color: transparent;
height: 5vh;
width: 15vw;
border-radius: 10vh;
border-bottom-left-radius: 3vh;
color: #2c83fb;
`;