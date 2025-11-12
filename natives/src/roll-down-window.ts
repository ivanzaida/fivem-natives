import { VehicleIndex, EScWindowList } from '@ivanzaida/structures'

/**
 * VEHICLE:ROLL_DOWN_WINDOW
 *
 * 0x260EEEEBF5F35F72

 * 
 * windowIndex:
 * 0 = Front Left Window
 * 1 = Front Right Window
 * 2 = Rear Left Window
 * 3 = Rear Right Window
 * 4 = Front Windscreen
 * 5 = Rear Windscreen
 * 6 = Mid Left
 * 7 = Mid Right
 * 8 = Invalid
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScWindowList} windowNumber
 */
export function rollDownWindow(vehicle: VehicleIndex, windowNumber: EScWindowList | number): void {
	const rollDownWindow_result = Citizen.invokeNative<void>('0x260EEEEBF5F35F72', vehicle, windowNumber);
	return rollDownWindow_result;
}