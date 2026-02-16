"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Turnstile } from '@marsidev/react-turnstile';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    budget: '',
    message: '',
    turnstileToken: '',
    website: '', // Honeypot field
  });

  const [loading, setLoading] = useState(false);
  const [formMessage, setFormMessage] = useState<{ text: string; type: 'success' | 'error' | '' }>({ text: '', type: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: typeof formData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTurnstileVerify = (token: string) => {
    setFormData((prevData: typeof formData) => ({
      ...prevData,
      turnstileToken: token,
    }));
  };

  const showMessage = (text: string, type: 'success' | 'error') => {
    setFormMessage({ text, type });
    if (type === 'success') {
      setTimeout(() => {
        setFormMessage({ text: '', type: '' });
      }, 5000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormMessage({ text: '', type: '' });

    const { name, email, subject, message, phone, budget, turnstileToken, website } = formData;

    // Basic form validation
    if (!name || !email || !subject || !message) {
      showMessage('Prosím vyplňte všechna povinná pole.', 'error');
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^S@]+@[^S@]+\.[^S@]+$/;
    if (!emailRegex.test(email)) {
      showMessage('Prosím zadejte platný email.', 'error');
      setLoading(false);
      return;
    }

    // Turnstile validation
    if (!turnstileToken) {
      showMessage('Prosím, potvrďte, že nejste robot.', 'error');
      setLoading(false);
      return;
    }

    let fullMessage = `${message}\n\n`;
    if (phone) fullMessage += `Phone: ${phone}\n`;
    if (budget) fullMessage += `Budget: ${budget}\n`;
    fullMessage += `Project Type: ${subject}`;

    const payload = {
      name: name,
      email: email,
      message: fullMessage,
      turnstileToken: turnstileToken,
      website: website, // Include honeypot in payload
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        showMessage(data.message || 'Děkujeme! Vaše zpráva byla úspěšně odeslána.', 'success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          budget: '',
          message: '',
          turnstileToken: '',
          website: '',
        });
        // Reset turnstile here if needed, but the component might handle it
      } else {
        showMessage(data.error || 'Nastala chyba při odesílání zprávy.', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      showMessage('❌ Nastala chyba při odesílání zprávy. Zkuste to prosím později nebo nás kontaktujte telefonicky na +421 908 507 131.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-form-section py-20 relative z-40">
      <div className="container">
        <div className="contact-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="contact-text">
            <h2 className="heading-section text-white mb-6 text-left">Máte nápad? Pojďme na to!</h2>
            <p className="text-gray-light mb-8">Máte projekt v hlavě? Napište nám a my vám vytvoříme řešení přesně na míru s bezplatnou konzultací.</p>

            <div className="contact-person-box flex items-center bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[15px] hover:-translate-y-1 transition-transform duration-300">
              <div className="contact-person-info">
                <h4 className="text-white text-lg font-bold">Peter Samuel Bobák</h4>
                <p className="text-gray-light text-sm mb-1">Jednatel</p>
                <a href="tel:+421908507131" className="text-accent-teal hover:underline text-sm font-bold">+421 908 507 131</a>
              </div>
            </div>
          </div>

          <form id="contact-form" className="contact-form bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[20px]" onSubmit={handleSubmit}>
            {/* Honeypot Field - Invisible to users, visible to bots */}
            <div className="hidden absolute opacity-0 -z-10 h-0 w-0 overflow-hidden">
              <label htmlFor="website">Webstránka</label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="name" className="block text-white text-sm font-bold mb-2">Jméno *</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full py-3 px-4 text-white bg-[#383a3c] border border-white/20 rounded-[10px] focus:outline-none focus:border-accent-teal transition-colors"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full py-3 px-4 text-white bg-[#383a3c] border border-white/20 rounded-[10px] focus:outline-none focus:border-accent-teal transition-colors"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="phone" className="block text-white text-sm font-bold mb-2">Telefon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+420 XXX XXX XXX"
                className="w-full py-3 px-4 text-white bg-[#383a3c] border border-white/20 rounded-[10px] focus:outline-none focus:border-accent-teal transition-colors"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="subject" className="block text-white text-sm font-bold mb-2">Typ projektu *</label>
              <select
                id="subject"
                name="subject"
                className="w-full py-3 px-4 text-white bg-[#383a3c] border border-white/20 rounded-[10px] focus:outline-none focus:border-accent-teal transition-colors appearance-none"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="" className="bg-dark-gray">Vyberte typ projektu</option>
                <option value="website" className="bg-dark-gray">Webová stránka</option>
                <option value="eshop" className="bg-dark-gray">E-shop</option>
                <option value="web-application" className="bg-dark-gray">Webová aplikace</option>
                <option value="marketing" className="bg-dark-gray">Digitální marketing</option>
                <option value="design" className="bg-dark-gray">UI/UX design</option>
                <option value="custom" className="bg-dark-gray">Vývoj na míru</option>
                <option value="other" className="bg-dark-gray">Jiné</option>
              </select>
            </div>

            <div className="form-group mb-4">
              <label htmlFor="budget" className="block text-white text-sm font-bold mb-2">Rozpočet</label>
              <select
                id="budget"
                name="budget"
                className="w-full py-3 px-4 text-white bg-[#383a3c] border border-white/20 rounded-[10px] focus:outline-none focus:border-accent-teal transition-colors appearance-none"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="" className="bg-dark-gray">Vyberte rozpočet</option>
                <option value="under-1000" className="bg-dark-gray">Do 1 000 €</option>
                <option value="1000-3000" className="bg-dark-gray">1 000 - 3 000 €</option>
                <option value="3000-5000" className="bg-dark-gray">3 000 - 5 000 €</option>
                <option value="5000-10000" className="bg-dark-gray">5 000 - 10 000 €</option>
                <option value="over-10000" className="bg-dark-gray">Nad 10 000 €</option>
              </select>
            </div>

            <div className="form-group mb-4">
              <label htmlFor="message" className="block text-white text-sm font-bold mb-2">Popis projektu *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Popište svůj projekt, cíle a požadavky..."
                className="w-full py-3 px-4 text-white bg-[#383a3c] border border-white/20 rounded-[10px] focus:outline-none focus:border-accent-teal transition-colors"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="cf-turnstile mb-6">
              <Turnstile siteKey="0x4AAAAAACGYZibBgl0bkqM2" onSuccess={handleTurnstileVerify} />
            </div>

            {formMessage.text && (
              <div
                className={`form-message mb-4 p-3 rounded text-sm ${formMessage.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
              >
                {formMessage.text}
              </div>
            )}

            <button type="submit" className="btn btn-primary w-full rounded-none uppercase font-bold tracking-wider hover:-translate-y-1 transition-transform duration-300" disabled={loading}>
              <span className="btn-text-container">
                <span className="btn-text btn-text-visible">{loading ? <span className="spinner mr-2"></span> : ''} Odeslat zprávu</span>
                <span className="btn-text btn-text-hidden">ODESLAT</span>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
