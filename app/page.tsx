"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Timeline } from "@/components/ui/timeline";
import { PinContainer } from "@/components/ui/3d-pin";
import { Menu, X, Send } from "lucide-react";
import Image from 'next/image';
import { useState } from "react";
import Link from "next/link";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../components/ui/animated-modal";
import { motion } from "framer-motion";

// const testimonials = [
//   {
//     quote: "This product has transformed our business operations!",
//     name: "Sarah Johnson",
//     title: "CEO at TechCorp",
//   },
//   {
//     quote: "The best solution we've found in the market.",
//     name: "Michael Chen",
//     title: "CTO at InnovateLabs",
//   },
//   {
//     quote: "Incredible user experience and customer support.",
//     name: "Emily Rodriguez",
//     title: "Product Manager at StartupX",
//   },
//   {
//     quote: "Game-changing features and reliability.",
//     name: "David Kim",
//     title: "Director at FutureTech",
//   },
// ];

const timelineItems = [
  {
    title: "Registration Starts",
    description: "Registration for the IPL Auction starts. Don't miss your chance to be part of this exciting event!",
    date: "23 January 2025",
  },
  {
    title: "Elimination Round",
    description: "The Elimination Round will be conducted on this day. The details will be communicated to the registered teams.",
    date: "2 February 2025",
  },
  {
    title: "Mega Auction",
    description: "The details of Mega Auction will be communicated to the qualified teams. Get ready for the main event!",
    date: "8 February 2025",
  },
];

const services = [
  {
    title: "Virat Kohli",
    // description: "Create stunning, responsive websites that drive results",
    image:"",
  },
  {
    title: "M.S. Dhoni",
    // description: "Build native and cross-platform mobile applications",
    image:"",
  },
  {
    title: "Rohit Sharma",
    // description: "Design beautiful and intuitive user interfaces",
    // gradient: "from-green-500 via-emerald-500 to-teal-500",
  },
  {
    title: "Jasprit Bumrah",
    // description: "Scalable cloud infrastructure and services",
    // gradient: "from-blue-500 via-cyan-500 to-indigo-500",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="https://www.ecellvnit.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fecell-white-img.3d650b84.png&w=256&q=75" alt="Ecell" className="h-[50px]"/>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Timeline</a>
              <a href="https://drive.google.com/file/d/1AvllXGaK-xc_Zugb9rXtSs-sOasrZUVd/view?usp=drivesdk" className="text-foreground hover:text-primary transition-colors">Brochure</a>
              <a href="https://drive.google.com/file/d/1qJGjWXlsEkOMpSvvScFBa3TqqekuwUtt/view" className="text-foreground hover:text-primary transition-colors">Rule Book</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Contact us</a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">About</a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Timeline</a>
              <a href="https://drive.google.com/file/d/1AvllXGaK-xc_Zugb9rXtSs-sOasrZUVd/view?usp=drivesdk" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Brochure</a>
              <a href="https://drive.google.com/file/d/1qJGjWXlsEkOMpSvvScFBa3TqqekuwUtt/view" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Rule Book</a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Contact us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-4 sm:px-6 lg:px-8">
  <div className="absolute inset-0 -z-10">
    <iframe src="https://drive.google.com/file/d/1gAAtocYz9YuDXUF0LOSqu1mSsBgD3jcO/preview" width="100%" height="100%" allow="autoplay"></iframe>
  </div>

  <div className="max-w-7xl mx-auto text-center relative z-10">
    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-yellow-500 to-secondary mb-8">
      IPL AUCTION
    </h1>
    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
      Join the bidding frenzy and score your ultimate dream team
    </p>
    <p className="text-5xl md:text-3xl text-foreground mb-8 max-w-5xl mx-auto">
      PRIZES WORTH ₹11K
    </p>

    <Modal>
      <ModalTrigger className="bg-[#FFD700] text-black flex justify-center items-center mx-auto px-8 py-4 rounded-full relative overflow-hidden group">
        <span className="group-hover:translate-x-40 text-black text-center transition duration-500">
          Register Now
        </span>
        <div className="-translate-x-40 group-hover:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          <span className="text-black">Register Now</span>
        </div>
      </ModalTrigger>
    </Modal>
  </div>
</section>



      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4">
  <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-8 lg:space-y-0">
    <div className="flex-shrink-0">
      <img 
        src="https://cdn.dribbble.com/userupload/12577136/file/original-a7342998955ebb104c997ad81f862082.gif" 
        alt="trophy" 
        className="h-[20rem] w-full max-w-[40rem] object-cover rounded-xl"
      />
    </div>
    <div className="text-center lg:text-left">
      <h2 className="text-5xl font-bold text-center text-[#FFD700] mb-12">About IPL Auction</h2>
      <h3 className="text-2xl font-semibold mb-4">
        Unleash the thrill of the game, bid for your champions at the IPL auction.
      </h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        The IPL Auction, hosted by the Entrepreneurship Cell at VNIT Nagpur, is a thrilling event where every bid counts and every player has the opportunity to shine. It offers participants an exciting platform to experience the magic of cricket, as the world’s best players compete in the auction block. The event challenges participants to leverage their cricketing knowledge and strategic thinking to assemble the strongest possible team.
      </p>
      <p className="text-lg text-gray-700 mt-4 leading-relaxed">
        The atmosphere is electric, with team leaders and cricket enthusiasts employing their analytical prowess—ranging from player performance predictions to budget management—to curate their dream team. It's not just an auction, but an experience where strategic minds come together to create winning combinations, testing both intellect and passion for the game.
      </p>
    </div>
  </div>
</div>


      </section>

      
{/* 3D Cards Section */}
<section className="py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">Glimpse to the Deck</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <PinContainer key={index} title={service.title}>
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem] 
                          rounded-lg hover:scale-105 transition-transform duration-300 bg-gray-900 relative">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              {service.title}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal text-slate-500">
              {service.description}
            </div>
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundImage: `url(${service.image})` }}
            />
          </div>
        </PinContainer>
      ))}
    </div>
  </div>
