/**
 * GRAPHICS:SET_NOISINESSOVERIDE
 *
 * 0xF0E0A26499BF51AD

 * 
 * Won't do anything unless noise overide has been turned on : SET_NOISEOVERIDE(TRUE).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} value
 */
export function setNoisinessoveride(value: number): void {
	const setNoisinessoveride_result = Citizen.invokeNative<void>('0xF0E0A26499BF51AD', value);
	return setNoisinessoveride_result;
}