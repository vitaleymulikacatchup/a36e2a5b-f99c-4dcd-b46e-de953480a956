"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from "@/components/navbar/NavbarStyleMinimal";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardTwo from "@/components/sections/feature/FeatureCardTwo";
import TeamCardOne from "@/components/sections/team/TeamCardOne";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { Sparkles, UtensilsCrossed } from "lucide-react";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A luxurious hotel lobby featuring elegant architecture, rich decor, and comfortable seating under a stained glass ceiling."},
  {"id":"about-image","url":"https://images.pexels.com/photos/7820355/pexels-photo-7820355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A man at a hotel reception talking to a staff member. Both wear face masks."},
  {"id":"feature-spa","url":"https://images.pexels.com/photos/2134224/pexels-photo-2134224.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Elegant bathroom showcasing a modern marble tub and wooden interior for a serene escape."},
  {"id":"feature-dining","url":"https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Elegant rooftop restaurant with poolside dining at sunset. Perfect for a luxurious dining experience."},
  {"id":"team-image","url":"https://images.pexels.com/photos/3770093/pexels-photo-3770093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Smiling waiter stands in an elegant restaurant interior, exuding warmth and professionalism."},
  {"id":"testimonial-image","url":"https://images.pexels.com/photos/7363067/pexels-photo-7363067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A deliverywoman brings a birthday surprise with flowers and a balloon to a masked recipient at their apartment."},
  {"id":"contact-image","url":"https://images.pexels.com/photos/16436963/pexels-photo-16436963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Warm and inviting bedroom with a view of lush greenery, featuring a comfortable bed and stylish decor."}
];

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Hotel Luxor"
          logoSrc="/images/logo.svg"
          logoAlt="Hotel Luxor Logo"
          buttonText="Book Now"
          buttonVariant="text-stagger"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Hotel Luxor"
            description="Experience luxury like never before at the finest hotel in the city."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
            buttons={[
              { text: "View Rooms", href: "rooms" },
              { text: "Contact Us", href: "contact" }
            ]}
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Discover the elegance and comfort of Hotel Luxor, where every stay is an unforgettable experience."
          />
        </div>
      </div>

      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              { title: "Exclusive Spa", description: "Relax and rejuvenate in our world-class spa.", icon: Sparkles },
              { title: "Fine Dining", description: "Experience gourmet dining at its finest.", icon: UtensilsCrossed }
            ]}
          />
        </div>
      </div>

      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardOne
            members={[{
              id: "1",
              name: "Sophia L.",
              role: "General Manager",
              imageSrc: assetMap.find(a => a.id === "team-image")?.url ?? "/public/images/placeholder.webp",
              alt: assetMap.find(a => a.id === "team-image")?.alt
            }]}
          />
        </div>
      </div>

      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            testimonials={[{
              id: "1",
              name: "John Doe",
              role: "Frequent Traveler",
              testimonial: "Hotel Luxor exceeded my expectations with excellent service and stunning rooms.",
              imageSrc: assetMap.find(a => a.id === "testimonial-image")?.url ?? "/public/images/placeholder.webp",
              alt: assetMap.find(a => a.id === "testimonial-image")?.alt
            }]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplitForm
            title="Get in Touch"
            description="Whether you have a question or need assistance, we’re here to help."
            inputs={[
              { name: "name", type: "text", placeholder: "Name", required: true },
              { name: "email", type: "email", placeholder: "Email", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Type your message...", rows: 5, required: true }}
            imageSrc={assetMap.find(a => a.id === "contact-image")?.url ?? "/public/images/placeholder.webp"}
            alt={assetMap.find(a => a.id === "contact-image")?.alt}
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: "Explore", items: [
                { label: "Home", href: "home" },
                { label: "Rooms", href: "rooms" }
              ] },
              { title: "About Us", items: [
                { label: "About", href: "about" },
                { label: "Contact", href: "contact" }
              ] }
            ]}
            copyrightText="© 2025 | Hotel Luxor"
          />
        </div>
      </div>

    </ThemeProvider>
  );
}
