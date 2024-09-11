import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_IN_FLYING_VEHICLE
 *
 * 0x1F7A48429F9F64CE

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedInFlyingVehicle(ped: PedIndex): boolean {
	const isPedInFlyingVehicle_result = Citizen.invokeNative<boolean>('0x1F7A48429F9F64CE', ped);
	return isPedInFlyingVehicle_result;
}