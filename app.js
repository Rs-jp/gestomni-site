/* ==========================================================================
   Gest'Omni Landing Page - Modern Dynamic Bilingual CMS Logic
   ========================================================================== */

// --- Default Fallback Configuration Object ---
// (Ensures the page works 100% offline or locally via file:/// protocol without CORS blocks)
const DEFAULT_CONFIG = {
  adminPassword: "admin",
  youtubeId: "dQw4w9WgXcQ",
  trialLink: "https://gestomni.com/signup",
  demoLink: "https://calendly.com/gestomni/demo",
  googleAnalyticsId: "",
  en: {
    meta: {
      title: "Gest'Omni - Enterprise-Grade Retail & Financial Management for Small Businesses",
      description: "Level the playing field. Get the exact same AI-powered tools, marketplace integrations, and financial tracking that retail giants spend millions on."
    },
    nav: {
      features: "Features",
      mission: "Our Purpose",
      pricing: "Pricing",
      faq: "FAQ",
      cta: "Get Started"
    },
    hero: {
      badge: "🚀 LEVEL THE PLAYING FIELD",
      title: "Enterprise Power, Scaled for Local Retailers",
      subtitle: "Stop paying fortune for advanced systems. Gest'Omni gives you AI-powered inventory, Shopee & Mercado Livre sync, and immutable financial auditing to fight and win against retail giants.",
      ctaStart: "Start Free Trial",
      ctaWatch: "Watch App Presentation",
      videoTitle: "Watch the Gest'Omni Presentation"
    },
    mission: {
      badge: "THE MISSION",
      title: "Why Gest'Omni Exists",
      description1: "For decades, retail giants have dominated the market by investing millions in advanced automation, predictive artificial intelligence, and global supply chain integrations.",
      description2: "Our mission is simple: to level the playing field. We package that exact same enterprise power into a clean, affordable, and incredibly easy-to-use application. Local shop owners, home artisans, and independent retailers now have the same technical capabilities as the largest corporations on earth.",
      stat1Number: "10x",
      stat1Text: "Faster Stock Management",
      stat2Number: "0%",
      stat2Text: "Unexplained Inventory Loss",
      stat3Number: "100%",
      stat3Text: "Control Over Cash Flow"
    },
    features: {
      title: "Equipped with Enterprise-Grade Tools",
      subtitle: "Everything you need to manage, scale, and automate your retail or artisan business in a single workspace.",
      items: [
        {
          id: "ai_invoice",
          title: "AI Invoice Parser (DANFE/XML)",
          description: "Drag and drop your XML or PDF DANFE invoice files. Our built-in Gemini AI extracts suppliers, items, quantities, and cost prices in seconds, adding them to stock automatically.",
          badge: "Gemini AI"
        },
        {
          id: "pos",
          title: "Point of Sale (POS / Checkout)",
          description: "A lightning-fast, intuitive checkout page. Search by name, scan barcodes, handle discount percentages, manage product variations, and process direct refunds instantly.",
          badge: "Fast Checkout"
        },
        {
          id: "audit",
          title: "Immutable Audit Ledger",
          description: "Sleep easy knowing your stock is fully audited. Any change triggers a system-wide secure PostgreSQL ledger tracking who, when, why, and the exact stock adjustments made.",
          badge: "Security"
        },
        {
          id: "market",
          title: "Marketplace Sync",
          description: "Synchronize your brick-and-mortar physical stock with online listings on Shopee and Mercado Livre. Sell a product in-store, and online stock updates automatically.",
          badge: "Multi-Channel"
        },
        {
          id: "finance",
          title: "Cash Flow & Consolidated DRE",
          description: "Understand your actual financial health. Consolidated revenues, cost of goods sold (CMV), fixed operating bills, and accounts payable are balanced automatically for real net profit tracking.",
          badge: "Accounting"
        },
        {
          id: "custom",
          title: "Artisan Custom Orders",
          description: "A production board tailored for tailors, artisans, and custom ateliers. Track deposits, down-payments, remaining balances, delivery deadlines, and dispatch alerts.",
          badge: "Atelier Focus"
        },
        {
          id: "partners",
          title: "Artisans & Partners Accounting",
          "description": "Track raw materials (debits) handed to external artisans and finished items (credits) returned, calculating the net financial balance of each supplier automatically.",
          badge: "Collaboration"
        },
        {
          id: "ecommerce",
          title: "Online Storefront & Dispatch",
          "description": "Launch your own integrated public e-commerce store. Customers buy online, Google Maps API computes exact shipping, and you get immediate WhatsApp dispatcher notifications.",
          badge: "Webstore"
        },
        {
          id: "devstudio",
          title: "DevStudio Layout Customizer",
          "description": "Rearrange and resize widgets directly on your dashboard visual layout without code. Customize mobile/desktop rendering columns and shadows to match your workflow.",
          badge: "No-Code"
        }
      ]
    },
    "pricing": {
      "title": "Simple, Transparent Pricing",
      "subtitle": "No hidden fees. Pay monthly or save with our annual plans. All features included.",
      "monthly": "Monthly",
      "yearly": "Yearly (Save 20%)",
      "perMonth": "/ month",
      "perYear": "/ year",
      "trialBtn": "Start 14-Day Free Trial",
      "plans": [
        {
          "name": "Artisan Solo",
          "priceMonthly": 29,
          "priceYearly": 278,
          "description": "Perfect for individual artisans and home-based creators.",
          "features": [
            "1 User / Operator",
            "Artisans & Partners Ledger",
            "Point of Sale (POS)",
            "Manual Inventory Audit",
            "Email & Community Support"
          ],
          "popular": false
        },
        {
          "name": "Retail Growth",
          "priceMonthly": 59,
          "priceYearly": 566,
          "description": "Designed for growing physical shops and active sellers.",
          "features": [
            "Unlimited Users & Operators",
            "Gemini AI Invoice Parser (30/mo)",
            "Shopee & Mercado Livre Sync",
            "Integrated Public Webstore",
            "Full Consolidated DRE & Cash Flow",
            "Immutable Stock Auditing",
            "Priority WhatsApp Support"
          ],
          "popular": true
        },
        {
          "name": "Enterprise Scale",
          "priceMonthly": 119,
          "priceYearly": 1142,
          "description": "For businesses managing high volume and multi-store setups.",
          "features": [
            "Everything in Growth Plan",
            "Unlimited Gemini AI Invoice Parser",
            "Custom Domain for Webstore",
            "API Access & Custom Webhooks",
            "24/7 Dedicated Account Manager"
          ],
          "popular": false
        }
      ]
    },
    "faq": {
      "title": "Frequently Asked Questions",
      "subtitle": "Got questions about Gest'Omni? We have answers.",
      "items": [
        {
          "q": "Do I need technical skills to use Gest'Omni?",
          "a": "Not at all. Gest'Omni is designed to be fully operational in minutes. The AI Invoice Parser reads XML/PDF files so you don't have to enter items manually, and our dashboard is completely visual."
        },
        {
          "q": "How does Shopee and Mercado Livre sync work?",
          "a": "Through standard secure APIs. You map your listing SKUs to physical inventory items. Whenever a checkout is finalized on your physical POS, Gest'Omni automatically triggers API updates to adjust stock levels online, avoiding double-selling."
        },
        {
          "q": "What is the Immutable Audit Ledger?",
          "a": "It is a security mechanism built directly into our database level. Every single inventory change (additions, sales, returns) registers a permanent audit row with details like timestamp, reason, and operator. This ledger cannot be edited or deleted, ensuring absolute honesty in your store data."
        },
        {
          "q": "Can I cancel my subscription at any time?",
          "a": "Yes, completely. There are no contracts or cancellation fees. You can unsubscribe directly from your billing panel with a single click."
        }
      ]
    },
    "footer": {
      "tagline": "Empowering local retailers and artisans worldwide to stand strong against global giants.",
      "adminPortal": "Admin Portal Access",
      "rights": "All rights reserved. Powered by Supabase & Gemini AI."
    }
  },
  "pt": {
    "meta": {
      "title": "Gest'Omni - Gestão Financeira e Vendas Nível Corporativo para Pequenos Negócios",
      "description": "Nivele o jogo. Tenha as mesmas ferramentas de IA, integrações de marketplaces e auditoria de estoque que as grandes multinacionais gastam fortunas para ter."
    },
    "nav": {
      "features": "Recursos",
      "mission": "Nosso Propósito",
      "pricing": "Planos",
      "faq": "Dúvidas",
      "cta": "Começar Agora"
    },
    "hero": {
      "badge": "🚀 NIVELANDO O JOGO NO VAREJO",
      "title": "Poder de Grande Empresa para o Pequeno Negócio",
      "subtitle": "Chega de pagar fortunas por sistemas limitados. O Gest'Omni entrega IA para ler notas fiscais, sincronização automática com Shopee/Mercado Livre e auditoria de estoque imutável para você competir e vencer os gigantes do varejo.",
      "ctaStart": "Começar Teste Grátis",
      "ctaWatch": "Assistir Vídeo de Apresentação",
      "videoTitle": "Assista à Apresentação do Gest'Omni"
    },
    "mission": {
      "badge": "A MISSÃO",
      "title": "Por que o Gest'Omni Existe",
      "description1": "Por décadas, os grandes gigantes do varejo dominaram o mercado investindo milhões de dólares em automação avançada, inteligência artificial preditiva e cadeias de suprimentos integradas.",
      "description2": "Nossa missão é simples: equilibrar a balança. Nós empacotamos exatamente esse mesmo poder corporativo em um aplicativo limpo, acessível e extremamente fácil de usar. Agora, lojistas locais, artesãos e pequenos comerciantes têm as mesmas capacidades tecnológicas que as maiores empresas do mundo pagam caro para possuir.",
      "stat1Number": "10x",
      "stat1Text": "Mais Rápido no Estoque",
      "stat2Number": "0%",
      "stat2Text": "Perda de Estoque Sem Explicação",
      "stat3Number": "100%",
      "stat3Text": "Controle do Fluxo de Caixa"
    },
    "features": {
      "title": "Equipado com Recursos de Elite",
      "subtitle": "Tudo o que você precisa para gerenciar, escalar e automatizar o seu negócio físico ou e-commerce em uma única tela.",
      "items": [
        {
          "id": "ai_invoice",
          "title": "Leitor de Notas com IA (DANFE/XML)",
          "description": "Arraste e solte arquivos XML ou PDF de suas notas fiscais DANFE. Nossa IA Gemini integrada extrai fornecedores, produtos, quantidades e preços de custo em segundos, alimentando o estoque automaticamente.",
          "badge": "Gemini AI"
        },
        {
          "id": "pos",
          "title": "Frente de Caixa (PDV Ágil)",
          "description": "Uma tela de checkout ultrarrápida e intuitiva. Busque por nome, escaneie código de barras, aplique descontos em porcentagem ou valor, selecione variações e realize reembolsos integrados.",
          "badge": "Vendas Rápidas"
        },
        {
          "id": "audit",
          "title": "Auditoria de Estoque Imutável",
          "description": "Durma tranquilo sabendo que seu estoque é totalmente auditável. Qualquer movimentação aciona um gatilho seguro no banco de dados (PostgreSQL) registrando quem, quando, por que e as alterações exatas.",
          "badge": "Segurança"
        },
        {
          "id": "market",
          "title": "Sincronização de Marketplaces",
          "description": "Sincronize seu estoque físico com anúncios da Shopee e Mercado Livre. Vendeu na loja física? O estoque dos seus anúncios online é atualizado automaticamente em segundos.",
          "badge": "Multicanal"
        },
        {
          "id": "finance",
          "title": "Fluxo de Caixa & DRE Consolidada",
          "description": "Entenda a real saúde financeira da sua empresa. Receitas, custos de mercadorias vendidas (CMV), despesas operacionais fixas e contas a pagar são consolidados para calcular seu lucro líquido real.",
          "badge": "Financeiro"
        },
        {
          "id": "custom",
          "title": "Encomendas e Produção sob Medida",
          "description": "Um painel estilo Kanban sob medida para costureiras, artesãos e ateliês. Acompanhe adiantamentos, saldos devedores na entrega, prazos visuais e alertas de conclusão.",
          "badge": "Foco em Ateliê"
        },
        {
          "id": "partners",
          "title": "Acerto de Parceiras e Artesãs",
          "description": "Monitore matérias-primas e rolos de fios entregues a artesãs terceirizadas (débitos) e a entrega de produtos acabados (créditos), gerando o saldo financeiro a pagar de forma automática.",
          "badge": "Colaboração"
        },
        {
          "id": "ecommerce",
          "title": "Loja Online & Painel de Entregas",
          "description": "Tenha sua própria loja virtual pública para clientes comprarem online. Taxa de entrega calculada via Google Maps API, com acionamento de entregador e envio direto de dados via WhatsApp.",
          "badge": "Loja Própria"
        },
        {
          "id": "devstudio",
          "title": "Personalizador Visual DevStudio",
          "description": "Reorganize e altere o tamanho dos cards diretamente na tela sem mexer em código. Configure colunas para celular/computador e sombras que combinem com o seu fluxo de trabalho.",
          "badge": "Sem Código"
        }
      ]
    },
    "pricing": {
      "title": "Planos Simples e Transparentes",
      "subtitle": "Sem taxas ocultas. Pague mensalmente ou economize com nossos planos anuais. Todos os recursos inclusos.",
      "monthly": "Mensal",
      "yearly": "Anual (Economize 20%)",
      "perMonth": "/ mês",
      "perYear": "/ ano",
      "trialBtn": "Começar Teste de 14 Dias Grátis",
      "plans": [
        {
          "name": "Artesão Solo",
          "priceMonthly": 29,
          "priceYearly": 278,
          "description": "Perfeito para artesãos individuais e criadores que trabalham em casa.",
          "features": [
            "1 Usuário / Operador",
            "Gestão de Parceiras e Artesãs",
            "Frente de Caixa (PDV)",
            "Auditoria de Estoque Manual",
            "Suporte por E-mail e Comunidade"
          ],
          "popular": false
        },
        {
          "name": "Varejo Crescimento",
          "priceMonthly": 59,
          "priceYearly": 566,
          "description": "Ideal para lojas físicas em crescimento e vendedores ativos.",
          "features": [
            "Usuários e Operadores Ilimitados",
            "Importador com IA Gemini (30 notas/mês)",
            "Sincronização Shopee e Mercado Livre",
            "Loja Virtual Integrada",
            "DRE Consolidada e Fluxo de Caixa",
            "Auditoria de Estoque Automática",
            "Suporte prioritário via WhatsApp"
          ],
          "popular": true
        },
        {
          "name": "Escala Enterprise",
          "priceMonthly": 119,
          "priceYearly": 1142,
          "description": "Para empresas que gerenciam alto volume de vendas ou múltiplas lojas.",
          "features": [
            "Tudo do plano Crescimento",
            "Leitor de Notas com IA Ilimitado",
            "Domínio Personalizado para Loja Online",
            "Acesso à API e Webhooks Personalizados",
            "Gerente de Conta Dedicado 24/7"
          ],
          "popular": false
        }
      ]
    },
    "faq": {
      "title": "Perguntas Frequentes",
      "subtitle": "Ficou com alguma dúvida sobre o Gest'Omni? Nós respondemos.",
      "items": [
        {
          "q": "Preciso de conhecimento técnico para usar o Gest'Omni?",
          "a": "Nenhum. O Gest'Omni foi projetado para estar funcionando em poucos minutos. A inteligência artificial lê suas notas fiscais automaticamente para que você não precise digitar itens, e todo o painel é totalmente visual."
        },
        {
          "q": "Como funciona a sincronização com Shopee e Mercado Livre?",
          "a": "Usamos APIs oficiais e seguras. Você faz o mapeamento do código do anúncio (SKU) com o produto físico. Sempre que uma venda for concluída no PDV da sua loja física, o Gest'Omni avisa as plataformas para atualizar o estoque online automaticamente."
        },
        {
          "q": "O que é a Auditoria de Estoque Imutável?",
          "a": "É um sistema de segurança integrado direto no banco de dados. Qualquer alteração de estoque (entradas, vendas, devoluções) registra uma linha definitiva com data, hora, motivo e operador. Essa linha não pode ser alterada ou apagada, garantindo total controle."
        },
        {
          "q": "Posso cancelar minha assinatura a qualquer momento?",
          "a": "Sim, com certeza. Não existem contratos de fidelidade ou taxas de cancelamento. Você pode cancelar sua assinatura diretamente no painel de faturamento com um único clique."
        }
      ]
    },
    "footer": {
      "tagline": "Empoderando comerciantes locais e artesãos para competirem e vencerem os gigantes do varejo global.",
      "adminPortal": "Acesso Administrativo",
      "rights": "Todos os direitos reservados. Desenvolvido com Supabase & Gemini AI."
    }
  }
};

