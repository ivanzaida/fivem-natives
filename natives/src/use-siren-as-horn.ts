import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:USE_SIREN_AS_HORN
 *
 * 0x27E2D66061E7E264

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} sirenAsHorn
 */
export function useSirenAsHorn(vehicle: VehicleIndex, sirenAsHorn: boolean): void {
	const useSirenAsHorn_result = Citizen.invokeNative<void>('0x27E2D66061E7E264', vehicle, sirenAsHorn);
	return useSirenAsHorn_result;
}