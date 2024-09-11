import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_SIREN_WITH_NO_DRIVER
 *
 * 0x8C9AE8FF021E8F23

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} sirenFlag
 */
export function setSirenWithNoDriver(vehicle: VehicleIndex, sirenFlag: boolean): void {
	const setSirenWithNoDriver_result = Citizen.invokeNative<void>('0x8C9AE8FF021E8F23', vehicle, sirenFlag);
	return setSirenWithNoDriver_result;
}