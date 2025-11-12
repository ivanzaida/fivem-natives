import { VehicleIndex, EVehicleMission } from '@ivanzaida/structures'

/**
 * TASK:GET_ACTIVE_VEHICLE_MISSION_TYPE
 *
 * 0x927395DFE42BE071

 * 
 * Returns the VEHICLE_MISSION enum of the vehicle mission currently being executed by vehIndex.
 * If not a vehicle, or not currently running any mission, returns MISSION_NONE.
 * All vehicle mission escort types currently return MISSION_ESCORT_REAR
 * 
 * https://alloc8or.re/gta5/doc/enums/eVehicleMissionType.txt
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 * @returns {EVehicleMission}  
 */
export function getActiveVehicleMissionType(veh: VehicleIndex): EVehicleMission {
	const getActiveVehicleMissionType_result = Citizen.invokeNative<EVehicleMission>('0x927395DFE42BE071', veh);
	return getActiveVehicleMissionType_result;
}