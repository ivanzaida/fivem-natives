/**
 * CFX:SET_HEALTH_CONFIG_DEFAULT_ARMOR
 *
 * 0x20A1E6A2

 * Sets default armor value for specific health config.
 * 
 * ------------------------------------------------------------------
 * @param {string} configName Name of health config.
 * @param {number} newValue Value
 */
export function setHealthConfigDefaultArmor(configName: string, newValue: number): void {
	const setHealthConfigDefaultArmor_result = Citizen.invokeNative<void>('0x20A1E6A2', configName, newValue);
	return setHealthConfigDefaultArmor_result;
}