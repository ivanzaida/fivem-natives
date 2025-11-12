import { VehicleIndex, EScWindowList } from '@ivanzaida/structures'

/**
 * VEHICLE:ROLL_UP_WINDOW
 *
 * 0x9303D5873A8A413A

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
export function rollUpWindow(vehicle: VehicleIndex, windowNumber: EScWindowList | number): void {
	const rollUpWindow_result = Citizen.invokeNative<void>('0x9303D5873A8A413A', vehicle, windowNumber);
	return rollUpWindow_result;
}