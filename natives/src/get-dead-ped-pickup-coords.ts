import { PedIndex, Vector3 } from '@ivanzaida/structures'

/**
 * PED:GET_DEAD_PED_PICKUP_COORDS
 *
 * 0x240E88FB0B8CC932

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} minDist
 * @param {number} maxDist
 * @returns {Vector3}  
 */
export function getDeadPedPickupCoords(ped: PedIndex, minDist: number = 1.2, maxDist: number = 1.5): Vector3 {
	const getDeadPedPickupCoords_result = Citizen.invokeNative<Vector3>('0x240E88FB0B8CC932', ped, minDist, maxDist);
	return getDeadPedPickupCoords_result;
}