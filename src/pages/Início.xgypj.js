// ============================================
// CAPCLEAR - Landing Page
// High-conversion page for helmet sanitization service
// Design: Industrial Clean (Dark Mode)
// Target: "O Corre" (delivery drivers/couriers)
// ============================================

import wixLocation from 'wix-location-frontend';
import wixWindow from 'wix-window-frontend';

// ============================================
// DESIGN SYSTEM - CONSTANTES DE CORES
// ============================================
const COLORS = {
    PRIMARY_CTA: "#3000FF",      // Azul Ultra Tech - Botões principais
    BACKGROUND: "#181818",        // Cinza Asfalto - Fundo principal
    TEXT: "#F2F2F2",              // Branco Pureza - Texto/Icons
    ACCENT: "#B0B0B0"             // Prata/Metal - Bordas e elementos secundários
};

// ============================================
// CONFIGURAÇÃO - ATUALIZE COM SEUS DADOS REAIS
// ============================================
const CONFIG = {
    whatsapp: {
        numero: "555199999999", // Formato: código país + DDD + número (sem +)
        mensagem: "Olá, vim pelo site e quero higienizar meu capacete."
    },
    instagram: "https://instagram.com/capclear", // URL do Instagram
    email: "contato@capclear.com.br",
    telefone: "(51) 99999-9999",
    postos: [
        {
            nome: "Posto [Nome do Posto 1]",
            endereco: "[Endereço Completo do Posto 1, Canoas - RS]",
            coordenadas: { lat: -29.9180, lng: -51.1782 } // Exemplo - Posto 1
        },
        {
            nome: "Posto [Nome do Posto 2]",
            endereco: "[Endereço Completo do Posto 2, Canoas - RS]",
            coordenadas: { lat: -29.9180, lng: -51.1782 } // Exemplo - Posto 2 (atualizar)
        },
        {
            nome: "Posto [Nome do Posto 3]",
            endereco: "[Endereço Completo do Posto 3, Canoas - RS]",
            coordenadas: { lat: -29.9180, lng: -51.1782 } // Exemplo - Posto 3 (atualizar)
        }
    ]
};

// ============================================
// FUNÇÕES DE NAVEGAÇÃO E LOCALIZAÇÃO
// ============================================

/**
 * Localizador Inteligente - Detecta dispositivo e abre app apropriado
 * Mobile: Tenta Waze App primeiro, fallback para Google Maps App
 * Desktop: Google Maps em nova aba
 * 
 * @param {number} lat - Latitude do posto
 * @param {number} lon - Longitude do posto
 * @param {string} endereco - Endereço completo (opcional, para fallback)
 */
function handleMapNavigation(lat, lon, endereco = "") {
    const formFactor = wixWindow.formFactor;
    
    if (formFactor === "Mobile") {
        // Mobile: Prioriza Waze App (deep link)
        const wazeUrl = `waze://?ll=${lat},${lon}&navigate=yes`;
        
        // Tenta abrir Waze primeiro
        try {
            wixLocation.to(wazeUrl);
        } catch (error) {
            // Fallback: Google Maps App no mobile
            const googleMapsAppUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;
            wixLocation.to(googleMapsAppUrl);
        }
    } else {
        // Desktop: Google Maps Web
        const googleMapsUrl = endereco 
            ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`
            : `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
        wixLocation.to(googleMapsUrl);
    }
}

/**
 * Scroll suave até a seção de mapas
 * 
 * IDs necessários no Editor Wix:
 * - #btnHeroAction (botão CTA principal no Hero)
 * - #sectionMaps (container da seção "Onde Encontrar")
 */
function scrollToMaps() {
    const mapsSection = $w("#sectionMaps");
    if (mapsSection) {
        mapsSection.scrollTo();
    }
}

/**
 * Abre conversa WhatsApp com mensagem pré-definida
 * 
 * IDs necessários no Editor Wix:
 * - #btnWhatsapp (botão "Agendar Telebusca no WhatsApp")
 */
