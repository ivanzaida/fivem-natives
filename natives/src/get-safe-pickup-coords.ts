import { Vector3 } from '@ivanzaida/structures'

/**
 * OBJECT:GET_SAFE_PICKUP_COORDS
 *
 * 0x165E2DDD2BD0F07D

 * 
 * ------------------------------------------------------------------
 * @param {number} inCoorsX
 * @param {number} inCoorsY
 * @param {number} inCoorsZ
 * @param {number} minDist
 * @param {number} maxDist
 * @returns {Vector3}  
 */
export function getSafePickupCoords(inCoorsX: number, inCoorsY: number, inCoorsZ: number, minDist: number = 1.2, maxDist: number = 1.5): Vector3 {
	const getSafePickupCoords_result = Citizen.invokeNative<Vector3>('0x165E2DDD2BD0F07D', inCoorsX, inCoorsY, inCoorsZ, minDist, maxDist);
	return getSafePickupCoords_result;
}