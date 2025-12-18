# 📋 LISTA COMPLETA DE ELEMENTOS - CAPCLEAR LANDING PAGE

## 🎯 Guia Completo para Criar Todos os Elementos no Editor Wix

Esta lista contém **TODOS** os elementos necessários para a landing page funcionar completamente.

---

## 📍 NAVIGATION (Menu Superior)

| Tipo | ID | Texto Padrão | Onde Criar |
|------|-----|--------------|------------|
| Text | `navLogo` | CAPCLEAR | Header/Navigation |
| Button | `mobileMenuButton` | (ícone de menu) | Header (visível apenas mobile) |
| Box/Container | `mobileMenu` | - | Header (inicialmente oculto) |
| Link/Text | `navMenuItem1` | Como Funciona | Menu Desktop (opcional) |
| Link/Text | `navMenuItem2` | Onde Encontrar | Menu Desktop (opcional) |
| Link/Text | `navMenuItem3` | Telebusca | Menu Desktop (opcional) |

**Nota:** O menu mobile pode ter links internos com IDs `mobileMenuLink1`, `mobileMenuLink2`, `mobileMenuLink3`

---

## 🎨 HERO SECTION (Seção Principal - Prioridade ALTA)

### Elementos Básicos (OBRIGATÓRIOS)

| Tipo | ID | Texto Padrão | Estilo Sugerido |
|------|-----|--------------|-----------------|
| Text | `heroBadge` | ⚡ Higienização Expressa | Badge pequeno, cor azul |
| Heading | `heroH1` | SEU CAPACETE | Título grande, branco |
| Heading | `heroH1Highlight` | NOVO DE NOVO | Título grande, **cor azul #3000FF** |
| Heading | `heroH1End` | EM MINUTOS. | Título grande, branco |
| Text | `heroSubtitle` | A tecnologia de Ozônio e UV que elimina bactérias e tira o mau cheiro enquanto você abastece. Sem frescura, rápido e eficiente. | Subtítulo médio, cor prata |
| Button | `heroCtaPrimary` | 📍 Encontrar Posto | Botão azul #3000FF |
| Button | `heroCtaSecondary` | 🚴 Pedir Telebusca | Botão outline |

### Hero Card (OPCIONAL - mas recomendado)

| Tipo | ID | Texto Padrão | Estilo |
|------|-----|--------------|--------|
| Box | `heroCard` | (container) | Card com fundo escuro |
| Text | `heroCardStatus` | 100% Limpo | Badge pequeno |
| Heading | `heroCardTitulo` | Higienização Profunda | Título médio |
| Text | `heroCardBenefit1` | Elimina 99% das bactérias | Lista item |
| Text | `heroCardBenefit2` | Remove odores e suor | Lista item |
| Text | `heroCardBenefit3` | Secagem ultra-rápida | Lista item |
| Text | `heroCardFrase` | "Tá na correria? A gente limpa." | Frase destacada |

---

## 💎 SEÇÃO BENEFITS (3 Cards - "Por que usar?")

### Container Principal

| Tipo | ID | Função |
|------|-----|--------|
| Box | `sectionBenefits` | Container da seção (para animações) |

### Card 1 - Saúde Blindada

| Tipo | ID | Texto Padrão |
|------|-----|--------------|
| Box | `benefitCard1` | (container do card) |
| Heading | `benefitCard1Title` | Saúde Blindada |
| Text | `benefitCard1Text` | Eliminação de fungos e bactérias que causam doenças de pele e respiratórias. Seu capacete deixa de ser um vilão. |

### Card 2 - Agilidade Total

| Tipo | ID | Texto Padrão |
|------|-----|--------------|
| Box | `benefitCard2` | (container do card) |
| Heading | `benefitCard2Title` | Agilidade Total |
| Text | `benefitCard2Text` | Ciclo automatizado. Enquanto você abastece ou toma um café, a máquina faz a mágica. Sem perda de tempo. |

### Card 3 - Conforto Real

| Tipo | ID | Texto Padrão |
|------|-----|--------------|
| Box | `benefitCard3` | (container do card) |
| Heading | `benefitCard3Title` | Conforto Real |
| Text | `benefitCard3Text` | O fim do capacete com 'cheiro de cachorro molhado'. Sensação de equipamento novo todo dia. |

---

## ⚙️ SEÇÃO "COMO FUNCIONA"

### Container e Títulos

| Tipo | ID | Texto Padrão |
|------|-----|--------------|
| Box | `sectionHow` | (container da seção - para animações) |
| Heading | `howTitulo` | COMO FUNCIONA |
| Text | `howSubtitulo` | Simples, rápido e sem burocracia. |

