/**
 * NETWORK:SET_GHOST_ALPHA
 *
 * 0x4F1FE21A5BE23982

 * 
 * Must be a value between 1 and 254
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} alphavalue
 */
export function setGhostAlpha(alphavalue: number): void {
	const setGhostAlpha_result = Citizen.invokeNative<void>('0x4F1FE21A5BE23982', alphavalue);
	return setGhostAlpha_result;
}