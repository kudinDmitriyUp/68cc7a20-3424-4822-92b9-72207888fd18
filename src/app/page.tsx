"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="aurora"
        cardStyle="gradient-bordered"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Projects",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="SiJe"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      title="Building Your Future With SiJe"
      description="Crafting exceptional living spaces with quality, precision, and architectural integrity for homeowners who demand the best."
      testimonials={[
        {
          name: "John D.",
          handle: "@johnd",
          testimonial: "SiJe delivered our dream home perfectly on time.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-real-estate-agent-showing-house_23-2150225242.jpg",
        },
        {
          name: "Sarah W.",
          handle: "@sarahw",
          testimonial: "Professional, reliable, and exceptional craftsmanship.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-back-view-engineer-architect-supervising-construction_23-2148233787.jpg",
        },
        {
          name: "Mike R.",
          handle: "@miker",
          testimonial: "The best construction team we have ever worked with.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-mature-family-couple-visiting-daughter_1398-4698.jpg",
        },
        {
          name: "Elena K.",
          handle: "@elenak",
          testimonial: "SiJe made the entire process seamless and efficient.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/real-estate-agents-construction-site_23-2147653369.jpg",
        },
        {
          name: "David L.",
          handle: "@davidl",
          testimonial: "Truly exceeded our expectations in every detail.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-person-planning-alternative-energies_23-2149205440.jpg",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/closeup-yellow-safety-glasses-architectural-project_23-2148242960.jpg"
      imageAlt="modern construction project architecture"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/african-american-lady-safety-helmet-with-paper-plan-near-building-construction_23-2148039949.jpg",
          alt: "African American lady in safety helmet",
        },
        {
          src: "http://img.b2bpic.net/free-photo/lyon-france-december-22-2014-musee-des-confluences-musee-des-confluences-is-located-confluence-rhone-saone-rivers_268835-1074.jpg",
          alt: "Musee des Confluences architecture",
        },
        {
          src: "http://img.b2bpic.net/free-photo/new-york-city-ny-usa-october-20-2020-vessel-hudson-yards-staircase-designed-by-architect-thomas-heatherwick-midtown-manhattan-west_1321-2497.jpg",
          alt: "Hudson Yards staircase",
        },
        {
          src: "http://img.b2bpic.net/free-photo/modern-building-architecture-design_23-2148252762.jpg",
          alt: "Modern building architecture design",
        },
        {
          src: "http://img.b2bpic.net/free-photo/diverse-real-estate-developers-reviewing-smart-city-design-buildings-layout-city-planning_482257-136326.jpg",
          alt: "Diverse real estate developers",
        },
      ]}
      avatarText="Trusted by hundreds of homeowners"
      marqueeItems={[
        {
          type: "text",
          text: "Quality First",
        },
        {
          type: "text",
          text: "Sustainable Design",
        },
        {
          type: "text",
          text: "On-Time Completion",
        },
        {
          type: "text",
          text: "Architectural Integrity",
        },
        {
          type: "text",
          text: "Premium Craftsmanship",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Decades of Construction Excellence"
      description="SiJe combines innovative building techniques with traditional craftsmanship. We specialize in custom residential projects tailored to your lifestyle."
      metrics={[
        {
          value: "150+",
          title: "Homes Built",
        },
        {
          value: "20",
          title: "Years Experience",
        },
        {
          value: "98%",
          title: "Client Satisfaction",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/architect-colleagues-discussing-design-white-foam-building-model-modern-architectural-office-team-two-professional-architects-working-blueprints-desk_482257-37823.jpg"
      imageAlt="construction team meeting blueprints"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Structural Integrity",
          description: "We build homes meant to last generations using premium materials.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-shovel-picking-up-rubble-construction-site_259150-57621.jpg",
          imageAlt: "new home construction structural framing",
        },
        {
          title: "Interior Refinement",
          description: "Every detail matters, from finishings to fixtures for a premium finish.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-palette-brush-painting_171337-10967.jpg",
          imageAlt: "home renovation interior design project",
        },
        {
          title: "Sustainable Building",
          description: "Eco-friendly practices that reduce energy consumption and waste.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-house-with-energy-ratings_1048-5033.jpg",
          imageAlt: "sustainable home construction eco friendly",
        },
      ]}
      title="Why Choose SiJe?"
      description="Our approach to building is rooted in durability, aesthetic beauty, and functional design."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          brand: "SiJe",
          name: "Modern Villa",
          price: "$850k+",
          rating: 5,
          reviewCount: "12",
          imageSrc: "http://img.b2bpic.net/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-generative-ai-illustration_1258-151616.jpg",
        },
        {
          id: "2",
          brand: "SiJe",
          name: "Urban Townhome",
          price: "$600k+",
          rating: 5,
          reviewCount: "8",
          imageSrc: "http://img.b2bpic.net/free-photo/windows-building_1122-873.jpg",
        },
        {
          id: "3",
          brand: "SiJe",
          name: "Eco-Villa",
          price: "$950k+",
          rating: 5,
          reviewCount: "15",
          imageSrc: "http://img.b2bpic.net/free-photo/terrace-with-trees-forest-cozy-outdoor-relaxation-space_169016-69565.jpg",
        },
        {
          id: "4",
          brand: "SiJe",
          name: "Custom Mansion",
          price: "$1.2M+",
          rating: 5,
          reviewCount: "20",
          imageSrc: "http://img.b2bpic.net/free-photo/main-entrance-modern-residential-building_637285-1913.jpg",
        },
        {
          id: "5",
          brand: "SiJe",
          name: "Apartment Complex",
          price: "$4.5M+",
          rating: 5,
          reviewCount: "30",
          imageSrc: "http://img.b2bpic.net/free-photo/tall-chimney-building-low-angle_23-2149627171.jpg",
        },
        {
          id: "6",
          brand: "SiJe",
          name: "Restored Heritage",
          price: "$700k+",
          rating: 5,
          reviewCount: "10",
          imageSrc: "http://img.b2bpic.net/free-photo/old-abandoned-stone-building-with-broken-windows-puddle-outside_181624-18943.jpg",
        },
      ]}
      title="Recent Projects"
      description="Explore some of our latest residential projects showcasing our versatility and attention to detail."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "John D.",
          role: "Homeowner",
          testimonial: "Professional, efficient, and incredibly quality-focused.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-person-planning-alternative-energies_23-2149205471.jpg",
        },
        {
          id: "2",
          name: "Sarah W.",
          role: "Architect",
          testimonial: "An absolute pleasure working with the SiJe team.",
          imageSrc: "http://img.b2bpic.net/free-photo/two-successful-male-architect-have-conversation-office_23-2147843005.jpg",
        },
        {
          id: "3",
          name: "Mike R.",
          role: "Homeowner",
          testimonial: "Quality that truly exceeded all expectations.",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-home-enjoying-life_23-2149167740.jpg",
        },
        {
          id: "4",
          name: "Elena K.",
          role: "Homeowner",
          testimonial: "Efficient, honest, and great to collaborate with.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-architect-man-showing-thumb-up-gesture-looking-camera_23-2148203957.jpg",
        },
        {
          id: "5",
          name: "David L.",
          role: "Homeowner",
          testimonial: "SiJe turned our vision into reality perfectly.",
          imageSrc: "http://img.b2bpic.net/free-photo/architect-front-brick-wall-with-clipboard_23-2147813098.jpg",
        },
      ]}
      title="Client Success Stories"
      description="Hear what our clients have to say about their experience building with SiJe."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Let's Build"
      title="Start Your Dream Project"
      description="Get in touch today to discuss your vision, request a quote, or learn more about how SiJe can build your perfect home."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Blog",
              href: "#",
            },
            {
              label: "Guides",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="SiJe"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
