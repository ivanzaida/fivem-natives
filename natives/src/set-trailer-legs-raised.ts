import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_TRAILER_LEGS_RAISED
 *
 * 0x632030977D1CE430

 * 
 * in the decompiled scripts, seems to be always called on the vehicle right after being attached to a trailer.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} trailer
 */
export function setTrailerLegsRaised(trailer: VehicleIndex): void {
	const setTrailerLegsRaised_result = Citizen.invokeNative<void>('0x632030977D1CE430', trailer);
	return setTrailerLegsRaised_result;
}