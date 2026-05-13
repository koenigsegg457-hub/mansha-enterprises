"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Sparkles,
  Heart,
  Leaf,
  Star,
  Gift,
  Menu,
  X,
  Search,
  MessageCircle,
  ShoppingCart,
  Minus,
  Plus,
  Trash2,
} from "lucide-react";

const products = [
  {
    name: "Neem Tulsi Soap",
    category: "Soaps",
    benefit: "Deep Cleansing & Purifying",
    description:
      "A refreshing handmade soap made with neem leaves, tulsi leaves, aloe vera gel, vitamin E, coconut oil, and essential oils.",
    ingredients:
      "Neem leaves, tulsi leaves, aloe vera gel, vitamin E, coconut oil, essential oils",
    price: 100,
    priceLabel: "₹100/- per item",
    image: "/Neem Tulsi Soap.jpeg",
    bestFor: "Daily freshness, oily skin feel, and a clean natural bathing routine.",
    accent: "#4a7c59",
    bg: "#edf7f0",
  },
  {
    name: "Rice Potato Soap",
    category: "Soaps",
    benefit: "Brightening & Smooth Skin",
    description:
      "A gentle handmade soap prepared with rice powder, potato juice, aloe vera, coconut oil, vitamin E, and essential oil.",
    ingredients:
      "Rice powder, potato juice, aloe vera, coconut oil, vitamin E, essential oil",
    price: 100,
    priceLabel: "₹100/- per item",
    image: "/Rice Potato Soap.jpeg",
    bestFor: "Smooth skin feel, gentle care, and everyday glow-focused bathing.",
    accent: "#8b7355",
    bg: "#fdf6ec",
  },
  {
    name: "Papaya Soap",
    category: "Soaps",
    benefit: "Glow & Hydration",
    description:
      "A bright handmade soap made with papaya juice, rice powder, aloe vera, glycerine, coconut oil, and essential oil.",
    ingredients:
      "Papaya juice, rice powder, aloe vera, glycerine, coconut oil, essential oil",
    price: 100,
    priceLabel: "₹100/- per item",
    image: "/Papaya Soap.jpeg",
    bestFor: "A fresh glow feel, gentle hydration, and soft daily skincare.",
    accent: "#c4692b",
    bg: "#fef3e8",
  },
  {
    name: "Haldi Chandan Soap",
    category: "Soaps",
    benefit: "Tan Care & Radiance",
    description:
      "A traditional handmade soap crafted with kasturi haldi, chandan powder, multani mitti, aloe vera, vitamin E, glycerine, coconut oil, and essential oil.",
    ingredients:
      "Kasturi haldi, chandan powder, multani mitti, aloe vera, vitamin E, glycerine, coconut oil, essential oil",
    price: 100,
    priceLabel: "₹100/- per item",
    image: "/Haldi Chandan Soap.jpeg",
    bestFor:
      "Traditional care, natural radiance, and a refreshing herbal bathing experience.",
    accent: "#b8861b",
    bg: "#fef9e7",
  },
  {
    name: "Coffee Soap",
    category: "Soaps",
    benefit: "Exfoliating & Refreshing",
    description:
      "A rich handmade soap made with coffee powder, rice powder, aloe vera, glycerine, coconut oil, and essential oil.",
    ingredients:
      "Coffee powder, rice powder, aloe vera, glycerine, coconut oil, essential oil",
    price: 100,
    priceLabel: "₹100/- per item",
    image: "/Coffee Soap.jpeg",
    bestFor:
      "Refreshing bath feel, mild exfoliating texture, and a rich coffee aroma.",
    accent: "#5c3d2e",
    bg: "#f5ede8",
  },
];

type Product = (typeof products)[number];
type CartItem = Product & { quantity: number };

const offerings = [
  {
    title: "Handmade Soaps",
    icon: Leaf,
    text: "Natural, gentle soaps made in small batches for everyday care.",
    color: "#4a7c59",
    bg: "#edf7f0",
  },
  {
    title: "Gifting",
    icon: Gift,
    text: "Thoughtful handmade products for festivals, birthdays, and small celebrations.",
    color: "#b8861b",
    bg: "#fef9e7",
  },
  {
    title: "Custom Orders",
    icon: Sparkles,
    text: "Personalized combinations can be prepared based on availability.",
    color: "#8b5e3c",
    bg: "#f7eadb",
  },
];

