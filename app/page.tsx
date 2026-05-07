"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Sparkles,
  Heart,
  Leaf,
  MessageCircle,
  Star,
  Gift,
  Menu,
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
  },
];

const categories = [
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

export default function ManshaEnterprisesWebsite() {
  return (
    <div className="min-h-screen bg-[#fffaf3] text-[#3f2e24]">
      <header className="sticky top-0 z-50 border-b border-[#eadfce] bg-[#fffaf3]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/a_logo_for_mansha_enterprises_is_centered_within_a.png"
              alt="Mansha Enterprises logo"
              className="h-12 w-12 rounded-full object-cover shadow-sm ring-1 ring-[#d8b777]"
            />
            <div>
              <p className="text-lg font-bold tracking-wide">
                Mansha Enterprises
              </p>
              <p className="text-xs text-[#7c6655]">
                Faridabad • Handmade with love
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#products" className="hover:text-[#8b5e3c]">
              Products
            </a>
            <a href="#categories" className="hover:text-[#8b5e3c]">
              Categories
            </a>
            <a href="#about" className="hover:text-[#8b5e3c]">
              About
            </a>
            <a href="#contact" className="hover:text-[#8b5e3c]">
              Contact
            </a>
          </div>

          <Button
            className="hidden rounded-full bg-[#8b5e3c] px-5 text-white hover:bg-[#70472b] md:flex"
            asChild
          >
            <a href="#products">View Collection</a>
          </Button>

          <button className="md:hidden">
            <Menu />
          </button>
        </nav>
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
                Natural handmade skincare
              </div>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Handmade soaps crafted with natural ingredients and everyday
                care.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f5a49]">
                Mansha Enterprises creates home-made soaps and handmade items
                with care, comfort, and a personal touch. Perfect for daily use,
                thoughtful gifting, and small celebrations.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  className="rounded-full bg-[#8b5e3c] px-7 py-6 text-base text-white hover:bg-[#70472b]"
                  asChild
                >
                  <a href="#products">
                    <ShoppingBag className="mr-2" size={19} />
                    Explore Soaps
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
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-[#eadfce]">
                <img
                  src="/Neem Tulsi Soap.jpeg"
                  alt="Mansha Enterprises handmade soaps"
                  className="h-full w-full object-cover"
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
                      Made for family, friends & neighbours
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="categories" className="px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5e3c]">
                Categories
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Explore our handmade collection
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {categories.map((item) => {
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
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-3 leading-7 text-[#6f5a49]">
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
              <p className="max-w-md text-[#6f5a49]">
                Each soap is made in small batches, so availability may change.
                Contact details can be added later for orders and custom
                requests.
              </p>
            </div>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                >
                  <Card className="h-full overflow-hidden rounded-[2rem] border-0 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
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

                      <p className="mt-3 min-h-[112px] leading-7 text-[#6f5a49]">
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
                Our story
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Made in Faridabad, shared with care.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#6f5a49]">
                Mansha Enterprises began as a small home-run business, creating
                handmade items for people nearby. Every product carries the
                warmth of personal effort, thoughtful design, and the joy of
                making something beautiful by hand.
              </p>

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
              Customer love
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
              Contact details will be added soon. For now, explore the handmade
              soap collection and check product details.
            </p>

            <Button
              className="mt-7 rounded-full bg-white px-8 py-6 text-base text-[#8b5e3c] hover:bg-[#f7eadb]"
              asChild
            >
              <a href="#products">
                <ShoppingBag className="mr-2" size={19} />
                View Soap Collection
              </a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#eadfce] px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-[#7c6655] md:flex-row">
          <p>
            © 2026 Mansha Enterprises • Faridabad • Handmade soaps, candles, and
            gifts.
          </p>
          <p>Made with warmth for local homes and thoughtful gifting.</p>
        </div>
      </footer>
    </div>
  );
}