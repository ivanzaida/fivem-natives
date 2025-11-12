/**
 * CFX:SET_HEALTH_CONFIG_MELEE_FATAL_ATTACK
 *
 * 0xDD443E53

 * Sets default melee cardinal fatal attack value for specific health config.
 * 
 * ------------------------------------------------------------------
 * @param {string} configName Name of health config.
 * @param {boolean} newValue Value
 */
export function setHealthConfigMeleeFatalAttack(configName: string, newValue: boolean): void {
	const setHealthConfigMeleeFatalAttack_result = Citizen.invokeNative<void>('0xDD443E53', configName, newValue);
	return setHealthConfigMeleeFatalAttack_result;
}