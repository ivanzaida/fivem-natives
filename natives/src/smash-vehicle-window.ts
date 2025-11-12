import { VehicleIndex, EScWindowList } from '@ivanzaida/structures'

/**
 * VEHICLE:SMASH_VEHICLE_WINDOW
 *
 * 0x62DFD44586348C12

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
export function smashVehicleWindow(vehicle: VehicleIndex, windowNumber: EScWindowList | number): void {
	const smashVehicleWindow_result = Citizen.invokeNative<void>('0x62DFD44586348C12', vehicle, windowNumber);
	return smashVehicleWindow_result;
}