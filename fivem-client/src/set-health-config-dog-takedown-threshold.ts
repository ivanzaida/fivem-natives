/**
 * CFX:SET_HEALTH_CONFIG_DOG_TAKEDOWN_THRESHOLD
 *
 * 0x9A995E96

 * Sets default dog takedown threshold value for specific health config.
 * 
 * ------------------------------------------------------------------
 * @param {string} configName Name of health config.
 * @param {number} newValue Value
 */
export function setHealthConfigDogTakedownThreshold(configName: string, newValue: number): void {
	const setHealthConfigDogTakedownThreshold_result = Citizen.invokeNative<void>('0x9A995E96', configName, newValue);
	return setHealthConfigDogTakedownThreshold_result;
}