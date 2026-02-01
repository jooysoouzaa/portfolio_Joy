import styled from 'styled-components'

export const FormacaoSection = styled.section`
    max-width: 1280px;
    margin: 0 auto;
    padding: 60px 20px;

    @media screen and (max-width: 767px) {
        grid-template-columns: 2fr;
        gap: 40px;
    }
`;

export const FormacaoTitulo = styled.h2`
    color: #fef5f5;
    margin-bottom: 40px;
    font-size: 40px;
    font-weight: 700;
    font-family: "Titillium Web", sans-serif;

    @media screen and (max-width: 767px) {
        font-size: 30px !important;
}
`;

export const FormacaoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    @media screen and (max-width: 767px) {
        grid-template-columns: 1fr;
        
        &> :nth-child(3) {
            grid-row: initial;
            grid-column: initial;
    }
}

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    &> :nth-child(3) {
        margin-bottom: 20px;
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
    background: #121212;
    border: 1px solid #3d3d3d6e;
    margin-bottom: 20px;
    border-radius: 10px;
    position: relative;

    &::before {
    content: "";
    display: block;
    width: 4px;
    height: 50px;
    background: linear-gradient(90deg, #FA12E3, #7312FA, #415CA7);
    position: absolute;
    top: 20px;
    left: 0px;
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
    background: linear-gradient(90deg, #FA12E3, #7312FA, #415CA7);
    -webkit-background-clip: text;
    color: transparent;
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
    background: #303030;
    color: #fef5f5;
    padding: 5px 10px;
    font-size: 1.125rem;

    @media screen and (max-width: 767px) {
        font-size: 1rem;
    }
}
`;

export const FormacaoExtra = styled.div`
    h3 {
        line-height: 1.4;
        color: #fef5f5;
        text-transform: uppercase;
        margin-bottom: 15px;
        position: relative;

        @media screen and (max-width: 767px) {
            margin-top: 20px;
}
    }

    li {
    line-height: 1.1;
    margin-bottom: 20px;
    
    @media screen and (max-width: 767px) {
        font-size: 1rem;
    }
}
    span {
    color: #bdbdbd;
    text-align: right;
}
`;

export const FormacaoExtraCursos = styled.div`
    li {
        color: #bdbdbd;
        display: flex;
        justify-content: space-between;
        font-size: 1.125rem;
}
`;

export const Idiomas = styled.div`
    h3 {
        line-height: 1.4;
        color: #fef5f5;
        text-transform: uppercase;
        margin-bottom: 15px;
        position: relative;
        margin-top: 30px;
}
    li {
        color: #bdbdbd;
        font-size: 1.125rem;
        line-height: 1.1;

        @media screen and (max-width: 767px) {
        font-size: 1rem;
    }
    }
`;