"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroGlobeOverlay from '@/components/sections/hero/HeroGlobeOverlay';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import ContactText from '@/components/sections/contact/ContactText';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles, ChefHat, Leaf, Award, Coffee, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="large"
      sizing="mediumSizeExtraSmallSpacing"
      background="none"
      cardStyle="gradient-mesh"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Reservations", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765876154738-nsrlb2o7.jpg"
          logoAlt="Finito Restaurant"
          brandName="Finito"
          bottomLeftText="Fine Dining Experience"
          bottomRightText="hello@finito.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroGlobeOverlay
          title="Global Culinary Excellence at Finito"
          description="Experience exceptional dining with locally-sourced ingredients and international flavors. From intimate dinners to grand celebrations, we craft unforgettable moments through cuisine."
          tag="Fine Dining Destination"
          tagIcon={Sparkles}
          buttons={[
            { text: "Reserve Your Table", href: "#pricing" },
            { text: "Explore Our Menu", href: "#menu" }
          ]}
          ariaLabel="Finito restaurant hero section"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Finito"
          description="At Finito, we believe exceptional food begins with exceptional ingredients. Our culinary philosophy centers on authentic preparation, respectful sourcing, and meticulous attention to detail."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          bulletPoints={[
            {
              title: "Authentic Cuisine",
              description: "Traditional recipes elevated with contemporary techniques",
              icon: ChefHat
            },
            {
              title: "Premium Ingredients",
              description: "Locally-sourced, seasonal produce and sustainable seafood",
              icon: Leaf
            },
            {
              title: "Expert Craftsmanship",
              description: "Award-winning chefs with decades of combined experience",
              icon: Award
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765876157089-b0klmm1b.jpg"
          imageAlt="Finito chef preparing dishes"
          imagePosition="right"
          buttons={[
            { text: "Our Story", href: "#about" }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <FeatureCardNineteen
          title="The Finito Experience"
          description="A thoughtfully curated journey through taste and presentation"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          features={[
            {
              id: 1,
              tag: "Selection",
              title: "Discover",
              subtitle: "Explore our seasonal menu",
              description: "Browse our thoughtfully curated selection of appetizers, mains, and specialties featuring the finest seasonal ingredients and time-honored recipes.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765876158319-yu242jc2.jpg",
              imageAlt: "Fresh ingredients selection"
            },
            {
              id: 2,
              tag: "Preparation",
              title: "Create",
              subtitle: "Watch the artistry unfold",
              description: "Our master chefs meticulously prepare each dish with precision and passion, transforming premium ingredients into culinary masterpieces.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765876159203-x7ok12ac.jpg",
              imageAlt: "Chef preparing gourmet food"
            },
            {
              id: 3,
              tag: "Enjoyment",
              title: "Indulge",
              subtitle: "Savor every moment",
              description: "Experience each perfectly plated creation in an elegant atmosphere, completing a dining journey that engages all your senses.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765876160308-hp2r422d.jpg",
              imageAlt: "Elegant food presentation"
            }
          ]}
        />
      </div>

      <div id="signature-dishes" data-section="signature-dishes">
        <ProductCardOne
          title="Signature Dishes"
          description="Our most celebrated creations, crafted with passion and perfection"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          containerStyle="default"
          gridVariant="uniform-alternating-heights"
          products={[
            {
              id: "1",
              name: "Pan-Seared Scallops",
              price: "Market Price",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765876161424-z4cx8b7z.jpg",
              imageAlt: "Pan-seared scallops with garnish"
            },
            {
              id: "2",
              name: "Handmade Ravioli",
              price: "34",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765876162428-xnhgcfrb.jpg",
              imageAlt: "Handmade ravioli with truffle sauce"
            },
            {
              id: "3",
              name: "Grilled Prime Steak",
              price: "48",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765876163543-ogsp15sy.jpg",
              imageAlt: "Grilled prime steak with vegetables"
            },
            {
              id: "4",
              name: "Chocolate Sensation",
              price: "16",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765876164671-voawxvyt.jpg",
              imageAlt: "Elegant chocolate dessert"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Dining Experiences"
          description="Choose the perfect setting for your celebration"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          containerStyle="default"
          plans={[
            {
              id: "casual",
              badge: "Casual Dining",
              badgeIcon: Coffee,
              price: "25-40",
              subtitle: "Relaxed atmosphere with exceptional food",
              buttons: [
                { text: "Book Now", href: "/reservations" },
                { text: "View Menu", href: "/menu" }
              ],
              features: [
                "Walk-ins welcome",
                "Casual dress code",
                "Full bar service",
                "Average 1.5 hour experience"
              ]
            },
            {
              id: "tasting",
              badge: "Tasting Menu",
              badgeIcon: Sparkles,
              price: "85-120",
              subtitle: "Chef's curated selection experience",
              buttons: [
                { text: "Reserve Experience", href: "/reservations" },
                { text: "Learn More", href: "#about" }
              ],
              features: [
                "7-course progression",
                "Wine pairings available",
                "Reservations required",
                "Average 3 hour experience"
              ]
            },
            {
              id: "private",
              badge: "Private Events",
              badgeIcon: Users,
              price: "Custom",
              subtitle: "Exclusive celebrations and gatherings",
              buttons: [
                { text: "Plan Your Event", href: "/contact" },
                { text: "View Packages", href: "#pricing" }
              ],
              features: [
                "Private dining room",
                "Custom menu creation",
                "Personal sommelier",
                "Dedicated event coordinator"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Guest Experiences"
          description="Hear from those who've experienced Finito"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          variant="card"
          testimonials={[
            {
              id: "1",
              title: "Exceptional from start to finish",
              quote: "The attention to detail at Finito is remarkable. Every course was beautifully presented and tasted even better. Our anniversary dinner will be remembered for years.",
              name: "Marcus Reynolds",
              role: "Food Critic",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765876165794-hvxui841.jpg",
              imageAlt: "Marcus Reynolds"
            },
            {
              id: "2",
              title: "A culinary masterpiece",
              quote: "I've dined at fine restaurants worldwide, and Finito stands among the best. The chef's creativity combined with impeccable execution creates an unforgettable experience.",
              name: "Elena Moretti",
              role: "Restaurant Reviewer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765876167077-630i2wel.jpg",
              imageAlt: "Elena Moretti"
            },
            {
              id: "3",
              title: "Perfect for special occasions",
              quote: "The staff made our proposal dinner absolutely magical. Every detail was perfect, from the ambiance to the flawless service. Highly recommend for any celebration.",
              name: "James Chen",
              role: "Restaurant Guest",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765876168047-qreqfbp8.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "4",
              title: "Worth every penny",
              quote: "Quality ingredients, masterful preparation, and genuine hospitality. Finito delivers a complete package. It's not just a meal, it's an experience.",
              name: "Sophie Laurent",
              role: "Sommelier",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765876169189-v52qkco3.jpg",
              imageAlt: "Sophie Laurent"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to experience culinary excellence? Reserve your table at Finito today and discover why we're the destination for unforgettable dining moments."
          animationType="entrance-slide"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Make a Reservation", href: "/reservations" },
            { text: "Contact Us", href: "/contact" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Finito"
          columns={[
            {
              items: [
                { label: "Reservations", href: "/reservations" },
                { label: "Menu", href: "/menu" },
                { label: "Events", href: "/events" }
              ]
            },
            {
              items: [
                { label: "About", href: "about" },
                { label: "Our Team", href: "/team" },
                { label: "Press", href: "/press" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "/contact" },
                { label: "Location", href: "/location" },
                { label: "Hours", href: "/hours" }
              ]
            },
            {
              items: [
                { label: "Terms", href: "/terms" },
                { label: "Privacy", href: "/privacy" },
                { label: "Careers", href: "/careers" }
              ]
            }
          ]}
          ariaLabel="Finito restaurant footer"
        />
      </div>
    </ThemeProvider>
  );
}