/**
 * PED:IS_PED_HAIR_TINT_FOR_CREATOR
 *
 * 0xCBC4C0F54C8BFFD1

 * 
 * ------------------------------------------------------------------
 * @param {number} tint
 * @returns {boolean}  
 */
export function isPedHairTintForCreator(tint: number): boolean {
	const isPedHairTintForCreator_result = Citizen.invokeNative<boolean>('0xCBC4C0F54C8BFFD1', tint);
	return isPedHairTintForCreator_result;
}