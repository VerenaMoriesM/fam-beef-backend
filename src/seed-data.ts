export const SEED_PRODUCTS = [
  {
    name: "Frozen Beef Shank",
    category: "Fam Beef",
    weight: "500g",
    slug: "frozen-beef-shank",
    featured: true,
    overview: "Sourced from baladi beef cuts, our frozen shank offers tender, succulent meat perfect for braising, slow cooking, or simmering. Elevate your dishes with this versatile ingredient, adding depth and satisfaction to your culinary creations.",
    ingredients: ["Baladi Beef", "Starch", "Spices", "Onions", "Vegetables"],
    checkpoints: [
      "No artificial ingredients",
      "No antibiotics",
      "No preservatives",
      "Sustainable source"
    ],
    storage: "Frozen (-18°C to -12°C)",
    accordions: [
      {
        title: "Cut Size",
        content: "Expertly cut into uniform bite-sized pieces for consistent cooking."
      },
      {
        title: "Nutrition Facts",
        subtitle: "Serving Size: 100 g",
        content: "Calories: 250, Protein: 18g, Fat: 20g, Carbohydrates: 2g."
      }
    ]
  },
  {
    name: "Frozen Beef Sausage",
    category: "Fam Beef",
    weight: "500g",
    slug: "frozen-beef-sausage",
    featured: true,
    overview: "Our signature oriental beef sausage is crafted from premium baladi beef and a secret blend of traditional spices. Perfect for grilling, pan-frying, or adding to your favorite pasta dishes.",
    ingredients: ["Baladi Beef", "Natural Sheep Casing", "Secret Spice Blend", "Garlic", "Salt"],
    checkpoints: [
      "100% Baladi Beef",
      "No fillers",
      "Traditional recipe",
      "Halal Certified"
    ],
    storage: "Frozen (-18°C to -12°C)",
    accordions: [
      {
        title: "Cooking Method",
        content: "For best results, grill for 10-12 minutes or pan-fry with a touch of oil until browned and cooked through."
      },
      {
        title: "Nutrition Facts",
        subtitle: "Serving Size: 100 g",
        content: "Calories: 280, Protein: 16g, Fat: 22g, Carbohydrates: 1g."
      }
    ]
  },
  {
    name: "Barbeque Kofta",
    category: "Fam Beef",
    weight: "500g",
    slug: "barbeque-kofta",
    featured: true,
    overview: "Experience the authentic taste of Egyptian street food at home. Our Barbeque Kofta is pre-seasoned and shaped, ready to be grilled for that perfect smoky flavor and tender texture.",
    ingredients: ["Minced Baladi Beef", "Parsley", "Onion", "Special Kofta Spices", "Salt"],
    checkpoints: [
      "Grill Ready",
      "High Protein",
      "No artificial colors",
      "Freshly Frozen"
    ],
    storage: "Frozen (-18°C to -12°C)",
    accordions: [
      {
        title: "Tips for Grilling",
        content: "Use charcoal for the most authentic flavor. Do not overcook to maintain juiciness."
      },
      {
        title: "Nutrition Facts",
        subtitle: "Serving Size: 100 g",
        content: "Calories: 240, Protein: 19g, Fat: 18g, Carbohydrates: 3g."
      }
    ]
  },
  {
    name: "Minced Meat Lean",
    category: "Fam Beef",
    weight: "500g",
    slug: "minced-meat-lean",
    featured: true,
    overview: "Our lean minced meat is selected from the finest beef cuts with minimal fat content. It's the perfect healthy base for bolognese, stuffed vegetables, or homemade healthy burgers.",
    ingredients: ["90% Lean Baladi Beef", "10% Fat"],
    checkpoints: [
      "Low Fat",
      "Extra Lean",
      "Versatile Use",
      "No Additives"
    ],
    storage: "Frozen (-18°C to -12°C)",
    accordions: [
      {
        title: "Usage Ideas",
        content: "Great for keto and low-fat diets. Use in any recipe calling for ground beef."
      },
      {
        title: "Nutrition Facts",
        subtitle: "Serving Size: 100 g",
        content: "Calories: 190, Protein: 22g, Fat: 10g, Carbohydrates: 0g."
      }
    ]
  },
  {
    name: "Beef Burger",
    category: "Fam Beef",
    weight: "500g",
    slug: "beef-burger",
    featured: true,
    overview: "Thick, juicy, and full of flavor. Our beef burgers are made from 100% baladi beef with just the right amount of seasoning to let the meat quality shine through.",
    ingredients: ["Baladi Beef", "Beef Fat", "Black Pepper", "Sea Salt", "Natural Flavors"],
    checkpoints: [
      "Extra Thick",
      "Juicy Texture",
      "Perfect for Grilling",
      "No Preservatives"
    ],
    storage: "Frozen (-18°C to -12°C)",
    accordions: [
      {
        title: "Burger Building",
        content: "Best served on a toasted brioche bun with fresh lettuce, tomato, and your favorite sauce."
      },
      {
        title: "Nutrition Facts",
        subtitle: "Serving Size: 1 burger (approx 125g)",
        content: "Calories: 310, Protein: 24g, Fat: 22g, Carbohydrates: 1g."
      }
    ]
  },
];

