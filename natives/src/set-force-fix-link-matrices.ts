import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_FORCE_FIX_LINK_MATRICES
 *
 * 0xD7AF89E96BDD636E

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function setForceFixLinkMatrices(vehicle: VehicleIndex): void {
	const setForceFixLinkMatrices_result = Citizen.invokeNative<void>('0xD7AF89E96BDD636E', vehicle);
	return setForceFixLinkMatrices_result;
}