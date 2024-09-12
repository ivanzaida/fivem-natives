import { VehicleIndex } from '@ivanzaida/structures'

/**
 * TASK:GET_VEHICLE_WAYPOINT_TARGET_POINT
 *
 * 0x78BCB869DD6BFD3C

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 * @returns {number}  
 */
export function getVehicleWaypointTargetPoint(veh: VehicleIndex): number {
	const getVehicleWaypointTargetPoint_result = Citizen.invokeNative<number>('0x78BCB869DD6BFD3C', veh);
	return getVehicleWaypointTargetPoint_result;
}