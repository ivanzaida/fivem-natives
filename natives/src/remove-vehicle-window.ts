import { VehicleIndex, EScWindowList } from '@ivanzaida/structures'

/**
 * VEHICLE:REMOVE_VEHICLE_WINDOW
 *
 * 0x8E470D78FC866126

 * 
 * windowIndex:
 * 0 = Front Right Window
 * 1 = Front Left Window
 * 2 = Back Right Window
 * 3 = Back Left Window
 * 4 = Unknown
 * 5 = Unknown
 * 6 = Windscreen
 * 7 = Rear Windscreen
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScWindowList} windowNumber
 */
export function removeVehicleWindow(vehicle: VehicleIndex, windowNumber: EScWindowList | number): void {
	const removeVehicleWindow_result = Citizen.invokeNative<void>('0x8E470D78FC866126', vehicle, windowNumber);
	return removeVehicleWindow_result;
}