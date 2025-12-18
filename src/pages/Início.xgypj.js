// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// Landing Page CapClear - Higienização de Capacetes

// ============================================
// CONFIGURAÇÃO - ATUALIZE COM SEUS DADOS REAIS
// ============================================
const CONFIG = {
    whatsapp: {
        numero: "5511999999999", // Formato internacional sem + (ex: 5511999999999)
        mensagem: "Olá! Gostaria de agendar uma Telebusca para higienização do meu capacete."
    },
    instagram: "https://instagram.com/capclear", // URL completa do Instagram
    email: "contato@capclear.com.br",
    telefone: "(51) 99999-9999"
};

// ============================================
// DADOS DOS POSTOS - ATUALIZE COM DADOS REAIS
// ============================================
const POSTOS_DATA = [
    {
        nome: "Posto [Nome do Posto 1]",
        endereco: "[Endereço Completo do Posto 1, Canoas - RS]",
        coordenadas: { lat: -29.9178, lng: -51.1836 } // Coordenadas de Canoas (exemplo)
    },
    {
        nome: "Posto [Nome do Posto 2]",
        endereco: "[Endereço Completo do Posto 2, Canoas - RS]",
        coordenadas: { lat: -29.9178, lng: -51.1836 }
    },
    {
        nome: "Posto [Nome do Posto 3]",
        endereco: "[Endereço Completo do Posto 3, Canoas - RS]",
        coordenadas: { lat: -29.9178, lng: -51.1836 }
    }
];

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

/**
 * Função para scroll suave até uma seção
 * @param {string} elementId - ID do elemento alvo
 */
function scrollToSection(elementId) {
    try {
        const targetElement = $w(elementId);
        if (targetElement) {
            targetElement.scrollTo();
        }
    } catch (error) {
        console.error("Erro ao fazer scroll:", error);
    }
}

/**
 * Abre link externo (Waze, Maps, WhatsApp, etc)
 * @param {string} url - URL completa para abrir
 */
function openExternalLink(url) {
    try {
        wixLocation.to(url);
    } catch (error) {
        // Fallback para navegadores que não suportam wixLocation
        window.open(url, '_blank');
    }
}

/**
 * Gera URL do Waze para traçar rota
 * @param {string} endereco - Endereço completo
 * @returns {string} URL do Waze
 */
function getWazeUrl(endereco) {
    const enderecoEncoded = encodeURIComponent(endereco);
    return `https://waze.com/ul?q=${enderecoEncoded}`;
}

/**
 * Gera URL do Google Maps para traçar rota
 * @param {string} endereco - Endereço completo
 * @returns {string} URL do Google Maps
 */
function getGoogleMapsUrl(endereco) {
    const enderecoEncoded = encodeURIComponent(endereco);
    return `https://www.google.com/maps/search/?api=1&query=${enderecoEncoded}`;
}

/**
 * Gera URL do WhatsApp com mensagem pré-formatada
 * @param {string} numero - Número no formato internacional sem +
 * @param {string} mensagem - Mensagem a ser enviada
 * @returns {string} URL do WhatsApp
 */
function getWhatsAppUrl(numero, mensagem) {
    const mensagemEncoded = encodeURIComponent(mensagem);
    return `https://wa.me/${numero}?text=${mensagemEncoded}`;
}

/**
 * Atualiza os dados dos postos nos elementos da página
 */
function atualizarDadosPostos() {
    POSTOS_DATA.forEach((posto, index) => {
        const indice = index + 1; // 1, 2, 3
        
        try {
            // Atualizar nome do posto
            const nomeElement = $w(`#posto${indice}Nome`);
            if (nomeElement) {
                nomeElement.text = `📍 ${posto.nome}`;
            }
            
            // Atualizar endereço do posto
            const enderecoElement = $w(`#posto${indice}Endereco`);
            if (enderecoElement) {
                enderecoElement.text = `Endereço: ${posto.endereco}`;
            }
            
            // Configurar botão de traçar rota
            const rotaButton = $w(`#posto${indice}Rota`);
            if (rotaButton) {
                rotaButton.onClick(() => {
                    // Abre menu para escolher Waze ou Maps
                    // Por padrão, vamos usar Google Maps (mais universal)
                    // Você pode criar um dropdown ou usar apenas um link
                    openExternalLink(getGoogleMapsUrl(posto.endereco));
                });
            }
        } catch (error) {
            console.error(`Erro ao atualizar dados do posto ${indice}:`, error);
        }
    });
}

// ============================================
// INICIALIZAÇÃO DA PÁGINA
// ============================================
$w.onReady(function () {
    console.log("Landing Page CapClear carregada");
    
    // ============================================
    // HERO SECTION - Botão CTA Principal
    // ============================================
    try {
        const heroButton = $w("#heroButton");
        if (heroButton) {
            heroButton.onClick(() => {
                scrollToSection("#mapaSection");
            });
        }
    } catch (error) {
        console.error("Erro ao configurar botão Hero:", error);
    }
    
    // ============================================
    // SEÇÃO ONDE ENCONTRAR - Atualizar dados dos postos
    // ============================================
    atualizarDadosPostos();
    
    // ============================================
    // SEÇÃO TELEBUSCA - Botão WhatsApp
    // ============================================
    try {
        const telebuscaButton = $w("#telebuscaButton");
        if (telebuscaButton) {
            telebuscaButton.onClick(() => {
                const whatsappUrl = getWhatsAppUrl(
                    CONFIG.whatsapp.numero,
                    CONFIG.whatsapp.mensagem
                );
                openExternalLink(whatsappUrl);
            });
        }
    } catch (error) {
        console.error("Erro ao configurar botão Telebusca:", error);
    }
    
    // ============================================
    // RODAPÉ - Links de Redes Sociais e Contato
    // ============================================
    try {
        // Link do Instagram
        const instagramLink = $w("#instagramLink");
        if (instagramLink) {
            instagramLink.onClick(() => {
                openExternalLink(CONFIG.instagram);
            });
        }
        
        // Link de e-mail (se for um elemento clicável)
        const emailLink = $w("#emailLink");
        if (emailLink) {
            emailLink.onClick(() => {
                window.location.href = `mailto:${CONFIG.email}`;
            });
        }
        
        // Link de telefone (se for um elemento clicável)
        const telefoneLink = $w("#telefoneLink");
        if (telefoneLink) {
            telefoneLink.onClick(() => {
                // Remove caracteres não numéricos para link telefônico
                const numeroLimpo = CONFIG.telefone.replace(/\D/g, '');
                window.location.href = `tel:+${numeroLimpo}`;
            });
        }
    } catch (error) {
        console.error("Erro ao configurar links do rodapé:", error);
    }
    
    console.log("Landing Page CapClear inicializada com sucesso!");
});