export const SEED_BRANDS = [
  {
    name: "FAM Calf",
    subtitle: "Early Care & Raising",
    description: "FAM Calf focuses on the earliest and most critical stage raising calves in a controlled, healthy environment. With close attention to nutrition, monitoring, and welfare, we ensure strong development from day one.",
  },
  {
    name: "Al Aela",
    subtitle: "Growth & Livestock Farming",
    description: "At Al Aela farms, livestock are raised to maturity under structured farming practices. With a focus on strength, health, and consistency, this stage prepares the animals for high-quality beef production.",
  },
];

export const SEED_PROCESS_STEPS = [
  {
    num: "01",
    title: "Calf Raising",
    shortTitle: "Calf Raising",
    badge: "Early Stage",
    description: "Born on open pastures, our calves develop naturally under expert supervision — free-range from their very first days.",
    lead: "Our calves are raised on expansive, certified organic pastures with access to natural grasslands year-round. Each animal is individually monitored by our veterinary team to ensure optimal growth and welfare from birth.",
    angle: 210,
    icon: "🐄",
    details: [
      { label: "Growth Period", value: "14–18 months" },
      { label: "Pasture Area", value: "2,400 hectares" },
      { label: "Welfare Standard", value: "AAA Certified" },
      { label: "Feed Type", value: "100% Natural Grass" },
    ],
    standards: [
      "Free-Range Certified",
      "Antibiotic-Free",
      "Hormone-Free",
      "Organic Pasture",
      "Veterinary Supervised",
    ],
  },
  {
    num: "02",
    title: "Livestock Care",
    shortTitle: "Livestock Care",
    badge: "Growth Phase",
    description: "Expert handlers provide daily welfare assessments, nutrition management, and stress-free environments that produce superior quality.",
    lead: "Our livestock welfare program is built on decades of research and tradition. Animals thrive in stress-free environments with carefully balanced nutrition plans tailored to each breed and developmental stage.",
    angle: 330,
    icon: "🌿",
    details: [
      { label: "Daily Checks", value: "3× per animal" },
      { label: "Nutrition Plans", value: "Breed-specific" },
      { label: "Team Size", value: "140 specialists" },
      { label: "Welfare Score", value: "99.4 / 100" },
    ],
    standards: [
      "Five Freedoms Compliant",
      "Stress-Free Protocol",
      "Water Quality Monitored",
      "Nutritionist Approved",
      "ISO 22000",
    ],
  },
];

export const SEED_TESTIMONIALS = [
  {
    quote: "Their full-cycle control means we never worry about sourcing. It's reliable, organic, and honest.",
    author: "Ahmed Mansour",
    title: "Chef | Butcher Burgers Restaurant",
  },
  {
    quote: "The consistency and quality of their beef has transformed our menu. We trust Fam Beef completely.",
    author: "Layla Mansour",
    title: "Retail Chain Manager | Breadfast",
  },
];

export const SEED_FAQS = [
  {
    question: "How is your beef certified?",
    answer: "Our beef is certified by the highest local and international standards for food safety and quality, ensuring premium results every time.",
    category: "Retailers",
  },
  {
    question: "What makes Baladi beef different?",
    answer: "Baladi cattle are native to Egypt and adapted to our climate and feed. They produce beef with distinct flavor and marbling that reflects our organic farming methods.",
    category: "Agriculture",
  },
  {
    question: "Can you handle large orders?",
    answer: "Yes, we handle orders of all sizes, from individual packages to bulk supply for businesses and events.",
    category: "Partnership",
  },
  {
    question: "Is the beef fresh or frozen?",
    answer: "We offer both fresh and aged beef depending on your requirements and the specific cut.",
    category: "Retailers",
  },
  {
    question: "How do you ensure animal welfare?",
    answer: "We follow strict organic farming practices and ensure our cattle are raised in stress-free environments with natural grazing.",
    category: "Farm",
  },
  {
    question: "Do you export internationally?",
    answer: "Currently, we focus on the local Egyptian market to ensure the highest quality and freshness, but we are exploring partnership opportunities.",
    category: "Partnership",
  }
];

