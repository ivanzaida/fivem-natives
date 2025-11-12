/**
 * HUD:SET_TEXT_EDGE
 *
 * 0xBE923A0FDD781C93

 * 
 * This native does absolutely nothing, just a nullsub
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} edgeAmount
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 */
export function setTextEdge(edgeAmount: number, red: number, green: number, blue: number, alpha: number): void {
	const setTextEdge_result = Citizen.invokeNative<void>('0xBE923A0FDD781C93', edgeAmount, red, green, blue, alpha);
	return setTextEdge_result;
}