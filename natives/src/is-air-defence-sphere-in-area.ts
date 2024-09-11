import { IntRef } from '@ivanzaida/structures'

/**
 * WEAPON:IS_AIR_DEFENCE_SPHERE_IN_AREA
 *
 * 0x3EAF5419C2410C27

 * 
 * ------------------------------------------------------------------
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {number} radius
 * @param {IntRef} sphere [Ref]
 * @returns {boolean}  
 */
export function isAirDefenceSphereInArea(positionX: number, positionY: number, positionZ: number, radius: number, sphere: IntRef /* ptr */): boolean {
	const isAirDefenceSphereInArea_result = Citizen.invokeNative<boolean>('0x3EAF5419C2410C27', positionX, positionY, positionZ, radius, sphere.dataView);
	return isAirDefenceSphereInArea_result;
}