export const SEED_PARTNERS = [
  { name: "Daltex" },
  { name: "Döhler" },
  { name: "Kamena" },
  { name: "Mafaza" },
];

export const SEED_RECIPES = [
  {
    title: "Cairo-Style caramelized glazed beef strips",
    slug: "cairo-beef-strips",
    time: "15 Mins Cooking",
    overview: "Experience the authentic taste of Cairo street food with our signature caramelized beef strips. This recipe highlights the natural richness of baladi beef, enhanced by a sweet and savory glaze that's perfect for any weeknight dinner.",
    ingredientsSections: [
      {
        title: "Main Ingredients",
        items: ["500g Fam Beef Strips", "2 tbsp Brown Sugar", "3 tbsp Soy Sauce"]
      },
      {
        title: "Seasoning",
        items: ["Ginger Minced", "Garlic Minced", "Sesame Oil"]
      }
    ],
    method: [
      {
        step: "1",
        title: "Prep the Beef",
        description: "Pat the beef strips dry with a paper towel. This ensures a perfect sear and maximum flavor absorption."
      },
      {
        step: "2",
        title: "Create the Glaze",
        description: "In a small bowl, whisk together the sugar, soy sauce, ginger, and garlic until the sugar is dissolved."
      },
      {
        step: "3",
        title: "Cook & Glaze",
        description: "Heat sesame oil in a large skillet. Add beef in a single layer and sear. Pour in the glaze and toss until glossy."
      }
    ]
  },
  {
    title: "Creamy garlic beef pasta with meat chunks",
    slug: "beef-pasta",
    time: "20 Mins Cooking",
    overview: "A luxurious and comforting meal that combines tender beef chunks with a velvety garlic cream sauce. Perfect for family gatherings or a cozy night in.",
    ingredientsSections: [
      {
        title: "The Base",
        items: ["500g Fam Beef Chunks", "400g Fettuccine Pasta"]
      },
      {
        title: "Sauce & Garnish",
        items: ["2 cups Heavy Cream", "1 cup Parmesan Cheese", "Fresh Parsley"]
      }
    ],
    method: [
      {
        step: "1",
        title: "Boil Pasta",
        description: "Cook the fettuccine in a large pot of salted water until al dente."
      },
      {
        step: "2",
        title: "Sear Meat",
        description: "Brown the beef chunks on all sides in a hot pan. Remove and rest."
      },
      {
        step: "3",
        title: "Simmer Sauce",
        description: "Sauté garlic, add cream, and simmer. Stir in parmesan and toss everything together."
      }
    ]
  },
];

export const SEED_MEDIA_POSTS = [
  {
    title: "FAM Beef Expands to New Regions in Delta",
    description: "Our commitment to quality continues as we partner with more local farms.",
    badge: "News",
    date: "2024-05-10",
    slug: "expansion",
    category: "News",
    content: [
      {
        title: "Strategic Expansion",
        text: "Fam Beef has announced the expansion of its organic production capacity, marking an important step in meeting growing market demand."
      },
      {
        title: "Quality Control",
        text: "The expansion reinforces Fam Beef's fully in-house model, covering agriculture, livestock care, processing, and packaging."
      }
    ]
  },
  {
    title: "Farm Tour And Tasting Event This Spring",
    description: "Visit our farms and taste the difference firsthand with us.",
    badge: "Event",
    date: "2026-02-07",
    slug: "tour",
    category: "Events",
    content: [
      {
        title: "Join Us This Spring",
        text: "We are opening our doors for a special farm tour and tasting event. Experience the beauty of our pastures and the quality of our Baladi beef."
      }
    ]
  },
  {
    title: "Fam Beef Expands Distribution Network",
    description: "New partnerships bring organic beef to more retailers nationwide.",
    badge: "Blog",
    date: "2026-02-07",
    slug: "organic",
    category: "Blog",
    content: [
      {
        title: "New Retail Partners",
        text: "We are excited to announce new partnerships with leading retailers across Egypt, making it easier for you to find our premium products."
      }
    ]
  }
];

