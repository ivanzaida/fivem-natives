/**
 * CFX:GET_PED_MODEL_PERSONALITY
 *
 * 0XFE08CAD6

 * Gets a ped model's personality type.
 * 
 * ------------------------------------------------------------------
 * @param {number} modelHash Ped's model.
 * @returns {number}  
 */
export function getPedModelPersonality(modelHash: number): number {
	const getPedModelPersonality_result = Citizen.invokeNative<number>('0XFE08CAD6', modelHash);
	return getPedModelPersonality_result;
}