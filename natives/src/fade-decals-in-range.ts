/**
 * GRAPHICS:FADE_DECALS_IN_RANGE
 *
 * 0x726D5358D13D53BD

 * 
 * Fades nearby decals within the range specified
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} range
 * @param {number} fadeTime
 */
export function fadeDecalsInRange(posX: number, posY: number, posZ: number, range: number, fadeTime: number): void {
	const fadeDecalsInRange_result = Citizen.invokeNative<void>('0x726D5358D13D53BD', posX, posY, posZ, range, fadeTime);
	return fadeDecalsInRange_result;
}