// --- Application State ---
let siteConfig = {};
let activeLang = "en"; // Default language
let isYearlyBilling = false; // Monthly vs Yearly Pricing Toggle State
let isAdminAuthenticated = false;
let ytPlayer = null;

// --- SVG Icons Map for Features ---
const FEATURE_ICONS = {
  ai_invoice: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
  pos: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><line x1="12" y1="4" x2="12" y2="20"></line><line x1="2" y1="12" x2="22" y2="12"></line></svg>`,
  audit: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>`,
  market: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path></svg>`,
  finance: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
  custom: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>`,
  partners: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  ecommerce: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
  devstudio: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`
};

// --- Initialization / Config Loader ---
window.addEventListener("DOMContentLoaded", async () => {
  await loadConfiguration();
  detectUserLanguage();
  hydrateDOM();
  initializeGoogleAnalytics();
  setupEventListeners();
});

/**
 * Dynamically injects Google Analytics 4 Measurement Tag if configured.
 */
function initializeGoogleAnalytics() {
  const gaId = siteConfig.googleAnalyticsId;
  if (!gaId || gaId.trim() === "") return;

  // Check if already injected
  if (document.getElementById("ga-gtag-script")) return;

  // 1. Load the external Google Analytics script
  const gaScript = document.createElement("script");
  gaScript.id = "ga-gtag-script";
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(gaScript);

  // 2. Setup global dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', gaId);
  
  console.log(`Google Analytics initialized with ID: ${gaId}`);
}

/**
 * Loads the application configuration.
 * Prioritizes localstorage (user edits) -> static config.json file -> fallback object.
 */
async function loadConfiguration() {
  // 1. Try loading from localStorage first (User edits override defaults)
  const savedConfig = localStorage.getItem("gestomni_landing_config");
  if (savedConfig) {
    try {
      siteConfig = JSON.parse(savedConfig);
      console.log("Configuration successfully loaded from local storage overrides.");
      return;
    } catch (e) {
      console.error("Error parsing configuration from local storage. Reverting to file.", e);
    }
  }

  // 2. Try fetching the config.json file from the server
  try {
    const response = await fetch("config.json");
    if (response.ok) {
      siteConfig = await response.json();
      console.log("Configuration successfully loaded from config.json file.");
      return;
    }
  } catch (error) {
    // Graceful offline/local file:/// compatibility
    console.warn("Could not fetch config.json (likely running locally via file:/// or server offline). Falling back to integrated defaults.");
  }

  // 3. Fallback to hardcoded DEFAULT_CONFIG
  siteConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
}

/**
 * Detects user preferred language, saving preference in localStorage.
 */
function detectUserLanguage() {
  const savedLang = localStorage.getItem("gestomni_lang");
  if (savedLang === "en" || savedLang === "pt") {
    activeLang = savedLang;
  } else {
    // Check browser preference, default to english if not portuguese
    const browserLang = navigator.language || navigator.userLanguage;
    activeLang = browserLang.startsWith("pt") ? "pt" : "en";
  }
  
  // Set visual switch position
  const langSwitcher = document.getElementById("lang-switcher");
  if (langSwitcher) {
    langSwitcher.setAttribute("data-lang", activeLang);
    langSwitcher.querySelectorAll(".lang-option").forEach(opt => {
      opt.classList.toggle("active", opt.getAttribute("data-opt") === activeLang);
    });
  }
}

/**
 * Hydrates all static and dynamic elements on the page based on the active language.
 */
function hydrateDOM() {
  const t = siteConfig[activeLang];
  if (!t) return;

  // Hydrate Meta SEO elements
  document.getElementById("meta-title").textContent = t.meta.title;
  document.getElementById("meta-desc").setAttribute("content", t.meta.description);
  document.title = t.meta.title;

  // Hydrate Header Navigation
  document.getElementById("nav-features").textContent = t.nav.features;
  document.getElementById("nav-mission").textContent = t.nav.mission;
  document.getElementById("nav-pricing").textContent = t.nav.pricing;
  document.getElementById("nav-faq").textContent = t.nav.faq;
  document.getElementById("nav-cta").textContent = t.nav.cta;
  document.getElementById("nav-cta").setAttribute("href", siteConfig.trialLink);

  // Footer Links Bindings
  document.querySelectorAll(".footer-nav-features").forEach(el => el.textContent = t.nav.features);
  document.querySelectorAll(".footer-nav-mission").forEach(el => el.textContent = t.nav.mission);
  document.querySelectorAll(".footer-nav-pricing").forEach(el => el.textContent = t.nav.pricing);

  // Hydrate Hero Section
  document.getElementById("hero-badge").innerHTML = `🚀 ${t.hero.badge.replace(/^🚀\s*/, "")}`;
  document.getElementById("hero-title").textContent = t.hero.title;
  document.getElementById("hero-subtitle").textContent = t.hero.subtitle;
  document.getElementById("hero-cta-start").textContent = t.hero.ctaStart;
  document.getElementById("hero-cta-start").setAttribute("href", siteConfig.trialLink);
  document.getElementById("hero-cta-watch-text").textContent = t.hero.ctaWatch;

  // Hydrate Video Placeholder text
  document.getElementById("video-placeholder-text").textContent = t.hero.ctaWatch;

  // Hydrate Mission / Core Purpose Section
  document.getElementById("mission-badge").textContent = t.mission.badge;
  document.getElementById("mission-title").textContent = t.mission.title;
  document.getElementById("mission-desc-1").textContent = t.mission.description1;
  document.getElementById("mission-desc-2").textContent = t.mission.description2;
  
  document.getElementById("stat1-num").textContent = t.mission.stat1Number;
  document.getElementById("stat1-lbl").textContent = t.mission.stat1Text;
  document.getElementById("stat2-num").textContent = t.mission.stat2Number;
  document.getElementById("stat2-lbl").textContent = t.mission.stat2Text;
  document.getElementById("stat3-num").textContent = t.mission.stat3Number;
  document.getElementById("stat3-lbl").textContent = t.mission.stat3Text;

  // Hydrate Features Section Header
  document.getElementById("features-title").textContent = t.features.title;
  document.getElementById("features-subtitle").textContent = t.features.subtitle;

  // Dynamically populate features cards
  renderFeatures(t.features.items);

  // Hydrate Pricing Section Header
  document.getElementById("pricing-title").textContent = t.pricing.title;
  document.getElementById("pricing-subtitle").textContent = t.pricing.subtitle;
  document.getElementById("billing-monthly-lbl").textContent = t.pricing.monthly;
  document.getElementById("billing-yearly-lbl").textContent = t.pricing.yearly;

  // Dynamically populate pricing cards
  renderPricing(t.pricing.plans, t.pricing.perMonth, t.pricing.perYear, t.pricing.trialBtn);

  // Hydrate FAQ Header
  document.getElementById("faq-title").textContent = t.faq.title;
  document.getElementById("faq-subtitle").textContent = t.faq.subtitle;

  // Dynamically populate FAQs
  renderFAQs(t.faq.items);

  // Hydrate Footer static content
  document.getElementById("footer-tagline").textContent = t.footer.tagline;
  document.getElementById("footer-rights").textContent = `© ${new Date().getFullYear()} Gest'Omni. ${t.footer.rights}`;
  document.getElementById("footer-admin-portal").textContent = t.footer.adminPortal;
  document.getElementById("footer-link-demo").setAttribute("href", siteConfig.demoLink);
  document.getElementById("footer-link-demo").textContent = activeLang === "en" ? "Book a Demo" : "Agendar Demonstração";
  document.getElementById("footer-link-support").textContent = activeLang === "en" ? "Technical Support" : "Suporte Técnico";

  // Re-adjust active state for toggle labels
  document.getElementById("billing-monthly-lbl").classList.toggle("active", !isYearlyBilling);
  document.getElementById("billing-yearly-lbl").classList.toggle("active", isYearlyBilling);
}

