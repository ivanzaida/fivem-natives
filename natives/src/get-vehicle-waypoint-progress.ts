import { VehicleIndex } from '@ivanzaida/structures'

/**
 * TASK:GET_VEHICLE_WAYPOINT_PROGRESS
 *
 * 0xD25BEA95F6673491

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 * @returns {number}  
 */
export function getVehicleWaypointProgress(veh: VehicleIndex): number {
	const getVehicleWaypointProgress_result = Citizen.invokeNative<number>('0xD25BEA95F6673491', veh);
	return getVehicleWaypointProgress_result;
}