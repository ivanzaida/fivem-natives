import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:RAISE_CONVERTIBLE_ROOF
 *
 * 0xD6B15DF382A594C7

 * 
 * Raise the roof on a convertible
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} moveInstantly
 */
export function raiseConvertibleRoof(vehicle: VehicleIndex, moveInstantly: boolean = false): void {
	const raiseConvertibleRoof_result = Citizen.invokeNative<void>('0xD6B15DF382A594C7', vehicle, moveInstantly);
	return raiseConvertibleRoof_result;
}