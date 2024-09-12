/**
 * PED:GET_DEFAULT_SECONDARY_TINT_FOR_BARBER
 *
 * 0x0BC34ECDC4790796

 * 
 * ------------------------------------------------------------------
 * @param {number} tint
 * @returns {number}  
 */
export function getDefaultSecondaryTintForBarber(tint: number): number {
	const getDefaultSecondaryTintForBarber_result = Citizen.invokeNative<number>('0x0BC34ECDC4790796', tint);
	return getDefaultSecondaryTintForBarber_result;
}