// ============================================
// CAPCLEAR - Landing Page Moderna
// Baseado no homepage.html - Adaptado para Wix Velo
// Design: Industrial Clean (Dark Mode) - Estilo Moderno Completo
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
    SLATE_800: "#1E293B",         // Slate médio
    SLATE_50: "#F8FAFC"           // Slate claro (fundo claro)
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
    facebook: "https://facebook.com/capclear",
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
// CONTEÚDO CAPCLEAR - TEXTOS COMPLETOS
// ============================================
const CAPCLEAR_CONTENT = {
    // Navigation
    nav: {
        logo: "CAPCLEAR",
        menuItems: [
            { text: "Como Funciona", href: "#como-funciona" },
            { text: "Onde Encontrar", href: "#onde-encontrar" },
            { text: "Telebusca", href: "#telebusca", isCTA: true }
        ]
    },
    
    // Hero Section
    hero: {
        badge: "⚡ Higienização Expressa",
        h1: "SEU CAPACETE",
        h1Highlight: "NOVO DE NOVO",
        h1End: "EM MINUTOS.",
        subtitle: "A tecnologia de Ozônio e UV que elimina bactérias e tira o mau cheiro enquanto você abastece. Sem frescura, rápido e eficiente.",
        ctaPrimary: "📍 Encontrar Posto",
        ctaSecondary: "🚴 Pedir Telebusca",
        card: {
            status: "100% Limpo",
            titulo: "Higienização Profunda",
            beneficios: [
                "Elimina 99% das bactérias",
                "Remove odores e suor",
                "Secagem ultra-rápida"
            ],
            frase: "Tá na correria? A gente limpa."
        }
    },
    
    // Seção Benefits
    benefits: {
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
// FUNÇÕES DE NAVEGAÇÃO E LOCALIZAÇÃO
// ============================================

/**
 * Localizador Inteligente - Detecta dispositivo e abre app apropriado
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
// APLICAÇÃO DE CONTEÚDO COMPLETO
// ============================================

/**
 * Preenche automaticamente todos os textos da landing page
 */
function aplicarConteudoCompleto() {
    // ============================================
    // NAVIGATION
    // ============================================
    try {
        const navLogo = $w("#navLogo");
        if (navLogo && navLogo.text !== undefined) {
            navLogo.text = CAPCLEAR_CONTENT.nav.logo;
        }
        
        // Menu items (opcional - se você criar elementos de menu)
        CAPCLEAR_CONTENT.nav.menuItems.forEach((item, index) => {
            const menuItem = $w(`#navMenuItem${index + 1}`);
            if (menuItem && menuItem.text !== undefined) {
                menuItem.text = item.text;
            }
        });
    } catch (error) {
        console.log("Elementos de navegação não encontrados (opcional)");
    }
    
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
        
        // Hero Card (opcional)
        const heroCardStatus = $w("#heroCardStatus");
        if (heroCardStatus && heroCardStatus.text !== undefined) {
            heroCardStatus.text = CAPCLEAR_CONTENT.hero.card.status;
        }
        
        const heroCardTitulo = $w("#heroCardTitulo");
        if (heroCardTitulo && heroCardTitulo.text !== undefined) {
            heroCardTitulo.text = CAPCLEAR_CONTENT.hero.card.titulo;
        }
        
        CAPCLEAR_CONTENT.hero.card.beneficios.forEach((beneficio, index) => {
            const benefitElement = $w(`#heroCardBenefit${index + 1}`);
            if (benefitElement && benefitElement.text !== undefined) {
                benefitElement.text = beneficio;
            }
        });
        
        const heroCardFrase = $w("#heroCardFrase");
        if (heroCardFrase && heroCardFrase.text !== undefined) {
            heroCardFrase.text = `"${CAPCLEAR_CONTENT.hero.card.frase}"`;
        }
    } catch (error) {
        console.log("Elementos do Hero não encontrados (opcional)");
    }
    
    // ============================================
    // SEÇÃO BENEFITS
    // ============================================
    try {
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
        const footerLogo = $w("#footerLogo");
        if (footerLogo && footerLogo.text !== undefined) {
            footerLogo.text = CAPCLEAR_CONTENT.nav.logo;
        }
        
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
 * Atualiza os dados dos postos
 */
function atualizarDadosPostos() {
    CONFIG.postos.forEach((posto, index) => {
        const indice = index + 1;
        
        try {
            const nomeElement = $w(`#posto${indice}Nome`);
            if (nomeElement && nomeElement.text !== undefined) {
                nomeElement.text = posto.nome;
            }
            
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
        
        // Botão Waze
        const wazeButton = $w(`#posto${indice}Waze`);
        if (wazeButton) {
            wazeButton.onClick(() => {
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
    
    const facebookLink = $w("#footerFacebook");
    if (facebookLink) {
        facebookLink.onClick(() => {
            wixLocation.to(CONFIG.facebook);
        });
    }
    
    const emailLink = $w("#footerEmail");
    if (emailLink) {
        emailLink.onClick(() => {
            const mailtoUrl = `mailto:${CONFIG.email}`;
            wixLocation.to(mailtoUrl);
        });
    }
}

/**
 * Configura menu mobile
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

/**
 * Configura animações lazy loading
 */
function setupAnimations() {
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
    // Aplicar conteúdo completo
    aplicarConteudoCompleto();
    
    // Hero Section - Botões CTA
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
    
    // Seção Mapas
    atualizarDadosPostos();
    setupPostosNavigation();
    
    // Telebusca
    const telebuscaButton = $w("#telebuscaButton");
    if (telebuscaButton) {
        telebuscaButton.onClick(() => {
            openTelebuscaWhatsApp();
        });
    }
    
    // Menu Mobile
    setupMobileMenu();
    
    // Animações
    setupAnimations();
    
    // Rodapé
    setupFooterLinks();
    
    console.log("✅ CapClear Landing Page Moderna inicializada");
    console.log(`📱 Formato: ${wixWindow.formFactor}`);
    console.log(`📍 Postos configurados: ${CONFIG.postos.length}`);
});
