# Guia: Criar Nova Página no Wix Baseada no homepage.html

## 📋 Passo a Passo

### 1. Criar a Página no Editor Wix

1. Acesse o **Editor Wix** (editor.wix.com)
2. No painel esquerdo, clique em **"Pages"** (Páginas)
3. Clique no botão **"+"** para adicionar nova página
4. Escolha **"Blank Page"** (Página em Branco)
5. Nomeie a página como: **"Homepage Moderna"** (ou outro nome de sua escolha)
6. O Wix criará automaticamente um arquivo JavaScript para esta página

### 2. Copiar o Código

1. No seu IDE local, abra o arquivo: `src/pages/Homepage-Moderna-TEMPLATE.js`
2. Copie **TODO o conteúdo** do arquivo
3. No Editor Wix, vá para **Velo** (ícone de código no painel esquerdo)
4. Encontre o arquivo da nova página criada (ex: `Homepage Moderna.xxxxx.js`)
5. **Substitua todo o conteúdo** pelo código copiado
6. Salve o arquivo

### 3. Criar os Elementos no Editor Wix

Agora você precisa criar todos os elementos visuais na página. Use o guia abaixo:

## 🎨 Estrutura Completa de Elementos

### NAVIGATION (Menu Superior)

**Onde encontrar:** Add Elements → Menu ou criar manualmente

- **Logo:** Text → ID: `navLogo`
- **Menu Mobile Button:** Button → ID: `mobileMenuButton` (apenas visível no mobile)
- **Menu Mobile:** Box/Container → ID: `mobileMenu` (inicialmente oculto)

### HERO SECTION

