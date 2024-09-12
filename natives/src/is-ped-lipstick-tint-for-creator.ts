/**
 * PED:IS_PED_LIPSTICK_TINT_FOR_CREATOR
 *
 * 0xC4DF7897A59B7B8F

 * 
 * ------------------------------------------------------------------
 * @param {number} tint
 * @returns {boolean}  
 */
export function isPedLipstickTintForCreator(tint: number): boolean {
	const isPedLipstickTintForCreator_result = Citizen.invokeNative<boolean>('0xC4DF7897A59B7B8F', tint);
	return isPedLipstickTintForCreator_result;
}