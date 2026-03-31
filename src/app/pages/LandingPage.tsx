import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Download, Star, Utensils, Trophy, Users, Instagram, Twitter, Facebook, ChevronDown } from 'lucide-react';
// import { ImageWithFallback } from '../app/components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import logoImage from '../../assets/4a9624082f88022b3b9e2dd97399c82295546063.png';
// 'figma:asset/4a9624082f88022b3b9e2dd97399c82295546063.png';
import charactersImage from '../../assets/4a56363dc7fca7090b7c868781ea5462c4b3d596.png';
import mamaPuttImage from '../../assets/96252eba9cd74515b0e0bc45a4059d81fde0d7cb.png';
import gameUI1 from '../../assets/1cfb0a989560d2ededa47e921e1c25ccf1f20de6.png';
import gameUI2 from '../../assets/7d56fa1ad2ce986539a1ae7208f82e6261dba427.png';
import gameUI3 from '../../assets/1a15263c859402256e323606fbea3892f19c546a.png';
import mamaDishesImage from '../../assets/a14ccc5b18d8fe5af2ecee17d7f922395123429f.png';
import proVisionLogo from '../../assets/05124951fcb5259cdcb135c8fd28e4c0b482b735.png';
import koraLogo from '../../assets/63c61ffe1432d46c5b3abec1a575b5f31d6b2fa8.png';
export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Utensils className="w-12 h-12" />,
      title: 'Run Your Buka',
      description: 'Serve authentic Nigerian dishes to hungry customers in your own local restaurant!'
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: 'Unlock Recipes',
      description: 'From Jollof Rice to Suya, unlock and master over 50 Nigerian delicacies!'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Meet Characters',
      description: 'Help Mama Putt and her crew serve the entire neighborhood with style!'
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: 'Daily Challenges',
      description: 'Complete daily quests and special events for exclusive rewards!'
    }
  ];

  const screenshots = [
    { id: 1, alt: 'Nigerian Food Gameplay' },
    { id: 2, alt: 'Restaurant Kitchen' },
    { id: 3, alt: 'Mobile Gaming' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 via-red-500 to-green-600 overflow-hidden">
      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrollY > 50 ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
          backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <img src={logoImage} alt="Mama Putt Logo" className="w-16 h-16 md:w-20 md:h-20" />
            <span className="text-2xl md:text-3xl font-black text-white hidden sm:block">MAMA PUTT</span>
          </motion.div>
          <nav className="hidden md:flex gap-8 text-white">
            <a href="#home" className="hover:text-yellow-300 transition-colors">Home</a>
            <a href="#features" className="hover:text-yellow-300 transition-colors">Features</a>
            <a href="#characters" className="hover:text-yellow-300 transition-colors">Characters</a>
            <a href="#download" className="hover:text-yellow-300 transition-colors">Download</a>
          </nav>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-2 rounded-full font-black shadow-lg">
            PLAY NOW
          </Button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-3xl"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-green-400 rounded-full opacity-20 blur-3xl"
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-sm md:text-base text-yellow-300 font-black">A PRODUCTION BY</span>
              <motion.div 
                className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <img src={proVisionLogo} alt="Pro Vision Innovations" className="w-8 h-8" />
                <span className="text-black font-black text-xs md:text-sm">PRO VISION</span>
              </motion.div>
              <span className="text-yellow-300 font-black">×</span>
              <motion.div 
                className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <img src={koraLogo} alt="Kora Interactive" className="w-8 h-8" />
                <span className="text-black font-black text-xs md:text-sm">KORA INTERACTIVE</span>
              </motion.div>
            </motion.div>
            
            <motion.img 
              src={logoImage}
              alt="Mama Putt Logo"
              className="w-64 h-64 md:w-80 md:h-80 mx-auto lg:mx-0 mb-6"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.p 
              className="text-xl md:text-2xl text-white mb-8 max-w-xl mx-auto lg:mx-0 drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Cook, serve, and hustle your way to becoming the most famous Buka in Lagos! 
              Serve delicious Nigerian dishes and build your restaurant empire!
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 px-10 py-6 rounded-full text-xl font-black shadow-2xl flex items-center gap-3 transform hover:scale-105 transition-transform">
                <Play className="w-6 h-6 fill-current" />
                PLAY NOW
              </Button>
              <Button className="bg-white text-black hover:bg-gray-100 px-10 py-6 rounded-full text-xl font-black shadow-2xl flex items-center gap-3 transform hover:scale-105 transition-transform">
                <Download className="w-6 h-6" />
                DOWNLOAD
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.img 
              src={mamaPuttImage}
              alt="Mama Putt Character"
              className="w-full max-w-md mx-auto drop-shadow-2xl"
              animate={{
                y: [0, -15, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-full px-6 py-3"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <p className="text-white font-black text-2xl">MAMA PUTT</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-12 h-12 text-white opacity-70" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-green-600 to-yellow-500 relative">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-center text-white mb-16 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            GAME FEATURES
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="text-orange-500 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-center mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-20 bg-gradient-to-b from-yellow-500 to-purple-600 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-center text-white mb-8 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            MEET THE CREW
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-center text-yellow-200 mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Join Mama Putt and her colorful team of helpers as you serve the neighborhood!
          </motion.p>

          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.img 
              src={charactersImage}
              alt="Game Characters"
              className="w-full rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {['Oga Ade', 'Ogbuefi', 'Iya Philo', 'Oga Yusuf (BIG)'].map((name, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-white font-black text-lg">{name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery/Screenshots Section */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-purple-600 to-red-500 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-center text-white mb-16 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            GAMEPLAY PREVIEW
          </motion.h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Main Game Screen */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={gameUI2}
                alt="Main Game Screen"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                <p className="text-white text-2xl font-black">Start Cooking in Mama's Kitchen!</p>
              </div>
            </motion.div>

            {/* Grid of other UI screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={gameUI1}
                  alt="Game Banner"
                  className="w-full"
                />
              </motion.div>

              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={gameUI3}
                  alt="Level Selection"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <p className="text-white text-xl font-black">30 Exciting Levels!</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mama's Dishes Section */}
      <section className="py-20 bg-gradient-to-b from-red-500 to-orange-500 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-center text-white mb-8 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            MAMA'S DELICIOUS DISHES
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-center text-yellow-200 mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            From Jollof Rice to Suya, cook and serve authentic Nigerian cuisine!
          </motion.p>

          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={mamaDishesImage}
              alt="Mama Putt with Dishes"
              className="w-full rounded-3xl"
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {['Jollof Rice', 'Fried Plantain', 'Suya', 'Pounded Yam'].map((dish, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-white font-black text-lg">{dish}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="py-32 bg-gradient-to-b from-red-500 to-orange-600 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
          }}
        />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.img 
            src={logoImage}
            alt="Mama Putt Logo"
            className="w-40 h-40 mx-auto mb-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            animate={{
              rotate: [0, 10, -10, 0]
            }}
          />
          
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-white mb-8 drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            READY TO PLAY?
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-yellow-200 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Join millions of players worldwide! Download Mama Putt now and start your restaurant journey!
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button className="bg-black text-white hover:bg-gray-900 px-12 py-8 rounded-full text-2xl font-black shadow-2xl transform hover:scale-105 transition-transform flex items-center gap-4">
              <Download className="w-8 h-8" />
              App Store
            </Button>
            <Button className="bg-black text-white hover:bg-gray-900 px-12 py-8 rounded-full text-2xl font-black shadow-2xl transform hover:scale-105 transition-transform flex items-center gap-4">
              <Download className="w-8 h-8" />
              Google Play
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 flex justify-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.2 }} className="text-white">
              <Instagram className="w-10 h-10 cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="text-white">
              <Twitter className="w-10 h-10 cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="text-white">
              <Facebook className="w-10 h-10 cursor-pointer" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logoImage} alt="Mama Putt Logo" className="w-12 h-12" />
                <h3 className="text-2xl font-black text-yellow-400">MAMA PUTT</h3>
              </div>
              <p className="text-gray-400 mb-4">
                The most delicious restaurant game in Africa!
              </p>
              <div className="space-y-2">
                <p className="text-xs text-gray-500">DEVELOPED BY</p>
                <div className="flex items-center gap-2 mb-2">
                  <img src={proVisionLogo} alt="Pro Vision Innovations" className="w-6 h-6" />
                  <p className="text-sm font-black text-yellow-400">PRO VISION INNOVATIONS</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={koraLogo} alt="Kora Interactive" className="w-6 h-6" />
                  <p className="text-sm font-black text-yellow-400">KORA INTERACTIVE</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-black mb-4">GAME</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Characters</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Updates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4">SUPPORT</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4">LEGAL</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Cookie Policy</a></li>
                <li><Link to="/delete-account" className="hover:text-yellow-400 transition-colors">Delete Account</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 mb-2">&copy; 2026 Mama Putt. All rights reserved. Made with ❤️ in Nigeria</p>
            <p className="text-xs text-gray-500">
              A production by <span className="text-yellow-400 font-black">Kora Interactive</span> × <span className="text-yellow-400 font-black">Pro Vision Innovations</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}