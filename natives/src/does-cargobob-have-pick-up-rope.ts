import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DOES_CARGOBOB_HAVE_PICK_UP_ROPE
 *
 * 0x93EBA5A2C85D82E7

 * 
 * Returns true only when the hook is active, will return false if the magnet is active
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @returns {boolean}  
 */
export function doesCargobobHavePickUpRope(cargobob: VehicleIndex): boolean {
	const doesCargobobHavePickUpRope_result = Citizen.invokeNative<boolean>('0x93EBA5A2C85D82E7', cargobob);
	return doesCargobobHavePickUpRope_result;
}