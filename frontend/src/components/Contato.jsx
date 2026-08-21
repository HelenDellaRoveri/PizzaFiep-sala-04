import { useState } from 'react';

export default function Contato() {
    // Criamos estados para armazenar os valores digitados no formulário
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const enviarWhatsApp = (e) => {
        e.preventDefault(); // Evita recarregar a página

        const telefone = '5541999009999';
        
        const texto = `Olá!\nMeu nome é ${nome}\nMeu email é: ${email}\nMensagem: ${mensagem}`;
        const textoCodificado = encodeURIComponent(texto);
        const whatsappURL = `https://wa.me/${telefone}?text=${textoCodificado}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <section className="contato" id="contato">
            <h2>Entre em Contato</h2>
            <div className="contato-container">
                <div className="mapa">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.123456789!2d-49.2733!3d-25.4284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4c123456789%3A0xabcdef123456789!2sR.%20Paula%20Gomes%2C%20270%20-%20Curitiba%20PR!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr"
                        width="500" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <div className="formulario">
                    {/* O evento onSubmit agora chama a nossa função React */}
                    <form onSubmit={enviarWhatsApp}>
                        <input 
                            type="text" 
                            placeholder="Nome" 
                            required 
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea 
                            placeholder="Escreva sua mensagem aqui" 
                            required
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                        ></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    );
}