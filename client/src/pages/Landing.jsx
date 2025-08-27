import { Upload, MessageCircle, FileText, CheckCircle, Camera, Zap, Shield, Users } from 'lucide-react'
import { AuroraText } from "@/components/magicui/aurora-text";
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-600 bg-gray-800/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between animate-fade-in-down">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center animate-pulse">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="font-bold text-xl text-gray-100">MedTalk</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-gray-300 hover:text-gray-100 transition-all duration-300 hover:scale-105 transform"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-gray-100 transition-all duration-300 hover:scale-105 transform"
            >
              How it Works
            </a>
            <Link to='/home' className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
        <div className="container mx-auto text-center max-w-4xl animate-fade-in-up">
          <span className="inline-flex items-center mb-6 bg-blue-600/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full text-sm hover:scale-105 transform transition-all duration-300">
            <Zap className="w-3 h-3 mr-1" />
            AI-Powered Healthcare Assistant
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-gray-100 animate-fade-in-up">
            Your AI-Powered <AuroraText>Prescription</AuroraText> Assistant
          </h1>
          <p className="text-xl text-gray-300 text-pretty mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Upload a prescription image and get instant medicine details, summaries, and conversational AI support to
            understand your medications better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link to='/home' className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg flex items-center justify-center hover:scale-105 hover:shadow-xl transform transition-all duration-300">
              <Camera className="w-5 h-5 mr-2" />
              Upload Prescription
            </Link>
            <button className="border cursor-pointer border-blue-500 text-blue-300 hover:bg-blue-600/10 bg-transparent px-6 py-3 rounded-md text-lg hover:scale-105 transform transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-700">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 text-gray-100">
              Everything You Need for <span className="text-blue-400">Prescription Management</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
              From image upload to AI-powered conversations, MedTalk simplifies understanding your medications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-600 hover:shadow-xl transition-all duration-300 bg-gray-800 hover:scale-105 hover:-translate-y-2 transform group rounded-lg p-6">
              <div className="text-center pb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-blue-600/30 group-hover:scale-110 transform">
                  <Upload className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg text-gray-100 font-semibold mb-2">Upload Prescriptions</h3>
              </div>
              <p className="text-center text-gray-300">
                Snap or upload photos of your prescriptions with our easy-to-use interface.
              </p>
            </div>

            <div className="border border-gray-600 hover:shadow-xl transition-all duration-300 bg-gray-800 hover:scale-105 hover:-translate-y-2 transform group rounded-lg p-6">
              <div className="text-center pb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-blue-600/30 group-hover:scale-110 transform">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg text-gray-100 font-semibold mb-2">OCR Extraction</h3>
              </div>
              <p className="text-center text-gray-300">
                Advanced AI automatically reads and extracts medicine names and instructions.
              </p>
            </div>

            <div className="border border-gray-600 hover:shadow-xl transition-all duration-300 bg-gray-800 hover:scale-105 hover:-translate-y-2 transform group rounded-lg p-6">
              <div className="text-center pb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-blue-600/30 group-hover:scale-110 transform">
                  <MessageCircle className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg text-gray-100 font-semibold mb-2">AI Chat Support</h3>
              </div>
              <p className="text-center text-gray-300">
                Ask questions about your medicines, usage, side effects, and interactions.
              </p>
            </div>

            <div className="border border-gray-600 hover:shadow-xl transition-all duration-300 bg-gray-800 hover:scale-105 hover:-translate-y-2 transform group rounded-lg p-6">
              <div className="text-center pb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-blue-600/30 group-hover:scale-110 transform">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg text-gray-100 font-semibold mb-2">Medicine Verification</h3>
              </div>
              <p className="text-center text-gray-300">
                Quickly verify if your purchased medicines match your prescription.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 text-gray-100">
              How <span className="text-blue-400">MedTalk</span> Works
            </h2>
            <p className="text-lg text-gray-300 text-pretty">Get started in just a few simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up delay-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 hover:shadow-lg transform transition-all duration-300 hover:bg-blue-700">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Upload Your Prescription</h3>
              <p className="text-gray-300 text-pretty">
                Take a photo or upload an image of your prescription from your device.
              </p>
            </div>

            <div className="text-center animate-fade-in-up delay-400">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 hover:shadow-lg transform transition-all duration-300 hover:bg-blue-700">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-100">AI Processes & Summarizes</h3>
              <p className="text-gray-300 text-pretty">
                Our AI extracts medicine details and creates a patient-friendly summary.
              </p>
            </div>

            <div className="text-center animate-fade-in-up delay-600">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 hover:shadow-lg transform transition-all duration-300 hover:bg-blue-700">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Chat & Get Answers</h3>
              <p className="text-gray-300 text-pretty">
                Ask questions about your medications and get instant, reliable answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/30 via-blue-700/10 to-blue-700/20">
        <div className="container mx-auto max-w-3xl text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6 text-gray-100">
            Ready to Understand Your <AuroraText>Prescriptions</AuroraText> Better?
          </h2>
          <p className="text-lg text-gray-300 mb-8 text-pretty">
            Join thousands of users who trust MedTalk for their prescription management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to='/home' className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg flex items-center justify-center hover:scale-105 hover:shadow-xl transform transition-all duration-300">
              <Camera className="w-5 h-5 mr-2" />
              Start Using MedTalk
            </Link>
            <button className="border cursor-pointer border-blue-500 text-blue-300 hover:bg-blue-600/10 bg-transparent px-6 py-3 rounded-md text-lg hover:scale-105 transform transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-600">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="font-bold text-xl text-gray-100">MedTalk</span>
          </div>
          <p className="text-gray-300 text-xs">© 2024 MedTalk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}