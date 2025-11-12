/**
 * TASK:ADD_SCRIPTED_COVER_AREA
 *
 * 0x4CF9046448DA511B

 * 
 * Must be called every frame
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} radius
 */
export function addScriptedCoverArea(coorsX: number, coorsY: number, coorsZ: number, radius: number): void {
	const addScriptedCoverArea_result = Citizen.invokeNative<void>('0x4CF9046448DA511B', coorsX, coorsY, coorsZ, radius);
	return addScriptedCoverArea_result;
}