export const SEED_MEDIA_CATEGORIES = [
  { name: "News" },
  { name: "Blog" },
  { name: "Events" }
];

export const SEED_MEDIA_PAGE = {
  breadcrumb: "Media Center",
  title: "Media Center",
  description: "Stay updated with the latest news, events, and stories from FAM Beef.",
  seo: {
    metaTitle: "Media Center | FAM Beef",
    metaDescription: "Latest news, blog posts, and events from FAM Beef. Follow our journey in sustainable livestock farming."
  }
};

export const SEED_HOME_PAGE = {
  hero: {
    badge: "From Trusted Local Farms Across Egypt",
    heading: "Freshly Frozen",
    headingBold: "Egyptian Baladi Meat",
    description: "100% home grown beef from trusted local farms across Egypt. From seed to beef.",
    ctaLabel: "Let's Talk",
    ctaHref: "/contact",
  },
  overview: {
    title: "The Baladi Meat Excellence",
    description: "Our commitment to quality starts with our animals.",
    subDescription: "Responsibly raised, expertly prepared.",
    ctaLabel: "Know More",
    ctaHref: "/about",
  },
  farmSection: {
    hideCtaCard: false,
    hideKnowMore: true,
    isFarmsPage: false,
    ctaText: "Our farms are where everything begins — from feed cultivation to livestock care. Built on responsibility and full-cycle control, they define the quality, consistency, and trust behind every product we deliver.",
    ctaButtonLabel: "Explore FAM Farms",
    ctaButtonHref: "/farms",
    knowMoreLabel: "Know More",
    knowMoreHref: "/farms",
  },
  featuredProducts: {
    badge: "100% Baladi Meat",
    title: "Our Featured Products",
    description: "Handpicked cuts from our premium beef, ready for your kitchen.",
    ctaLabel: "View All Products",
    ctaHref: "/products",
  },
  process: {
    badge: "Our Integrated Process",
    title: "From Raising To Final Cut",
    description: "We control every step of the journey.",
  },
  partners: {
    badge: "Our Partners",
    title: "Trusted By The Best",
  },
  recipes: {
    badge: "Our Recipes",
    title: "Inspired By Our Meat",
    ctaLabel: "Explore All Recipes",
    ctaHref: "/at-home/recipes",
  },
  media: {
    badge: "Latest Media",
    title: "News & Updates",
  },
  testimonials: {
    badge: "Real Voices. Real Partnerships.",
    title: "From Our Partners",
  },
  faq: {
    badge: "Have a Question?",
    title: "Frequently Asked Questions",
    ctaLabel: "Explore All FAQs",
    ctaHref: "/at-home/faq",
  },
  cta: {
    title: "Ready To Partner",
    description: "Let's talk about bringing premium, full-cycle beef to your business.",
    ctaLabel: "Let's Talk",
    ctaHref: "/contact",
  },
};

export const SEED_FAQ_PAGE = {
  breadcrumb: "FAQs",
  title: "Frequently Asked Questions",
  description: "Details about quality, sourcing, and standards.",
  seo: {
    metaTitle: "Frequently Asked Questions | FAM Beef",
    metaDescription: "Find answers to common questions about FAM Beef's sourcing, quality standards, and organic farming practices."
  }
};

export const SEED_RECIPE_PAGE = {
  breadcrumb: "Recipes",
  title: "Our Recipes",
  description: "Discover a collection of delicious recipes featuring our premium baladi beef.",
  seo: {
    metaTitle: "Delicious Beef Recipes | FAM Beef",
    metaDescription: "Explore our collection of authentic and modern recipes using 100% Baladi beef. From traditional favorites to contemporary dishes."
  }
};

export const SEED_PRODUCT_PAGE = {
  badge: "Our Products",
  title: "Our Beef Selection",
  description: "100% Baladi beef cuts sourced from our farms, processed with precision and care.",
  seo: {
    metaTitle: "Premium Baladi Beef Selection | FAM Beef",
    metaDescription: "Shop our premium selection of 100% Baladi beef cuts. From frozen shanks to signature sausages, sourced directly from our farms."
  }
};

