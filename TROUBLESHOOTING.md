# 🔧 Troubleshooting - Site sem Informações

## Problema
O site está publicado mas não está mostrando informações/textos.

## ✅ Solução: Verificar Elementos no Editor Wix

O código Velo está correto, mas ele precisa encontrar os elementos na página com os IDs corretos.

### Passo 1: Abrir o Editor Wix
1. Acesse: https://editor.wix.com
2. Abra seu site
3. Vá para a página **"Início"**

### Passo 2: Verificar/Criar Elementos

#### HERO SECTION (Seção Principal)
Verifique se estes elementos existem e têm os IDs corretos:

- **Badge:** Text → ID deve ser: `heroBadge`
- **H1 Parte 1:** Heading → ID deve ser: `heroH1`
- **H1 Destaque:** Heading → ID deve ser: `heroH1Highlight`
- **H1 Final:** Heading → ID deve ser: `heroH1End`
- **Subtítulo:** Text → ID deve ser: `heroSubtitle`
- **Botão "Encontrar Posto":** Button → ID deve ser: `heroCtaPrimary`
- **Botão "Pedir Telebusca":** Button → ID deve ser: `heroCtaSecondary`

**Como verificar/alterar ID:**
1. Clique no elemento
2. No painel direito, procure por "Element ID" ou "ID do Elemento"
3. Se não tiver o ID correto, altere para o ID especificado acima

#### SEÇÃO BENEFITS (3 Cards)
Para cada card (1, 2, 3):

- **Card Container:** Box → ID: `benefitCard1`, `benefitCard2`, `benefitCard3`
- **Título do Card:** Heading → ID: `benefitCard1Title`, `benefitCard2Title`, `benefitCard3Title`
- **Texto do Card:** Text → ID: `benefitCard1Text`, `benefitCard2Text`, `benefitCard3Text`

#### SEÇÃO "COMO FUNCIONA"
- **Container:** Box → ID: `sectionHow`
- **Título:** Heading → ID: `howTitulo`
- **Subtítulo:** Text → ID: `howSubtitulo`
- **Passo 1:** Box → ID: `step1`
  - Título: Heading → ID: `step1Title`
  - Descrição: Text → ID: `step1Desc`
- **Passo 2:** Box → ID: `step2`
  - Título: Heading → ID: `step2Title`
  - Descrição: Text → ID: `step2Desc`
- **Passo 3:** Box → ID: `step3`
  - Título: Heading → ID: `step3Title`
  - Descrição: Text → ID: `step3Desc`

#### SEÇÃO "ONDE ENCONTRAR" (IMPORTANTE!)
- **Container:** Box → ID: `sectionMaps` ⚠️ **OBRIGATÓRIO para scroll funcionar**
- **Badge:** Text → ID: `mapsBadge`
- **Título:** Heading → ID: `mapsTitulo`
- **Subtítulo:** Text → ID: `mapsSubtitulo`

**Para cada posto (1, 2, 3):**
- **Card Posto:** Box → ID: `posto1`, `posto2`, `posto3`
- **Nome:** Heading → ID: `posto1Nome`, `posto2Nome`, `posto3Nome`
- **Endereço:** Text → ID: `posto1Endereco`, `posto2Endereco`, `posto3Endereco`
- **Botão Maps:** Button → ID: `posto1Maps`, `posto2Maps`, `posto3Maps`
- **Botão Waze:** Button → ID: `posto1Waze`, `posto2Waze`, `posto3Waze`

#### SEÇÃO TELEBUSCA
- **Container:** Box → ID: `sectionTelebusca`
- **Título:** Heading → ID: `telebuscaTitulo`
- **Título Destaque:** Heading → ID: `telebuscaTituloHighlight`
- **Texto:** Text → ID: `telebuscaTexto`
- **Benefício 1:** Text → ID: `telebuscaBenefit1`
- **Benefício 2:** Text → ID: `telebuscaBenefit2`
- **Benefício 3:** Text → ID: `telebuscaBenefit3`
- **Botão WhatsApp:** Button → ID: `telebuscaButton`
- **Horário:** Text → ID: `telebuscaHorario`

#### RODAPÉ
- **Logo:** Text → ID: `footerLogo`
- **Cidade:** Text → ID: `footerCidade`
- **Copyright:** Text → ID: `footerCopyright`
- **Link Instagram:** Link/Button → ID: `footerInstagram`
- **Link Facebook:** Link/Button → ID: `footerFacebook`
- **Link E-mail:** Link/Button → ID: `footerEmail`

### Passo 3: Testar no Preview

1. Clique em **Preview** no Editor Wix
2. Abra o **Console do Navegador** (F12 → Console)
3. Procure por mensagens como:
   - ✅ `CapClear Landing Page Moderna inicializada`
   - ⚠️ `Elementos do Hero não encontrados (opcional)`

### Passo 4: Se Ainda Não Funcionar

#### Opção A: Verificar Console
1. Abra o site publicado
2. Pressione F12 para abrir DevTools
3. Vá na aba "Console"
4. Veja se há erros em vermelho
5. Procure por mensagens de inicialização

#### Opção B: Verificar se o Código Foi Sincronizado
1. No Editor Wix, vá em **Velo** (ícone de código)
2. Abra o arquivo da página "Início"
3. Verifique se o código está lá (deve começar com `import wixLocation from 'wix-location-frontend';`)
4. Se não estiver, copie o código do arquivo local `src/pages/Início.xgypj.js`

#### Opção C: Criar Elementos Mínimos
Se você não tem os elementos criados, crie pelo menos estes **ESSENCIAIS**:

1. **Hero Section:**
   - Text → ID: `heroBadge`
   - Heading → ID: `heroH1`
   - Heading → ID: `heroH1Highlight`
   - Heading → ID: `heroH1End`
   - Text → ID: `heroSubtitle`
   - Button → ID: `heroCtaPrimary`
   - Button → ID: `heroCtaSecondary`

2. **Seção Maps:**
   - Box → ID: `sectionMaps` (container)
   - Heading → ID: `mapsTitulo`
   - Para cada posto:
     - Heading → ID: `posto1Nome`
     - Text → ID: `posto1Endereco`
     - Button → ID: `posto1Maps`
     - Button → ID: `posto1Waze`

3. **Telebusca:**
   - Heading → ID: `telebuscaTitulo`
   - Heading → ID: `telebuscaTituloHighlight`
   - Text → ID: `telebuscaTexto`
   - Button → ID: `telebuscaButton`

## 📝 Checklist Rápido

- [ ] Código Velo está no arquivo da página no Editor Wix
- [ ] Elementos têm os IDs corretos (case-sensitive!)
- [ ] Container `sectionMaps` existe
- [ ] Container `sectionTelebusca` existe
- [ ] Botões têm IDs corretos
- [ ] Preview mostra mensagem de inicialização no console
- [ ] Site publicado foi atualizado após mudanças

## 🚨 Erros Comuns

1. **IDs com maiúsculas/minúsculas erradas:** `heroH1` ≠ `heroh1`
2. **Elementos não existem:** Criar elementos no Editor
3. **Código não sincronizado:** Fazer push via Wix CLI ou copiar manualmente
4. **Elementos ocultos:** Verificar se elementos não estão com `display: none`

## 💡 Dica

Se você não tem todos os elementos, o código vai funcionar parcialmente. Ele só preenche os elementos que encontrar. Os elementos não encontrados aparecerão como mensagens no console (mas não quebram o site).

