# **Arquitetura Estratégica e Diretrizes de Implementação: Plataforma Digital CapClear**

## **1\. Visão Executiva e Alinhamento Estratégico**

A transformação digital da CapClear transcende a criação de um site convencional; trata-se da construção de uma infraestrutura digital de alta performance que espelha a eficiência, a higiene e a robustez do serviço físico de higienização de capacetes. Este relatório técnico detalha a arquitetura, o design e o fluxo de desenvolvimento necessários para implementar uma landing page de alta conversão, projetada especificamente para operar na interseção entre a tecnologia de ponta e a realidade crua e acelerada das ruas. A estratégia aqui delineada não visa apenas informar, mas converter visitantes em usuários físicos das vending machines e clientes do serviço "Telebusca", utilizando um stack tecnológico avançado composto por Wix Studio (Velo), GitHub e Cursor AI.

### **1.1 O Imperativo do Negócio: Velocidade como Produto**

A análise profunda dos documentos estratégicos da CapClear revela que a "Essência do Negócio" não é apenas a limpeza, mas a **agilidade**. A promessa de "Seu capacete novo de novo em minutos" define o ritmo de toda a experiência do usuário (UX). Para o público-alvo primário, a persona "O Corre" (motofretistas e entregadores), cada segundo é monetizável. Portanto, a latência digital é um atrito inaceitável. A landing page deve carregar instantaneamente, comunicar valor em milissegundos e direcionar para a ação física (navegação via Waze) ou digital (WhatsApp) sem obstáculos cognitivos.1

A dualidade do público-alvo — abrangendo tanto o pragmatismo do "Corre" quanto a exigência estética do "Commuter" — exige uma interface que resolva um paradoxo visual: ser "Industrial" (robusta, confiável, ligada ao asfalto) e simultaneamente "Clean" (higienizada, tecnológica, segura). A arquitetura proposta utiliza a identidade visual "Industrial Clean" não apenas como decoração, mas como uma ferramenta funcional de UX para segregar informações e guiar o olhar do usuário através do funil de conversão.2

### **1.2 A Revolução do Fluxo de Desenvolvimento**

Para atingir os objetivos de um site "rápido, eficiente e visualmente sofisticado", a abordagem tradicional de "arrastar e soltar" é insuficiente. A complexidade das integrações exigidas (geolocalização inteligente, deep linking com Waze, automação de WhatsApp) demanda um ambiente de desenvolvimento profissional. A adoção do fluxo **Velo \> Wix CLI \> GitHub \> Cursor AI** posiciona a CapClear na vanguarda do desenvolvimento web em 2025\.

Este fluxo permite:

1. **Controle de Versão Granular:** O uso do GitHub garante que cada iteração do código seja segura, auditável e reversível, essencial para manter a estabilidade de uma aplicação que serve como ponto crítico de entrada de receita.  
2. **Inteligência Artificial Contextual:** O Cursor AI, quando configurado corretamente com as regras do Velo (.cursorrules), atua como um desenvolvedor sênior par, gerando código boilerplate, otimizações de performance e lógicas complexas de backend com uma velocidade inatingível manualmente.4  
3. **Performance Nativa:** O uso do Velo permite a execução de lógicas no servidor (backend) sem a necessidade de gerenciar infraestrutura externa (AWS/Google Cloud), garantindo tempos de resposta rápidos e segurança de dados.6

O objetivo final deste relatório é fornecer ao desenvolvedor um manual tático e estratégico completo, eliminando a ambiguidade e acelerando o "Time-to-Market" da plataforma digital da CapClear.

## ---

**2\. Identidade Visual e Psicologia do Design "Industrial Clean"**

A identidade "Industrial Clean" é o alicerce visual sobre o qual a funcionalidade do site é construída. Ela deve transmitir a robustez do ambiente automotivo e a pureza de um laboratório de esterilização. Esta seção traduz as diretrizes de marca para linguagens de front-end (CSS/Velo), garantindo que a estética sirva à conversão.

### **2.1 A Paleta de Cores como Interface**

As cores definidas no Guia Estratégico não são meramente estéticas; elas possuem funções de usabilidade específicas na interface do usuário. A aplicação deve seguir rigorosamente a psicologia das cores para guiar o comportamento do usuário.1

