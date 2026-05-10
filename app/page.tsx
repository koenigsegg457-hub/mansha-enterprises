"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    name: "Neem Tulsi Soap",
    category: "Soaps",
    benefit: "Deep Cleansing & Purifying",
    description:
      "A refreshing handmade soap made with neem leaves, tulsi leaves, aloe vera gel, vitamin E, coconut oil, and essential oils.",
    ingredients:
      "Neem leaves, tulsi leaves, aloe vera gel, vitamin E, coconut oil, essential oils",
    price: "₹100",
    image: "/Neem Tulsi Soap.jpeg",
    bestFor: "Daily freshness, oily skin feel, and a clean natural bathing routine.",
  },
  {
    name: "Rice Potato Soap",
    category: "Soaps",
    benefit: "Brightening & Smooth Skin",
    description:
      "A gentle handmade soap prepared with rice powder, potato juice, aloe vera, coconut oil, vitamin E, and essential oil.",
    ingredients:
      "Rice powder, potato juice, aloe vera, coconut oil, vitamin E, essential oil",
    price: "₹100",
    image: "/Rice Potato Soap.jpeg",
    bestFor: "Smooth skin feel, gentle care, and everyday glow-focused bathing.",
  },
  {
    name: "Papaya Soap",
    category: "Soaps",
    benefit: "Glow & Hydration",
    description:
      "A bright handmade soap made with papaya juice, rice powder, aloe vera, glycerine, coconut oil, and essential oil.",
    ingredients:
      "Papaya juice, rice powder, aloe vera, glycerine, coconut oil, essential oil",
    price: "₹100",
    image: "/Papaya Soap.jpeg",
    bestFor: "A fresh glow feel, gentle hydration, and soft daily skincare.",
  },
  {
    name: "Haldi Chandan Soap",
    category: "Soaps",
    benefit: "Tan Care & Radiance",
    description:
      "A traditional handmade soap crafted with kasturi haldi, chandan powder, multani mitti, aloe vera, vitamin E, glycerine, coconut oil, and essential oil.",
    ingredients:
      "Kasturi haldi, chandan powder, multani mitti, aloe vera, vitamin E, glycerine, coconut oil, essential oil",
    price: "₹100",
    image: "/Haldi Chandan Soap.jpeg",
    bestFor: "Traditional care, natural radiance, and a refreshing herbal bathing experience.",
  },
  {
    name: "Coffee Soap",
    category: "Soaps",
    benefit: "Exfoliating & Refreshing",
    description:
      "A rich handmade soap made with coffee powder, rice powder, aloe vera, glycerine, coconut oil, and essential oil.",
    ingredients:
      "Coffee powder, rice powder, aloe vera, glycerine, coconut oil, essential oil",
    price: "₹100",
    image: "/Coffee Soap.jpeg",
    bestFor: "Refreshing bath feel, mild exfoliating texture, and a rich coffee aroma.",
  },
];

const offerings = [
  {
    title: "Handmade Soaps",
    icon: Leaf,
    text: "Natural, gentle soaps made in small batches for everyday care.",
  },
  {
    title: "Gifting",
    icon: Gift,
    text: "Thoughtful handmade products for festivals, birthdays, and small celebrations.",
  },
  {
    title: "Custom Orders",
    icon: Sparkles,
    text: "Personalized combinations can be prepared based on availability.",
  },
];

const testimonials = [
  "Loved the soaps. They look beautiful and feel very gentle.",
  "Perfect for small gifts. Simple, elegant, and handmade with care.",
  "The products feel fresh, natural, and thoughtfully made.",
];

const WHATSAPP_NUMBER = "918130511871";

const createWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export default function ManshaEnterprisesWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<(typeof products)[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const value = `${product.name} ${product.benefit} ${product.ingredients}`.toLowerCase();
    return value.includes(searchTerm.toLowerCase());
  });

  const navLinks = [
    { label: "Products", href: "#products" },
    { label: "What We Offer", href: "#offerings" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen scroll-smooth bg-[#fffaf3] text-[#3f2e24]">
      <header className="sticky top-0 z-50 border-b border-[#eadfce] bg-[#fffaf3]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/a_logo_for_mansha_enterprises_is_centered_within_a.png"
              alt="Mansha Enterprises logo"
              className="h-12 w-12 rounded-full object-cover shadow-sm ring-1 ring-[#d8b777]"
            />
            <div>
              <p className="text-xl font-bold tracking-wide sm:text-2xl">
                Mansha Enterprises
              </p>
              <p className="text-sm text-[#7c6655]">Handmade with love</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-base font-medium md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-[#8b5e3c]">
                {link.label}
              </a>
            ))}
          </div>

          <Button
            className="hidden rounded-full bg-[#8b5e3c] px-5 text-white hover:bg-[#70472b] md:flex"
            asChild
          >
            <a
              href={createWhatsAppLink(
                "Hi, I want to place an order from Mansha Enterprises."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order on WhatsApp
            </a>
          </Button>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </nav>

        <AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] bg-[#3f2e24]/50 md:hidden"
      onClick={() => setMobileMenuOpen(false)}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 220 }}
        className="ml-auto flex h-screen w-[82%] max-w-sm flex-col bg-[#fffaf3] p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/a_logo_for_mansha_enterprises_is_centered_within_a.png"
              alt="Mansha Enterprises logo"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-[#d8b777]"
            />
            <p className="text-xl font-bold">Menu</p>
          </div>

          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="rounded-full bg-white p-2 shadow-sm"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex flex-col gap-4 text-xl font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-2xl px-4 py-3 transition hover:bg-[#f7eadb]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button
          className="mt-8 rounded-full bg-[#8b5e3c] py-6 text-white hover:bg-[#70472b]"
          asChild
        >
          <a
            href={createWhatsAppLink(
              "Hi, I want to place an order from Mansha Enterprises."
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2" size={19} />
            Order on WhatsApp
          </a>
        </Button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      </header>

      <main>
        <section className="relative overflow-hidden px-5 py-16 md:py-24">
          <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-[#efd7b8] blur-3xl" />
          <div className="absolute bottom-[-160px] right-[-120px] h-80 w-80 rounded-full bg-[#f4cfc3] blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-[#7c6655] shadow-sm">
                <Heart size={16} className="text-[#b66b55]" />
                Natural Handmade Skincare
              </div>

              <h1 className="max-w-3xl text-[2.35rem] font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Handmade soaps crafted with natural ingredients and everyday care.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 md:text-xl md:leading-9 text-[#6f5a49]">
                Mansha Enterprises creates homemade soaps and handmade essentials
                with care, comfort, and a personal touch. Perfect for daily use,
                thoughtful gifting, and small celebrations.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  className="rounded-full bg-[#8b5e3c] px-7 py-6 text-base text-white hover:bg-[#70472b]"
                  asChild
                >
                  <a
                    href={createWhatsAppLink(
                      "Hi, I want to place an order from Mansha Enterprises."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2" size={19} />
                    Order on WhatsApp
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="rounded-full border-[#8b5e3c] px-7 py-6 text-base text-[#8b5e3c] hover:bg-[#f7eadb]"
                  asChild
                >
                  <a href="#about">Our Story</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="flex h-[520px] items-center justify-center overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#fffaf3] to-[#f7eadb] p-8 shadow-2xl ring-1 ring-[#eadfce] lg:h-[560px]">
  <img
    src="/a_logo_for_mansha_enterprises_is_centered_within_a.png"
    alt="Mansha Enterprises Logo"
    className="max-h-[78%] max-w-[78%] object-contain drop-shadow-2xl"
  />
</div>
              <div className="absolute -bottom-6 -left-4 rounded-3xl bg-white p-5 shadow-xl md:-left-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#f7eadb] p-3">
                    <Star className="text-[#8b5e3c]" />
                  </div>
                  <div>
                    <p className="font-bold">Handcrafted with care</p>
                    <p className="text-sm text-[#7c6655]">
                      Made with care for every home
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="offerings" className="px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5e3c]">
                What We Offer
              </p>
              <h2 className="text-[1.8rem] font-bold leading-tight sm:text-3xl md:text-4xl">
                Handmade care with a personal touch
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {offerings.map((item) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    className="rounded-3xl border-[#eadfce] bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <CardContent className="p-7">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7eadb] text-[#8b5e3c]">
                        <Icon size={26} />
                      </div>
                      <h3 className="text-[1.35rem] font-bold leading-snug sm:text-xl md:text-2xl">{item.title}</h3>
                      <p className="mt-3 text-[15.5px] leading-7 text-[#6f5a49] sm:text-base">
                        {item.text}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="products" className="bg-[#f7eadb] px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5e3c]">
                  Products
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Handmade soaps collection
                </h2>
              </div>

              <div className="relative w-full max-w-md">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8b5e3c]"
                  size={18}
                />
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search soaps, ingredients, benefits..."
                  className="w-full rounded-full border border-[#e0cdb4] bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#eadfce]"
                />
              </div>
            </div>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                >
                  <Card className="h-full overflow-hidden rounded-[2rem] border-0 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="h-72 overflow-hidden bg-[#fffaf3] p-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain transition duration-500 hover:scale-105"
                      />
                    </div>

                    <CardContent className="p-6">
                      <div className="mb-3 flex flex-wrap gap-2">
                        <div className="inline-flex rounded-full bg-[#fff4e7] px-3 py-1 text-xs font-semibold text-[#8b5e3c]">
                          {product.category}
                        </div>
                        <div className="inline-flex rounded-full bg-[#f1f7ed] px-3 py-1 text-xs font-semibold text-[#56743f]">
                          {product.benefit}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold">{product.name}</h3>

                      <p className="mt-3 min-h-[96px] leading-7 text-[#6f5a49]">
                        {product.description}
                      </p>

                      <div className="mt-4 rounded-2xl bg-[#fffaf3] p-4">
                        <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-[#8b5e3c]">
                          Ingredients
                        </p>
                        <p className="text-sm leading-6 text-[#6f5a49]">
                          {product.ingredients}
                        </p>
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                        <span className="font-bold text-[#8b5e3c]">
                          {product.price}
                        </span>
                        <Button
                          size="sm"
                          onClick={() => setSelectedProduct(product)}
                          className="rounded-full bg-[#8b5e3c] text-white hover:bg-[#70472b]"
                        >
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="mt-10 rounded-3xl bg-white p-8 text-center text-[#6f5a49] shadow-sm">
                No soaps found. Try searching by product name, ingredient, or
                benefit.
              </div>
            )}
          </div>
        </section>

        <section id="about" className="px-5 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl">
              <img
                src="/a_logo_for_mansha_enterprises_is_centered_within_a.png"
                alt="Mansha Enterprises brand logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5e3c]">
                Our Story
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Homemade and shared with care.
              </h2>

              <div className="mt-6 max-w-2xl text-base leading-8 sm:text-lg text-[#6f5a49] md:text-xl md:leading-9">
                <p>
                  Mansha Enterprises is a small handmade skincare and home-crafted
                  brand built with care, simplicity, and creativity. What started
                  from making products for family and close circles slowly grew
                  into creating thoughtful handmade soaps and self-care products
                  for people who value natural ingredients and a personal touch.
                </p>

                <p>
                  Every product is prepared in small batches with attention to
                  quality, fragrance, texture, and presentation. We believe
                  handmade products feel more personal, more meaningful, and more
                  comforting than mass-produced alternatives.
                </p>

                <p>
                  Our goal is simple, to create beautiful handmade essentials
                  that bring freshness, warmth, and everyday care into your
                  routine.
                </p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-2xl font-bold text-[#8b5e3c]">
                    Small Batch
                  </p>
                  <p className="mt-2 text-sm text-[#6f5a49]">
                    Freshly made with attention to quality.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-2xl font-bold text-[#8b5e3c]">
                    Homemade Care
                  </p>
                  <p className="mt-2 text-sm text-[#6f5a49]">
                    Simple products prepared with a personal touch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5e3c]">
              Customer Love
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Simple things, made beautifully
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((text) => (
                <div
                  key={text}
                  className="rounded-3xl bg-[#fffaf3] p-7 text-left shadow-sm"
                >
                  <div className="mb-4 flex gap-1 text-[#c28a45]">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} size={17} fill="currentColor" />
                    ))}
                  </div>
                  <p className="leading-7 text-[#6f5a49]">“{text}”</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-16">
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#8b5e3c] p-8 text-center text-white shadow-xl md:p-12">
            <ShoppingBag className="mx-auto mb-4" size={38} />
            <h2 className="text-3xl font-bold md:text-4xl">
              Want to place an order?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#f7eadb]">
              Click the WhatsApp button to message us directly for orders,
              availability, prices, and custom handmade product requests.
            </p>

            <Button
              className="mt-7 rounded-full bg-white px-8 py-6 text-base text-[#8b5e3c] hover:bg-[#f7eadb]"
              asChild
            >
              <a
                href={createWhatsAppLink(
                  "Hi, I want to place an order from Mansha Enterprises."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" size={19} />
                Order on WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#eadfce] px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-[15px] text-[#7c6655] md:text-sm md:flex-row">
          <p>© 2026 Mansha Enterprises • Handmade soaps & candles.</p>
          <p>Elevated essentials for cozy homes.</p>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#3f2e24]/50 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[2rem] bg-[#fffaf3] shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="grid md:grid-cols-2">
                <div className="bg-[#fffaf3] p-3">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="h-80 w-full object-contain md:h-full"
                  />
                </div>

                <div className="p-7">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-2 inline-flex rounded-full bg-[#f1f7ed] px-3 py-1 text-xs font-semibold text-[#56743f]">
                        {selectedProduct.benefit}
                      </p>
                      <h3 className="text-2xl font-bold">
                        {selectedProduct.name}
                      </h3>
                    </div>

                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="rounded-full bg-white p-2 shadow-sm"
                      aria-label="Close details"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <p className="leading-7 text-[#6f5a49]">
                    {selectedProduct.description}
                  </p>

                  <div className="mt-5 rounded-2xl bg-white p-4">
                    <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-[#8b5e3c]">
                      Ingredients
                    </p>
                    <p className="text-sm leading-6 text-[#6f5a49]">
                      {selectedProduct.ingredients}
                    </p>
                  </div>

                  <div className="mt-5 rounded-2xl bg-white p-4">
                    <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-[#8b5e3c]">
                      Best for
                    </p>
                    <p className="text-sm leading-6 text-[#6f5a49]">
                      {selectedProduct.bestFor}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#8b5e3c] p-4 text-white">
                    <span className="text-sm">Price</span>
                    <span className="text-xl font-bold">
                      {selectedProduct.price}
                    </span>
                  </div>

                  <Button
                    className="mt-5 w-full rounded-full bg-[#25D366] py-6 text-base text-white hover:bg-[#1ebe5d]"
                    asChild
                  >
                    <a
                      href={createWhatsAppLink(
                        `Hi, I want to order ${selectedProduct.name} from Mansha Enterprises.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2" size={19} />
                      Order this on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}