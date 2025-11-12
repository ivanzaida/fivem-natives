import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:TRANSFORM_TO_CAR
 *
 * 0x2915C7D9A225A148

 * 
 * Transform the submarine car back to a car
 * 
 * Transforms the `stormberg`/`toreador` to its "road vehicle" variant. If the vehicle is already in that state then the vehicle transformation audio will still play, but the vehicle won't change at all.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} instantlyTransform To true to instantly transform without animating
 */
export function transformToCar(vehicle: VehicleIndex, instantlyTransform: boolean = false): void {
	const transformToCar_result = Citizen.invokeNative<void>('0x2915C7D9A225A148', vehicle, instantlyTransform);
	return transformToCar_result;
}