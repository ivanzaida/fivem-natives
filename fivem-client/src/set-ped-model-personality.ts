/**
 * CFX:SET_PED_MODEL_PERSONALITY
 *
 * 0X46F6B38B

 * Overrides a ped model personality type.
 * 
 * ------------------------------------------------------------------
 * @param {number} modelHash Ped's model.
 * @param {number} personalityHash Personality hash.
 */
export function setPedModelPersonality(modelHash: number, personalityHash: number): void {
	const setPedModelPersonality_result = Citizen.invokeNative<void>('0X46F6B38B', modelHash, personalityHash);
	return setPedModelPersonality_result;
}