### Passo 1

| Tipo | ID | Texto Padrão |
|------|-----|--------------|
| Box | `step1` | (container do passo) |
| Heading | `step1Title` | Coloque |
| Text | `step1Desc` | Abra a máquina e posicione o capacete. |

### Passo 2

| Tipo | ID | Texto Padrão |
|------|-----|--------------|
| Box | `step2` | (container do passo) |
| Heading | `step2Title` | Pague |
| Text | `step2Desc` | Pix ou Cartão direto na máquina. |

### Passo 3

| Tipo | ID | Texto Padrão |
|------|-----|--------------|
| Box | `step3` | (container do passo) |
| Heading | `step3Title` | Pronto |
| Text | `step3Desc` | Aguarde o ciclo e retire limpinho. |

---

## 📍 SEÇÃO "ONDE ENCONTRAR" (PRIORIDADE MÁXIMA)

### Container e Títulos

| Tipo | ID | Texto Padrão | ⚠️ IMPORTANTE |
|------|-----|--------------|---------------|
| Box | `sectionMaps` | (container) | **OBRIGATÓRIO** - necessário para scroll suave |
| Text | `mapsBadge` | Canoas / RS | Badge pequeno |
| Heading | `mapsTitulo` | ENCONTRE O POSTO MAIS PRÓXIMO | Título grande |
| Text | `mapsSubtitulo` | Já estamos em 3 pontos estratégicos da cidade. | Subtítulo |

### POSTO 1

| Tipo | ID | Texto Padrão |
|------|-----|--------------|
| Box | `posto1` | (container do card do posto) |
| Heading | `posto1Nome` | Posto Ipiranga - Centro |
| Text | `posto1Endereco` | Av. Guilherme Schell, 1200 - Centro, Canoas |
| Button | `posto1Maps` | Maps |
| Button | `posto1Waze` | Waze |

### POSTO 2

| Tipo | ID | Texto Padrão |
|------|-----|--------------|
| Box | `posto2` | (container do card do posto) |
| Heading | `posto2Nome` | Posto Shell - Mal. Rondon |
| Text | `posto2Endereco` | Rua Munique, 550 - Mal. Rondon, Canoas |
| Button | `posto2Maps` | Maps |
| Button | `posto2Waze` | Waze |

### POSTO 3

| Tipo | ID | Texto Padrão |
|------|-----|--------------|
| Box | `posto3` | (container do card do posto) |
| Heading | `posto3Nome` | Posto BR - Mathias Velho |
| Text | `posto3Endereco` | Av. Rio Grande do Sul, 2100 - Mathias Velho, Canoas |
| Button | `posto3Maps` | Maps |
| Button | `posto3Waze` | Waze |

---

## 🚴 SEÇÃO TELEBUSCA

### Container e Títulos