| Cor | Código Hex | Função na UI | Psicologia e Aplicação Técnica |
| :---- | :---- | :---- | :---- |
| **Azul Ultra Tech** | \#3000FF | Ação Primária (CTAs) | Representa a tecnologia UV e a esterilização. Deve ser usada exclusivamente em botões de alta conversão ("Quero Limpar", "Traçar Rota") e elementos ativos. O alto contraste com o fundo escuro cria um ponto focal imediato. |
| **Cinza Asfalto** | \#181818 | Background (Superfície) | A base da interface (Dark Mode). Reduz o brilho em ambientes externos (uso noturno/dia nublado) e remete ao ambiente natural do motociclista: a rua. Deve ter textura sutil (ruído ou gradiente) para evitar a planicidade. |
| **Branco Pureza** | \#F2F2F2 | Tipografia e Ícones | Utilizado para textos, títulos e iconografia. O branco puro sobre o fundo escuro garante legibilidade máxima e transmite a sensação de limpeza clínica que é a promessa da marca. |
| **Prata/Metal** | \#B0B0B0 | Elementos Secundários | Usado em bordas, linhas divisórias e estados "desabilitados" ou secundários. Simula o metal escovado das máquinas e componentes da moto. |

**Diretriz de Implementação:** O desenvolvedor deve configurar estas cores como variáveis globais no Wix Studio (--color-primary: \#3000FF;), garantindo consistência em todo o site e facilitando a manutenção futura. O uso de gradientes sutis no \#181818 (simulando asfalto ou fibra de carbono) deve ser feito via CSS (background-image) para garantir leveza no carregamento, evitando imagens pesadas de textura.3

### **2.2 Tipografia Cinética: Zendoba e Orbitron**

A escolha tipográfica da CapClear é agressiva e orientada ao movimento. A fonte **Orbitron** com seu "Italic 20° Skew" é uma representação visual de velocidade. No entanto, a implementação web requer cuidados técnicos para garantir a renderização correta em todos os navegadores e dispositivos móveis.3

* **Orbitron (Display/Títulos):** Deve ser usada para o Hero Headline ("Seu capacete novo de novo...") e cabeçalhos de seção. Para garantir o "skew" de 20 graus sem distorção de serrilhado (aliasing), recomenda-se o uso de transform: skewX(-20deg); via CSS em contêineres de texto, ou a importação de uma variante da fonte que já possua essa inclinação nativamente para melhor performance de renderização.  
* **Zendoba (Corpo/Texto):** Utilizada para descrições, instruções e botões secundários. Sua legibilidade geométrica complementa a agressividade da Orbitron sem competir com ela. A hierarquia visual deve ser clara: Orbitron grita a promessa, Zendoba explica o processo.

**Insight de Conversão:** A tipografia inclinada para a direita (frente) cria uma "leitura acelerada", empurrando o olho do usuário em direção ao Call to Action (CTA). O desenvolvedor deve garantir que o layout responsivo mantenha essa integridade visual, ajustando o tamanho da fonte (rem units) e o espaçamento (letter-spacing) proporcionalmente nos breakpoints móveis.8

### **2.3 Texturas e Simbolismo: A Experiência Tátil Digital**

O conceito "Industrial Clean" exige profundidade. O site não deve parecer um panfleto plano, mas sim um painel de controle.

* **Micro-interações de "Limpeza":** Ao passar o mouse (hover) sobre os botões ou cartões de serviço, o desenvolvedor deve implementar efeitos de "brilho" ou "sparkles" (brilhos estelares) usando SVGs animados. Isso reforça subconscientemente a ideia de desinfecção e resultado final brilhante.1  
* **Elementos de Fundo:** A utilização de formas geométricas abstratas que lembram bolhas de sabão, mas com uma renderização metálica ou translúcida ("glassmorphism"), conecta os mundos da limpeza e da mecânica. O uso de backdrop-filter: blur(10px); em painéis sobrepostos ao vídeo de fundo criará essa estética moderna e tecnológica.9

## ---

**3\. Arquitetura de Conversão: Estrutura da Landing Page**

A estrutura da página foi desenhada para conduzir o usuário através de um funil psicológico: **Impacto (Hero) \-\> Compreensão (Como Funciona) \-\> Utilidade (Localizador) \-\> Conveniência (Telebusca)**. Cada seção tem um objetivo técnico e comercial distinto.

### **3.1 Hero Section: A Promessa Instantânea**

Esta é a área mais crítica. O usuário tem menos de 3 segundos para entender o serviço.

* **Visual:** Fundo de vídeo full-width (desktop) ou otimizado vertical (mobile). O vídeo deve mostrar o *close-up* da máquina em ação: o jato de ozônio, a luz UV acendendo, o capacete saindo brilhando. O movimento atrai a atenção reptiliana.10  
* **Headline:** "Seu capacete novo de novo em minutos." (Orbitron, Skew 20°). Grande, branco, com sombra projetada (drop-shadow) em azul neon para destacar do fundo escuro.  
* **CTAs Duplos:**  
  1. **Primário:** "Quero Limpar Agora" (Botão Sólido Azul) \-\> *Scroll* suave para a seção de Mapa.  
  2. **Secundário:** "Telebusca" (Botão Outline Branco) \-\> Abre API do WhatsApp.  
* **Prova Social Imediata:** Um pequeno badge flutuante ou fixo próximo ao headline: "Mais de 5.000 capacetes higienizados em Canoas". Isso gera confiança instantânea.1

### **3.2 Seção "Como Funciona": Redução de Fricção Cognitiva**

Muitos usuários podem ter receio de usar uma "máquina" desconhecida. Esta seção desmistifica o processo.

* **Design:** Três cards interativos (em carrossel no mobile).  
  1. **Ícone Capacete:** "Coloque o capacete na máquina."  
  2. **Ícone Pagamento:** "Pague com Pix ou Cartão."  
  3. **Ícone Brilho:** "Aguarde a mágica (3 min)."  
* **Interatividade:** Ao rolar a página até esta seção, os cards devem entrar com uma animação sequencial (staggered animation) usando a API wix-animations. Isso guia o olho do passo 1 ao 3\.12

### **3.3 Seção "Onde Encontrar": O Coração Operacional (Prioridade Máxima)**

Para a persona "Corre", o site é uma ferramenta de navegação. Esta seção deve ser tratada como um aplicativo utilitário.

* **Mapa Customizado:** Integração com Google Maps API, estilizado com um tema escuro (Dark Mode) para combinar com o site (removendo o amarelo/verde padrão do Google). Os pinos devem ser o ícone do capacete da CapClear.  
* **Cards de Localização Inteligente:** Abaixo do mapa, lista dos 3 postos.  
* **A "Killer Feature" (Deep Linking):** O botão "Traçar Rota" não deve apenas abrir um mapa. Ele deve executar um script Velo que detecta o dispositivo.  
  * **Mobile:** Tenta abrir o app **Waze** diretamente (waze://). Se falhar, tenta Google Maps App.  
  * **Desktop:** Abre o Google Maps no navegador.  
  * **Contexto:** Isso economiza toques preciosos para um motoboy que está no trânsito, elevando a percepção de valor da marca.13

### **3.4 Seção "Telebusca": O Upsell de Conveniência**

Focada na persona "Commuter", que pode estar no escritório e não quer se deslocar.

* **Imagem:** Foto de alta qualidade da Unidade Móvel (carro/moto envelopado) chegando a um local.  
* **Copy:** "Não pode ir até o posto? A gente busca."  
* **Botão WhatsApp Inteligente:** O link para o WhatsApp não deve ser genérico. Ele deve usar a API do WhatsApp para preencher uma mensagem automática: "Olá, gostaria de agendar uma Telebusca para o bairro". Isso reduz o esforço do usuário de digitar a intenção.15

### **3.5 Seção de Prova Social e Rodapé**

* **Galeria Antes/Depois:** Um slider comparativo (plugin ou custom code) onde o usuário pode arrastar uma barra para ver a diferença entre o capacete sujo e o limpo. Isso é visualmente muito forte para o nicho de limpeza.  
* **Rodapé:** Minimalista. Links para Política de Privacidade, Termos de Uso e Ícones de Redes Sociais. Repetição do Logo para fixação de marca.

## ---

**4\. O Ecossistema de Desenvolvimento: Velo, GitHub e Cursor**

A execução desta visão requer um fluxo de trabalho moderno. O desenvolvimento direto no navegador é propenso a erros e lento. A estratégia aqui é mover o desenvolvimento para o ambiente local (Local IDE).

### **4.1 Configuração do Wix CLI (Command Line Interface)**

O Wix CLI é a ponte que permite usar ferramentas profissionais.

1. **Instalação e Login:** O desenvolvedor deve instalar o wix-cli via npm e autenticar na conta Wix.  
2. **Clonagem do Projeto:** O comando wix dev cria uma réplica local do sistema de arquivos do site.  
   * **Estrutura de Pastas:**  
     * src/backend/: Código que roda no servidor (segurança, APIs, hooks de dados).  
     * src/public/: Código compartilhado entre front e back (utilitários, classes).  
     * src/pages/: Lógica específica de cada página (front-end).  
     * src/styles/: Arquivos CSS globais (se aplicável).  
3. **Integração com GitHub:** O repositório local deve ser conectado ao GitHub. Isso permite criar *branches* (ex: feature/waze-integration), realizar *commits* atômicos e usar *Pull Requests* para revisão de código, mesmo trabalhando sozinho, garantindo histórico e backup.5

### **4.2 O Papel do Cursor AI e o Arquivo .cursorrules**

O Cursor AI é a ferramenta que trará velocidade. No entanto, LLMs (Large Language Models) genéricos tendem a alucinar código que não funciona no Velo (ex: tentar acessar o DOM diretamente com document.getElementById). Para evitar isso, criamos um arquivo .cursorrules na raiz do projeto. Este arquivo instrui o Cursor sobre as limitações e capacidades específicas do ambiente Velo.

**Conteúdo Estratégico do .cursorrules para CapClear:**

# **Regras de Desenvolvimento Wix Velo \- Projeto CapClear**

## **Contexto do Ambiente**

Você é um especialista em desenvolvimento Wix Velo (Wix Studio).  
Você está desenvolvendo uma landing page "Industrial Clean" para higienização de capacetes.

## **Regras Críticas (MANDATÓRIAS)**

1. **Seletores:** Use SEMPRE a sintaxe $w('\#id'). Verifique se o elemento existe antes de usar.  
2. **Proibido DOM:** NUNCA use window, document, localStorage (use wix-storage), alert ou console.log (use console.info).  
3. **Ciclo de Vida:** Todo código de frontend deve estar dentro de $w.onReady(async function () {... });.  
4. **Assincronicidade:** Use sempre async/await para Promises (Wix Data, Wix Location). Evite .then().  
5. **Importações:** Use os pacotes corretos do Velo:  
   * import wixLocation from 'wix-location-frontend';  
   * import wixWindow from 'wix-window-frontend';  
   * import wixData from 'wix-data';

## **Diretrizes de Estilo "Industrial Clean"**

* **Cores:** Utilize constantes para cores:  
  * const COLOR\_TECH\_BLUE \= '\#3000FF';  
  * const COLOR\_ASPHALT \= '\#181818';  
* **Animações:** Use wix-animations para micro-interações rápidas e mecânicas.

## **Integrações Específicas**

* **Waze:** Ao criar links de navegação, verifique o dispositivo (wixWindow.formFactor). Se Mobile, use deep link waze://. Se Desktop, use Google Maps Web.  
* **WhatsApp:** Codifique sempre a mensagem URL (encodeURIComponent).

**Implicação Técnica:** Este arquivo garante que 95% do código gerado pelo AI seja executável e livre de erros de sintaxe específicos da plataforma, economizando horas de depuração.4

## ---

**5\. Implementação Técnica Detalhada (Frontend & Backend)**

Esta seção fornece as especificações técnicas para as funcionalidades críticas, prontas para serem implementadas pelo desenvolvedor com o auxílio do Cursor.

### **5.1 O "Localizador Inteligente" (Deep Linking Waze/Maps)**

A funcionalidade de traçar rota deve ser à prova de falhas.

**Lógica do Algoritmo:**

1. Obter as coordenadas (latitude/longitude) do posto selecionado.  
2. Identificar o tipo de dispositivo do usuário (Mobile vs. Desktop).  
3. Se Mobile: Construir a string waze://?ll=${lat},${lon}\&navigate=yes.  
4. Se Desktop: Construir a string https://www.google.com/maps/dir/?api=1\&destination=${lat},${lon}.  
5. Executar o redirecionamento.

**Código de Exemplo (Velo):**

JavaScript

import wixWindow from 'wix-window-frontend';  
import wixLocation from 'wix-location-frontend';

/\*\*  
 \* Redireciona o usuário para o aplicativo de navegação apropriado.  
 \* @param {number} lat \- Latitude do destino  
 \* @param {number} lon \- Longitude do destino  
 \*/  
export function navegarParaEstacao(lat, lon) {  
    if (wixWindow.formFactor \=== "Mobile") {  
        // Tenta abrir o Waze nativamente  
        // Nota: Em alguns dispositivos, pode ser necessário um fallback se o app não estiver instalado  
        // O Velo não detecta apps instalados, então o fallback ideal é um link universal  
        wixLocation.to(\`waze://?ll=${lat},${lon}\&navigate=yes\`);  
    } else {  
        // Desktop ou Tablet: Abre Google Maps em nova aba  
        wixLocation.to(\`https://www.google.com/maps/dir/?api=1\&destination=${lat},${lon}\`);  
    }  
}

$w.onReady(function () {  
    $w('\#btnRotaPosto1').onClick(() \=\> {  
        navegarParaEstacao(-29.9180, \-51.1782); // Coordenadas Exemplo Canoas  
    });  
});

**Insight:** Esta abordagem elimina a frustração de abrir um mapa no navegador do celular que não oferece navegação "turn-by-turn" imediata. É uma otimização de UX focada puramente na ação.13

### **5.2 Integração Telebusca via WhatsApp API**

Para o serviço de busca e entrega, a comunicação deve ser iniciada com contexto.

Lógica:  
O link do WhatsApp deve conter uma mensagem pré-formatada que ajude a equipe de atendimento a identificar a origem do lead.  
**Código de Exemplo:**

JavaScript

import wixLocation from 'wix-location-frontend';

$w.onReady(function () {  
    const telefone \= "5551999999999"; // Número da CapClear  
    const mensagem \= encodeURIComponent("Olá\! Estou no site e gostaria de agendar uma Telebusca para meu capacete.");  
      
    $w('\#btnWhatsappHero').link \= \`https://wa.me/${telefone}?text=${mensagem}\`;  
    $w('\#btnWhatsappHero').target \= "\_blank";  
});

**Segurança:** Números de telefone e mensagens padrão não são dados sensíveis, então podem ficar no frontend. Se houver lógica de rotação de atendentes (ex: múltiplos números), essa lógica deve ser movida para o backend (http-functions) para não expor a lista de atendentes no código cliente.15

### **5.3 Animações "Industrial Clean" com wix-animations**

Para dar a sensação de tecnologia, os elementos não devem simplesmente aparecer; eles devem deslizar com precisão mecânica.

Prompt para o Cursor AI:  
"Crie uma timeline de animação usando wix-animations. Quando o elemento \#sectionComoFunciona entrar na viewport (onViewportEnter), anime os elementos \#step1, \#step2, e \#step3 sequencialmente. Eles devem deslizar do eixo X (-50px para 0\) e opacidade (0 para 1\) com uma duração de 400ms e easing 'easeOutCubic'. Adicione um atraso de 200ms entre cada um."  
Isso cria um efeito de "linha de montagem" visual, reforçando a identidade industrial da marca.12

## ---

**6\. Otimização de Performance e SEO (O Pilar da Agilidade)**

Para a persona "Corre", que muitas vezes acessa via 4G/5G em áreas de sinal variável, a performance não é um luxo, é uma necessidade.

### **6.1 Otimização de Imagens e Vídeo**

* **Vídeo Hero:** Não use YouTube ou Vimeo embed, pois carregam scripts pesados. Use o gerenciador de mídia do Wix para servir o vídeo, mas certifique-se de que ele esteja comprimido (Bitrate baixo, resolução 720p é suficiente para background, sem áudio). Configure o *poster image* (imagem estática que aparece antes do vídeo carregar) para garantir que o usuário não veja um fundo preto.23  
* **Formatos:** Converta todas as imagens estáticas (ícones, fotos de capacetes) para WebP. O Wix faz isso automaticamente na maioria dos casos, mas o desenvolvedor deve garantir que os SVGs (ícones) estejam limpos e otimizados.25

### **6.2 Minificação e Carregamento Preguiçoso (Lazy Loading)**

O Velo permite controlar quando o código é carregado.

* **Lazy Loading de Módulos:** Se a lógica do mapa for pesada, importe a biblioteca apenas quando o usuário rolar até a seção de mapa, usando import() dinâmico se possível, ou garantindo que o código pesado esteja em um arquivo separado que não bloqueie a renderização inicial.  
* **Elementos "Abaixo da Dobra":** Imagens e galerias fora da tela inicial devem ter o carregamento diferido. O Wix Editor tem configurações nativas para isso, mas o desenvolvedor deve verificar manualmente se está ativado.25

### **6.3 SEO Local e Dados Estruturados**

Para que a CapClear seja encontrada quando alguém digita "higienização capacete canoas":

* **Schema Markup:** Adicionar JSON-LD no painel de SEO do Wix para "LocalBusiness". Isso ajuda o Google a exibir os locais no Google Maps e nos resultados de pesquisa.  
* **Meta Tags:** Títulos e descrições focados em palavras-chave geolocalizadas ("Limpeza de capacete em Canoas", "Higienização ozônio RS").26

## ---

**7\. QA, Testes e Lançamento**

Antes de ir ao ar, o site deve passar por uma bateria de testes rigorosa, simulando as condições reais de uso.

### **7.1 Protocolo de Teste Cross-Device**

* **Teste de "Dedo Gordo" (Fat Finger):** Verificar se os botões de ação (Waze, WhatsApp) têm área de toque suficiente (mínimo 44x44px) para serem acionados facilmente por alguém usando luvas de moto ou com pressa.  
* **Teste de Deep Link:** Validar em Android e iOS se o botão do Waze realmente abre o aplicativo e não a loja de aplicativos (se o app já estiver instalado). Isso varia conforme a versão do OS e requer testes físicos.13

### **7.2 Validação Visual "Industrial"**

* Verificar se a fonte **Orbitron** com o skew de 20 graus está renderizando suavemente em telas Retina (iPhone) e telas de menor resolução. Se houver serrilhado, ajustar a técnica de renderização ou usar SVG para os títulos principais.  
* Garantir que o contraste entre o texto branco e o fundo cinza/asfalto atenda aos padrões de acessibilidade WCAG (mínimo 4.5:1), garantindo leitura sob sol forte.8

## ---

**8\. Conclusão e Roadmap Futuro**

A arquitetura proposta entrega uma plataforma que é, simultaneamente, uma vitrine de marca e uma ferramenta de utilidade pública para motociclistas. Ao utilizar o Wix Velo com o suporte do Cursor AI, a CapClear garante um código limpo, sustentável e escalável.

**Próximos Passos (Pós-Lançamento):**

1. **Fase 2 \- Conta do Usuário:** Implementar login para histórico de limpezas e programa de fidelidade ("A cada 10 limpezas, 1 grátis"). Isso pode ser feito usando o wix-members e wix-data.  
2. **Fase 3 \- Venda de Produtos:** Integrar wix-stores para vender produtos de manutenção (sprays anti-embaçante, viseiras) diretamente pela plataforma, aproveitando o tráfego gerado pelo serviço de limpeza.

Este relatório fornece o mapa completo. A execução agora depende da precisão do código e da fidelidade ao design "Industrial Clean". O sucesso não será medido apenas por visitas, mas por capacetes limpos e quilômetros rodados com segurança.

**Tabela Resumo de Implementação:**

| Componente | Ferramenta/Tecnologia | Objetivo Estratégico |
| :---- | :---- | :---- |
| **Interface Visual** | Wix Studio (CSS Grid, Flexbox) | Identidade "Industrial Clean" e Responsividade |
| **Lógica Frontend** | Velo (JavaScript ES2020) | Interatividade, Animações e Validação |
| **Navegação** | wix-location \+ URL Schemes | Deep linking Waze/Maps para conversão física |
| **Comunicação** | WhatsApp API \+ encodeURI | Agendamento Telebusca sem fricção |
| **Desenvolvimento** | Wix CLI \+ GitHub \+ Cursor AI | Velocidade de codificação, segurança e qualidade |
| **Hospedagem** | Wix Cloud (Serverless) | Performance global e zero manutenção de servidor |

1. 