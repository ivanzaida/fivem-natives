/**
 * CFX:SET_HEALTH_CONFIG_HURT_THRESHOLD
 *
 * 0x98DF1A83

 * Sets default hurt health threshold value for specific health config.
 * 
 * ------------------------------------------------------------------
 * @param {string} configName Name of health config.
 * @param {number} newValue Value
 */
export function setHealthConfigHurtThreshold(configName: string, newValue: number): void {
	const setHealthConfigHurtThreshold_result = Citizen.invokeNative<void>('0x98DF1A83', configName, newValue);
	return setHealthConfigHurtThreshold_result;
}