import styled from 'styled-components'

export const SobreSection = styled.section`
    max-width: 1280px;
    margin: 0 auto;
    padding: 60px 20px;

    @media screen and (max-width: 1023px) {
        padding: 20px;
    }
`;

export const SobreContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    gap: 60px;
    padding: 30px;
    background: #121212;
    border: 1px solid #3d3d3d6e;
    border-radius: 10px;
    position: relative;

    @media screen and (max-width: 1023px) {
        display: block;
        padding: 20px;
    }

    &::before {
    content: "";
    display: block;
    width: 4px;
    height: 50px;
    background: linear-gradient(#9b30f9,#84e);
    position: absolute;
    top: 20px;
    left: 0;
};
`;
export const SobreTituloPrincipal = styled.h2`
    color: #fef5f5;
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: 700;
    font-family: "Titillium Web", sans-serif;

    @media screen and (max-width: 767px){
        font-size: 30px;
    }
`;

export const SobreParagrafo = styled.div`
    display:flex;
    flex-direction: column;

    @media screen and (max-width: 1023px){
        margin-bottom: 20px;
    }
`;

export const SobreText = styled.p`
    color: #bdbdbd;
    margin-bottom: 20px;
`;



export const ProjetosButton = styled.button`
    font-family: "Titillium Web", sans-serif;
    font-size: 1rem;
    line-height: 1.4;
    font-weight: 600;
    border-radius: 4px;
    background: linear-gradient(#9b30f9,#84e);
    color: #fef5f5;
    padding: 10px;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.8s ease-out;
    width: 200px;
    margin-top: 20px;
    padding: 16px;

    &:hover {
        background: linear-gradient(-90deg, #9b30f9, #84e);
        transform: scale(1.2);
    }
`;


export const FormacaoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media screen and (max-width: 767px) {
        grid-template-columns: 1fr;
        padding-top: 20px;
}

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        padding-top: 20px;
    }

    &> :nth-child(3) {
        grid-row: 2;
        grid-column: 1 / span 2;
    }
}
`;

export const FormacaoFaculdade = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px 20px;
    padding: 20px;
    background: #252525;
    border: 2px solid transparent;
    border-radius: 10px;
    position: relative;

    &:hover {
    background: #2f2f2f;
    border: 2px solid #3d3d3d6e;
    }

    @media screen and (max-width: 400px) {
        grid-template-columns: 1fr;
}

    @media screen and (max-width: 767px) {
        margin-bottom: 0;
        grid-template-columns: 1fr;
}
`;

export const FormacaoFaculdadeCurso = styled.p`
    font-size: 1.125rem;
    line-height: 1.4;
    color: #fef5f5;
    font-weight: 700;

    @media screen and (max-width: 767px) {
        font-size: 1rem;
}
`;

export const FormacaoFaculdadeTipo = styled.h3`
    font-size: 1.125rem;
    letter-spacing: 1px;
    line-height: 1.1;
    font-weight: 400;
    color: #bdbdbd;

    @media screen and (max-width: 767px) {
        font-size: 1rem;
        letter-spacing: 0.5px;
}   
`;

export const FormacaoFaculdadeConclusao = styled.ul`
    display: flex;
    gap: 10px;
    align-items: start;

    li {
    line-height: 1.4;
    font-weight: 500;
    border-radius: 4px;
    background: #383838;
    color: #fef5f5;
    padding: 5px 10px;
    font-size: 1.125rem;

    @media screen and (max-width: 767px) {
        font-size: 1rem;
    }
}
`;
