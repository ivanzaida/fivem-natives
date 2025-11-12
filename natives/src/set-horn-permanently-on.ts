import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_HORN_PERMANENTLY_ON
 *
 * 0x8D78BCB9B0FC86A6

 * 
 * Turns the horn on - on every frame, not choosing a pattern of it's own.
 * Needs called every frame. Will time-out after SET_HORN_PERMANENTLY_ON_TIME(VEHICLE_INDEX VehicleIndex, FLOAT HornTime)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function setHornPermanentlyOn(vehicle: VehicleIndex): void {
	const setHornPermanentlyOn_result = Citizen.invokeNative<void>('0x8D78BCB9B0FC86A6', vehicle);
	return setHornPermanentlyOn_result;
}