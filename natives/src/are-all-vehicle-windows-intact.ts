import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:ARE_ALL_VEHICLE_WINDOWS_INTACT
 *
 * 0xFC954C8C860FAB80

 * 
 * Appears to return false if any window is broken.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function areAllVehicleWindowsIntact(vehicle: VehicleIndex): boolean {
	const areAllVehicleWindowsIntact_result = Citizen.invokeNative<boolean>('0xFC954C8C860FAB80', vehicle);
	return areAllVehicleWindowsIntact_result;
}