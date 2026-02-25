import { useState, useEffect, useRef } from 'react';
import { Menu, X, Shield, Award, Users, Clock, Phone, Mail, MapPin, Star, Instagram, Facebook, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Marquee } from '@/components/magicui/marquee';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { ShineBorder } from '@/components/magicui/shine-border';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { ProgressiveBlur } from '@/components/magicui/progressive-blur';
import { cn } from '@/lib/utils';
import DemoBanner from './DemoBanner';
import LightRays from './LightRays';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const faqRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    handleResize();

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          observer.unobserve(e.target); 
        } 
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const stats = [
    { value: 700, suffix: '+', label: 'Happy Pets' },
    { value: 7, suffix: '', label: 'Years Experience' },
    { value: 500, suffix: '+', label: 'Client Visits' },
    { value: 100, suffix: '%', label: 'Satisfaction Rate' }
  ];

  const whyUsFeatures = [
    { Icon: Shield, name: "Expertise", description: "Our certified veterinarians bring 10+ years of combined experience to every consultation and treatment.", className: "col-span-3 lg:col-span-1", background: <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent" /> },
    { Icon: Award, name: "Quality", description: "We use only premium, veterinarian-recommended products that meet the highest safety standards.", className: "col-span-3 lg:col-span-2", background: <DotPattern opacity={0.03} className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]" /> },
    { Icon: Users, name: "Personalized Care", description: "Each pet receives a custom care plan based on their specific needs, age, and health condition.", className: "col-span-3 lg:col-span-2", background: <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent" /> },
    { Icon: Clock, name: "Reliability", description: "Consistent service schedule with flexible appointment times to fit your busy lifestyle.", className: "col-span-3 lg:col-span-1", background: <DotPattern opacity={0.02} className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_40%,#000_100%)]" /> }
  ];

  const reviews = [
    {
      name: "Maria G.",
      gender: "F",
      text: "The grooming service was amazing! My poodle looks so beautiful and clean after the appointment.",
      rating: 5
    },
    {
      name: "Alexandru M.",
      gender: "M",
      text: "Fast, professional deworming treatment. The staff made my anxious dog feel comfortable throughout the process.",
      rating: 5
    },
    {
      name: "Elena D.",
      gender: "F",
      text: "Best vitamins supplement for my cat's skin health. She's been much more active since starting the regimen.",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "How often should I deworm my pet?",
      answer: "We recommend deworming every 3 months for puppies and kittens, and every 6 months for adult pets."
    },
    {
      question: "Do you offer home visits?",
      answer: "Yes, we provide mobile services for grooming and routine checkups at an additional fee."
    },
    {
      question: "What should I bring to my pet's appointment?",
      answer: "Please bring your pet's medical records, vaccination certificates, and any specific concerns you have."
    },
    {
      question: "Can I book multiple services at once?",
      answer: "Absolutely! We offer package deals that save you money while ensuring comprehensive care for your pet."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can call us directly, send a WhatsApp message, or visit our shop during business hours to book your service."
    },
    {
      question: "What if my pet is nervous or aggressive?",
      answer: "Our experienced staff specializes in handling anxious pets with gentle techniques and calming approaches."
    }
  ];

  return (
    <>
      <DemoBanner />
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto mt-4">
          <div className="flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08]">
            <a href="#" className="font-semibold text-base tracking-tight text-white">Darivet</a>
            
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <a key={link.id} href={`#${link.id}`} className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.05] transition-colors">{link.label}</a>
              ))}
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/[0.08] p-4">
              {navLinks.map(link => (
                <a key={link.id} href={`#${link.id}`} onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm text-zinc-400 hover:text-white transition-colors">{link.label}</a>
              ))}
            </div>
          )}
        </div>
      </header>

      <section id="hero" className="pt-40 pb-24 sm:pt-48 sm:pb-32 min-h-screen flex items-center relative overflow-x-clip">
        <div className="absolute inset-0 z-0">
          <LightRays 
            raysOrigin="top-center" 
            raysColor="#ff9933" 
            raysSpeed={1} 
            lightSpread={isMobile ? 2 : 0.5} 
            rayLength={isMobile ? 3 : 1} 
            followMouse={true} 
            mouseInfluence={0.05} 
            noiseAmount={0} 
            distortion={0} 
            pulsating={false} 
            fadeDistance={1} 
            saturation={1} 
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center">
            <div className="hero-blur hero-delay-1 mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
              <AnimatedShinyText className="text-sm font-medium">Premium Pet Care</AnimatedShinyText>
            </div>
            
            <h1 className="hero-blur hero-delay-2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              Your Pet's Health is Our Priority
            </h1>
            
            <p className="hero-blur hero-delay-3 text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Since 2017, Darivet has been providing top-quality pet care services to families in Domnesti and beyond. We're committed to keeping your furry friends happy, healthy, and well-groomed.
            </p>
            
            <div className="hero-blur hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <ShimmerButton className="shadow-2xl" background="rgba(255,153,51, 1)">
                <span className="text-sm font-medium text-black">Book Appointment</span>
              </ShimmerButton>
              
              <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
            
            <div className="hero-blur hero-delay-5 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
              {stats.map((stat, i) => (
                <div key={i} className={cn("text-center", i > 0 && "sm:border-l sm:border-white/10 sm:pl-12")}>
                  <NumberTicker 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    className="text-4xl font-black bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(255,153,51,0.6)]" 
                  />
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">We Care About Your Pet's Wellbeing</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Darivet was founded in 2017 with a simple mission: to provide exceptional pet care services that make every pet owner's life easier and happier.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              {
                icon: Shield,
                title: "Professional Veterinarian Services",
                description: "Expert care from certified professionals with years of experience in pet health."
              },
              {
                icon: Award,
                title: "Quality Products & Treats",
                description: "Only the best, veterinarian-recommended products for your pet's wellbeing."
              },
              {
                icon: MapPin,
                title: "Clean, Safe Environment",
                description: "Spacious, hygienic facilities designed with your pet's comfort in mind."
              },
              {
                icon: Users,
                title: "Personalized Pet Care Plans",
                description: "Customized care tailored to each pet's specific needs and health conditions."
              }
            ].map((item, index) => (
              <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-orange-500/20 transition-all duration-500 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={120} duration={8} delay={index * 1.5} colorFrom="#ff9933" colorTo="#ff9933" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/15 to-orange-600/5 border border-orange-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,153,51,0.15)] transition-all duration-500">
                      <item.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-orange-50 transition-colors">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/[0.06] rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Tailored Solutions for Your Pet's Needs</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              From routine care to specialized treatments, we offer comprehensive services designed specifically for your pet's health and happiness.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Deworming",
                description: "Complete parasite treatment for dogs and cats",
                price: 300,
                icon: Shield
              },
              {
                name: "Grooming",
                description: "Full bath, brush, nail trim, and styling",
                price: 500,
                icon: Users
              },
              {
                name: "Vitamins",
                description: "Essential supplements for healthy skin, coat, and joints",
                price: 50,
                icon: Award
              }
            ].map((service, index) => (
              <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-orange-500/20 transition-all duration-500 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={15} delay={index * 1.5} colorFrom="#ff9933" colorTo="#ff9933" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/15 to-orange-600/5 border border-orange-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,153,51,0.15)] transition-all duration-500">
                      <service.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-orange-50 transition-colors mb-2">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  
                  <Separator className="mb-5 bg-white/[0.06]" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                      {service.price} RON
                    </span>
                    <ShimmerButton className="shadow-lg" background="rgba(255,153,51, 1)">
                      <span className="text-xs font-medium text-black">Book Now</span>
                    </ShimmerButton>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-orange-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Why Choose Darivet for Your Pet's Care</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Our commitment to excellence sets us apart in the pet care industry. Here's what makes us different:
            </p>
          </div>
          
          <BentoGrid className="lg:grid-rows-3">
            {whyUsFeatures.map((feature, index) => (
              <BentoCard 
                key={index}
                Icon={feature.Icon}
                name={feature.name}
                description={feature.description}
                className={feature.className}
                background={feature.background}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      <section id="reviews" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-orange-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">What Our Pet Parents Say About Us</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Don't just take our word for it. Here's what pet owners have experienced with our services:
            </p>
          </div>
          
          <div className="relative flex max-w-6xl mx-auto flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {reviews.map((review, index) => (
                <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-orange-500/20 transition-all duration-500 card-hover mx-4 w-[300px] sm:w-[350px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={80} duration={15} delay={index * 1.5} colorFrom="#ff9933" colorTo="#ff9933" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-orange-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">{review.text}</p>
                    <div className="flex items-center">
                      <Avatar className="w-10 h-10 mr-3">
                        <AvatarImage src={`/assets/people/${review.gender === 'M' ? 'boy_1.jpg' : 'girl_1.jpg'}`} alt={review.name} />
                        <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{review.name}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Frequently Asked Questions About Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Find answers to common questions about pet care, appointments, and our services:
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="animate-on-scroll delay-1 border-b border-white/[0.06]">
                <AccordionTrigger className="text-left text-base hover:bg-white/[0.02] transition-colors duration-200 py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-orange-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Let's Make Your Pet's Health a Priority</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Ready to give your pet the care they deserve? Contact us today to schedule an appointment or ask questions about our services.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone", value: "+407564884734" },
                { icon: Mail, label: "Email", value: "contact@darivet.com" },
                { icon: MapPin, label: "Address", value: "Domnesti, Ilfov" },
                { icon: Clock, label: "Hours", value: "Mon-Sat 9am-6pm" }
              ].map((item, index) => (
                <Card key={index} className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                  <div className="p-6 flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/15 to-orange-600/5 border border-orange-500/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.label}</h3>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
              
              <div className="flex flex-wrap gap-4 pt-4">
                <ShimmerButton className="shadow-lg" background="rgba(255,153,51, 1)">
                  <span className="text-sm font-medium text-black">WhatsApp Us</span>
                </ShimmerButton>
                
                <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                
                <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5">
                  <MapPin className="w-4 h-4 mr-2" />
                  Visit Us
                </Button>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden h-[350px] sm:h-[400px] lg:h-[500px]">
              <iframe 
                src={"https://www.google.com/maps?q=" + encodeURIComponent("domnesti, ilfov") + "&output=embed"} 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/[0.05] py-8 pb-32">
        <Separator />
        <div className="max-w-6xl mx-auto px-6 sm:px-8 mt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © {new Date().getFullYear()} Darivet. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a href="https://instagram.com/darivet" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-orange-500/10 transition-colors">
              <Instagram className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </footer>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block"><ProgressiveBlur position="bottom" height="250px" /></div><div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden"><ProgressiveBlur position="bottom" height="150px" /></div>
    </>
  );
}
