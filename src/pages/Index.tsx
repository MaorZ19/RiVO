import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
        <section className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary mb-6">
              Lead to your
              <br />
              <span className="bg-gradient-to-r from-[#0EA5E9] to-[#33C3F0] bg-clip-text text-transparent">
                Target Market
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-secondary mb-8">
              RiVO is a cutting-edge lead generation service designed to simplify and transform how businesses, professionals, and job seekers connect and grow on LinkedIn.
            </p>
            <p className="mx-auto max-w-2xl text-lg text-secondary mb-8">
              Whether you're a sales team looking to boost conversions, a small business expanding your client base, or a professional pursuing career advancement, RiVO is here to help you define your target market, connect, engage, and thrive in today's digital world.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="mailto:info@rivo.co.il"
                className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              >
                Get Started
              </a>
              <Link 
                to="/about" 
                className="px-6 py-3 glass rounded-full hover:bg-white/20 transition-colors flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-16">
            <div className="flex justify-center">
              <img
                src="https://i.ibb.co/jJZyxSj/newrivo.webp"
                alt="Hero"
                className="rounded-3xl shadow-2xl max-w-[90%] w-auto h-auto"
              />
            </div>
          </div>

        </section>

      {/* Features Section */}
      <section className="py-24 bg-surface px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-16">Features designed for you</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Targeted Leads According to Profile",
                description: "Filter leads based on job title, company type, country, and more with monthly optimization through A/B testing",
                icon: "🎯",
              },
              {
                title: "Easy and Fast to Use",
                description: "Plug & Play system with advanced management services and cutting-edge technology",
                icon: "⚡",
              },
              {
                title: "Availability and Accessibility",
                description: "Cloud-based technology ensures 24/7 operations from anywhere, unaffected by weekends, holidays, etc",
                icon: "🌐",
              },
              {
                title: "Analytics and Advance Reporting",
                description: "Access BI-driven analytics and detailed reporting to track lead performance, engagement metrics, and campaign ROI",
                icon: "📊",
              },
              {
                title: "Strategy Feedback",
                description: "Get expert insights and recommendations to optimize your lead generation strategy",
                icon: "💡",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-background border border-border hover:border-accent transition-colors`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "How does Rivo help with LinkedIn lead generation?",
                  answer: "Rivo uses advanced AI tools to identify, engage, and manage potential leads on LinkedIn. From profile optimization to personalized messaging, we ensure a seamless lead generation process.",
                },
                {
                  question: "Is Rivo suitable for my business size and industry?",
                  answer: "Yes! Our services are tailored to suit businesses of all sizes and industries. We specialize in B2B solutions but can adapt to any professional need.",
                },
                {
                  question: "Can I customize the messages sent to leads?",
                  answer: "Absolutely! With Rivo, you can personalize your messages to align with your brand voice and target audience.",
                },
                {
                  question: "What kind of results can I expect?",
                  answer: "While results vary based on your goals and industry, most clients see a significant increase in connections, engagement, and potential leads within the first few weeks.",
                },
                {
                  question: "How do I get started with Rivo?",
                  answer: "Simply sign up through our website, choose a package that fits your needs, and our team will guide you through the onboarding process.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-background/50"
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        activeAccordion === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeAccordion === index && (
                    <div className="px-6 py-4 bg-background/50">
                      <p className="text-secondary">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* CTA Section */}
        <section className="py-24 bg-primary text-white px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-8">Ready to Get Started with Rivo?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Your journey to smarter LinkedIn lead generation begins here.
            </p>
            <a 
              href="mailto:info@rivo.co.il"
              className="inline-block px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors"
            >
              Join Us
            </a>
          </div>
        </section>
    </div>
  );
};

export default Index;