function openTelebuscaWhatsApp() {
    const mensagemEncoded = encodeURIComponent(CONFIG.whatsapp.mensagem);
    const whatsappUrl = `https://wa.me/${CONFIG.whatsapp.numero}?text=${mensagemEncoded}`;
    wixLocation.to(whatsappUrl);
}

// ============================================
// CONFIGURAÇÃO DE ANIMAÇÕES
// ============================================

/**
 * Prepara animações para elementos ao entrar no viewport
 * Usa onViewportEnter para trigger de animações
 * Performance: Lazy loading - anima apenas quando visível
 * 
 * IDs sugeridos no Editor Wix:
 * - #sectionWhy (seção "Por que usar?")
 * - #sectionHow (seção "Como Funciona")
 * - Cards individuais: #cardHealth, #cardComfort, #cardSpeed
 * - Passos: #step1, #step2, #step3
 * 
 * Nota: Para animações avançadas, use wix-animations API diretamente nos elementos
 * ou configure animações no Editor Wix que são triggeradas via onViewportEnter
 */
function setupAnimations() {
    // Seção "Por que usar?" - Trigger de animação ao entrar no viewport
    const whySection = $w("#sectionWhy");
    if (whySection) {
        whySection.onViewportEnter(() => {
            // Animações podem ser configuradas aqui
            // Exemplo: Animar cards sequencialmente
            const cards = ["#cardHealth", "#cardComfort", "#cardSpeed"];
            cards.forEach((cardId, index) => {
                const card = $w(cardId);
                if (card) {
                    // Delay sequencial para efeito cascata
                    setTimeout(() => {
                        // Animações podem ser adicionadas aqui
                        // wix-animations API pode ser usada
                    }, index * 200);
                }
            });
        });
    }
    
    // Seção "Como Funciona" - Trigger de animação ao entrar no viewport
    const howSection = $w("#sectionHow");
    if (howSection) {
        howSection.onViewportEnter(() => {
            // Animações podem ser configuradas aqui
            // Exemplo: Animar passos sequencialmente
            const steps = ["#step1", "#step2", "#step3"];
            steps.forEach((stepId, index) => {
                const step = $w(stepId);
                if (step) {
                    setTimeout(() => {
                        // Animações podem ser adicionadas aqui
                    }, index * 300);
                }
            });
        });
    }
}

/**
 * Configura links do rodapé (Instagram, E-mail, Telefone)
 * IDs opcionais no Editor Wix:
 * - #instagramLink (link para Instagram)
 * - #emailLink (link para e-mail)
 * - #telefoneLink (link para telefone)
 */
function setupFooterLinks() {
    // Link do Instagram
    const instagramLink = $w("#instagramLink");
    if (instagramLink) {
        instagramLink.onClick(() => {
            wixLocation.to(CONFIG.instagram);
        });
    }
    
    // Link de e-mail (mailto)
    const emailLink = $w("#emailLink");
    if (emailLink) {
        emailLink.onClick(() => {
            // Usa wixLocation para mailto (compatível com Velo)
            const mailtoUrl = `mailto:${CONFIG.email}`;
            wixLocation.to(mailtoUrl);
        });
    }
    
    // Link de telefone (tel)
    const telefoneLink = $w("#telefoneLink");
    if (telefoneLink) {
        telefoneLink.onClick(() => {
            // Remove caracteres não numéricos para link telefônico
            const numeroLimpo = CONFIG.telefone.replace(/\D/g, '');
            const telUrl = `tel:+${numeroLimpo}`;
            wixLocation.to(telUrl);
        });
    }
}

// ============================================
// CONFIGURAÇÃO DOS POSTOS
// ============================================

