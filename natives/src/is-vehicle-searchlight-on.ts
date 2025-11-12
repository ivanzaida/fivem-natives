import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_SEARCHLIGHT_ON
 *
 * 0xC536067E456DED6C

 * 
 * Possibly: Returns whether the searchlight (found on police vehicles) is toggled on.
 * 
 * @Author Nac
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleSearchlightOn(vehicle: VehicleIndex): boolean {
	const isVehicleSearchlightOn_result = Citizen.invokeNative<boolean>('0xC536067E456DED6C', vehicle);
	return isVehicleSearchlightOn_result;
}