/**
 * STREAMING:REQUEST_COLLISION_AT_COORD
 *
 * 0xEA2D52183C7EA9CF

 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 */
export function requestCollisionAtCoord(coorsX: number, coorsY: number, coorsZ: number): void {
	const requestCollisionAtCoord_result = Citizen.invokeNative<void>('0xEA2D52183C7EA9CF', coorsX, coorsY, coorsZ);
	return requestCollisionAtCoord_result;
}