| Tipo | ID | Texto Padrão |
|------|-----|--------------|
| Box | `sectionTelebusca` | (container da seção) |
| Heading | `telebuscaTitulo` | NÃO PODE IR ATÉ O POSTO? |
| Heading | `telebuscaTituloHighlight` | A GENTE BUSCA. | (cor azul #3000FF) |
| Text | `telebuscaTexto` | Serviço exclusivo de Telebusca em Canoas. Nossa unidade móvel recolhe, higieniza e devolve seu capacete brilhando. |

### Benefícios da Telebusca

| Tipo | ID | Texto Padrão |
|------|-----|--------------|
| Text | `telebuscaBenefit1` | Agendamento flexível via WhatsApp |
| Text | `telebuscaBenefit2` | Busca e leva na sua casa ou trabalho |
| Text | `telebuscaBenefit3` | Pagamento fácil via Pix na entrega |

### Botão e Horário

| Tipo | ID | Texto Padrão |
|------|-----|--------------|
| Button | `telebuscaButton` | 📱 AGENDAR PELO WHATSAPP | (botão verde WhatsApp) |
| Text | `telebuscaHorario` | Atendimento de Seg a Sáb, das 08h às 19h. |

---

## 📞 RODAPÉ (FOOTER)

| Tipo | ID | Texto Padrão |
|------|-----|--------------|
| Text | `footerLogo` | CAPCLEAR |
| Text | `footerCidade` | Canoas, Rio Grande do Sul. |
| Text | `footerCopyright` | © 2024 CapClear. Todos os direitos reservados. | (ano será atualizado automaticamente) |
| Link/Button | `footerInstagram` | Instagram | (link para Instagram) |
| Link/Button | `footerFacebook` | Facebook | (link para Facebook) |
| Link/Button | `footerEmail` | E-mail | (link mailto) |

---

## 🎨 CORES DO DESIGN SYSTEM

Use estas cores ao criar os elementos:

- **Botões principais (CTAs):** `#3000FF` (Azul Ultra Tech)
- **Fundo escuro:** `#181818` (Cinza Asfalto)
- **Texto claro:** `#F2F2F2` (Branco Pureza)
- **Texto secundário:** `#B0B0B0` (Prata/Metal)
- **Botão WhatsApp:** Verde (#25D366 ou similar)

---

## ✅ CHECKLIST DE CRIAÇÃO

### Prioridade ALTA (Essenciais para funcionar)

- [ ] Hero Section completa (7 elementos básicos)
- [ ] Seção Maps (`sectionMaps` + títulos + 3 postos com botões)
- [ ] Seção Telebusca (títulos + botão WhatsApp)

### Prioridade MÉDIA (Melhoram a experiência)

- [ ] Seção Benefits (3 cards)
- [ ] Seção Como Funciona (3 passos)
- [ ] Navigation (logo + menu mobile)

### Prioridade BAIXA (Opcionais mas recomendados)

- [ ] Hero Card (card lateral no hero)
- [ ] Footer completo (links sociais)
- [ ] Menu desktop

---

## 📝 INSTRUÇÕES DE CRIAÇÃO NO EDITOR WIX

### Passo 1: Criar Elementos

1. No Editor Wix, vá para a página **"Início"**
2. Use **Add Elements** (Adicionar Elementos)
3. Adicione os elementos na ordem da lista acima
4. **IMPORTANTE:** Defina o ID de cada elemento imediatamente após criá-lo

### Passo 2: Definir IDs

Para cada elemento criado:

1. Clique no elemento
2. No painel direito, procure por **"Element ID"** ou **"ID do Elemento"**
3. Digite o ID exatamente como especificado (case-sensitive!)
4. Exemplo: `heroH1` ≠ `heroh1` ≠ `HeroH1`

### Passo 3: Organizar Layout

- Use **Boxes** (Containers) para agrupar elementos relacionados
- Exemplo: Coloque `heroH1`, `heroH1Highlight`, `heroH1End` dentro de um Box
- Use **Strips** ou **Sections** para separar as seções principais

### Passo 4: Aplicar Estilos

- Use as cores do Design System acima
- Títulos: Fonte grande, bold, uppercase
- Botões principais: Cor azul #3000FF
- Fundo geral: #181818

### Passo 5: Testar

1. Salve a página no Editor
2. Publique: `wix publish` no terminal
3. Acesse o site publicado
4. Abra Console (F12) e verifique mensagens de inicialização

---

## 🚨 ERROS COMUNS A EVITAR

1. **IDs com maiúsculas/minúsculas erradas:** `heroH1` ≠ `heroh1`
2. **IDs com espaços:** `hero H1` ❌ → `heroH1` ✅
3. **Esquecer o container `sectionMaps`:** necessário para scroll funcionar
4. **Botões sem IDs:** os botões precisam ter IDs para funcionarem
5. **Elementos ocultos:** verificar se elementos não estão com `display: none`

---

## 💡 DICA FINAL

Você não precisa criar todos os elementos de uma vez. Comece pelos **essenciais** (Hero + Maps + Telebusca) e vá adicionando os outros gradualmente. O código vai funcionar parcialmente mesmo sem todos os elementos - ele só preenche os que encontrar!

---

## 📊 RESUMO QUANTITATIVO

- **Total de elementos:** ~60 elementos
- **Elementos obrigatórios:** ~25 elementos
- **Elementos opcionais:** ~35 elementos
- **Seções principais:** 6 seções
- **Postos:** 3 postos (12 elementos cada)

---

## 🔍 VERIFICAÇÃO RÁPIDA

Após criar os elementos, verifique:

1. **No Editor Wix:**
   - Todos os IDs estão corretos (case-sensitive)
   - Elementos não estão ocultos
   - Containers (`sectionMaps`, `sectionTelebusca`) existem

2. **No Site Publicado:**
   - Abra Console (F12)
   - Procure por: `✅ CapClear Landing Page Moderna inicializada`
   - Se aparecer, o código está rodando!

3. **Se textos não aparecem:**
   - Verifique se os IDs estão corretos
   - Verifique se os elementos existem
   - Verifique se não há erros no console

Boa sorte! 🚀

