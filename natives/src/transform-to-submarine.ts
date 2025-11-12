import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:TRANSFORM_TO_SUBMARINE
 *
 * 0x1F75BC85F714AC5A

 * 
 * Transform the submarine car to a submarine
 * 
 * Transforms the `stormberg`/`toreador` to its "submarine" variant. If the vehicle is already in that state then the vehicle transformation audio will still play, but the vehicle won't change at all.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} instantlyTransform To true to instantly transform without animating
 * @returns {boolean}  
 */
export function transformToSubmarine(vehicle: VehicleIndex, instantlyTransform: boolean = false): boolean {
	const transformToSubmarine_result = Citizen.invokeNative<boolean>('0x1F75BC85F714AC5A', vehicle, instantlyTransform);
	return transformToSubmarine_result;
}