</section>


      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Event Timeline</h2>
          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1c1c1c] text-white text-center">
      <div className="px-4 pt-16 pb-6 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex flex-col items-center">
              <Image src="https://www.ecellvnit.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fecell-white-img.3d650b84.png&w=256&q=75" width={150} height={180} alt="logo" />
              <div className="max-w-xs scale-125 text-sm mt-4 text-[12px] text-white">
                E-Cell office, 1st Floor VNIT Canteen, Visvesvaraya National
                Institute Of Technology, South Ambazari Road, Abhyankar Nagar,
                Nagpur-440010
              </div>
            </div>
            <div className="flex mt-8 space-x-6 text-gray-600 justify-center">
              <Link
                className="hover:opacity-75"
                href="https://m.facebook.com/vnitecell/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>
                <svg
                  className="w-6 h-6"
                  fill="white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                className="hover:opacity-75"
                href="https://www.instagram.com/ecellvnit/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>
                <svg
                  className="w-6 h-6"
                  fill="white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                className="hover:opacity-75"
                href="https://twitter.com/ecell_vnit"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Twitter </span>
                <svg
                  className="w-6 h-6"
                  fill="white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link
                className="hover:opacity-75"
                href="https://www.linkedin.com/company/theentrepreneurshipcellvnit/mycompany/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> LinkedIn </span>

                <svg
                  className="w-6 h-6"
                  fill="white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
              <Link
                className="hover:opacity-75"
                href="https://www.youtube.com/channel/UC0KNOmODhqLcEpcfN9qEsIQ"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  className="w-6 h-6"
                  fill="white"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 lg:grid-cols-3 md:scale-90 lg:scale-95 xl:scale-100">
            <div>
              <p className="font-semibold text-lg xl:text-xl">Organisation</p>
              <nav className="flex flex-col text-base xl:text-lg mt-4 space-y-2 text-white">
                <a
                  className="hover:opacity-75"
                  href="https://www.ecellvnit.org/#about"
                >
                  {" "}
                  About E-Cell{" "}
                </a>
                <a
                  className="hover:opacity-75"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.ecellvnit.org/team.php"
                >
                  {" "}
                  Meet the Team{" "}
                </a>
                <a
                  className="hover:opacity-75"
                  target="_blank"
                  rel="noreferrer"
                  href="https://consortium.ecellvnit.org/"
                >
                  {" "}
                  Consortium&apos;25{" "}
                </a>
                <a
                  className="hover:opacity-75"
                  target="_blank"
                  rel="noreferrer"
                  href="https://consortium.ecellvnit.org/events.php"
                >
                  {" "}
                  Past Events{" "}
                </a>
              </nav>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="font-bold text-lg xl:text-xl">
                In case of any query contact
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-base xl:text-lg text-white">
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <span><a href="https://wa.me/8795925342">Sushant Pandey </a><br /><a href="https://wa.me/9359180922">Pranav Jadhav</a></span>
                </div>
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <span><a href="https://wa.me/8795925342">+91 8795925342</a><br/><a href="https://wa.me/9359180922">+91 9359180922</a></span>
                </div>
              </nav>
            </div>
            <div>
              <p className="font-medium"></p>
              <nav className="flex flex-col space-y-2 text-base xl:text-lg text-white">
                <a
                  className="hover:opacity-75"
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:contact@ecellvnit.org"
                >
                  {" "}
                  For Queries and Details <br />
                  <strong>consortium@ecellvnit.co.in</strong>
                </a>
                <a
                  className="hover:opacity-75"
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:corporateaffairs@ecellvnit.co.in"
                >
                  {" "}
                  For Association and Sponsorship:
                  <br /> <strong>corporateaffairs@ecellvnit.co.in</strong>
                </a>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-lg text-white">
          ©<span className="text-red-500">{} E-CELL VNIT</span>
          {} All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  );
}