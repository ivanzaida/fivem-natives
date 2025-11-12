/**
 * PLAYER:EXTEND_WORLD_BOUNDARY_FOR_PLAYER
 *
 * 0xFFD4786D6EA9F414

 * 
 * Appears only 3 times in the scripts, more specifically in michael1.ysc
 * 
 * -
 * This can be used to prevent dying if you are "out of the world"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 */
export function extendWorldBoundaryForPlayer(coorsX: number, coorsY: number, coorsZ: number): void {
	const extendWorldBoundaryForPlayer_result = Citizen.invokeNative<void>('0xFFD4786D6EA9F414', coorsX, coorsY, coorsZ);
	return extendWorldBoundaryForPlayer_result;
}