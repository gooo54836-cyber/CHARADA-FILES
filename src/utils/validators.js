export class Validators {
  static validatePrice(price) {
    const parsed = parseFloat(price);
    if (isNaN(parsed) || parsed < 0) {
      return { valid: false, error: 'Preço deve ser um número positivo' };
    }
    return { valid: true, value: parsed };
  }

  static validateStock(stock) {
    const parsed = parseInt(stock);
    if (isNaN(parsed) || parsed < 0) {
      return { valid: false, error: 'Estoque deve ser um número positivo' };
    }
    return { valid: true, value: parsed };
  }

  static validateProductName(name) {
    if (!name || name.trim().length === 0) {
      return { valid: false, error: 'Nome do produto não pode estar vazio' };
    }
    if (name.length > 100) {
      return { valid: false, error: 'Nome do produto não pode exceder 100 caracteres' };
    }
    return { valid: true, value: name.trim() };
  }

  static validateDescription(description) {
    if (!description || description.trim().length === 0) {
      return { valid: false, error: 'Descrição não pode estar vazia' };
    }
    if (description.length > 1024) {
      return { valid: false, error: 'Descrição não pode exceder 1024 caracteres' };
    }
    return { valid: true, value: description.trim() };
  }

  static validateCategory(category) {
    if (!category || category.trim().length === 0) {
      return { valid: false, error: 'Categoria não pode estar vazia' };
    }
    if (category.length > 50) {
      return { valid: false, error: 'Categoria não pode exceder 50 caracteres' };
    }
    return { valid: true, value: category.trim() };
  }

  static validateQuantity(quantity, maxStock) {
    const parsed = parseInt(quantity);
    if (isNaN(parsed) || parsed < 1) {
      return { valid: false, error: 'Quantidade deve ser no mínimo 1' };
    }
    if (parsed > maxStock) {
      return { valid: false, error: `Quantidade não pode exceder ${maxStock}` };
    }
    return { valid: true, value: parsed };
  }
}

export default Validators;