**Container Principal:** Box (fundo escuro #181818)

- **Badge:** Text (pequeno) → ID: `heroBadge`
- **H1 Parte 1:** Heading (grande) → ID: `heroH1` → Texto: "SEU CAPACETE"
- **H1 Destaque:** Heading (grande, cor azul #3000FF) → ID: `heroH1Highlight` → Texto: "NOVO DE NOVO"
- **H1 Final:** Heading (grande) → ID: `heroH1End` → Texto: "EM MINUTOS."
- **Subtítulo:** Text → ID: `heroSubtitle`
- **Botão CTA Primário:** Button (cor #3000FF) → ID: `heroCtaPrimary`
- **Botão CTA Secundário:** Button (outline) → ID: `heroCtaSecondary`

**Hero Card (Opcional - lado direito):**
- Container: Box → ID: `heroCard`
- Status: Text → ID: `heroCardStatus`
- Título: Heading → ID: `heroCardTitulo`
- Benefício 1: Text → ID: `heroCardBenefit1`
- Benefício 2: Text → ID: `heroCardBenefit2`
- Benefício 3: Text → ID: `heroCardBenefit3`
- Frase: Text → ID: `heroCardFrase`

### SEÇÃO BENEFITS

**Container:** Box (fundo claro) → ID: `sectionBenefits`

**Card 1:**
- Container: Box → ID: `benefitCard1`
- Título: Heading → ID: `benefitCard1Title`
- Texto: Text → ID: `benefitCard1Text`

**Card 2:**
- Container: Box → ID: `benefitCard2`
- Título: Heading → ID: `benefitCard2Title`
- Texto: Text → ID: `benefitCard2Text`

**Card 3:**
- Container: Box → ID: `benefitCard3`
- Título: Heading → ID: `benefitCard3Title`
- Texto: Text → ID: `benefitCard3Text`

### SEÇÃO "COMO FUNCIONA"

**Container:** Box (fundo escuro #181818) → ID: `sectionHow`

- **Título:** Heading → ID: `howTitulo`
- **Subtítulo:** Text → ID: `howSubtitulo`

**Passo 1:**
- Container: Box → ID: `step1`
- Número: Text (dentro de círculo) → ID: `step1Number` (opcional)
- Título: Heading → ID: `step1Title`
- Descrição: Text → ID: `step1Desc`

**Passo 2:**
- Container: Box → ID: `step2`
- Número: Text → ID: `step2Number` (opcional)
- Título: Heading → ID: `step2Title`
- Descrição: Text → ID: `step2Desc`

**Passo 3:**
- Container: Box → ID: `step3`
- Número: Text → ID: `step3Number` (opcional)
- Título: Heading → ID: `step3Title`
- Descrição: Text → ID: `step3Desc`

### SEÇÃO "ONDE ENCONTRAR" (PRIORIDADE)

**Container:** Box (fundo claro) → ID: `sectionMaps` ⚠️ **IMPORTANTE para scroll suave**

- **Badge:** Text → ID: `mapsBadge`
- **Título:** Heading → ID: `mapsTitulo`
- **Subtítulo:** Text → ID: `mapsSubtitulo`

**Para cada posto (1, 2, 3):**

**Posto 1:**
- Card: Box → ID: `posto1`
- Nome: Heading → ID: `posto1Nome`
- Endereço: Text → ID: `posto1Endereco`
- Botão Maps: Button → ID: `posto1Maps` (texto: "Maps")
- Botão Waze: Button → ID: `posto1Waze` (texto: "Waze")

**Posto 2:**
- Card: Box → ID: `posto2`
- Nome: Heading → ID: `posto2Nome`
- Endereço: Text → ID: `posto2Endereco`
- Botão Maps: Button → ID: `posto2Maps`
- Botão Waze: Button → ID: `posto2Waze`

**Posto 3:**
- Card: Box → ID: `posto3`
- Nome: Heading → ID: `posto3Nome`
- Endereço: Text → ID: `posto3Endereco`
- Botão Maps: Button → ID: `posto3Maps`
- Botão Waze: Button → ID: `posto3Waze`

### SEÇÃO TELEBUSCA

**Container:** Box (fundo gradiente escuro) → ID: `sectionTelebusca`

- **Título:** Heading → ID: `telebuscaTitulo`
- **Título Destaque:** Heading (cor azul) → ID: `telebuscaTituloHighlight`
- **Texto:** Text → ID: `telebuscaTexto`
- **Benefício 1:** Text → ID: `telebuscaBenefit1`
- **Benefício 2:** Text → ID: `telebuscaBenefit2`
- **Benefício 3:** Text → ID: `telebuscaBenefit3`
- **Botão WhatsApp:** Button (verde) → ID: `telebuscaButton`
- **Horário:** Text (pequeno) → ID: `telebuscaHorario`

### FOOTER

**Container:** Box (fundo muito escuro #0F172A)

- **Logo:** Text → ID: `footerLogo`
- **Cidade:** Text → ID: `footerCidade`
- **Copyright:** Text → ID: `footerCopyright`
- **Link Instagram:** Link/Button → ID: `footerInstagram`
- **Link Facebook:** Link/Button → ID: `footerFacebook`
- **Link E-mail:** Link/Button → ID: `footerEmail`

## 🎨 Aplicar Cores do Design System

Use estas cores nos elementos:

- **Botões principais (CTAs):** #3000FF
- **Fundo escuro:** #181818
- **Fundo muito escuro (footer):** #0F172A
- **Texto claro:** #F2F2F2
- **Texto secundário:** #B0B0B0
- **Botão WhatsApp:** Verde (#25D366 ou similar)

## ✅ Checklist de Implementação

- [ ] Página criada no Editor Wix
- [ ] Código copiado para o arquivo da página
- [ ] Navigation criada com IDs
- [ ] Hero Section completa
- [ ] Seção Benefits (3 cards)
- [ ] Seção Como Funciona (3 passos)
- [ ] Seção Onde Encontrar (3 postos com botões)
- [ ] Seção Telebusca completa
- [ ] Footer com links
- [ ] Cores aplicadas
- [ ] Testar scroll suave
- [ ] Testar botões de rota
- [ ] Testar botão WhatsApp

## 🔧 Atualizar Dados no Código

Após criar a página, atualize no código:

1. **CONFIG.whatsapp.numero** - Número real do WhatsApp
2. **CONFIG.instagram** - URL do Instagram
3. **CONFIG.facebook** - URL do Facebook
4. **CONFIG.postos** - Dados reais dos 3 postos (nome, endereço, coordenadas)

## 📝 Notas Importantes

- Os textos serão preenchidos **automaticamente** quando a página carregar
- Os IDs são **case-sensitive** - use exatamente como especificado
- O container `sectionMaps` é **obrigatório** para o scroll suave funcionar
- Teste em mobile e desktop para garantir que tudo funciona

## 🚀 Próximos Passos

1. Criar a página no Editor Wix
2. Copiar o código do template
3. Criar os elementos com os IDs corretos
4. Aplicar as cores
5. Testar todas as funcionalidades
6. Publicar!

