// ============================================
// CAPCLEAR - Landing Page (Estilo Moderno)
// High-conversion page for helmet sanitization service
// Design: Industrial Clean (Dark Mode) - Estilo Moderno
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
    ACCENT: "#B0B0B0",            // Prata/Metal - Bordas e elementos secundários
    BLUE_600: "#2563EB",          // Azul para gradientes
    SLATE_900: "#0F172A",         // Slate escuro
    SLATE_800: "#1E293B"          // Slate médio
};

// ============================================
// CONTEÚDO CAPCLEAR - TEXTOS E IDENTIDADE
// ============================================
const CAPCLEAR_CONTENT = {
    // Hero Section
    hero: {
        badge: "⚡ Higienização Expressa",
        h1: "SEU CAPACETE",
        h1Highlight: "NOVO DE NOVO",
        h1End: "EM MINUTOS.",
        subtitle: "A tecnologia de Ozônio e UV que elimina bactérias e tira o mau cheiro enquanto você abastece. Sem frescura, rápido e eficiente.",
        ctaPrimary: "📍 Encontrar Posto",
        ctaSecondary: "🚴 Pedir Telebusca"
    },
    
    // Seção "Por que usar?" / Benefits
    benefits: {
        titulo: "Higiene é segurança.",
        cards: [
            {
                titulo: "Saúde Blindada",
                texto: "Eliminação de fungos e bactérias que causam doenças de pele e respiratórias. Seu capacete deixa de ser um vilão."
            },
            {
                titulo: "Agilidade Total",
                texto: "Ciclo automatizado. Enquanto você abastece ou toma um café, a máquina faz a mágica. Sem perda de tempo."
            },
            {
                titulo: "Conforto Real",
                texto: "O fim do capacete com 'cheiro de cachorro molhado'. Sensação de equipamento novo todo dia."
            }
        ]
    },
    
    // Seção "Como Funciona"
    how: {
        titulo: "COMO FUNCIONA",
        subtitulo: "Simples, rápido e sem burocracia.",
        passos: [
            { step: 1, title: "Coloque", desc: "Abra a máquina e posicione o capacete." },
            { step: 2, title: "Pague", desc: "Pix ou Cartão direto na máquina." },
            { step: 3, title: "Pronto", desc: "Aguarde o ciclo e retire limpinho." }
        ]
    },
    
    // Seção "Onde Encontrar"
    maps: {
        badge: "Canoas / RS",
        titulo: "ENCONTRE O POSTO MAIS PRÓXIMO",
        subtitulo: "Já estamos em 3 pontos estratégicos da cidade."
    },
    
    // Seção Telebusca
    telebusca: {
        titulo: "NÃO PODE IR ATÉ O POSTO?",
        tituloHighlight: "A GENTE BUSCA.",
        texto: "Serviço exclusivo de Telebusca em Canoas. Nossa unidade móvel recolhe, higieniza e devolve seu capacete brilhando.",
        beneficios: [
            "Agendamento flexível via WhatsApp",
            "Busca e leva na sua casa ou trabalho",
            "Pagamento fácil via Pix na entrega"
        ],
        cta: "📱 AGENDAR PELO WHATSAPP",
        horario: "Atendimento de Seg a Sáb, das 08h às 19h."
    },
    
    // Rodapé
    footer: {
        cidade: "Canoas, Rio Grande do Sul.",
        copyright: "CapClear. Todos os direitos reservados."
    }
};

