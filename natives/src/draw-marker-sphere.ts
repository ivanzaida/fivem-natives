/**
 * GRAPHICS:DRAW_MARKER_SPHERE
 *
 * 0x426E16FFFB6D7AF1

 * 
 * Draws a sphere marker of better quality than the markers one. ONLY ONE PER FRAME IS SUPPORTED.
 * 
 * Draws a 3D sphere, typically seen in the GTA:O freemode event "Penned In".
 * Example https://imgur.com/nCbtS4H
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} scrVecPositionX
 * @param {number} scrVecPositionY
 * @param {number} scrVecPositionZ
 * @param {number} radius
 * @param {number} colR
 * @param {number} colG
 * @param {number} colB
 * @param {number} intensity
 */
export function drawMarkerSphere(scrVecPositionX: number, scrVecPositionY: number, scrVecPositionZ: number, radius: number, colR: number, colG: number, colB: number, intensity: number): void {
	const drawMarkerSphere_result = Citizen.invokeNative<void>('0x426E16FFFB6D7AF1', scrVecPositionX, scrVecPositionY, scrVecPositionZ, radius, colR, colG, colB, intensity);
	return drawMarkerSphere_result;
}