import { VehicleIndex, EScWindowList } from '@ivanzaida/structures'

/**
 * CFX:IS_VEHICLE_WINDOW_INTACT
 *
 * 0XAC4EF23D

 * This will return false if the window is broken, or rolled down.
 * Window indexes:
 * 0 = Front Right Window
 * 1 = Front Left Window
 * 2 = Back Right Window
 * 3 = Back Left Window
 * Those numbers go on for vehicles that have more than 4 doors with windows.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScWindowList} windowNumber
 * @returns {boolean}  
 */
export function isVehicleWindowIntact(vehicle: VehicleIndex, windowNumber: EScWindowList | number): boolean {
	const isVehicleWindowIntact_result = Citizen.invokeNative<boolean>('0XAC4EF23D', vehicle, windowNumber);
	return isVehicleWindowIntact_result;
}