/**
 * Renders the 9 features cards dynamically into the HTML container.
 */
function renderFeatures(featuresList) {
  const container = document.getElementById("features-container");
  if (!container) return;

  container.innerHTML = featuresList.map(item => {
    const iconSvg = FEATURE_ICONS[item.id] || FEATURE_ICONS.pos; // fallback icon
    return `
      <div class="feature-card" id="feature-${item.id}">
        <div class="feature-icon-wrapper">
          ${iconSvg}
        </div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <span class="feature-badge">${item.badge}</span>
      </div>
    `;
  }).join("");
}

/**
 * Renders the Pricing Cards Grid based on billing cycle state.
 */
function renderPricing(plans, perMonthLabel, perYearLabel, trialBtnLabel) {
  const container = document.getElementById("pricing-container");
  if (!container) return;

  container.innerHTML = plans.map(plan => {
    // Show either monthly cost or discounted yearly cost divided by 12, or just yearly cost
    const priceValue = isYearlyBilling ? Math.round(plan.priceYearly / 12) : plan.priceMonthly;
    const periodLabel = isYearlyBilling ? perMonthLabel : perMonthLabel; // both show monthly equivalent, or yearly total
    
    // Check popular badge
    const popularCardClass = plan.popular ? "pricing-card popular" : "pricing-card";
    const popularBadgeHtml = plan.popular ? `<span class="popular-badge">${activeLang === 'en' ? 'Most Popular' : 'Mais Popular'}</span>` : "";

    const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="pricing-check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

    const featuresListHtml = plan.features.map(f => `<li>${checkIcon}<span>${f}</span></li>`).join("");

    return `
      <div class="${popularCardClass}">
        ${popularBadgeHtml}
        <div class="pricing-card-header">
          <h3 class="pricing-plan-name">${plan.name}</h3>
          <div class="pricing-price-container">
            <span class="pricing-currency">R$</span>
            <span class="pricing-value">${priceValue}</span>
            <span class="pricing-period">${periodLabel}</span>
          </div>
          ${isYearlyBilling ? `<small style="color: hsl(var(--secondary-hover)); font-weight: 600;">R$ ${plan.priceYearly} billed annually</small>` : ""}
          <p class="pricing-card-description">${plan.description}</p>
        </div>
        <div class="pricing-divider"></div>
        <ul class="pricing-features-list">
          ${featuresListHtml}
        </ul>
        <a href="${siteConfig.trialLink}" class="btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} trial-btn">${trialBtnLabel}</a>
      </div>
    `;
  }).join("");
}

