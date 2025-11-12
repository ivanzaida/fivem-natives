/**
 * CFX:GET_PED_MODEL_HEALTH_CONFIG
 *
 * 0xF71542F7

 * Gets a ped model's health config.
 * 
 * ------------------------------------------------------------------
 * @param {number} modelHash Ped's model.
 * @returns {number}  
 */
export function getPedModelHealthConfig(modelHash: number): number {
	const getPedModelHealthConfig_result = Citizen.invokeNative<number>('0xF71542F7', modelHash);
	return getPedModelHealthConfig_result;
}