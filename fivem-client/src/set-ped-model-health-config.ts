/**
 * CFX:SET_PED_MODEL_HEALTH_CONFIG
 *
 * 0xAF12A05D

 * Sets a ped model's health config.Takes effect only after setting player model with `SET_PLAYER_MODEL`.
 * 
 * ------------------------------------------------------------------
 * @param {number} modelHash Ped's model.
 * @param {string} configName Name of health config.
 */
export function setPedModelHealthConfig(modelHash: number, configName: string): void {
	const setPedModelHealthConfig_result = Citizen.invokeNative<void>('0xAF12A05D', modelHash, configName);
	return setPedModelHealthConfig_result;
}