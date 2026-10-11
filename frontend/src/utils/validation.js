/**
 * Validates Order & Contact Form in English
 */
export const validateOrderForm = (formData) => {
  const errors = {};

  // Name validation
  if (!formData.name || !formData.name.trim()) {
    errors.name = "Please enter your full name";
  } else if (formData.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters long";
  }

  // Phone validation
  const phoneRegex = /^[6-9]\d{9}$/;
  const cleanPhone = formData.phone ? formData.phone.replace(/[\s\-+]/g, '').slice(-10) : '';
  
  if (!formData.phone || !formData.phone.trim()) {
    errors.phone = "Please enter your 10-digit mobile number";
  } else if (!phoneRegex.test(cleanPhone)) {
    errors.phone = "Please enter a valid 10-digit mobile number (e.g. 9876543210)";
  }

  // Address validation if home delivery is selected
  if (formData.deliveryType === 'home') {
    if (!formData.address || !formData.address.trim()) {
      errors.address = "Please enter complete address for home delivery";
    } else if (formData.address.trim().length < 8) {
      errors.address = "Please include street, house number, and landmark";
    }
  }

  // Product selection validation
  if (!formData.productId) {
    errors.productId = "Please select a product";
  }

  // Quantity validation
  if (!formData.quantity || parseInt(formData.quantity) < 1) {
    errors.quantity = "Please select at least 1 packet";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
