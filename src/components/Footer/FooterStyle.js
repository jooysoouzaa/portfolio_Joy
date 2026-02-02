import styled from 'styled-components'

export const FooterSection = styled.section`
    background-color: #010101;
    margin-top: 100px;
    border: 1px solid;
    border-image: linear-gradient(90deg, #010101, #303030, #010101) 1;
`;

export const FooterContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 12px 60px;

    @media only screen and (max-width: 1023px) {
        max-width: 1280px;
        margin: 0 auto;
        padding: 12px 20px;
}
`;

export const BtnTop = styled.div`
    a {
        display: none;
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        background: linear-gradient(#9b30f9,#84e);
        color: white;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        text-align: center;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.4s ease, transform 0.4s ease;
        transform: translateY(40px);
        cursor: pointer;
    }

    .show a {
        display: flex;
        opacity: 1;
        z-index: 2;
        pointer-events: auto;
        transform: translateY(0);
    }
`;

export const FooterImg = styled.img`
    margin: 0 auto;
    margin-bottom: 8px;
`;

export const FooterCopy = styled.p`
    font-size: 1rem;
    line-height: 1.33;
    color: #fef5f5;
    text-align: center;

    strong {
        background:linear-gradient(#9b30f9,#84e);
        -webkit-background-clip: text;
        color: transparent;
    }
`;