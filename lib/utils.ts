import { type ClassValue, clsx } from 'clsx';

// Utility para combinar clases de Tailwind
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Formatear precio en pesos colombianos
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Generar enlace de WhatsApp
export function generateWhatsAppLink(phone: string, message?: string): string {
  const baseUrl = 'https://wa.me/';
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : '';
  return `${baseUrl}${cleanPhone}${encodedMessage}`;
}

// Formatear número de teléfono con espacios visuales
export function formatPhoneNumber(phone: string): string {
  // Remover todos los caracteres no numéricos excepto el +
  const cleaned = phone.replace(/[^\d+]/g, '');
  
  // Si tiene código de país (+57)
  if (cleaned.startsWith('+57')) {
    const number = cleaned.substring(3); // Quitar +57
    // Formatear: +57 315 065 9315
    return `+57 ${number.substring(0, 3)} ${number.substring(3, 6)} ${number.substring(6)}`;
  }
  
  // Si no tiene +, asumir que es número colombiano
  if (cleaned.length === 10) {
    // Formatear: 315 065 9315
    return `${cleaned.substring(0, 3)} ${cleaned.substring(3, 6)} ${cleaned.substring(6)}`;
  }
  
  // Si tiene 12 dígitos (código de país sin +)
  if (cleaned.length === 12) {
    return `${cleaned.substring(0, 2)} ${cleaned.substring(2, 5)} ${cleaned.substring(5, 8)} ${cleaned.substring(8)}`;
  }
  
  // Devolver original si no coincide con ningún formato
  return phone;
}

// Delay para animaciones
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
