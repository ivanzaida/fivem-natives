import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DOES_CARGOBOB_HAVE_PICKUP_MAGNET
 *
 * 0x55250754D66E3652

 * 
 * Returns true only when the magnet is active, will return false if the hook is active
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @returns {boolean}  
 */
export function doesCargobobHavePickupMagnet(cargobob: VehicleIndex): boolean {
	const doesCargobobHavePickupMagnet_result = Citizen.invokeNative<boolean>('0x55250754D66E3652', cargobob);
	return doesCargobobHavePickupMagnet_result;
}