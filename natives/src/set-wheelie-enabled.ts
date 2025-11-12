import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_WHEELIE_ENABLED
 *
 * 0x1312DDD8385AEE4E

 * 
 * Enables/disables the ability to wheelie on motorcycles.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} isEnabled
 */
export function setWheelieEnabled(vehicle: VehicleIndex, isEnabled: boolean): void {
	const setWheelieEnabled_result = Citizen.invokeNative<void>('0x1312DDD8385AEE4E', vehicle, isEnabled);
	return setWheelieEnabled_result;
}