import {
    CallSection, CallContainer, CallTituloPrincipal, CallParagrafo, Contatos, ContatosLista, ContatoItem,
    ContatoLink, ContatoImg
} from './CallToActionStyle';

function Call() {
    return (
        <CallSection id='Call' aria-label="Call">
            <CallContainer>
                <CallTituloPrincipal><strong>Vamos construir algo juntos</strong>.</CallTituloPrincipal>
                <CallParagrafo>
                    Se você busca uma desenvolvedora front-end focada em interfaces, experiência do usuário e qualidade técnica, ficarei feliz em conversar.
                </CallParagrafo>
                <Contatos>
                    <ContatosLista>
                        <ContatoItem>
                            <ContatoLink href="https://api.whatsapp.com/send?phone=5511969838280" target="_blank" rel="noopener noreferrer">
                                <ContatoImg src="/contato/whatsapp.svg" alt="WhatsApp" width="50" height="50" />
                            </ContatoLink>
                        </ContatoItem>
                        <ContatoItem>
                            <ContatoLink href="mailto:joysouza.contato@gmail.com?subject=Olá%20Joy Sóuza" target="_blank" rel="noopener noreferrer">
                                <ContatoImg src="/contato/email.svg" alt="E-mail" width="50" height="50" />
                            </ContatoLink>
                        </ContatoItem>
                        <ContatoItem>
                            <ContatoLink href="https://www.linkedin.com/in/jooyaraujo/" target="_blank" rel="noopener noreferrer">
                                <ContatoImg src="/contato/linkedin.svg" alt="Linkedin" width="50" height="50" />
                            </ContatoLink>
                        </ContatoItem>
                    </ContatosLista>
                </Contatos>
            </CallContainer>
        </CallSection>
    )
}

export default Call;
