/**
 * CFX:SET_HEALTH_CONFIG_FATIGUED_THRESHOLD
 *
 * 0xC58953FD

 * Sets default fatigued health threshold value for specific health config.
 * 
 * ------------------------------------------------------------------
 * @param {string} configName Name of health config.
 * @param {number} newValue Value
 */
export function setHealthConfigFatiguedThreshold(configName: string, newValue: number): void {
	const setHealthConfigFatiguedThreshold_result = Citizen.invokeNative<void>('0xC58953FD', configName, newValue);
	return setHealthConfigFatiguedThreshold_result;
}