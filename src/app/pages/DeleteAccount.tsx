import { useState } from 'react';
import { motion } from 'motion/react';
import { Trash2, CheckCircle, ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import logoImage from '../../assets/4a9624082f88022b3b9e2dd97399c82295546063.png'
import proVisionLogo from '../../assets/05124951fcb5259cdcb135c8fd28e4c0b482b735.png';
import koraLogo from '../../assets/63c61ffe1432d46c5b3abec1a575b5f31d6b2fa8.png';

export default function DeleteAccount() {
  const [formData, setFormData] = useState({
    email: '',
    userId: '',
    reason: '',
    confirmation: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend API
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-500 via-red-500 to-green-600 flex items-center justify-center p-6">
        <motion.div 
          className="bg-white rounded-3xl p-12 max-w-2xl w-full text-center shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          </motion.div>
          
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            REQUEST SUBMITTED!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Your account deletion request has been received. Our team will process your request within 7-10 business days.
            You will receive a confirmation email once your account and data have been permanently deleted.
          </p>
          
          <Link to="/">
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 px-8 py-6 rounded-full text-xl font-black shadow-xl flex items-center gap-3 mx-auto">
              <ArrowLeft className="w-6 h-6" />
              BACK TO HOME
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 via-red-500 to-green-600">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
            <img src={logoImage} alt="Mama Putt Logo" className="w-16 h-16 md:w-20 md:h-20" />
            <span className="text-2xl md:text-3xl font-black text-white hidden sm:block">MAMA PUTT</span>
          </Link>
          <Link to="/">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-2 rounded-full font-black shadow-lg flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              BACK
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
            >
              <Trash2 className="w-20 h-20 text-white mx-auto mb-4" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3 drop-shadow-lg">
              DELETE ACCOUNT
            </h1>
            <p className="text-xl text-yellow-200">
              We're sad to see you go!
            </p>
          </div>

          {/* Form Section */}
          <div className="p-8 md:p-12">
            {/* Privacy Notice */}
            <motion.div 
              className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-8 flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Shield className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-black text-gray-900 mb-2">Your Privacy Matters</h3>
                <p className="text-sm text-gray-600">
                  Submitting this form will initiate the deletion of your Mama Putt account and all associated data, including:
                  game progress, achievements, purchases, and personal information. This action is permanent and cannot be undone.
                </p>
              </div>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <label className="block font-black text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-lg"
                />
                <p className="text-sm text-gray-500 mt-2">Enter the email associated with your account</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <label className="block font-black text-gray-900 mb-2">
                  User ID or Username (Optional)
                </label>
                <input
                  type="text"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  placeholder="Your in-game username or User ID"
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-lg"
                />
                <p className="text-sm text-gray-500 mt-2">Help us locate your account faster</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <label className="block font-black text-gray-900 mb-2">
                  Reason for Deletion (Optional)
                </label>
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-lg mb-4"
                >
                  <option value="">Select a reason...</option>
                  <option value="no_longer_playing">No longer playing the game</option>
                  <option value="privacy_concerns">Privacy concerns</option>
                  <option value="switching_account">Switching to a different account</option>
                  <option value="technical_issues">Technical issues</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  name="confirmation"
                  value={formData.confirmation}
                  onChange={handleChange}
                  placeholder="Additional comments (optional)"
                  rows={4}
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-lg resize-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6"
              >
                <h4 className="font-black text-gray-900 mb-3">⚠️ Important Notice</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• All game progress will be permanently deleted</li>
                  <li>• In-app purchases and currency will be lost</li>
                  <li>• This action cannot be reversed</li>
                  <li>• Processing may take 7-10 business days</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link to="/" className="flex-1">
                  <Button 
                    type="button"
                    className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300 px-8 py-6 rounded-full text-xl font-black shadow-lg"
                  >
                    CANCEL
                  </Button>
                </Link>
                <Button 
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 px-8 py-6 rounded-full text-xl font-black shadow-lg flex items-center justify-center gap-3"
                >
                  <Trash2 className="w-6 h-6" />
                  SUBMIT REQUEST
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>

        {/* Developer Info */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-white text-sm mb-4">Questions? Contact our support team</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl flex items-center gap-2">
              <img src={proVisionLogo} alt="Pro Vision Innovations" className="w-6 h-6" />
              <span className="text-black font-black text-sm">PRO VISION</span>
            </div>
            <span className="text-yellow-300 font-black">×</span>
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl flex items-center gap-2">
              <img src={koraLogo} alt="Kora Interactive" className="w-6 h-6" />
              <span className="text-black font-black text-sm">KORA INTERACTIVE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
