// ============================================
// CAPCLEAR - Landing Page
// High-conversion page for helmet sanitization service
// Design: Industrial Clean (Dark Mode)
// Target: "O Corre" (delivery drivers/couriers)
// ============================================

import wixLocation from 'wix-location-frontend';
import wixWindow from 'wix-window-frontend';

// ============================================
// CONFIGURAÇÃO - ATUALIZE COM SEUS DADOS REAIS
// ============================================
const CONFIG = {
    whatsapp: {
        numero: "555199999999", // Formato: código país + DDD + número (sem +)
        mensagem: "Olá, vim pelo site e quero higienizar meu capacete."
    },
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
 * Mobile: Deep link Waze (waze://)
 * Desktop: Google Maps em nova aba
 * 
 * IDs necessários no Editor Wix:
 * - #btnRoute (botão "Traçar Rota" em cada card de posto)
 * 
 * @param {number} lat - Latitude do posto
 * @param {number} lon - Longitude do posto
 */
function handleMapNavigation(lat, lon) {
    const formFactor = wixWindow.formFactor;
    
    if (formFactor === "Mobile") {
        // Mobile: Deep link para Waze App
        const wazeUrl = `waze://?ll=${lat},${lon}&navigate=yes`;
        wixLocation.to(wazeUrl);
    } else {
        // Desktop: Google Maps em nova aba
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
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
 * 
 * IDs sugeridos no Editor Wix:
 * - #sectionWhy (seção "Por que usar?")
 * - #sectionHow (seção "Como Funciona")
 * - Cards individuais podem ter IDs como #cardHealth, #cardComfort, #cardSpeed
 * 
 * Nota: Para animações avançadas, use wix-animations API diretamente nos elementos
 * ou configure animações no Editor Wix que são triggeradas via onViewportEnter
 */
function setupAnimations() {
    // Exemplo: Trigger para seção "Por que usar?" ao entrar no viewport
    const whySection = $w("#sectionWhy");
    if (whySection) {
        whySection.onViewportEnter(() => {
            // Animações podem ser configuradas aqui
            // Use wix-animations API ou configure animações no Editor Wix
            console.log("Seção 'Por que usar?' entrou no viewport");
        });
    }
    
    // Exemplo: Trigger para seção "Como Funciona" ao entrar no viewport
    const howSection = $w("#sectionHow");
    if (howSection) {
        howSection.onViewportEnter(() => {
            // Animações podem ser configuradas aqui
            console.log("Seção 'Como Funciona' entrou no viewport");
        });
    }
}

// ============================================
// CONFIGURAÇÃO DOS POSTOS
// ============================================

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
                handleMapNavigation(posto.coordenadas.lat, posto.coordenadas.lng);
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
    // SEÇÃO MAPAS - Botões "Traçar Rota"
    // ============================================
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
    // ANIMAÇÕES - Configuração inicial
    // ============================================
    setupAnimations();
    
    console.log("✅ CapClear Landing Page inicializada");
});

// ============================================
// NOTAS PARA IMPLEMENTAÇÃO NO EDITOR WIX
// ============================================
/*
 * ELEMENTOS NECESSÁRIOS NO EDITOR WIX:
 * 
 * HERO SECTION:
 * - Botão: ID = "btnHeroAction"
 *   Texto: "📍 Encontrar máquina mais próxima"
 * 
 * SEÇÃO MAPAS:
 * - Container: ID = "sectionMaps"
 * - Botões de rota (um para cada posto):
 *   ID = "btnRoute1", "btnRoute2", "btnRoute3"
 *   Texto: "Traçar Rota"
 * 
 * TELEBUSCA:
 * - Botão: ID = "btnWhatsapp"
 *   Texto: "📱 Agendar Telebusca no WhatsApp"
 * 
 * SEÇÕES PARA ANIMAÇÕES (opcional):
 * - Container: ID = "sectionWhy" (seção "Por que usar?")
 * - Container: ID = "sectionHow" (seção "Como Funciona")
 * 
 * DADOS A ATUALIZAR:
 * 1. CONFIG.whatsapp.numero - Número do WhatsApp
 * 2. CONFIG.postos - Array com dados reais dos 3 postos
 *    (nome, endereco, coordenadas.lat, coordenadas.lng)
 */
