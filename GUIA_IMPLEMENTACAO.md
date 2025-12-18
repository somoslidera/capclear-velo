# Guia de Implementação - Landing Page CapClear

Este guia explica como configurar a landing page da CapClear no Editor Wix após o código Velo ter sido implementado.

## 📋 Checklist de Elementos no Editor Wix

Você precisa criar os seguintes elementos no Editor Wix e atribuir os IDs especificados abaixo:

### 🎯 Hero Section

1. **Botão CTA Principal**
   - ID: `heroButton`
   - Texto: "📍 Encontrar máquina mais próxima"
   - Tipo: Botão

### 📍 Seção "Onde Encontrar" (PRIORIDADE)

Esta seção precisa ter o ID `mapaSection` no container principal para o scroll funcionar.

Para cada um dos 3 postos, crie:

#### Posto 1:
- Container: ID `posto1` (opcional, para organização)
- Texto Nome: ID `posto1Nome` (será preenchido automaticamente)
- Texto Endereço: ID `posto1Endereco` (será preenchido automaticamente)
- Botão Rota: ID `posto1Rota` - Texto: "Traçar Rota"

#### Posto 2:
- Container: ID `posto2`
- Texto Nome: ID `posto2Nome`
- Texto Endereço: ID `posto2Endereco`
- Botão Rota: ID `posto2Rota` - Texto: "Traçar Rota"

#### Posto 3:
- Container: ID `posto3`
- Texto Nome: ID `posto3Nome`
- Texto Endereço: ID `posto3Endereco`
- Botão Rota: ID `posto3Rota` - Texto: "Traçar Rota"

**Container da Seção:**
- Container principal: ID `mapaSection` (necessário para scroll suave)

### 📱 Seção Telebusca

1. **Botão WhatsApp**
   - ID: `telebuscaButton`
   - Texto: "📱 Agendar Telebusca no WhatsApp"
   - Tipo: Botão

### 🦶 Rodapé (Footer)

1. **Link Instagram**
   - ID: `instagramLink`
   - Tipo: Link ou Botão
   - Texto: "Siga a gente no Instagram" (ou similar)

2. **Link E-mail** (opcional)
   - ID: `emailLink`
   - Tipo: Link ou Texto clicável
   - Texto: E-mail de contato

3. **Link Telefone** (opcional)
   - ID: `telefoneLink`
   - Tipo: Link ou Texto clicável
   - Texto: Telefone de contato

## ⚙️ Como Atribuir IDs no Editor Wix

1. Selecione o elemento no editor
2. No painel de propriedades à direita, encontre o campo "ID do Elemento"
3. Digite o ID exato conforme especificado acima
4. Salve as alterações

## 📝 Atualizar Dados no Código

### 1. Atualizar Informações dos Postos

Abra o arquivo `src/pages/Início.xgypj.js` e localize a seção `POSTOS_DATA`. Substitua os placeholders:

```javascript
const POSTOS_DATA = [
    {
        nome: "Posto Shell - Centro",
        endereco: "Av. Getúlio Vargas, 1234, Centro, Canoas - RS",
        coordenadas: { lat: -29.9178, lng: -51.1836 }
    },
    // ... mais postos
];
```

### 2. Atualizar Configurações de Contato

Localize a seção `CONFIG` e atualize:

```javascript
const CONFIG = {
    whatsapp: {
        numero: "5511999999999", // Seu número no formato internacional
        mensagem: "Olá! Gostaria de agendar uma Telebusca..."
    },
    instagram: "https://instagram.com/seu_perfil",
    email: "contato@capclear.com.br",
    telefone: "(51) 99999-9999"
};
```

## 🎨 Estrutura Visual Sugerida

### Hero Section
- H1: "Seu capacete novo de novo em minutos."
- H2: "Tá na correria? A gente limpa. Tecnologia de ponta para eliminar bactérias e o mau cheiro enquanto você abastece."
- Botão CTA: "📍 Encontrar máquina mais próxima"

### Seção "Por que usar?"
- Título: "Higiene é segurança."
- 3 blocos com ícones:
  - **Saúde**: "Zero Bactérias" - "Eliminamos fungos e ácaros..."
  - **Conforto**: "Adeus, Mau Cheiro" - "O fim do capacete com cheiro..."
  - **Agilidade**: "Vapt-Vupt" - "Serviço express automatizado..."

### Seção "Como Funciona"
- Título: "Simples assim:"
- 3 passos numerados:
  1. "Coloque o capacete na máquina."
  2. "Pague com Pix ou Cartão."
  3. "Aguarde a mágica acontecer."

### Seção "Onde Encontrar"
- Título: "Onde tem CapClear?"
- Subtítulo: "Já estamos operando em 3 pontos estratégicos de Canoas. É só encostar."
- Cards com informações dos postos (preenchidos automaticamente pelo código)
- Nota: "Fique ligado na nossa Unidade Móvel rodando pela cidade!"

### Seção Telebusca
- Título: "Não pode ir até o posto? A gente busca."
- Texto: "A CapClear vai até você. Agende a coleta do seu capacete e receba ele higienizado onde estiver."
- Botão: "📱 Agendar Telebusca no WhatsApp"

### Rodapé
- Logo CapClear
- Texto: "CapClear © 2024. A solução definitiva para o motociclista."
- Links: Instagram, E-mail, Telefone

## ✅ Testes Recomendados

1. **Teste o Scroll Suave**
   - Clique no botão "📍 Encontrar máquina mais próxima"
   - Verifique se a página rola suavemente até a seção de mapas

2. **Teste os Botões de Rota**
   - Clique em "Traçar Rota" de cada posto
   - Verifique se abre o Google Maps com o endereço correto

3. **Teste o Botão WhatsApp**
   - Clique em "📱 Agendar Telebusca no WhatsApp"
   - Verifique se abre o WhatsApp com a mensagem pré-formatada

4. **Teste os Links do Rodapé**
   - Clique no link do Instagram
   - Clique no e-mail (deve abrir cliente de e-mail)
   - Clique no telefone (deve abrir aplicativo de chamadas)

## 🐛 Solução de Problemas

### Elementos não funcionam
- Verifique se os IDs estão exatamente como especificado (case-sensitive)
- Certifique-se de que os elementos existem no editor

### Scroll não funciona
- Verifique se o container da seção "Onde Encontrar" tem o ID `mapaSection`

### Links não abrem
- Verifique se os dados em `CONFIG` estão corretos
- Verifique se os números de telefone estão no formato correto (sem +, apenas números)

## 📞 Próximos Passos

1. Crie todos os elementos visuais no Editor Wix
2. Atribua os IDs conforme este guia
3. Atualize os dados em `POSTOS_DATA` e `CONFIG`
4. Teste todas as funcionalidades
5. Publique o site!

---

**Nota:** Este código foi criado para funcionar com a abordagem híbrida: você cria os elementos visuais no Editor Wix e o código Velo adiciona toda a funcionalidade interativa.

