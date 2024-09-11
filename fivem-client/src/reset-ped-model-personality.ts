/**
 * CFX:RESET_PED_MODEL_PERSONALITY
 *
 * 0X79A12861

 * Restores an overridden ped model personality type to the default value.
 * 
 * ------------------------------------------------------------------
 * @param {number} modelHash Ped's model.
 */
export function resetPedModelPersonality(modelHash: number): void {
	const resetPedModelPersonality_result = Citizen.invokeNative<void>('0X79A12861', modelHash);
	return resetPedModelPersonality_result;
}