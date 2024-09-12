/**
 * PED:IS_PED_BLUSH_TINT_FOR_CREATOR
 *
 * 0x86F83CBBA37677B2

 * 
 * ------------------------------------------------------------------
 * @param {number} tint
 * @returns {boolean}  
 */
export function isPedBlushTintForCreator(tint: number): boolean {
	const isPedBlushTintForCreator_result = Citizen.invokeNative<boolean>('0x86F83CBBA37677B2', tint);
	return isPedBlushTintForCreator_result;
}