import styled from 'styled-components'

export const ExperienciasSection = styled.section`
    max-width: 1280px;
    margin: 0 auto;
    padding: 60px 20px;
        
`;

export const ExperienciasTitulo = styled.h2`
    color: #fef5f5;
    margin-bottom: 40px;
    font-size: 40px;
    font-weight: 700;
    font-family: "Titillium Web", sans-serif;

    @media screen and (max-width: 767px) {
        font-size: 30px !important;
}
`;


export const ExperienciasContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
        grid-template-columns: 1fr 1fr;
}
`;

export const ExperienciasEmpresa = styled.div`
    display: block;
    padding: 20px;
    background: #121212;
    border: 1px solid #3d3d3d6e;
    border-radius: 10px;
    position: relative;

    &::before {
    content: "";
    display: block;
    width: 4px;
    height: 50px;
    background: linear-gradient(#9b30f9,#84e);
    position: absolute;
    top: 20px;
    left: 0;
}
`;

export const ExperienciasSubtitulo = styled.div`
    font-size: 1.125rem;
    margin-bottom: 10px;
    line-height: 1.3;
    font-weight: bold;
    color: #fef5f5;

    @media (max-width: 767px){
        font-size: 1rem;
        letter-spacing: 0.5px;
}
`;

export const ExperienciasHabilidades = styled.ul`
    li {
        display: inline-block;
        line-height: 1.4;
        font-weight: 500;
        border-radius: 4px;
        background: #252525;
        color: #fef5f5;
        padding: 5px 10px;
        font-size: 1.125rem;

        @media (max-width: 767px) {
        font-size: 1rem;
    }
}
`;

export const ExperienciasParagrafo = styled.p`
    display: flex;
    gap: 10px;
    margin: 10px 0px;
    align-items: start;
    font-size: 1.125rem;
    line-height: 1.4;
    color: #bdbdbd;
`;


export const Voluntario = styled.div`
    margin-top: 40px;

    li {
    font-size: 1.125rem;
    line-height: 1.1;
}
`;


export const VoluntarioTitulo = styled.div`
    line-height: 1.4;
    color: #fef5f5;
    text-transform: uppercase;
    margin-bottom: 15px;
    position: relative;
    margin-top: 30px;
    font-weight: 600;
`;