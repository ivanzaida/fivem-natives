/**
 * CFX:SET_HEALTH_CONFIG_DEFAULT_ENDURANCE
 *
 * 0x60F20B81

 * Sets default endurance value for specific health config.
 * 
 * ------------------------------------------------------------------
 * @param {string} configName Name of health config.
 * @param {number} newValue Value
 */
export function setHealthConfigDefaultEndurance(configName: string, newValue: number): void {
	const setHealthConfigDefaultEndurance_result = Citizen.invokeNative<void>('0x60F20B81', configName, newValue);
	return setHealthConfigDefaultEndurance_result;
}