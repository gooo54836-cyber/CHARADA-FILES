const LOG_TYPES = {
  INFO: '📘',
  SUCCESS: '✅',
  ERROR: '❌',
  WARNING: '⚠️',
  DEBUG: '🐛',
};

export class Logger {
  static info(message, context = '') {
    console.log(`${LOG_TYPES.INFO} [INFO${context ? ` - ${context}` : ''}] ${message}`);
  }

  static success(message, context = '') {
    console.log(`${LOG_TYPES.SUCCESS} [SUCCESS${context ? ` - ${context}` : ''}] ${message}`);
  }

  static error(message, error = null, context = '') {
    console.error(`${LOG_TYPES.ERROR} [ERROR${context ? ` - ${context}` : ''}] ${message}`);
    if (error) console.error(error);
  }

  static warning(message, context = '') {
    console.warn(`${LOG_TYPES.WARNING} [WARNING${context ? ` - ${context}` : ''}] ${message}`);
  }

  static debug(message, context = '') {
    if (process.env.DEBUG === 'true') {
      console.log(`${LOG_TYPES.DEBUG} [DEBUG${context ? ` - ${context}` : ''}] ${message}`);
    }
  }
}

export default Logger;
