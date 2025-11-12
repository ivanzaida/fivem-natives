import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:LOWER_CONVERTIBLE_ROOF
 *
 * 0x232B023FE4D977E2

 * 
 * Lower the roof on a convertible
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} moveInstantly
 */
export function lowerConvertibleRoof(vehicle: VehicleIndex, moveInstantly: boolean = false): void {
	const lowerConvertibleRoof_result = Citizen.invokeNative<void>('0x232B023FE4D977E2', vehicle, moveInstantly);
	return lowerConvertibleRoof_result;
}