/**
 * CFX:REMOVE_HEALTH_CONFIG
 *
 * 0xE0ED5FB

 * Removes health config.
 * 
 * ------------------------------------------------------------------
 * @param {string} configName Removes config name. Cannot be default game health config name.
 */
export function removeHealthConfig(configName: string): void {
	const removeHealthConfig_result = Citizen.invokeNative<void>('0xE0ED5FB', configName);
	return removeHealthConfig_result;
}