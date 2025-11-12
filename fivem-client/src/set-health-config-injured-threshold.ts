/**
 * CFX:SET_HEALTH_CONFIG_INJURED_THRESHOLD
 *
 * 0xF9D9B647

 * Sets default injured health threshold value for specific health config.
 * 
 * ------------------------------------------------------------------
 * @param {string} configName Name of health config.
 * @param {number} newValue Value
 */
export function setHealthConfigInjuredThreshold(configName: string, newValue: number): void {
	const setHealthConfigInjuredThreshold_result = Citizen.invokeNative<void>('0xF9D9B647', configName, newValue);
	return setHealthConfigInjuredThreshold_result;
}