export const SEED_ABOUT_PAGE = {
  sections: [
    {
      __component: "sections.about-hero",
      badge: "About Fam Beef",
      title: "Built On Trust",
      description: "We are a full-cycle meat producer controlling agriculture, animal care, processing, and packaging under one roof. Our commitment to organic Baladi beef means every cut carries the integrity of our family's vision and decades of farming knowledge.",
      cta_label: "Let's Talk",
      cta_href: "/contact"
    },
    {
      __component: "sections.story-section",
      title: "Story Behind Fam Beef",
      description: "Fam Beef was born from a simple conviction true quality begins at the source. What started as a commitment to responsible farming evolved into a fully integrated operation built on transparency, care, and long-term vision.\n\nBy controlling every step from soil and feed to livestock and final packaging, Fam Beef was created to deliver premium Baladi beef with consistency, integrity, and trust at its core.",
      stats: [
        { label: "Existing Products", value: "+30" },
        { label: "Calf Raised Annually", value: "+50K" },
        { label: "Experienced Team Members", value: "+200" }
      ]
    },
    {
      __component: "sections.history-section",
      badge: "Our History",
      title: "Through The Years",
      items: [
        {
          year: "2015",
          title: "Our Beginning",
          description: "Our roots run deep in the soil. What started as a small agricultural operation grew from a simple belief: good beef begins with good land and better care."
        },
        {
          year: "2017",
          title: "Expanding Our Farms",
          description: "With growing confidence and demand, we expanded our agricultural footprint, investing in better crop management and structured livestock environments."
        }
      ]
    },
    {
      __component: "sections.mission-vision",
      mission_title: "Our Mission",
      mission_text: "To Produce 100% Baladi Meat Through A Fully Controlled, In-House Process That Delivers Consistent Quality And Long-Term Value To Our Partners.",
      vision_title: "Our Vision",
      vision_text: "To Set A New Standard For Baladi Meat Through Quality, Transparency, And Full-Cycle Control Becoming A Trusted Benchmark Locally And Regionally."
    },
    {
      __component: "sections.partners-wrapper",
      badge: "Trusted Suppliers",
      title: "Partners In Success"
    },
    {
      __component: "sections.process-wrapper",
      badge: "Our Integrated Process",
      title: "From Raising To Final Cut",
      description: "We control every step of the journey."
    },
    {
      __component: "sections.values-section",
      badge: "What Guides Us",
      title: "Values That Shape Everything We Do",
      values: [
        { type: "card", title: "Full-Cycle Responsibility" },
        { type: "card", title: "Quality Without Compromise" },
        { type: "image" },
        { type: "image" },
        { type: "card", title: "Sustainable Practices" },
        { type: "card", title: "Built On The Family Values" }
      ]
    },
    {
      __component: "sections.farm-wrapper",
      hideCtaCard: false,
      hideKnowMore: false,
      isFarmsPage: false
    },
    {
      __component: "sections.cta-section",
      badge: "Get In Touch",
      title: "Ready To Partner",
      description: "Let's talk about bringing premium, full-cycle beef to your business.",
      cta_label: "Let's Talk",
      cta_href: "/contact"
    }
  ],
  seo: {
    metaTitle: "About Us | FAM Beef",
    metaDescription: "Learn more about FAM Beef's history, mission, and our commitment to providing the highest quality Baladi beef."
  }
};

export const SEED_CAREER_PAGE = {
  hero: {
    breadcrumb: "Careers",
    title: "Join Our Family",
    description:
      "We're looking for people who care about quality, integrity, and doing the work right.",
  },
  feature: {
    badge: "Why Work With Fam Beef",
    title: "Purpose-Driven Work",
    description:
      "Be part of a team that takes pride in where food comes from. At FAM Beef, every role contributes to a fully integrated process — from raising livestock to delivering quality products. We value ownership, care, and doing things the right way.",
    imagePosition: "right",
    buttonLabel: "Apply Now",
    buttonHref: "#apply",
    backgroundColor: "bg-[#F3F3F5]",
  },
  howWeWork: {
    badge: "Life At Fam Beef",
    title: "How We Work Together",
    cards: [
      {
        badge: "Collaboration",
        title: "We Work As One Unified Team",
      },
      {
        badge: "Learning",
        title: "We Teach What We Know",
      },
      {
        badge: "Community",
        title: "You're Part Of Something Larger",
      },
    ],
  },
  apply: {
    badge: "Join Fam Beef",
    title: "Apply Now",
  },
  seo: {
    metaTitle: "Careers | FAM Beef",
    metaDescription:
      "Join the FAM Beef family. We're looking for people who care about quality, integrity, and doing the work right. Explore open roles today.",
  },
};

