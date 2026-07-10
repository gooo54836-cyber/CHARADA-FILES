import { EmbedBuilder } from 'discord.js';
import { COLORS } from '../config/colors.js';
import { EMOJIS } from '../constants/emojis.js';
import Logger from './logger.js';

export class ErrorHandler {
  static createErrorEmbed(title, description, additionalInfo = '') {
    const embed = new EmbedBuilder()
      .setColor(COLORS.ERROR)
      .setTitle(`${EMOJIS.ERROR} ${title}`)
      .setDescription(description);

    if (additionalInfo) {
      embed.addFields({ name: 'Detalhes', value: additionalInfo });
    }

    embed.setFooter({ text: 'Se o problema persistir, entre em contato com um administrador' });
    return embed;
  }

  static async handleInteractionError(interaction, error, context = '') {
    Logger.error(`Erro em interação: ${error.message}`, error, context);

    const errorEmbed = this.createErrorEmbed(
      'Ocorreu um Erro',
      'Desculpe, algo deu errado. Tente novamente mais tarde.',
      error.message.substring(0, 1024)
    );

    try {
      if (interaction.replied || interaction.deferred) {
        await interaction.editReply({ embeds: [errorEmbed], components: [] });
      } else {
        await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
      }
    } catch (replyError) {
      Logger.error('Erro ao enviar mensagem de erro', replyError, context);
    }
  }

  static async handleCommandError(interaction, error, commandName) {
    Logger.error(`Erro no comando ${commandName}`, error, 'CommandHandler');
    await this.handleInteractionError(interaction, error, `Comando: ${commandName}`);
  }
}

export default ErrorHandler;
