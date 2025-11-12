import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CAN_KNOCK_PED_OFF_VEHICLE
 *
 * 0x02F51D23580B7A15

 * 
 * Determines if a ped can be knocked off their vehicle (returns false if the ped is not on an open vehicle, if the ped is set to not be
 * knocked off the vehicle or if the ped cannot go into ragdoll from falling off their vehicle)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function canKnockPedOffVehicle(ped: PedIndex): boolean {
	const canKnockPedOffVehicle_result = Citizen.invokeNative<boolean>('0x02F51D23580B7A15', ped);
	return canKnockPedOffVehicle_result;
}