/**
 * STREAMING:REQUEST_ADDITIONAL_COLLISION_AT_COORD
 *
 * 0xCAB6FA8C9D44F90A

 * 
 * Have game stream extra collision and IPL files around this coordinate. This function needs called every frame the
 * additional data is needed
 * 
 * Alias of REQUEST_COLLISION_AT_COORD.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} vecX
 * @param {number} vecY
 * @param {number} vecZ
 */
export function requestAdditionalCollisionAtCoord(vecX: number, vecY: number, vecZ: number): void {
	const requestAdditionalCollisionAtCoord_result = Citizen.invokeNative<void>('0xCAB6FA8C9D44F90A', vecX, vecY, vecZ);
	return requestAdditionalCollisionAtCoord_result;
}