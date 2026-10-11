import React, { useState } from 'react';
import { Phone, MapPin, Send, ChevronDown, ChevronUp, CheckCircle, MessageSquare, MessageCircle, Mail } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { products } from '../data/products';
import { SectionHeading } from '../components/common/SectionHeading';
import { RevealSection } from '../components/animations/RevealSection';
import { validateOrderForm } from '../utils/validation';
import { createWhatsAppOrderLink } from '../utils/whatsapp';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    productId: products[0].id,
    packageSize: '5 kg',
    quantity: 1,
    deliveryType: 'pickup',
    address: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedOrderSummary, setSubmittedOrderSummary] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const selectedProductObj = products.find((p) => p.id === formData.productId) || products[0];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationResult = validateOrderForm(formData);

    if (!validationResult.isValid) {
      setErrors(validationResult.errors);
      return;
    }

    setErrors({});
    const sizePrice = selectedProductObj.sizes.find((s) => s.weight.includes(formData.packageSize.split(' ')[0]))?.price || selectedProductObj.sizes[0].price;
    const summary = {
      ...formData,
      productName: selectedProductObj.name,
      unitPrice: sizePrice,
      totalPrice: sizePrice * formData.quantity
    };

    setSubmittedOrderSummary(summary);
  };

  const handleWhatsAppSendOrder = () => {
    if (!submittedOrderSummary) return;
    const link = createWhatsAppOrderLink({
      singleProduct: {
        name: submittedOrderSummary.productName,
        selectedSize: submittedOrderSummary.packageSize,
        quantity: submittedOrderSummary.quantity,
        price: submittedOrderSummary.unitPrice
      },
      customerInfo: {
        name: submittedOrderSummary.name,
        phone: submittedOrderSummary.phone,
        address: submittedOrderSummary.address,
        deliveryType: submittedOrderSummary.deliveryType,
        notes: submittedOrderSummary.notes
      }
    });
    window.open(link, '_blank');
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 sm:pb-20 pt-20 sm:pt-28">
      {/* HERO SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealSection>
          <SectionHeading
            eyebrow="Contact & Quick Ordering"
            title="Get in Touch or Send an Order"
            description="Fill out the enquiry form or contact us via WhatsApp to order freshly ground wheat flour for your kitchen."
          />
        </RevealSection>
      </section>

      {/* QUICK CONTACT ACTION CARDS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealSection delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <a
              href={`tel:${siteConfig.phone}`}
              className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-[#F5E6B9] hover:border-[#D59B2D] transition-all flex items-center gap-3.5 hover:shadow-xl group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#4A2C11] text-white flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-[11px] sm:text-xs text-[#7A4E27] font-bold">Call Us Direct</div>
                <div className="text-sm sm:text-base font-extrabold text-[#4A2C11]">{siteConfig.phone}</div>
                <div className="text-[10px] sm:text-[11px] text-[#3D230D]/70">8:00 AM to 8:00 PM</div>
              </div>
            </a>

            <button
              onClick={() => {
                const link = createWhatsAppOrderLink({});
                window.open(link, '_blank');
              }}
              className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-[#F5E6B9] hover:border-[#25D366] transition-all flex items-center gap-3.5 hover:shadow-xl text-left group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#2E7D46] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-[11px] sm:text-xs text-[#7A4E27] font-bold">WhatsApp Chat</div>
                <div className="text-sm sm:text-base font-extrabold text-[#4A2C11]">Send Instant Order</div>
                <div className="text-[10px] sm:text-[11px] text-[#3D230D]/70">24/7 Message Ordering</div>
              </div>
            </button>

            <a
              href={`mailto:${siteConfig.email}`}
              className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-[#F5E6B9] hover:border-[#D59B2D] transition-all flex items-center gap-3.5 hover:shadow-xl group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#D59B2D] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-[11px] sm:text-xs text-[#7A4E27] font-bold">Email Support</div>
                <div className="text-xs sm:text-sm font-extrabold text-[#4A2C11] break-all">{siteConfig.email}</div>
                <div className="text-[10px] sm:text-[11px] text-[#3D230D]/70">Quick Reply Guarantee</div>
              </div>
            </a>

            <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-[#F5E6B9] flex items-center gap-3.5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#4A2C11] text-white flex items-center justify-center text-xl shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#D59B2D]" />
              </div>
              <div>
                <div className="text-[11px] sm:text-xs text-[#7A4E27] font-bold">Mill Store Location</div>
                <div className="text-xs font-bold text-[#4A2C11] leading-snug">{siteConfig.address}</div>
                <div className="text-[10px] sm:text-[11px] text-[#3D230D]/70">{siteConfig.workingHours}</div>
              </div>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ORDER ENQUIRY FORM & MAP */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-7">
            <RevealSection delay={0.2}>
              <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-[#D59B2D]/30 shadow-xl space-y-5 sm:space-y-6">
                <div className="border-b border-[#F5E6B9] pb-4">
                  <h3 className="text-2xl font-bold text-[#4A2C11]">
                    Flour Order & Enquiry Form
                  </h3>
                  <p className="text-xs text-[#7A4E27] mt-1">
                    Fill out the details below to generate a prefilled WhatsApp order summary.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#4A2C11] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full px-4 py-3 rounded-xl border bg-white/90 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#4A2C11] ${
                          errors.name ? 'border-red-500' : 'border-[#F5E6B9]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-500 font-semibold mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#4A2C11] mb-1">
                        Mobile / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="e.g. 9876543210"
                        className={`w-full px-4 py-3 rounded-xl border bg-white/90 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#4A2C11] ${
                          errors.phone ? 'border-red-500' : 'border-[#F5E6B9]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 font-semibold mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#4A2C11] mb-1">
                      Select Product *
                    </label>
                    <select
                      value={formData.productId}
                      onChange={(e) => handleInputChange('productId', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#F5E6B9] bg-white/90 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#4A2C11]"
                    >
                      {products.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} ({p.tagline})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#4A2C11] mb-1">
                        Pack Size *
                      </label>
                      <select
                        value={formData.packageSize}
                        onChange={(e) => handleInputChange('packageSize', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#F5E6B9] bg-white/90 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#4A2C11]"
                      >
                        {selectedProductObj.sizes.map((sz) => (
                          <option key={sz.weight} value={sz.weight}>
                            {sz.weight}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#4A2C11] mb-1">
                        Quantity *
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="50"
                        value={formData.quantity}
                        onChange={(e) => handleInputChange('quantity', parseInt(e.target.value) || 1)}
                        className="w-full px-4 py-3 rounded-xl border border-[#F5E6B9] bg-white/90 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#4A2C11]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#4A2C11] mb-1.5">
                      Fulfillment Method:
                    </label>
                    <div className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#4A2C11] text-white border border-[#4A2C11] flex items-center justify-between shadow-xs">
                      <span className="flex items-center gap-2">
                        <span>🏬</span>
                        <span>Store Pickup</span>
                      </span>
                      <span className="text-[10px] font-black bg-[#2E7D46] px-2 py-0.5 rounded text-white shadow-xs uppercase tracking-wider">
                        Fresh Chakki Pickup
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#4A2C11] hover:bg-[#3D230D] text-white font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 mt-2"
                  >
                    <Send className="w-5 h-5 text-[#D59B2D]" />
                    <span>Generate Order Summary</span>
                  </button>
                </form>
              </div>
            </RevealSection>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <RevealSection delay={0.3}>
              <div className="glass-card rounded-3xl p-6 border border-[#F5E6B9] shadow-md space-y-4">
                <h4 className="font-bold text-[#4A2C11] text-base flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#D59B2D]" />
                  Store Location & Map
                </h4>
                <div className="w-full h-64 rounded-2xl overflow-hidden border border-[#F5E6B9] bg-[#FFFBEB]">
                  <iframe
                    title="Chakki Location Map"
                    src={siteConfig.googleMapEmbedUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
                <div className="text-xs text-[#3D230D]/75 space-y-1">
                  <p><strong>Address:</strong> {siteConfig.address}</p>
                  <p><strong>Opening Hours:</strong> {siteConfig.workingHours}</p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealSection>
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Common Questions (FAQ)"
            description="Important answers regarding our flour products, stone grinding process, and store pickup service."
          />
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="max-w-3xl mx-auto space-y-4">
            {siteConfig.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="glass-card rounded-2xl border border-[#F5E6B9] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left font-bold text-base text-[#4A2C11] flex items-center justify-between gap-4 hover:bg-[#FFFBEB]"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#D59B2D] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#7A4E27] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#3D230D]/80 leading-relaxed border-t border-[#F5E6B9]/50 bg-white/40 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </RevealSection>
      </section>

      {/* ORDER SUMMARY CONFIRMATION MODAL */}
      {submittedOrderSummary && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-lg bg-[#FEFCE8] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl border border-[#D59B2D]/40 space-y-5 sm:space-y-6">
            <div className="text-center space-y-1.5 sm:space-y-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center text-3xl shadow">
                <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#4A2C11]">
                Order Summary Ready!
              </h3>
              <p className="text-xs text-[#7A4E27]">
                Please review the details below and click to send your order on WhatsApp.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#F5E6B9] space-y-2 text-xs text-[#3D230D]">
              <div className="flex justify-between border-b border-[#F5E6B9] pb-1.5 sm:pb-2">
                <span className="font-bold text-[#7A4E27]">Customer Name:</span>
                <span className="font-bold">{submittedOrderSummary.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#F5E6B9] pb-1.5 sm:pb-2">
                <span className="font-bold text-[#7A4E27]">Phone Number:</span>
                <span>{submittedOrderSummary.phone}</span>
              </div>
              <div className="flex justify-between border-b border-[#F5E6B9] pb-1.5 sm:pb-2">
                <span className="font-bold text-[#7A4E27]">Selected Product:</span>
                <span className="font-bold text-[#4A2C11]">{submittedOrderSummary.productName}</span>
              </div>
              <div className="flex justify-between border-b border-[#F5E6B9] pb-1.5 sm:pb-2">
                <span className="font-bold text-[#7A4E27]">Pack & Quantity:</span>
                <span>{submittedOrderSummary.packageSize} x {submittedOrderSummary.quantity} pack(s)</span>
              </div>
              <div className="flex justify-between border-b border-[#F5E6B9] pb-1.5 sm:pb-2">
                <span className="font-bold text-[#7A4E27]">Fulfillment:</span>
                <span className="font-bold text-[#2E7D46]">Store Pickup</span>
              </div>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              <button
                onClick={handleWhatsAppSendOrder}
                className="w-full py-3.5 rounded-xl bg-[#2E7D46] hover:bg-[#236337] text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Order on WhatsApp</span>
              </button>

              <button
                onClick={() => setSubmittedOrderSummary(null)}
                className="w-full py-1.5 text-center text-xs text-[#7A4E27] font-semibold hover:underline"
              >
                Edit Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