// ============================================
// CONFIGURAÇÃO - ATUALIZE COM SEUS DADOS REAIS
// ============================================
const CONFIG = {
    whatsapp: {
        numero: "555199999999", // Formato: código país + DDD + número (sem +)
        mensagem: "Olá! Gostaria de agendar uma Telebusca para higienização do meu capacete."
    },
    instagram: "https://instagram.com/capclear",
    email: "contato@capclear.com.br",
    telefone: "(51) 99999-9999",
    postos: [
        {
            nome: "Posto Ipiranga - Centro",
            endereco: "Av. Guilherme Schell, 1200 - Centro, Canoas",
            coordenadas: { lat: -29.9180, lng: -51.1782 }
        },
        {
            nome: "Posto Shell - Mal. Rondon",
            endereco: "Rua Munique, 550 - Mal. Rondon, Canoas",
            coordenadas: { lat: -29.9178, lng: -51.1836 }
        },
        {
            nome: "Posto BR - Mathias Velho",
            endereco: "Av. Rio Grande do Sul, 2100 - Mathias Velho, Canoas",
            coordenadas: { lat: -29.9200, lng: -51.1800 }
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
 */
function handleMapNavigation(lat, lon, endereco = "") {
    const formFactor = wixWindow.formFactor;
    
    if (formFactor === "Mobile") {
        // Mobile: Prioriza Waze App (deep link)
        const wazeUrl = `waze://?ll=${lat},${lon}&navigate=yes`;
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
 * Scroll suave até uma seção
 */
function scrollToSection(sectionId) {
    const section = $w(sectionId);
    if (section) {
        section.scrollTo();
    }
}

/**
 * Abre conversa WhatsApp com mensagem pré-definida
 */
function openTelebuscaWhatsApp() {
    const mensagemEncoded = encodeURIComponent(CONFIG.whatsapp.mensagem);
    const whatsappUrl = `https://wa.me/${CONFIG.whatsapp.numero}?text=${mensagemEncoded}`;
    wixLocation.to(whatsappUrl);
}

// ============================================
// APLICAÇÃO DE CONTEÚDO E IDENTIDADE VISUAL
// ============================================

/**
 * Preenche automaticamente todos os textos da landing page
 * com o conteúdo oficial da CapClear (estilo moderno)
 */
function aplicarConteudoCapClear() {
    // ============================================
    // HERO SECTION
    // ============================================
    try {
        const heroBadge = $w("#heroBadge");
        if (heroBadge && heroBadge.text !== undefined) {
            heroBadge.text = CAPCLEAR_CONTENT.hero.badge;
        }
        
        const heroH1 = $w("#heroH1");
        if (heroH1 && heroH1.text !== undefined) {
            heroH1.text = CAPCLEAR_CONTENT.hero.h1;
        }
        
        const heroH1Highlight = $w("#heroH1Highlight");
        if (heroH1Highlight && heroH1Highlight.text !== undefined) {
            heroH1Highlight.text = CAPCLEAR_CONTENT.hero.h1Highlight;
        }
        
        const heroH1End = $w("#heroH1End");
        if (heroH1End && heroH1End.text !== undefined) {
            heroH1End.text = CAPCLEAR_CONTENT.hero.h1End;
        }
        
        const heroSubtitle = $w("#heroSubtitle");
        if (heroSubtitle && heroSubtitle.text !== undefined) {
            heroSubtitle.text = CAPCLEAR_CONTENT.hero.subtitle;
        }
        
        const heroCtaPrimary = $w("#heroCtaPrimary");
        if (heroCtaPrimary && heroCtaPrimary.label !== undefined) {
            heroCtaPrimary.label = CAPCLEAR_CONTENT.hero.ctaPrimary;
        }
        
        const heroCtaSecondary = $w("#heroCtaSecondary");
        if (heroCtaSecondary && heroCtaSecondary.label !== undefined) {
            heroCtaSecondary.label = CAPCLEAR_CONTENT.hero.ctaSecondary;
        }
    } catch (error) {
        console.log("Elementos do Hero não encontrados (opcional)");
    }
    
    // ============================================
    // SEÇÃO BENEFITS / "POR QUE USAR?"
    // ============================================
    try {
        const benefitsTitulo = $w("#benefitsTitulo");
        if (benefitsTitulo && benefitsTitulo.text !== undefined) {
            benefitsTitulo.text = CAPCLEAR_CONTENT.benefits.titulo;
        }
        
        // Cards: Saúde, Agilidade, Conforto
        const cardTitles = ["#benefitCard1Title", "#benefitCard2Title", "#benefitCard3Title"];
        const cardTexts = ["#benefitCard1Text", "#benefitCard2Text", "#benefitCard3Text"];
        
        CAPCLEAR_CONTENT.benefits.cards.forEach((card, index) => {
            const titleElement = $w(cardTitles[index]);
            if (titleElement && titleElement.text !== undefined) {
                titleElement.text = card.titulo;
            }
            
            const textElement = $w(cardTexts[index]);
            if (textElement && textElement.text !== undefined) {
                textElement.text = card.texto;
            }
        });
    } catch (error) {
        console.log("Elementos da seção Benefits não encontrados (opcional)");
    }
    
    // ============================================
    // SEÇÃO "COMO FUNCIONA"
    // ============================================
    try {
        const howTitulo = $w("#howTitulo");
        if (howTitulo && howTitulo.text !== undefined) {
            howTitulo.text = CAPCLEAR_CONTENT.how.titulo;
        }
        
        const howSubtitulo = $w("#howSubtitulo");
        if (howSubtitulo && howSubtitulo.text !== undefined) {
            howSubtitulo.text = CAPCLEAR_CONTENT.how.subtitulo;
        }
        
        // Passos 1, 2, 3
        CAPCLEAR_CONTENT.how.passos.forEach((passo, index) => {
            const stepTitle = $w(`#step${index + 1}Title`);
            if (stepTitle && stepTitle.text !== undefined) {
                stepTitle.text = passo.title;
            }
            
            const stepDesc = $w(`#step${index + 1}Desc`);
            if (stepDesc && stepDesc.text !== undefined) {
                stepDesc.text = passo.desc;
            }
        });
    } catch (error) {
        console.log("Elementos da seção 'Como Funciona' não encontrados (opcional)");
    }
    
    // ============================================
    // SEÇÃO "ONDE ENCONTRAR"
    // ============================================
    try {
        const mapsBadge = $w("#mapsBadge");
        if (mapsBadge && mapsBadge.text !== undefined) {
            mapsBadge.text = CAPCLEAR_CONTENT.maps.badge;
        }
        
        const mapsTitulo = $w("#mapsTitulo");
        if (mapsTitulo && mapsTitulo.text !== undefined) {
            mapsTitulo.text = CAPCLEAR_CONTENT.maps.titulo;
        }
        
        const mapsSubtitulo = $w("#mapsSubtitulo");
        if (mapsSubtitulo && mapsSubtitulo.text !== undefined) {
            mapsSubtitulo.text = CAPCLEAR_CONTENT.maps.subtitulo;
        }
    } catch (error) {
        console.log("Elementos da seção 'Onde Encontrar' não encontrados (opcional)");
    }
    
    // ============================================
    // SEÇÃO TELEBUSCA
    // ============================================
    try {
        const telebuscaTitulo = $w("#telebuscaTitulo");
        if (telebuscaTitulo && telebuscaTitulo.text !== undefined) {
            telebuscaTitulo.text = CAPCLEAR_CONTENT.telebusca.titulo;
        }
        
        const telebuscaTituloHighlight = $w("#telebuscaTituloHighlight");
        if (telebuscaTituloHighlight && telebuscaTituloHighlight.text !== undefined) {
            telebuscaTituloHighlight.text = CAPCLEAR_CONTENT.telebusca.tituloHighlight;
        }
        
        const telebuscaTexto = $w("#telebuscaTexto");
        if (telebuscaTexto && telebuscaTexto.text !== undefined) {
            telebuscaTexto.text = CAPCLEAR_CONTENT.telebusca.texto;
        }
        
        // Benefícios da Telebusca
        const telebuscaBeneficios = ["#telebuscaBenefit1", "#telebuscaBenefit2", "#telebuscaBenefit3"];
        CAPCLEAR_CONTENT.telebusca.beneficios.forEach((beneficio, index) => {
            const benefitElement = $w(telebuscaBeneficios[index]);
            if (benefitElement && benefitElement.text !== undefined) {
                benefitElement.text = beneficio;
            }
        });
        
        const telebuscaButton = $w("#telebuscaButton");
        if (telebuscaButton && telebuscaButton.label !== undefined) {
            telebuscaButton.label = CAPCLEAR_CONTENT.telebusca.cta;
        }
        
        const telebuscaHorario = $w("#telebuscaHorario");
        if (telebuscaHorario && telebuscaHorario.text !== undefined) {
            telebuscaHorario.text = CAPCLEAR_CONTENT.telebusca.horario;
        }
    } catch (error) {
        console.log("Elementos da seção Telebusca não encontrados (opcional)");
    }
    
    // ============================================
    // RODAPÉ
    // ============================================
    try {
        const footerCidade = $w("#footerCidade");
        if (footerCidade && footerCidade.text !== undefined) {
            footerCidade.text = CAPCLEAR_CONTENT.footer.cidade;
        }
        
        const footerCopyright = $w("#footerCopyright");
        if (footerCopyright && footerCopyright.text !== undefined) {
            const ano = new Date().getFullYear();
            footerCopyright.text = `© ${ano} ${CAPCLEAR_CONTENT.footer.copyright}`;
        }
    } catch (error) {
        console.log("Elementos do rodapé não encontrados (opcional)");
    }
}

/**
 * Atualiza os dados dos postos nos elementos da página
 */
function atualizarDadosPostos() {
    CONFIG.postos.forEach((posto, index) => {
        const indice = index + 1;
        
        try {
            // Nome do posto
            const nomeElement = $w(`#posto${indice}Nome`);
            if (nomeElement && nomeElement.text !== undefined) {
                nomeElement.text = posto.nome;
            }
            
            // Endereço do posto
            const enderecoElement = $w(`#posto${indice}Endereco`);
            if (enderecoElement && enderecoElement.text !== undefined) {
                enderecoElement.text = posto.endereco;
            }
        } catch (error) {
            console.log(`Elementos do posto ${indice} não encontrados (opcional)`);
        }
    });
}

/**
 * Configura os botões de rota para cada posto
 * Suporta botões separados para Maps e Waze
 */
function setupPostosNavigation() {
    CONFIG.postos.forEach((posto, index) => {
        const indice = index + 1;
        
        // Botão Maps
        const mapsButton = $w(`#posto${indice}Maps`);
        if (mapsButton) {
            mapsButton.onClick(() => {
                const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(posto.endereco)}`;
                wixLocation.to(googleMapsUrl);
            });
        }
        
        // Botão Waze (ou botão único de rota)
        const wazeButton = $w(`#posto${indice}Waze`);
        if (wazeButton) {
            wazeButton.onClick(() => {
                handleMapNavigation(posto.coordenadas.lat, posto.coordenadas.lng, posto.endereco);
            });
        }
        
        // Fallback: botão único "Traçar Rota"
        const routeButton = $w(`#posto${indice}Rota`);
        if (routeButton) {
            routeButton.onClick(() => {
                handleMapNavigation(posto.coordenadas.lat, posto.coordenadas.lng, posto.endereco);
            });
        }
    });
}

/**
 * Configura links do rodapé
 */
function setupFooterLinks() {
    const instagramLink = $w("#footerInstagram");
    if (instagramLink) {
        instagramLink.onClick(() => {
            wixLocation.to(CONFIG.instagram);
        });
    }
    
    const emailLink = $w("#footerEmail");
    if (emailLink) {
        emailLink.onClick(() => {
            const mailtoUrl = `mailto:${CONFIG.email}`;
            wixLocation.to(mailtoUrl);
        });
    }
    
    const telefoneLink = $w("#footerTelefone");
    if (telefoneLink) {
        telefoneLink.onClick(() => {
            const numeroLimpo = CONFIG.telefone.replace(/\D/g, '');
            const telUrl = `tel:+${numeroLimpo}`;
            wixLocation.to(telUrl);
        });
    }
}

/**
 * Configura menu mobile (se existir)
 */
function setupMobileMenu() {
    const menuButton = $w("#mobileMenuButton");
    const mobileMenu = $w("#mobileMenu");
    
    if (menuButton && mobileMenu) {
        let isMenuOpen = false;
        
        menuButton.onClick(() => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.show();
            } else {
                mobileMenu.hide();
            }
        });
        
        // Fechar menu ao clicar em links
        const menuLinks = ["#mobileMenuLink1", "#mobileMenuLink2", "#mobileMenuLink3"];
        menuLinks.forEach(linkId => {
            const link = $w(linkId);
            if (link) {
                link.onClick(() => {
                    mobileMenu.hide();
                    isMenuOpen = false;
                });
            }
        });
    }
}

// ============================================
// CONFIGURAÇÃO DE ANIMAÇÕES
// ============================================

/**
 * Prepara animações para elementos ao entrar no viewport
 */
function setupAnimations() {
    // Seção Benefits
    const benefitsSection = $w("#sectionBenefits");
    if (benefitsSection) {
        benefitsSection.onViewportEnter(() => {
            const cards = ["#benefitCard1", "#benefitCard2", "#benefitCard3"];
            cards.forEach((cardId, index) => {
                const card = $w(cardId);
                if (card) {
                    setTimeout(() => {
                        // Animações podem ser adicionadas aqui
                    }, index * 200);
                }
            });
        });
    }
    
    // Seção Como Funciona
    const howSection = $w("#sectionHow");
    if (howSection) {
        howSection.onViewportEnter(() => {
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

// ============================================
// INICIALIZAÇÃO DA PÁGINA
// ============================================

$w.onReady(async () => {
    // ============================================
    // APLICAÇÃO DE CONTEÚDO E IDENTIDADE VISUAL
    // ============================================
    aplicarConteudoCapClear();
    
    // ============================================
    // HERO SECTION - Botões CTA
    // ============================================
    const heroCtaPrimary = $w("#heroCtaPrimary");
    if (heroCtaPrimary) {
        heroCtaPrimary.onClick(() => {
            scrollToSection("#sectionMaps");
        });
    }
    
    const heroCtaSecondary = $w("#heroCtaSecondary");
    if (heroCtaSecondary) {
        heroCtaSecondary.onClick(() => {
            scrollToSection("#sectionTelebusca");
        });
    }
    
    // ============================================
    // SEÇÃO MAPAS - Atualizar dados e configurar navegação
    // ============================================
    atualizarDadosPostos();
    setupPostosNavigation();
    
    // ============================================
    // TELEBUSCA - Botão WhatsApp
    // ============================================
    const telebuscaButton = $w("#telebuscaButton");
    if (telebuscaButton) {
        telebuscaButton.onClick(() => {
            openTelebuscaWhatsApp();
        });
    }
    
    // ============================================
    // MENU MOBILE
    // ============================================
    setupMobileMenu();
    
    // ============================================
    // ANIMAÇÕES - Configuração inicial (Lazy Loading)
    // ============================================
    setupAnimations();
    
    // ============================================
    // RODAPÉ - Links de contato e redes sociais
    // ============================================
    setupFooterLinks();
    
    console.log("✅ CapClear Landing Page (Estilo Moderno) inicializada");
    console.log(`📱 Formato: ${wixWindow.formFactor}`);
    console.log(`📍 Postos configurados: ${CONFIG.postos.length}`);
    console.log(`🎨 Identidade visual CapClear aplicada`);
});

// ============================================
// NOTAS PARA IMPLEMENTAÇÃO NO EDITOR WIX
// ============================================
/*
 * ============================================
 * ESTRUTURA DA LANDING PAGE (ESTILO MODERNO)
 * ============================================
 * 
 * Esta landing page segue o estilo moderno do homepage.html
 * com design "Industrial Clean" adaptado para Wix Velo.
 * 
 * ============================================
 * HERO SECTION:
 * ============================================
 * - Badge: ID = "heroBadge" (texto: "⚡ Higienização Expressa")
 * - H1 Parte 1: ID = "heroH1" (texto: "SEU CAPACETE")
 * - H1 Destaque: ID = "heroH1Highlight" (texto: "NOVO DE NOVO")
 * - H1 Parte Final: ID = "heroH1End" (texto: "EM MINUTOS.")
 * - Subtítulo: ID = "heroSubtitle"
 * - Botão CTA Primário: ID = "heroCtaPrimary" → Scroll para #sectionMaps
 * - Botão CTA Secundário: ID = "heroCtaSecondary" → Scroll para #sectionTelebusca
 * 
 * ============================================
 * SEÇÃO BENEFITS / "POR QUE USAR?":
 * ============================================
 * - Container: ID = "sectionBenefits" (para animações)
 * - Título: ID = "benefitsTitulo" (texto: "Higiene é segurança.")
 * - Card 1: ID = "benefitCard1"
 *   - Título: ID = "benefitCard1Title" (texto: "Saúde Blindada")
 *   - Texto: ID = "benefitCard1Text"
 * - Card 2: ID = "benefitCard2"
 *   - Título: ID = "benefitCard2Title" (texto: "Agilidade Total")
 *   - Texto: ID = "benefitCard2Text"
 * - Card 3: ID = "benefitCard3"
 *   - Título: ID = "benefitCard3Title" (texto: "Conforto Real")
 *   - Texto: ID = "benefitCard3Text"
 * 
 * ============================================
 * SEÇÃO "COMO FUNCIONA":
 * ============================================
 * - Container: ID = "sectionHow" (para animações)
 * - Título: ID = "howTitulo" (texto: "COMO FUNCIONA")
 * - Subtítulo: ID = "howSubtitulo" (texto: "Simples, rápido e sem burocracia.")
 * - Passo 1: ID = "step1"
 *   - Título: ID = "step1Title" (texto: "Coloque")
 *   - Descrição: ID = "step1Desc" (texto: "Abra a máquina e posicione o capacete.")
 * - Passo 2: ID = "step2"
 *   - Título: ID = "step2Title" (texto: "Pague")
 *   - Descrição: ID = "step2Desc" (texto: "Pix ou Cartão direto na máquina.")
 * - Passo 3: ID = "step3"
 *   - Título: ID = "step3Title" (texto: "Pronto")
 *   - Descrição: ID = "step3Desc" (texto: "Aguarde o ciclo e retire limpinho.")
 * 
 * ============================================
 * SEÇÃO "ONDE ENCONTRAR" (PRIORIDADE):
 * ============================================
 * - Container: ID = "sectionMaps" (necessário para scroll suave)
 * - Badge: ID = "mapsBadge" (texto: "Canoas / RS")
 * - Título: ID = "mapsTitulo" (texto: "ENCONTRE O POSTO MAIS PRÓXIMO")
 * - Subtítulo: ID = "mapsSubtitulo" (texto: "Já estamos em 3 pontos estratégicos...")
 * 
 * Para cada posto (1, 2, 3):
 * - Card Posto: ID = "posto1", "posto2", "posto3"
 * - Nome: ID = "posto1Nome", "posto2Nome", "posto3Nome"
 * - Endereço: ID = "posto1Endereco", "posto2Endereco", "posto3Endereco"
 * - Botão Maps: ID = "posto1Maps", "posto2Maps", "posto3Maps" (opcional)
 * - Botão Waze: ID = "posto1Waze", "posto2Waze", "posto3Waze" (opcional)
 * - OU Botão único: ID = "posto1Rota", "posto2Rota", "posto3Rota"
 * 
 * ============================================
 * SEÇÃO TELEBUSCA:
 * ============================================
 * - Container: ID = "sectionTelebusca"
 * - Título: ID = "telebuscaTitulo" (texto: "NÃO PODE IR ATÉ O POSTO?")
 * - Título Destaque: ID = "telebuscaTituloHighlight" (texto: "A GENTE BUSCA.")
 * - Texto: ID = "telebuscaTexto"
 * - Benefício 1: ID = "telebuscaBenefit1"
 * - Benefício 2: ID = "telebuscaBenefit2"
 * - Benefício 3: ID = "telebuscaBenefit3"
 * - Botão: ID = "telebuscaButton" → Abre WhatsApp
 * - Horário: ID = "telebuscaHorario" (texto: "Atendimento de Seg a Sáb...")
 * 
 * ============================================
 * MENU DE NAVEGAÇÃO (OPCIONAL):
 * ============================================
 * - Botão Menu Mobile: ID = "mobileMenuButton"
 * - Menu Mobile: ID = "mobileMenu"
 * - Links do menu: ID = "mobileMenuLink1", "mobileMenuLink2", "mobileMenuLink3"
 * 
 * ============================================
 * RODAPÉ:
 * ============================================
 * - Cidade: ID = "footerCidade" (texto: "Canoas, Rio Grande do Sul.")
 * - Copyright: ID = "footerCopyright" (será preenchido automaticamente com ano)
 * - Link Instagram: ID = "footerInstagram"
 * - Link E-mail: ID = "footerEmail"
 * - Link Telefone: ID = "footerTelefone"
 * 
 * ============================================
 * DADOS A ATUALIZAR NO CÓDIGO:
 * ============================================
 * 
 * 1. CONFIG.whatsapp.numero - Número do WhatsApp
 * 2. CONFIG.instagram - URL do Instagram
 * 3. CONFIG.email - E-mail de contato
 * 4. CONFIG.telefone - Telefone de contato
 * 5. CONFIG.postos - Array com dados reais dos 3 postos
 *    (nome, endereco, coordenadas.lat, coordenadas.lng)
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
 * - COLORS.BLUE_600: #2563EB (Azul para gradientes)
 * - COLORS.SLATE_900: #0F172A (Slate escuro)
 * - COLORS.SLATE_800: #1E293B (Slate médio)
 * 
 * ============================================
 * FUNCIONALIDADES IMPLEMENTADAS:
 * ============================================
 * 
 * ✅ Scroll suave Hero → Seções
 * ✅ Localizador inteligente (Waze Mobile / Maps Desktop)
 * ✅ Deep linking Waze com fallback para Google Maps
 * ✅ WhatsApp com mensagem pré-formatada
 * ✅ Atualização automática de dados dos postos
 * ✅ Suporte para botões Maps e Waze separados
 * ✅ Animações lazy loading (onViewportEnter)
 * ✅ Menu mobile funcional
 * ✅ Links do rodapé (Instagram, E-mail, Telefone)
 * ✅ Tratamento de erros robusto
 * ✅ Detecção de dispositivo (Mobile/Desktop)
 * ✅ Design System completo
 * ✅ Estilo moderno inspirado no homepage.html
 */
