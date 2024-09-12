import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_BROKEN_PARTS_DONT_AFFECT_AI_HANDLING
 *
 * 0xA7F7529CFB6F1EA7

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} ignoreBrokenParts
 */
export function setVehicleBrokenPartsDontAffectAiHandling(vehicle: VehicleIndex, ignoreBrokenParts: boolean): void {
	const setVehicleBrokenPartsDontAffectAiHandling_result = Citizen.invokeNative<void>('0xA7F7529CFB6F1EA7', vehicle, ignoreBrokenParts);
	return setVehicleBrokenPartsDontAffectAiHandling_result;
}