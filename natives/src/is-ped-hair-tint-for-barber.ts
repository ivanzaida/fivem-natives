/**
 * PED:IS_PED_HAIR_TINT_FOR_BARBER
 *
 * 0xBB9FAE42E3101CD8

 * 
 * ------------------------------------------------------------------
 * @param {number} tint
 * @returns {boolean}  
 */
export function isPedHairTintForBarber(tint: number): boolean {
	const isPedHairTintForBarber_result = Citizen.invokeNative<boolean>('0xBB9FAE42E3101CD8', tint);
	return isPedHairTintForBarber_result;
}