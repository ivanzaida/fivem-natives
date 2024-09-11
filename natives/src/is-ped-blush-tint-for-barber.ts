/**
 * PED:IS_PED_BLUSH_TINT_FOR_BARBER
 *
 * 0xE3FAB626C2DBDF88

 * 
 * ------------------------------------------------------------------
 * @param {number} tint
 * @returns {boolean}  
 */
export function isPedBlushTintForBarber(tint: number): boolean {
	const isPedBlushTintForBarber_result = Citizen.invokeNative<boolean>('0xE3FAB626C2DBDF88', tint);
	return isPedBlushTintForBarber_result;
}