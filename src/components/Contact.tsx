
import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-navy-dark">Get In Touch</h2>
          <div className="w-20 h-1 bg-teal mb-6 rounded"></div>
          <p className="text-gray-600 max-w-2xl text-center">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-navy-dark">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                I'm currently available for freelance work or full-time positions. Let's connect and discuss how I can contribute to your projects.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="text-teal mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-navy-dark">Email</h4>
                <a href="mailto:john.doe@example.com" className="text-gray-600 hover:text-teal transition-colors">
                  john.doe@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-teal mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-navy-dark">Phone</h4>
                <a href="tel:+1234567890" className="text-gray-600 hover:text-teal transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="text-teal mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-navy-dark">Location</h4>
                <p className="text-gray-600">
                  San Francisco, California
                </p>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-semibold text-navy-dark mb-2">Availability</h4>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md inline-block">
                Available for new projects
              </div>
            </div>
          </div>

          <div className="md:col-span-3 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6 text-navy-dark">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-none"
                ></textarea>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