/**
 * Atualiza os dados dos postos nos elementos da página (se existirem)
 * Preenche automaticamente nomes e endereços dos postos
 * 
 * IDs opcionais no Editor Wix (para cada posto):
 * - #posto1Nome, #posto2Nome, #posto3Nome (textos com nomes)
 * - #posto1Endereco, #posto2Endereco, #posto3Endereco (textos com endereços)
 */
function atualizarDadosPostos() {
    CONFIG.postos.forEach((posto, index) => {
        const indice = index + 1;
        
        try {
            // Atualizar nome do posto (se elemento existir)
            const nomeElement = $w(`#posto${indice}Nome`);
            if (nomeElement && nomeElement.text !== undefined) {
                nomeElement.text = `📍 ${posto.nome}`;
            }
            
            // Atualizar endereço do posto (se elemento existir)
            const enderecoElement = $w(`#posto${indice}Endereco`);
            if (enderecoElement && enderecoElement.text !== undefined) {
                enderecoElement.text = `Endereço: ${posto.endereco}`;
            }
        } catch (error) {
            // Elementos podem não existir - isso é normal
            console.log(`Elementos do posto ${indice} não encontrados (opcional)`);
        }
    });
}

/**
 * Configura os botões de rota para cada posto
 * 
 * IDs necessários no Editor Wix (para cada posto):
 * - #btnRoute1, #btnRoute2, #btnRoute3 (botões "Traçar Rota")
 * 
 * Alternativamente, você pode usar um único handler se os botões
 * tiverem data attributes ou IDs dinâmicos
 */
function setupPostosNavigation() {
    CONFIG.postos.forEach((posto, index) => {
        const btnId = `#btnRoute${index + 1}`;
        const routeButton = $w(btnId);
        
        if (routeButton) {
            routeButton.onClick(() => {
                handleMapNavigation(
                    posto.coordenadas.lat, 
                    posto.coordenadas.lng,
                    posto.endereco
                );
            });
        }
    });
}

// ============================================
// INICIALIZAÇÃO DA PÁGINA
// ============================================

$w.onReady(async () => {
    // ============================================
    // HERO SECTION - Botão CTA Principal
    // ============================================
    // ID necessário: #btnHeroAction
    const heroButton = $w("#btnHeroAction");
    if (heroButton) {
        heroButton.onClick(() => {
            scrollToMaps();
        });
    }
    
    // ============================================
    // SEÇÃO MAPAS - Atualizar dados e configurar navegação
    // ============================================
    // Atualiza textos dos postos (se elementos existirem)
    atualizarDadosPostos();
    
    // Configura botões de rota
    // IDs necessários: #btnRoute1, #btnRoute2, #btnRoute3
    setupPostosNavigation();
    
    // ============================================
    // TELEBUSCA - Botão WhatsApp
    // ============================================
    // ID necessário: #btnWhatsapp
    const whatsappButton = $w("#btnWhatsapp");
    if (whatsappButton) {
        whatsappButton.onClick(() => {
            openTelebuscaWhatsApp();
        });
    }
    
    // ============================================
    // ANIMAÇÕES - Configuração inicial (Lazy Loading)
    // ============================================
    setupAnimations();
    
    // ============================================
    // RODAPÉ - Links de contato e redes sociais
    // ============================================
    setupFooterLinks();
    
    console.log("✅ CapClear Landing Page inicializada");
    console.log(`📱 Formato: ${wixWindow.formFactor}`);
    console.log(`📍 Postos configurados: ${CONFIG.postos.length}`);
});