const testimonials = [
  {
    text: "Loved the soaps. They look beautiful and feel very gentle.",
    name: "Priya",
    stars: 5,
  },
  {
    text: "Perfect for small gifts. Simple, elegant, and handmade with care.",
    name: "Ritu",
    stars: 5,
  },
  {
    text: "The products feel fresh, natural, and thoughtfully made.",
    name: "Ananya",
    stars: 5,
  },
];

const WHATSAPP_NUMBER = "918130511871";

const createWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ManshaEnterprisesWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartMessage, setCartMessage] = useState("");
  const [cartBounce, setCartBounce] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.benefit} ${product.ingredients}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === product.name);

      if (existing) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });

    setCartMessage(`${product.name} has been added to your cart.`);
    setCartBounce(true);

    window.setTimeout(() => {
      setCartMessage("");
      setCartBounce(false);
    }, 2200);
  };

  const increaseQty = (name: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (name: string) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (name: string) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name));
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const getProductQuantity = (name: string) => {
  const item = cartItems.find((cartItem) => cartItem.name === name);
  return item ? item.quantity : 0;
};

  const cartWhatsAppMsg = () => {
    const lines = cartItems
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} - Qty: ${item.quantity} - ₹${
            item.price * item.quantity
          }`
      )
      .join("\n");

    return `Hi, I want to place an order from Mansha Enterprises.\n\nOrder Details:\n${lines}\n\nTotal Amount: ₹${cartTotal}\n\nPlease confirm availability and delivery details.`;
  };

  const navLinks = [
    { label: "Products", href: "#products" },
    { label: "What We Offer", href: "#offerings" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div
      className="min-h-dvh overflow-x-hidden scroll-smooth bg-[#fffaf3] text-[#3f2e24]"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(255,250,243,0.92)"
            : "rgba(255,250,243,0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid #eadfce"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 24px rgba(63,46,36,0.07)" : "none",
        }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#" className="group flex items-center gap-3">
            <img
              src="/a_logo_for_mansha_enterprises_is_centered_within_a.png"
              alt="Mansha Enterprises logo"
              className="h-11 w-11 rounded-full object-cover shadow-sm ring-2 ring-[#d8b777] transition group-hover:scale-105"
            />
            <div>
              <p className="text-lg font-bold leading-tight tracking-wide sm:text-xl">
                Mansha Enterprises
              </p>
              <p className="text-xs tracking-wide text-[#a08060]">
                Handmade with love
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[#5a4030] transition hover:text-[#8b5e3c] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#8b5e3c] after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 rounded-full border border-[#e0cdb4] bg-white px-4 py-2 text-sm font-semibold text-[#8b5e3c] shadow-sm transition hover:bg-[#f7eadb] hover:shadow-md"
              aria-label="Open cart"
            >
              <motion.div
                animate={cartBounce ? { scale: [1, 1.35, 0.9, 1.1, 1] } : {}}
                transition={{ duration: 0.45 }}
              >
                <ShoppingCart size={17} />
              </motion.div>

              <span className="hidden sm:inline">Cart</span>

              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#8b5e3c] text-[10px] font-bold text-white shadow"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            <a
              href={createWhatsAppLink(
                "Hi, I want to place an order from Mansha Enterprises."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-[#8b5e3c] px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:scale-105 hover:bg-[#70472b] hover:shadow-lg md:flex"
            >
              <MessageCircle size={15} />
              Order Now
            </a>

            <button
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f7eadb] text-[#8b5e3c] transition hover:bg-[#eadfce] md:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-[#3f2e24]/40 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="ml-auto flex h-screen w-[82%] max-w-sm flex-col bg-[#fffaf3] p-7 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/a_logo_for_mansha_enterprises_is_centered_within_a.png"
                    alt="Mansha Enterprises logo"
                    className="h-10 w-10 rounded-full ring-1 ring-[#d8b777]"
                  />
                  <p className="text-lg font-bold">Menu</p>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full bg-white p-2 shadow-sm"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-2 text-lg font-medium">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-2xl px-4 py-3.5 transition hover:bg-[#f7eadb] hover:text-[#8b5e3c]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setCartOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-[#8b5e3c] py-3.5 text-base font-bold text-[#8b5e3c]"
                >
                  <ShoppingCart size={18} />
                  View Cart {cartCount > 0 ? `(${cartCount})` : ""}
                </button>

                <a
                  href={createWhatsAppLink(
                    "Hi, I want to place an order from Mansha Enterprises."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#8b5e3c] py-3.5 text-base font-bold text-white"
                >
                  <MessageCircle size={18} />
                  Order on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-[#3f2e24]/40 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="ml-auto flex h-dvh w-full max-w-md flex-col bg-[#fffaf3] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-[#eadfce] px-6 py-5">
                <div className="flex items-center gap-3">
                  <ShoppingCart size={20} className="text-[#8b5e3c]" />
                  <h2 className="text-xl font-bold">Your Cart</h2>

                  {cartCount > 0 && (
                    <span className="rounded-full bg-[#8b5e3c] px-2.5 py-0.5 text-xs font-bold text-white">
                      {cartCount}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setCartOpen(false)}
                  className="rounded-full bg-white p-2 shadow-sm transition hover:bg-[#f7eadb]"
                  aria-label="Close cart"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4">
                {cartItems.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="mb-4 rounded-full bg-[#f7eadb] p-6">
                      <ShoppingBag size={36} className="text-[#c4a47e]" />
                    </div>

                    <p className="text-lg font-semibold text-[#5a4030]">
                      Your cart is empty
                    </p>

                    <p className="mt-2 text-sm text-[#a08060]">
                      Add your favourite handmade soaps to get started.
                    </p>

                    <button
                      onClick={() => setCartOpen(false)}
                      className="mt-6 rounded-full bg-[#8b5e3c] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#70472b]"
                    >
                      Browse Products
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.name}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 40 }}
                        className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 flex-shrink-0 rounded-xl bg-[#fffaf3] object-contain p-1"
                        />

                        <div className="min-w-0 flex-1">
                          <p className="truncate font-bold text-[#3f2e24]">
                            {item.name}
                          </p>
                          <p className="text-xs text-[#a08060]">
                            ₹{item.price} each
                          </p>
                          <p className="mt-0.5 text-sm font-semibold text-[#8b5e3c]">
                            ₹{item.price * item.quantity}
                          </p>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                          <button
                            onClick={() => removeItem(item.name)}
                            className="text-[#c4816a] transition hover:text-[#a0543a]"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 size={14} />
                          </button>

                          <div className="flex items-center gap-2 rounded-full bg-[#f7eadb] p-1">
                            <button
                              onClick={() => decreaseQty(item.name)}
                              className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#8b5e3c] shadow-sm transition hover:bg-[#eadfce]"
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              <Minus size={12} />
                            </button>

                            <span className="min-w-[20px] text-center text-sm font-bold">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() => increaseQty(item.name)}
                              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8b5e3c] text-white shadow-sm transition hover:bg-[#70472b]"
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="border-t border-[#eadfce] bg-white px-6 py-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-base text-[#6f5a49]">
                      Total ({cartCount} items)
                    </span>
                    <span className="text-2xl font-bold text-[#3f2e24]">
                      ₹{cartTotal}
                    </span>
                  </div>

                  <a
                    href={createWhatsAppLink(cartWhatsAppMsg())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#8b5e3c] py-4 text-base font-bold text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#70472b] hover:shadow-xl"
                  >
                    <MessageCircle size={18} />
                    Book Order on WhatsApp
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section className="relative overflow-hidden px-4 py-10 sm:px-5 sm:py-14 md:min-h-[calc(100dvh-68px)] md:py-0">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#f5d9b8] opacity-60 blur-[80px]" />
            <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#f4cfc3] opacity-50 blur-[70px]" />
            <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[#fce7c8] opacity-40 blur-[60px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:min-h-[calc(100dvh-100px)] md:grid-cols-2">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="flex flex-col"
            >
              <motion.div
                variants={fadeUp}
                className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#e8d5b8] bg-white/80 px-4 py-2 text-sm text-[#8b6840] shadow-sm backdrop-blur-sm"
              >
                <Heart size={14} className="text-[#b66b55]" fill="#b66b55" />
                Natural Handmade Skincare
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-3xl text-[2.15rem] font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.2rem]"
              >
                Handmade soaps crafted with{" "}
                <span className="italic text-[#8b5e3c]">
                  natural ingredients
                </span>{" "}
                and everyday care.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-base leading-8 text-[#7a5d4a] sm:text-lg"
              >
                Mansha Enterprises creates homemade soaps and handmade essentials
                with care, comfort, and a personal touch. Perfect for daily use,
                thoughtful gifting, and small celebrations.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                <a
                  href={createWhatsAppLink(
                    "Hi, I want to place an order from Mansha Enterprises."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-[#8b5e3c] px-7 py-4 text-base font-bold text-white shadow-lg transition hover:scale-105 hover:bg-[#70472b] hover:shadow-xl"
                >
                  <MessageCircle size={18} />
                  Order on WhatsApp
                </a>

                <a
                  href="#about"
                  className="flex items-center gap-2 rounded-full border-2 border-[#d8b777] px-7 py-4 text-base font-semibold text-[#8b5e3c] transition hover:bg-[#f7eadb]"
                >
                  Our Story
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex items-center gap-5"
              >
                <div className="flex -space-x-2">
                  {["#f7eadb", "#edf7f0", "#fef9e7"].map((color, index) => (
                    <div
                      key={color}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-sm font-bold shadow-sm"
                      style={{
                        background: color,
                        color: "#8b5e3c",
                      }}
                    >
                      {["P", "R", "A"][index]}
                    </div>
                  ))}
                </div>

                <div className="text-sm text-[#7a5d4a]">
                  <span className="font-bold text-[#8b5e3c]">
                    Happy Customers
                  </span>{" "}
                  loved our handmade soaps
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="relative flex justify-center"
            >
              <div className="relative mx-auto h-[300px] w-[300px] max-w-full sm:h-[380px] sm:w-[380px] lg:h-[480px] lg:w-[480px]">
                <div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-[#e8d5b8] opacity-60"
                  style={{ transform: "scale(1.08)" }}
                />
                <div
                  className="absolute inset-0 rounded-full border border-[#f5e8d0] opacity-40"
                  style={{ transform: "scale(1.18)" }}
                />

                <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#fffaf3] via-[#f9edd8] to-[#f4e0c4] shadow-2xl ring-1 ring-[#eadfce]">
                  <img
  src="/front photo.png"
  alt="Natural Handmade Soap"
  className="h-full w-full object-cover scale-122"
  style={{ objectPosition: "50% 40%" }}
/>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute -bottom-4 -left-8 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-[#eadfce] sm:-bottom-6 sm:-left-10 sm:p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-[#f7eadb] p-2.5">
                      <Star
                        size={18}
                        className="text-[#8b5e3c]"
                        fill="#8b5e3c"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#3f2e24]">
                        Handcrafted
                      </p>
                      <p className="text-xs text-[#a08060]">Made with care</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.5 }}
                  className="absolute -right-6 top-4 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-[#eadfce] sm:-right-10 sm:top-8 sm:p-4"

                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-[#edf7f0] p-2.5">
                      <Leaf size={18} className="text-[#4a7c59]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#3f2e24]">
                        100% Natural
                      </p>
                      <p className="text-xs text-[#a08060]">
                        No harsh chemicals
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="offerings" className="px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="mb-12 text-center"
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-bold uppercase tracking-[0.3em] text-[#8b5e3c]"
              >
                What We Offer
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-3 text-3xl font-bold sm:text-4xl"
              >
                Handmade care with a personal touch
              </motion.h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="grid gap-6 md:grid-cols-3"
            >
              {offerings.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div key={item.title} variants={fadeUp}>
                    <div className="group h-full rounded-3xl border border-[#eadfce] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <div
                        className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition group-hover:scale-110"
                        style={{
                          background: item.bg,
                          color: item.color,
                        }}
                      >
                        <Icon size={24} />
                      </div>

                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-3 leading-7 text-[#7a5d4a]">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section
          id="products"
          className="relative px-5 py-20"
          style={{
            background: "linear-gradient(180deg, #f7eadb 0%, #fdf4e8 100%)",
          }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8b5e3c]">
                  Products
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Handmade soaps collection
                </h2>
              </motion.div>

              <div className="relative w-full max-w-sm">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b09070]"
                  size={16}
                />

                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search by name, ingredient, benefit…"
                  className="w-full rounded-full border border-[#e0cdb4] bg-white/90 py-3.5 pl-11 pr-5 text-sm shadow-sm outline-none backdrop-blur-sm transition focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#e8d5b8]"
                />
              </div>
            </div>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                >
                  <div className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#f0e4d0] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className="relative flex h-56 items-center justify-center overflow-hidden bg-white p-2 text-left sm:h-64 md:h-[380px] lg:h-[420px] md:p-4"
                      style={{ background: product.bg }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain p-2 md:p-0 transition duration-500 group-hover:scale-105"
                      />

                      <div
                        className="absolute right-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
                        style={{
                          background: product.bg,
                          color: product.accent,
                          border: `1px solid ${product.accent}22`,
                        }}
                      >
                        {product.benefit}
                      </div>
                    </button>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-bold">{product.name}</h3>

                      <p className="mt-2 flex-1 text-sm leading-7 text-[#7a5d4a]">
                        {product.description}
                      </p>

                      <div
                        className="mt-4 rounded-2xl p-4"
                        style={{ background: product.bg }}
                      >
                        <p
                          className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em]"
                          style={{ color: product.accent }}
                        >
                          Ingredients
                        </p>

                        <p className="text-sm leading-6 text-[#6f5a49]">
                          {product.ingredients}
                        </p>
                      </div>

                      <div className="mt-5 flex items-center justify-between gap-3">
  <span
    className="text-lg font-bold"
    style={{ color: product.accent }}
  >
    {product.priceLabel}
  </span>

  {getProductQuantity(product.name) === 0 ? (
    <button
      onClick={() => addToCart(product)}
      className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:scale-105 hover:shadow-lg"
      style={{ background: product.accent }}
    >
      <ShoppingCart size={14} />
      Add to Cart
    </button>
  ) : (
    <div
      className="flex items-center gap-2 rounded-full px-3 py-2 shadow-md"
      style={{ background: product.accent }}
    >
      <button
        onClick={() => decreaseQty(product.name)}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#8b5e3c] transition hover:scale-105"
        aria-label={`Decrease ${product.name}`}
      >
        <Minus size={15} />
      </button>

      <span className="min-w-[26px] text-center text-base font-bold text-white">
        {getProductQuantity(product.name)}
      </span>

      <button
        onClick={() => increaseQty(product.name)}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#8b5e3c] transition hover:scale-105"
        aria-label={`Increase ${product.name}`}
      >
        <Plus size={15} />
      </button>
    </div>
  )}
</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="mt-10 rounded-3xl bg-white p-10 text-center text-[#7a5d4a] shadow-sm">
                No soaps found. Try searching by product name, ingredient, or
                benefit.
              </div>
            )}
          </div>
        </section>

        <section id="about" className="px-4 py-14 sm:px-5 sm:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#f7eadb] to-[#fdf4e8] p-10 shadow-xl ring-1 ring-[#eadfce]"
            >
              <img
                src="/a_logo_for_mansha_enterprises_is_centered_within_a.png"
                alt="Mansha Enterprises brand logo"
                className="mx-auto max-h-72 object-contain drop-shadow-lg"
              />
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-bold uppercase tracking-[0.3em] text-[#8b5e3c]"
              >
                Our Story
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-3 text-3xl font-bold sm:text-4xl"
              >
                Homemade and shared with care.
              </motion.h2>

              <motion.div
                variants={fadeUp}
                className="mt-6 space-y-5 leading-8 text-[#7a5d4a]"
              >
                <p>
                  Mansha Enterprises is a small handmade skincare and
                  home-crafted brand built with care, simplicity, and
                  creativity. What started from making products for family and
                  close circles slowly grew into creating thoughtful handmade
                  soaps and self-care products for people who value natural
                  ingredients and a personal touch.
                </p>

                <p>
                  Every product is prepared in small batches with attention to
                  quality, fragrance, texture, and presentation. We believe
                  handmade products feel more personal, more meaningful, and more
                  comforting than mass-produced alternatives.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Small Batch",
                    sub: "Freshly made with attention to quality.",
                  },
                  {
                    label: "Homemade Care",
                    sub: "Simple products with a personal touch.",
                  },
                  {
                    label: "Natural Ingredients",
                    sub: "No harsh chemicals, ever.",
                  },
                  {
                    label: "Thoughtful Gifting",
                    sub: "Made beautiful for every occasion.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#f0e4d0] transition hover:shadow-md"
                  >
                    <p className="font-bold text-[#8b5e3c]">{item.label}</p>
                    <p className="mt-1.5 text-sm text-[#a08060]">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section
          className="px-5 py-20"
          style={{
            background: "linear-gradient(180deg, #fff 0%, #fffaf3 100%)",
          }}
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-bold uppercase tracking-[0.3em] text-[#8b5e3c]"
              >
                Customer Love
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-3 text-3xl font-bold sm:text-4xl"
              >
                Simple things, made beautifully
              </motion.h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-3"
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.name}
                  variants={fadeUp}
                  className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#f0e4d0] transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex gap-1 text-[#d4a843]">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>

                  <p className="italic leading-7 text-[#7a5d4a]">
                    &quot;{testimonial.text}&quot;
                  </p>

                  <p className="mt-4 text-sm font-bold text-[#8b5e3c]">
                    — {testimonial.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contact" className="px-5 py-20">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[2.5rem] p-10 text-center text-white shadow-2xl md:p-16"
              style={{
                background:
                  "linear-gradient(135deg, #6b3f22 0%, #8b5e3c 50%, #a87347 100%)",
              }}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
              <div className="pointer-events-none absolute -bottom-20 -left-12 h-72 w-72 rounded-full bg-white/5" />

              <ShoppingBag className="mx-auto mb-5 opacity-80" size={40} />

              <h2 className="text-3xl font-bold md:text-4xl">
                Want to place an order?
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-8 text-[#f5dfc0]">
                Message us directly on WhatsApp for orders, availability,
                prices, and custom handmade product requests.
              </p>

              <a
                href={createWhatsAppLink(
                  "Hi, I want to place an order from Mansha Enterprises."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-white px-9 py-4 text-base font-bold text-[#8b5e3c] shadow-lg transition hover:scale-105 hover:shadow-xl"
              >
                <MessageCircle size={18} />
                Order on WhatsApp
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#eadfce] px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-[#a08060] md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src="/a_logo_for_mansha_enterprises_is_centered_within_a.png"
              alt="Mansha Enterprises logo"
              className="h-7 w-7 rounded-full ring-1 ring-[#d8b777]"
            />

            <p>© 2026 Mansha Enterprises · Handmade soaps & candles.</p>
          </div>

          <p>Elevated essentials for cozy homes.</p>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[#3f2e24]/50 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[2rem] bg-[#fffaf3] shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="grid md:grid-cols-2">
                <div
                  className="flex items-center justify-center rounded-t-[2rem] p-6 md:rounded-l-[2rem] md:rounded-tr-none"
                  style={{ background: selectedProduct.bg }}
                >
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="max-h-72 object-contain"
                  />
                </div>

                <div className="p-8">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <span
                        className="rounded-full px-3 py-1 text-xs font-bold"
                        style={{
                          background: selectedProduct.bg,
                          color: selectedProduct.accent,
                        }}
                      >
                        {selectedProduct.benefit}
                      </span>

                      <h3 className="mt-2 text-2xl font-bold">
                        {selectedProduct.name}
                      </h3>
                    </div>

                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="rounded-full bg-white p-2 shadow-sm transition hover:bg-[#f7eadb]"
                      aria-label="Close product details"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <p className="leading-7 text-[#7a5d4a]">
                    {selectedProduct.description}
                  </p>

                  <div className="mt-4 rounded-2xl bg-white p-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b5e3c]">
                      Ingredients
                    </p>

                    <p className="text-sm leading-6 text-[#7a5d4a]">
                      {selectedProduct.ingredients}
                    </p>
                  </div>

                  <div className="mt-3 rounded-2xl bg-white p-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b5e3c]">
                      Best for
                    </p>

                    <p className="text-sm leading-6 text-[#7a5d4a]">
                      {selectedProduct.bestFor}
                    </p>
                  </div>

                  <div
                    className="mt-5 flex items-center justify-between rounded-2xl p-4"
                    style={{ background: selectedProduct.bg }}
                  >
                    <span className="text-sm text-[#7a5d4a]">Price</span>

                    <span
                      className="text-xl font-bold"
                      style={{ color: selectedProduct.accent }}
                    >
                      {selectedProduct.priceLabel}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-full py-4 text-base font-bold text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg"
                    style={{ background: selectedProduct.accent }}
                  >
                    <ShoppingCart size={17} />
                    Add to Cart
                  </button>

                  <a
                    href={createWhatsAppLink(
                      `Hi, I want to order ${selectedProduct.name} from Mansha Enterprises.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border-2 py-3.5 text-sm font-bold transition hover:bg-[#f0fdf4]"
                    style={{
                      borderColor: selectedProduct.accent,
                      color: selectedProduct.accent,
                    }}
                  >
                    <MessageCircle size={15} />
                    Order on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {cartMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className="fixed bottom-8 left-1/2 z-[9999] flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-[#3f2e24] px-6 py-3.5 text-sm font-semibold text-white shadow-2xl"
          >
            <ShoppingCart size={14} className="text-[#d8b777]" />
            {cartMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={createWhatsAppLink(
          "Hi, I want to place an order from Mansha Enterprises."
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition hover:scale-110 md:hidden"
        aria-label="WhatsApp Order"
      >
        <MessageCircle size={24} className="text-white" />
      </a>
    </div>
  );
}