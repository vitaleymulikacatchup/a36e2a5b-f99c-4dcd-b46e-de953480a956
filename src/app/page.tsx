"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from '@/providers/ThemeProvider';

const assetMap = [
  { "id": "heroImage", "url": "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A luxurious hotel lobby featuring elegant architecture, rich decor, and comfortable seating under a stained glass ceiling." },
  { "id": "aboutImage", "url": "https://images.pexels.com/photos/8484840/pexels-photo-8484840.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Experience serene luxury at a Dubai resort with traditional architecture and tranquil pool." },
  { "id": "featureImage", "url": "https://images.pexels.com/photos/261041/pexels-photo-261041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Bright indoor swimming pool with luxury seating and large windows." },
  { "id": "teamImage1", "url": "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A soft-lit hotel room entrance, welcoming guests with luxury appeal and comfort." },
  { "id": "teamImage2", "url": "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A chef artfully plating a gourmet dish with mushrooms and greens on wood slices." }
];

const HomePage = () => {
  const getImage = (id) => {
    const asset = assetMap.find(a => a.id === id);
    return asset ? { url: asset.url, alt: asset.alt || 'Decorative image' } : { url: '/public/images/placeholder.webp', alt: 'Decorative image' };
  };

  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Rooms", id: "rooms" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="HotelParadise"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <HeroSplit
          title="Welcome to Hotel Paradise"
          description="Experience luxury and comfort."
          imageSrc={getImage('heroImage').url}
          buttons={[
            { text: "Explore Rooms", href: "rooms" },
            { text: "Contact Us", href: "contact" }
          ]}
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <TextAbout
          title="Discover Our Story at Hotel Paradise"
          buttons={[
            { text: "Learn About Us", href: "about" }
          ]}
        />
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            title="Our Exclusive Amenities"
            features={[
              { title: "Spa Retreat", description: "Relax in our full-service spa.", imageSrc: getImage('featureImage').url },
              { title: "Fine Dining", description: "Enjoy exquisite culinary experiences.", imageSrc: getImage('featureImage').url }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <ContactSplit
          tag="Get In Touch"
          title="Reach Out to Us"
          description="We're here to help you with all your needs."
          imageSrc={getImage('heroImage').url}
          mediaPosition="right"
          onSubmit={(email) => console.log(email)}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          columns={[
            { items: [
                { label: "Privacy Policy", href: "privacy" },
                { label: "Terms of Service", href: "terms" }
              ]
            }
          ]}
          logoText="HotelParadise"
        />
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
