export class Formatters {
  static formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  }

  static formatDate(date) {
    return new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  }

  static formatShortDate(date) {
    return new Intl.DateTimeFormat('pt-BR', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    }).format(date);
  }

  static truncateText(text, maxLength = 100) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + '...';
  }

  static capitalizeFirst(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  static pluralize(count, singular, plural) {
    return count === 1 ? singular : plural;
  }

  static getStockStatus(quantity) {
    if (quantity === 0) return '❌ Indisponível';
    if (quantity < 5) return '⚠️ Baixo Estoque';
    return '✅ Em Estoque';
  }
}

export default Formatters;
