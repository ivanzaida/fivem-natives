/**
 * PED:IS_PED_BLUSH_FACEPAINT_TINT_FOR_BARBER
 *
 * 0xA3089FB5A559E0D5

 * 
 * ------------------------------------------------------------------
 * @param {number} tint
 * @returns {boolean}  
 */
export function isPedBlushFacepaintTintForBarber(tint: number): boolean {
	const isPedBlushFacepaintTintForBarber_result = Citizen.invokeNative<boolean>('0xA3089FB5A559E0D5', tint);
	return isPedBlushFacepaintTintForBarber_result;
}