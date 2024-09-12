/**
 * PED:IS_PED_LIPSTICK_TINT_FOR_BARBER
 *
 * 0x52611559311E2B64

 * 
 * ------------------------------------------------------------------
 * @param {number} tint
 * @returns {boolean}  
 */
export function isPedLipstickTintForBarber(tint: number): boolean {
	const isPedLipstickTintForBarber_result = Citizen.invokeNative<boolean>('0x52611559311E2B64', tint);
	return isPedLipstickTintForBarber_result;
}