import { ENetworkReservationType } from '@ivanzaida/structures'

/**
 * NETWORK:GET_NUM_RESERVED_MISSION_VEHICLES
 *
 * 0xF46F370442FAD8F9

 * 
 * p0 appears to be for MP
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} forAllScripts If true, returns the totla number of reservations for all running scripts, if false, it returns the reservation for this script
 * @param {ENetworkReservationType} reservationType Specifies whether to return the total reservations, localonly reservations, or globalonly reservations
 * @returns {number}  
 */
export function getNumReservedMissionVehicles(forAllScripts: boolean = false, reservationType: ENetworkReservationType | number = 0): number {
	const getNumReservedMissionVehicles_result = Citizen.invokeNative<number>('0xF46F370442FAD8F9', forAllScripts, reservationType);
	return getNumReservedMissionVehicles_result;
}