export const SEED_FARM_PAGE = {
  hero: {
    title: "Where Quality Is Raised From The Start",
    description:
      "We raise livestock in controlled environments with responsible care ensuring quality starts long before processing.",
    ctaLabel: "Let's Talk",
    ctaHref: "/contact",
  },
  calf: {
    badge: "FAM Calf",
    title: "Strong Starts Make Better Outcomes",
    description:
      "Calves are raised in clean, monitored spaces designed to support comfort, safety, and stable growth.",
    backgroundColor: "bg-white",
  },
  environment: {
    badge: "About The Farm",
    title: "Controlled Environment",
    description:
      "Our feeding programs are built on consistency and care. We know the source of every ingredient, monitor intake closely, and adjust for each animal's needs as they grow.",
    features: [
      "Balanced feed from our trusted crops",
      "Daily supervision of their health",
      "Quality inputs, quality outcomes",
    ],
  },
  strength: {
    subtitle: "Al Aela",
    title: "Beef Production, Built On Strength",
    bodyText:
      "At Al Aela farms, buffalo and livestock are raised to maturity under structured conditions for beef production, ensuring strength, health, and consistent quality.",
    stampLabel: "Proven Standards",
  },
  livestock: {
    badge: "Raising Livestock to Full Maturity",
    title: "100% Freshly Frozen Beef Production",
    description:
      "Al Aela farms specialize in raising buffalo and livestock for beef production. Through controlled environments and consistent care, animals reach maturity under conditions that support reliable quality and performance.",
    backgroundColor: "bg-[#F3F3F5]",
  },
  cta: {
    badge: "Get In Touch",
    title: "Ready To Partner",
    description: "Let's talk about bringing premium, full-cycle beef to your business.",
    cta_label: "Let's Talk",
    cta_href: "/contact",
  },
  seo: {
    metaTitle: "FAM Farms | FAM Beef",
    metaDescription:
      "Visit FAM Farms — where quality Baladi beef starts. Controlled environments, responsible care, and full-cycle production from calf to final cut.",
  },
};

export const SEED_BRAND_PAGE = {
  hero: {
    breadcrumb: "Our Brands",
    title: "Our Brands",
    description: "From pasture to table, each brand carries the same commitment to quality and integrity.",
  },
  flagship: {
    title: "Fam Beef",
    description:
      "Our flagship line offers fresh, high-quality Baladi beef sourced exclusively from our own livestock. From steak and minced meat to kofta and specialty cuts, every product is processed in-house under strict quality standards to ensure consistency, traceability, and trusted performance.",
    buttonLabel: "Explore Products",
    buttonHref: "/products",
    backgroundColor: "bg-[#F3F3F5]",
  },
  features: [
    {
      badge: "Coming Soon",
      title: "Marinated Beef",
      description:
        "A selection of carefully chosen Baladi beef cuts, marinated with premium ingredients for rich flavor and effortless preparation. Professionally packaged and ready to cook, this range delivers convenience without compromising quality.",
      imagePosition: "left",
      backgroundColor: "bg-white",
    },
    {
      badge: "Coming Soon",
      title: "Deli Cold Cuts",
      description:
        "A premium range of cold cuts crafted from our own beef, carefully processed under controlled conditions to ensure consistent taste, texture, and quality. Each product is developed with attention to slicing precision, balanced seasoning, and professional packaging standards.",
      imagePosition: "right",
      backgroundColor: "bg-[#F3F3F5]",
    },
  ],
  cta: {
    badge: "Get In Touch",
    title: "Ready To Partner",
    description: "Let's talk about bringing premium, full-cycle beef to your business.",
    cta_label: "Let's Talk",
    cta_href: "/contact",
  },
  seo: {
    metaTitle: "Our Brands | FAM Beef",
    metaDescription:
      "Explore FAM Beef brand lines — from fresh Baladi beef to marinated cuts and deli cold cuts. Each brand built on full-cycle quality and trust.",
  },
};

