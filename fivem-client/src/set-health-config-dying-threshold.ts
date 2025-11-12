/**
 * CFX:SET_HEALTH_CONFIG_DYING_THRESHOLD
 *
 * 0x9B00FD77

 * Sets default dying health threshold value for specific health config.
 * 
 * ------------------------------------------------------------------
 * @param {string} configName Name of health config.
 * @param {number} newValue Value
 */
export function setHealthConfigDyingThreshold(configName: string, newValue: number): void {
	const setHealthConfigDyingThreshold_result = Citizen.invokeNative<void>('0x9B00FD77', configName, newValue);
	return setHealthConfigDyingThreshold_result;
}