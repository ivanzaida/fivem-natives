import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_TRAILER_LEGS_LOWERED
 *
 * 0xBAF583E9A667F5FB

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} trailer
 */
export function setTrailerLegsLowered(trailer: VehicleIndex): void {
	const setTrailerLegsLowered_result = Citizen.invokeNative<void>('0xBAF583E9A667F5FB', trailer);
	return setTrailerLegsLowered_result;
}