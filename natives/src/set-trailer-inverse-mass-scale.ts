import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_TRAILER_INVERSE_MASS_SCALE
 *
 * 0x82A7EF211E6B06C9

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} trailer
 * @param {number} invMassScale
 */
export function setTrailerInverseMassScale(trailer: VehicleIndex, invMassScale: number): void {
	const setTrailerInverseMassScale_result = Citizen.invokeNative<void>('0x82A7EF211E6B06C9', trailer, invMassScale);
	return setTrailerInverseMassScale_result;
}