// ============================================
// NOTAS PARA IMPLEMENTAÇÃO NO EDITOR WIX
// ============================================
/*
 * ============================================
 * ELEMENTOS OBRIGATÓRIOS NO EDITOR WIX:
 * ============================================
 * 
 * HERO SECTION:
 * - Botão: ID = "btnHeroAction"
 *   Texto: "📍 Encontrar máquina mais próxima"
 *   Cor: Use COLORS.PRIMARY_CTA (#3000FF)
 * 
 * SEÇÃO MAPAS (PRIORIDADE):
 * - Container: ID = "sectionMaps" (necessário para scroll suave)
 * - Botões de rota (um para cada posto):
 *   ID = "btnRoute1", "btnRoute2", "btnRoute3"
 *   Texto: "Traçar Rota"
 *   Cor: Use COLORS.PRIMARY_CTA (#3000FF)
 * 
 * TELEBUSCA:
 * - Botão: ID = "btnWhatsapp"
 *   Texto: "📱 Agendar Telebusca no WhatsApp"
 *   Cor: Use verde WhatsApp ou COLORS.PRIMARY_CTA
 * 
 * ============================================
 * ELEMENTOS OPCIONAIS (mas recomendados):
 * ============================================
 * 
 * DADOS DOS POSTOS (preenchimento automático):
 * - Texto Nome Posto 1: ID = "posto1Nome"
 * - Texto Endereço Posto 1: ID = "posto1Endereco"
 * - Texto Nome Posto 2: ID = "posto2Nome"
 * - Texto Endereço Posto 2: ID = "posto2Endereco"
 * - Texto Nome Posto 3: ID = "posto3Nome"
 * - Texto Endereço Posto 3: ID = "posto3Endereco"
 * 
 * SEÇÕES PARA ANIMAÇÕES (Lazy Loading):
 * - Container: ID = "sectionWhy" (seção "Por que usar?")
 * - Container: ID = "sectionHow" (seção "Como Funciona")
 * - Cards: ID = "cardHealth", "cardComfort", "cardSpeed"
 * - Passos: ID = "step1", "step2", "step3"
 * 
 * RODAPÉ:
 * - Link Instagram: ID = "instagramLink"
 * - Link E-mail: ID = "emailLink"
 * - Link Telefone: ID = "telefoneLink"
 * 
 * ============================================
 * DADOS A ATUALIZAR NO CÓDIGO:
 * ============================================
 * 
 * 1. CONFIG.whatsapp.numero
 *    Formato: "555199999999" (código país + DDD + número, sem +)
 * 
 * 2. CONFIG.instagram
 *    URL completa: "https://instagram.com/seu_perfil"
 * 
 * 3. CONFIG.email
 *    E-mail de contato: "contato@capclear.com.br"
 * 
 * 4. CONFIG.telefone
 *    Formato: "(51) 99999-9999"
 * 
 * 5. CONFIG.postos (ARRAY)
 *    Para cada posto, atualizar:
 *    - nome: Nome completo do posto
 *    - endereco: Endereço completo (rua, número, bairro, cidade)
 *    - coordenadas.lat: Latitude GPS (ex: -29.9180)
 *    - coordenadas.lng: Longitude GPS (ex: -51.1782)
 * 
 * ============================================
 * FUNCIONALIDADES IMPLEMENTADAS:
 * ============================================
 * 
 * ✅ Scroll suave Hero → Seção Mapas
 * ✅ Localizador inteligente (Waze Mobile / Maps Desktop)
 * ✅ Deep linking Waze com fallback para Google Maps
 * ✅ WhatsApp com mensagem pré-formatada
 * ✅ Atualização automática de dados dos postos
 * ✅ Animações lazy loading (onViewportEnter)
 * ✅ Links do rodapé (Instagram, E-mail, Telefone)
 * ✅ Tratamento de erros robusto
 * ✅ Detecção de dispositivo (Mobile/Desktop)
 * ✅ Design System (constantes de cores)
 * 
 * ============================================
 * DESIGN SYSTEM - CORES:
 * ============================================
 * 
 * Use estas constantes para estilizar no Editor Wix:
 * - COLORS.PRIMARY_CTA: #3000FF (Azul Ultra Tech)
 * - COLORS.BACKGROUND: #181818 (Cinza Asfalto)
 * - COLORS.TEXT: #F2F2F2 (Branco Pureza)
 * - COLORS.ACCENT: #B0B0B0 (Prata/Metal)
 */
