import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_TRANSFORM_RATE_FOR_ANIMATION
 *
 * 0xC2AA11D47F8C5153

 * 
 * Affects the playback speed of the submarine car conversion animations. Does not affect hardcoded animations such as the wheels being retracted.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} transformRate
 */
export function setTransformRateForAnimation(vehicle: VehicleIndex, transformRate: number): void {
	const setTransformRateForAnimation_result = Citizen.invokeNative<void>('0xC2AA11D47F8C5153', vehicle, transformRate);
	return setTransformRateForAnimation_result;
}