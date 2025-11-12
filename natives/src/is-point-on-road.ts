import { VehicleIndex } from '@ivanzaida/structures'

/**
 * PATHFIND:IS_POINT_ON_ROAD
 *
 * 0x1F32EC7CE9CC63A2

 * 
 * Returns true if the position is within any road extremes, false otherwise
 * Don't use too often, this is moderately expensive
 * 
 * Gets a value indicating whether the specified position is on a road.
 * The vehicle parameter is not implemented (ignored).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isPointOnRoad(posX: number, posY: number, posZ: number, vehicle: VehicleIndex): boolean {
	const isPointOnRoad_result = Citizen.invokeNative<boolean>('0x1F32EC7CE9CC63A2', posX, posY, posZ, vehicle);
	return isPointOnRoad_result;
}