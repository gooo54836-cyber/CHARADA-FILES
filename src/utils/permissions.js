import Logger from './logger.js';

export class PermissionHandler {
  static hasAdminRole(member) {
    const adminRoleId = process.env.ADMIN_ROLE_ID;
    if (!adminRoleId) {
      Logger.warning('ADMIN_ROLE_ID não configurado', 'PermissionHandler');
      return member.permissions.has('Administrator');
    }
    return member.roles.cache.has(adminRoleId) || member.permissions.has('Administrator');
  }

  static checkAdminPermission(interaction) {
    if (!this.hasAdminRole(interaction.member)) {
      return {
        allowed: false,
        error: 'Você não tem permissão para executar este comando.',
      };
    }
    return { allowed: true };
  }
}

export default PermissionHandler;