/**
 * Renders the interactive Accordion FAQs.
 */
function renderFAQs(items) {
  const container = document.getElementById("faq-container");
  if (!container) return;

  container.innerHTML = items.map((item, index) => {
    return `
      <div class="faq-item" id="faq-item-${index}">
        <button class="faq-question" onclick="toggleFaq(${index})">
          <span>${item.q}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <div class="faq-answer">
          <p>${item.a}</p>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * Toggles FAQ accordion active state.
 */
window.toggleFaq = function(index) {
  const item = document.getElementById(`faq-item-${index}`);
  if (!item) return;

  // Toggle self
  const isActive = item.classList.contains("active");
  
  // Close all FAQs first for clean single-view accordion
  document.querySelectorAll(".faq-item").forEach(el => el.classList.remove("active"));
  
  if (!isActive) {
    item.classList.add("active");
  }
};

// --- YouTube API Video Loader ---
function loadYoutubeVideo() {
  const placeholder = document.getElementById("video-placeholder");
  const container = document.getElementById("player-container");
  if (!placeholder || !container) return;

  // Hide placeholder
  placeholder.style.display = "none";

  // Check if YT script is loaded
  if (window.YT) {
    createYtPlayer();
  } else {
    // Load YouTube Iframe API asynchronously
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    // Bind global YT ready function
    window.onYouTubeIframeAPIReady = () => {
      createYtPlayer();
    };
  }
}

function createYtPlayer() {
  ytPlayer = new YT.Player("player-container", {
    videoId: siteConfig.youtubeId,
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0
    }
  });
}

// --- Event Listeners and Setup ---
function setupEventListeners() {
  // Language Switcher Action
  const langSwitcher = document.getElementById("lang-switcher");
  if (langSwitcher) {
    langSwitcher.addEventListener("click", () => {
      activeLang = activeLang === "en" ? "pt" : "en";
      localStorage.setItem("gestomni_lang", activeLang);
      langSwitcher.setAttribute("data-lang", activeLang);
      
      // Update options active class
      langSwitcher.querySelectorAll(".lang-option").forEach(opt => {
        opt.classList.toggle("active", opt.getAttribute("data-opt") === activeLang);
      });

      // Rerender page texts
      hydrateDOM();
      
      // If admin editing language matches, sync the admin dropdown select too
      if (isAdminAuthenticated) {
        document.getElementById("edit-lang-select").value = activeLang;
        loadAdminFormFields();
      }
    });
  }

  // Monthly / Annual Pricing Toggle
  const pricingSwitch = document.getElementById("pricing-switch");
  if (pricingSwitch) {
    pricingSwitch.addEventListener("click", () => {
      isYearlyBilling = !isYearlyBilling;
      pricingSwitch.classList.toggle("yearly", isYearlyBilling);
      
      const t = siteConfig[activeLang];
      renderPricing(t.pricing.plans, t.pricing.perMonth, t.pricing.perYear, t.pricing.trialBtn);
      
      document.getElementById("billing-monthly-lbl").classList.toggle("active", !isYearlyBilling);
      document.getElementById("billing-yearly-lbl").classList.toggle("active", isYearlyBilling);
    });
  }

  // Bind specific labels to trigger toggle too
  document.getElementById("billing-monthly-lbl").addEventListener("click", () => {
    if (isYearlyBilling) pricingSwitch.click();
  });
  document.getElementById("billing-yearly-lbl").addEventListener("click", () => {
    if (!isYearlyBilling) pricingSwitch.click();
  });

  // Video Click Trigger
  const videoPlaceholder = document.getElementById("video-placeholder");
  if (videoPlaceholder) {
    videoPlaceholder.addEventListener("click", loadYoutubeVideo);
  }

  // Admin Access Portal Open Triggers
  const adminTrigger = document.getElementById("admin-access-trigger");
  if (adminTrigger) {
    adminTrigger.addEventListener("click", openAdminDrawer);
  }

  // Hotkey support Ctrl+Alt+A to open Admin Panel
  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "a") {
      e.preventDefault();
      openAdminDrawer();
    }
  });

  // Close Admin Panel Actions
  document.getElementById("admin-close").addEventListener("click", closeAdminDrawer);
  document.getElementById("admin-backdrop").addEventListener("click", closeAdminDrawer);

  // Authenticate Admin Form
  document.getElementById("admin-login-btn").addEventListener("click", handleAdminLogin);
  document.getElementById("admin-pass").addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleAdminLogin();
  });

  // Admin Drawer Tab Switching
  document.querySelectorAll(".admin-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".admin-tab-content").forEach(c => c.classList.remove("active"));
      
      btn.classList.add("active");
      document.getElementById(btn.getAttribute("data-tab")).classList.add("active");
    });
  });

  // Dynamic Live Admin Forms Input Listening (Saves immediately to local storage on change!)
  setupAdminFormInputListeners();

  // Admin Save Button Action
  document.getElementById("admin-save-btn").addEventListener("click", saveConfigurationLocally);

  // Admin Export / Reset Buttons Actions
  document.getElementById("admin-download-btn").addEventListener("click", downloadConfiguration);
  document.getElementById("admin-reset-btn").addEventListener("click", resetConfigurationToDefaults);

  // Sync edits language select dropdown change
  document.getElementById("edit-lang-select").addEventListener("change", (e) => {
    // Update local config form view
    loadAdminFormFields();
  });
}

// --- Admin CMS Functionality ---

function openAdminDrawer() {
  document.getElementById("admin-drawer").classList.add("open");
  document.getElementById("admin-backdrop").classList.add("open");
  document.getElementById("admin-pass").focus();
}

function closeAdminDrawer() {
  document.getElementById("admin-drawer").classList.remove("open");
  document.getElementById("admin-backdrop").classList.remove("open");
}

function handleAdminLogin() {
  const passInput = document.getElementById("admin-pass");
  const errorMsg = document.getElementById("login-error-msg");
  
  if (passInput.value === siteConfig.adminPassword) {
    // Access Granted
    isAdminAuthenticated = true;
    errorMsg.style.display = "none";
    passInput.value = "";
    
    // Hide login, show editor forms
    document.getElementById("admin-login-view").style.display = "none";
    document.getElementById("admin-editor-view").style.display = "block";
    document.getElementById("admin-drawer-footer").style.display = "block";
    
    // Sync language selection dropdown to active language
    document.getElementById("edit-lang-select").value = activeLang;

    // Load active settings into forms
    loadAdminFormFields();
  } else {
    // Denied
    errorMsg.style.display = "block";
    passInput.focus();
  }
}

/**
 * Loads current in-memory configurations directly into form inputs.
 */
function loadAdminFormFields() {
  const editLang = document.getElementById("edit-lang-select").value;
  const t = siteConfig[editLang];

  // 1. General Tab
  document.getElementById("input-youtube-id").value = siteConfig.youtubeId;
  document.getElementById("input-ga-id").value = siteConfig.googleAnalyticsId || "";
  document.getElementById("input-trial-link").value = siteConfig.trialLink;
  document.getElementById("input-demo-link").value = siteConfig.demoLink;
  document.getElementById("input-admin-password").value = siteConfig.adminPassword;

  // 2. Hero Tab
  document.getElementById("input-hero-badge").value = t.hero.badge;
  document.getElementById("input-hero-title").value = t.hero.title;
  document.getElementById("input-hero-subtitle").value = t.hero.subtitle;
  document.getElementById("input-hero-cta-start").value = t.hero.ctaStart;
  document.getElementById("input-hero-cta-watch").value = t.hero.ctaWatch;

  // 3. Mission Tab
  document.getElementById("input-mission-badge").value = t.mission.badge;
  document.getElementById("input-mission-title").value = t.mission.title;
  document.getElementById("input-mission-desc1").value = t.mission.description1;
  document.getElementById("input-mission-desc2").value = t.mission.description2;
  
  document.getElementById("input-stat1-num").value = t.mission.stat1Number;
  document.getElementById("input-stat1-lbl").value = t.mission.stat1Text;
  document.getElementById("input-stat2-num").value = t.mission.stat2Number;
  document.getElementById("input-stat2-lbl").value = t.mission.stat2Text;
  document.getElementById("input-stat3-num").value = t.mission.stat3Number;
  document.getElementById("input-stat3-lbl").value = t.mission.stat3Text;

  // 4. Pricing Tab
  document.getElementById("input-pricing-title").value = t.pricing.title;
  document.getElementById("input-pricing-subtitle").value = t.pricing.subtitle;
  document.getElementById("input-pricing-monthly-lbl").value = t.pricing.monthly;
  document.getElementById("input-pricing-yearly-lbl").value = t.pricing.yearly;
  document.getElementById("input-pricing-trial-btn").value = t.pricing.trialBtn;

  // Pricing plans inputs side-by-side
  const plansContainer = document.getElementById("admin-plans-prices-container");
  plansContainer.innerHTML = t.pricing.plans.map((plan, i) => `
    <div class="form-group" style="border: 1px solid hsl(var(--border)); padding: 12px; border-radius: 6px; margin-bottom: 12px;">
      <h6 style="color: hsl(var(--primary-hover)); font-size: 0.9rem; margin-bottom: 8px;">Plan: ${plan.name}</h6>
      <div style="display: flex; gap: 10px;">
        <div style="flex: 1;">
          <label style="font-size: 0.75rem;">Price Monthly (R$)</label>
          <input type="number" class="plan-price-monthly-input" data-index="${i}" value="${plan.priceMonthly}">
        </div>
        <div style="flex: 1;">
          <label style="font-size: 0.75rem;">Price Yearly (R$)</label>
          <input type="number" class="plan-price-yearly-input" data-index="${i}" value="${plan.priceYearly}">
        </div>
      </div>
    </div>
  `).join("");

  // Re-bind dynamically rendered inputs listeners
  plansContainer.querySelectorAll("input").forEach(inp => {
    inp.addEventListener("input", savePlanPriceEdits);
  });

  // 5. FAQ Tab
  document.getElementById("input-faq-title").value = t.faq.title;
  document.getElementById("input-faq-subtitle").value = t.faq.subtitle;

  const faqsContainer = document.getElementById("admin-faqs-container");
  faqsContainer.innerHTML = t.faq.items.map((item, i) => `
    <div style="border: 1px solid hsl(var(--border)); padding: 12px; border-radius: 6px; margin-bottom: 12px;">
      <div class="form-group" style="margin-bottom: 10px;">
        <label style="font-size: 0.75rem;">Q${i+1}: Question</label>
        <input type="text" class="faq-q-input" data-index="${i}" value="${item.q}">
      </div>
      <div class="form-group" style="margin-bottom: 0;">
        <label style="font-size: 0.75rem;">A${i+1}: Answer Text</label>
        <textarea class="faq-a-input" data-index="${i}" style="min-height: 80px;">${item.a}</textarea>
      </div>
    </div>
  `).join("");

  // Re-bind FAQ dynamically rendered inputs listeners
  faqsContainer.querySelectorAll("input, textarea").forEach(inp => {
    inp.addEventListener("input", saveFaqEdits);
  });
}

/**
 * Sets up change listeners on fields, applying edits to in-memory config and triggering real-time rendering updates!
 */
function setupAdminFormInputListeners() {
  const inputs = [
    // General
    { id: "input-youtube-id", key: "youtubeId", type: "global" },
    { id: "input-ga-id", key: "googleAnalyticsId", type: "global" },
    { id: "input-trial-link", key: "trialLink", type: "global" },
    { id: "input-demo-link", key: "demoLink", type: "global" },
    { id: "input-admin-password", key: "adminPassword", type: "global" },
    // Hero
    { id: "input-hero-badge", key: "hero.badge" },
    { id: "input-hero-title", key: "hero.title" },
    { id: "input-hero-subtitle", key: "hero.subtitle" },
    { id: "input-hero-cta-start", key: "hero.ctaStart" },
    { id: "input-hero-cta-watch", key: "hero.ctaWatch" },
    // Mission
    { id: "input-mission-badge", key: "mission.badge" },
    { id: "input-mission-title", key: "mission.title" },
    { id: "input-mission-desc1", key: "mission.description1" },
    { id: "input-mission-desc2", key: "mission.description2" },
    { id: "input-stat1-num", key: "mission.stat1Number" },
    { id: "input-stat1-lbl", key: "mission.stat1Text" },
    { id: "input-stat2-num", key: "mission.stat2Number" },
    { id: "input-stat2-lbl", key: "mission.stat2Text" },
    { id: "input-stat3-num", key: "mission.stat3Number" },
    { id: "input-stat3-lbl", key: "mission.stat3Text" },
    // Pricing headers
    { id: "input-pricing-title", key: "pricing.title" },
    { id: "input-pricing-subtitle", key: "pricing.subtitle" },
    { id: "input-pricing-monthly-lbl", key: "pricing.monthly" },
    { id: "input-pricing-yearly-lbl", key: "pricing.yearly" },
    { id: "input-pricing-trial-btn", key: "pricing.trialBtn" },
    // FAQ headers
    { id: "input-faq-title", key: "faq.title" },
    { id: "input-faq-subtitle", key: "faq.subtitle" }
  ];

  inputs.forEach(item => {
    const element = document.getElementById(item.id);
    if (!element) return;

    element.addEventListener("input", (e) => {
      const editLang = document.getElementById("edit-lang-select").value;
      const value = e.target.value;

      if (item.type === "global") {
        siteConfig[item.key] = value;
      } else {
        // Nested path e.g. "hero.title"
        const [section, subkey] = item.key.split(".");
        siteConfig[editLang][section][subkey] = value;
      }

      // 1. Live preview: in-memory state updated
      
      // 2. Hydrate only if editing matches display language
      if (editLang === activeLang) {
        hydrateDOM();
      }

      // If YouTube ID edited, reload player if active
      if (item.key === "youtubeId" && ytPlayer) {
        try {
          ytPlayer.destroy();
          loadYoutubeVideo();
        } catch (_) {}
      }
    });
  });
}

/**
 * Handles price updates for individual plans side-by-side in admin pricing tab.
 */
function savePlanPriceEdits(e) {
  const editLang = document.getElementById("edit-lang-select").value;
  const index = parseInt(e.target.getAttribute("data-index"));
  const val = parseInt(e.target.value) || 0;

  if (e.target.classList.contains("plan-price-monthly-input")) {
    siteConfig[editLang].pricing.plans[index].priceMonthly = val;
  } else {
    siteConfig[editLang].pricing.plans[index].priceYearly = val;
  }

  // Live re-render (in-memory)
  if (editLang === activeLang) {
    hydrateDOM();
  }
}

/**
 * Handles FAQ Q&A updates in admin FAQ tab.
 */
function saveFaqEdits(e) {
  const editLang = document.getElementById("edit-lang-select").value;
  const index = parseInt(e.target.getAttribute("data-index"));
  const val = e.target.value;

  if (e.target.classList.contains("faq-q-input")) {
    siteConfig[editLang].faq.items[index].q = val;
  } else {
    siteConfig[editLang].faq.items[index].a = val;
  }

  // Live re-render (in-memory)
  if (editLang === activeLang) {
    hydrateDOM();
  }
}

/**
 * Triggers browser download of updated config.json so the owner can push it to GitHub Pages.
 */
function downloadConfiguration() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(siteConfig, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "config.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

/**
 * Clears overrides in localStorage and reloads defaults.
 */
function resetConfigurationToDefaults() {
  if (confirm(activeLang === "en" 
    ? "Are you sure you want to reset all configurations to file defaults? Unsaved changes will be lost." 
    : "Tem certeza de que deseja restaurar as configurações padrão de fábrica? As alterações não publicadas serão perdidas.")) {
    
    localStorage.removeItem("gestomni_landing_config");
    window.location.reload();
  }
}

/**
 * Saves active configurations in memory to browser localStorage.
 * Displays a beautiful visual toast for confirmation.
 */
function saveConfigurationLocally() {
  try {
    localStorage.setItem("gestomni_landing_config", JSON.stringify(siteConfig));
    
    // Play visual toast
    const toast = document.getElementById("admin-save-toast");
    const toastText = document.getElementById("admin-toast-text");
    
    if (toast && toastText) {
      toastText.textContent = activeLang === "pt" 
        ? "Alterações salvas com sucesso no navegador! Para publicar online, baixe o config.json." 
        : "Changes saved successfully in browser! To publish, download config.json.";
        
      toast.style.display = "flex";
      
      // Flash save button green for immediate feedback
      const saveBtn = document.getElementById("admin-save-btn");
      if (saveBtn) {
        const originalBg = saveBtn.style.backgroundColor;
        saveBtn.style.backgroundColor = "hsl(142, 70%, 40%)";
        setTimeout(() => {
          saveBtn.style.backgroundColor = "";
        }, 1000);
      }

      // Hide toast after 3.5 seconds
      setTimeout(() => {
        toast.style.display = "none";
      }, 3500);
    }
  } catch (error) {
    console.error("Failed to save config to local storage", error);
    alert(activeLang === "pt" ? "Erro ao salvar alterações no navegador." : "Error saving changes to browser.");
  }
}
