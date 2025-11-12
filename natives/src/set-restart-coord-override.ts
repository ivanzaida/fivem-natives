/**
 * MISC:SET_RESTART_COORD_OVERRIDE
 *
 * 0x0B8F3F7DA0F3F93F

 * 
 * In some missions, you might want to restart the player at the point on the map where the mission is started.
 * If this command is called then the next time the player is restarted, he will be positioned at this point rather than at the closest hospital or police restart point.
 * Z will be calculated automatically if you give it a value of –100.0 or below. When the player restarts, his heading will be set according to PlayerHeading.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} heading
 */
export function setRestartCoordOverride(coorsX: number, coorsY: number, coorsZ: number, heading: number): void {
	const setRestartCoordOverride_result = Citizen.invokeNative<void>('0x0B8F3F7DA0F3F93F', coorsX, coorsY, coorsZ, heading);
	return setRestartCoordOverride_result;
}