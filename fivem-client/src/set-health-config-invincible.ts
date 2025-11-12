/**
 * CFX:SET_HEALTH_CONFIG_INVINCIBLE
 *
 * 0x4A9EEDE6

 * Sets default invincible value for specific health config.
 * 
 * ------------------------------------------------------------------
 * @param {string} configName Name of health config.
 * @param {boolean} newValue Value
 */
export function setHealthConfigInvincible(configName: string, newValue: boolean): void {
	const setHealthConfigInvincible_result = Citizen.invokeNative<void>('0x4A9EEDE6', configName, newValue);
	return setHealthConfigInvincible_result;
}