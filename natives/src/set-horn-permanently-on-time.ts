import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_HORN_PERMANENTLY_ON_TIME
 *
 * 0x0E054C79B87C8FB2

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} hornTime
 */
export function setHornPermanentlyOnTime(vehicle: VehicleIndex, hornTime: number): void {
	const setHornPermanentlyOnTime_result = Citizen.invokeNative<void>('0x0E054C79B87C8FB2', vehicle, hornTime);
	return setHornPermanentlyOnTime_result;
}