export const SEED_NAVBAR_SETTING = {
  ctaLabel: "Let's Talk",
  ctaHref: "/contact",
  navItems: [
    { label: "About us", href: "/about" },
    { label: "FAM Farms", href: "/farms" },
    { label: "Our Brands", href: "/brands" },
    { label: "Products", href: "/products" },
    { label: "Our Process", href: "/process" },
    {
      label: "FAM at Home",
      href: "/at-home",
      children: [
        { label: "Recipes", href: "/at-home/recipes" },
        { label: "FAQs", href: "/at-home/faq" },
        { label: "Media Center", href: "/at-home/media" },
      ],
    },
    { label: "Careers", href: "/careers" },
  ],
};

export const SEED_FOOTER_SETTING = {
  newsletterTitle: "Join Our Newsletter",
  newsletterDescription: "Stay informed with the latest news and insights",
  contactEmail: "info@fambeef.com",
  contactPhone: "+201001234567",
  socialLinks: {
    facebook: "https://facebook.com/fambeef",
    instagram: "https://instagram.com/fambeef",
    twitter: "https://x.com/fambeef",
    linkedin: "https://linkedin.com/company/fambeef",
    youtube: "https://youtube.com/@fambeef",
  },
  linkColumns: [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About us", href: "/about" },
        { label: "FAM Farms", href: "/farms" },
        { label: "Our process", href: "/process" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Our Brands", href: "/brands" },
        { label: "Products", href: "/products" },
        { label: "Recipes", href: "/recipes" },
        { label: "Media center", href: "/media" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "FAQs", href: "/faqs" },
      ],
    },
  ],
  companyName: "Fam Beef",
};

export const SEED_TERMS_PAGE = {
  badge: "Legal",
  title: "Terms of",
  titleHighlight: "Service",
  description:
    "Please review our terms of service to understand the agreement between you and Fam Beef regarding the use of our services.",
  sections: [
    {
      title: "Agreement to Terms",
      body: "By accessing or using Fam Beef's services, you agree to be bound by these Terms of Service. These terms apply to all visitors, users, and others who access or use the Service.",
    },
    {
      title: "Intellectual Property",
      body: "The Service and its original content, features, and functionality are and will remain the exclusive property of Fam Beef and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Fam Beef.",
    },
    {
      title: "Termination",
      body: "We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
    },
    {
      title: "Governing Law",
      body: "These Terms shall be governed and construed in accordance with the laws of Egypt, without regard to its conflict of law provisions.",
    },
  ],
  seo: {
    metaTitle: "Terms of Service | FAM Beef",
    metaDescription:
      "Review the terms of service that govern your use of FAM Beef's website and services.",
  },
};

export const SEED_PRIVACY_PAGE = {
  badge: "Legal",
  title: "Privacy",
  titleHighlight: "Policy",
  description:
    "Your trust is our priority. This policy explains how we protect your personal data and respect your privacy throughout your journey with Fam Beef.",
  sections: [
    {
      title: "Introduction",
      body: "At Fam Beef, we are committed to protecting the privacy of our customers and visitors. This policy describes how we collect, use, and safeguard your information when you interact with our website, products, and services.",
    },
    {
      title: "Information Collection",
      body: "We collect information that helps us provide a better experience for you. This includes direct information you provide when registering, ordering, or contacting us (name, email, phone, address), as well as usage data such as IP address, browser type, and page interactions.",
    },
    {
      title: "Data Security",
      body: "We implement industry-standard security measures to ensure the safety of your personal information. Your data is stored on secure servers and access is limited to authorized personnel only.",
    },
    {
      title: "Your Rights",
      body: "You have the right to access, correct, or delete your personal information at any time. If you wish to exercise these rights, please reach out to our privacy team.",
    },
  ],
  seo: {
    metaTitle: "Privacy Policy | FAM Beef",
    metaDescription:
      "Learn how FAM Beef collects, uses, and protects your personal data.",
  },
};

export const SEED_CONTACT_PAGE = {
  hero: {
    badge: "Contact Us",
    title: "Send Your Inquiry",
  },
  info: {
    title: "Our Contacts",
    email: "info@fambeef.com",
    phone: "+201001234567",
    address: "6th of October City, Giza, Egypt",
  },
  map: {
    googleMapsUrl: "https://maps.google.com/?q=6th+of+October+City,+Giza,+Egypt",
  },
  seo: {
    metaTitle: "Contact Us | FAM Beef",
    metaDescription:
      "Get in touch with FAM Beef. Send us your B2B inquiries, partnership requests, or customer support questions.",
  },
};
