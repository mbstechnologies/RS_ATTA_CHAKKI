import { siteConfig } from '../data/siteConfig';

/**
 * Creates a prefilled WhatsApp link for direct ordering or product inquiry
 */
export const createWhatsAppOrderLink = ({
  cartItems = [],
  singleProduct = null,
  customerInfo = null
}) => {
  let message = `*Hello ${siteConfig.brandName}! Pre-Booking for Store Pickup*\n\n`;

  if (singleProduct) {
    message += `📦 *Product:* ${singleProduct.name}\n`;
    message += `⚖️ *Pack Size:* ${singleProduct.selectedSize || (singleProduct.sizes && singleProduct.sizes[0]?.weight) || ''}\n\n`;
  } else if (cartItems.length > 0) {
    message += `🛒 *Pre-Booked Items for Pickup:*\n`;
    let total = 0;
    cartItems.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      message += `${index + 1}. ${item.name} (${item.size}) x ${item.quantity} = ₹${itemTotal}\n`;
    });
    message += `\n💵 *Total Price:* ₹${total}\n\n`;
  }

  if (customerInfo) {
    message += `👤 *Customer Name:* ${customerInfo.name || 'Not specified'}\n`;
    message += `📞 *Phone Number:* ${customerInfo.phone || 'Not specified'}\n`;
    if (customerInfo.pickupTime) {
      message += `⏰ *Pickup Time:* ${customerInfo.pickupTime}\n`;
    }
    if (customerInfo.notes) {
      message += `📝 *Notes:* ${customerInfo.notes}\n`;
    }
    message += `\n`;
  }

  message += `Please keep this freshly ground flour ready for store pickup. Thank you! 🙏`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
};
