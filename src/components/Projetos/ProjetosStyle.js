import styled from 'styled-components';


export const Projetos = styled.div`

`;

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 20px 60px;

    @media screen and (max-width: 1023px) {
        padding: 20px;
    }
`;

// export const ProjetosItem = styled.div`
//     padding: 30px;
//     background: #121212;
//     border: 1px solid #3d3d3d6e;
//     border-radius: 10px;
//     position: relative;
//     display: flex;
//     height: 380px;
//     flex-direction: column;
//     box-sizing: border-box;
//     overflow: hidden;

//     &::before {
//     content: "";
//     display: block;
//     width: 4px;
//     height: 50px;
//     background: linear-gradient(180deg, #FA12E3, #7312FA, #415CA7);
//     position: absolute;
//     top: 20px;
//     left: 0;
// }

//     @media only screen and (min-width: 320px) and (max-width: 374px) {
//         height: 335px;
//         padding: 20px;
// }

//     @media only screen and (min-width: 375px) and (max-width: 424px) {
//             height: 320px;
//             padding: 20px;
//     }

//     @media only screen and (min-width: 425px) and (max-width: 599px) {
//             height: 340px;
//             padding: 20px;
//     }

//     @media only screen and (min-width: 600px) and (max-width: 767px) {
//             height: 360px;
//             padding: 20px;
//     }

//     @media only screen and (min-width: 768px) and (max-width: 1024px) {
//             height: 350px;
//             padding: 20px;
//     }

//     @media only screen and (min-width: 1025px) {
//             height: 390px;
//             padding: 20px;

// }

// `;