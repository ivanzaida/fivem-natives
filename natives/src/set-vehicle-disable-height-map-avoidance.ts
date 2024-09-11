import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DISABLE_HEIGHT_MAP_AVOIDANCE
 *
 * 0xC43B78AD4315F7FA

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} disableHeightmapAvoidance
 */
export function setVehicleDisableHeightMapAvoidance(vehicle: VehicleIndex, disableHeightmapAvoidance: boolean): void {
	const setVehicleDisableHeightMapAvoidance_result = Citizen.invokeNative<void>('0xC43B78AD4315F7FA', vehicle, disableHeightmapAvoidance);
	return setVehicleDisableHeightMapAvoidance_result;
}