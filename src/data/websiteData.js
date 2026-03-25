import { FaBuilding, FaHome, FaDraftingCompass, FaHardHat, FaPalette, FaCity } from 'react-icons/fa';

export const services = [
  {
    title: "Architectural Design",
    description: "Innovative and functional designs that push boundaries while maintaining structural integrity.",
    icon: FaBuilding,
  },
  {
    title: "Interior Design",
    description: "Creating bespoke interior spaces that reflect luxury, comfort, and sophisticated style.",
    icon: FaPalette,
  },
  {
    title: "Urban Planning",
    description: "Developing sustainable urban environments that harmonize with their surroundings.",
    icon: FaCity,
  },
  {
    title: "3D Visualization",
    description: "Photorealistic 3D rendering and walkthroughs to bring your vision to life before construction.",
    icon: FaDraftingCompass,
  },
  {
    title: "Project Management",
    description: "End-to-end management from groundbreaking to handover, ensuring quality and timelines.",
    icon: FaHardHat,
  },
  {
    title: "Renovation & Restoration",
    description: "Expertly restoring heritage buildings and modernizing aging structures.",
    icon: FaHome,
  },
];

export const projects = [
  {
    id: 1,
    title: "The Golden Pavilion",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
  },
  {
    id: 2,
    title: "Azure Residences",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
  },
  {
    id: 3,
    title: "Modernist Loft",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000",
  },
  {
    id: 4,
    title: "Skyline Corporate Hub",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
  },
  {
    id: 5,
    title: "Sustainable Villa",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071",
  },
  {
    id: 6,
    title: "Luxe Penthouse",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Jonathan Reeder",
    role: "CEO, Nexo Build",
    text: "ArchVision Studio transformed our vision into a breathtaking reality. Their attention to detail and commitment to sustainability is unmatched.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Property Developer",
    text: "Working with the team was a seamless experience. They managed to blend modern aesthetics with functional requirements perfectly.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Private Homeowner",
    text: "The interior design services provided by ArchVision are truly world-class. Each room feels unique and premium.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070",
    rating: 5,
  },
];

export const stats = [
  { label: "Projects Completed", value: "50+", delay: 0 },
  { label: "Years Experience", value: "10+", delay: 0.1 },
  { label: "Happy Clients", value: "200+", delay: 0.2 },
  { label: "Awards Won", value: "15", delay: 0.3 },
];
