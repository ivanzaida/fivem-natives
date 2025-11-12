/**
 * CFX:SET_HEALTH_CONFIG_DEFAULT_HEALTH
 *
 * 0xC705C778

 * Sets default health value for specific health config.
 * 
 * ------------------------------------------------------------------
 * @param {string} configName Name of health config.
 * @param {number} newValue Value
 */
export function setHealthConfigDefaultHealth(configName: string, newValue: number): void {
	const setHealthConfigDefaultHealth_result = Citizen.invokeNative<void>('0xC705C778', configName, newValue);
	return setHealthConfigDefaultHealth_result;
}