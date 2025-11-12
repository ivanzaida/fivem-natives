import { ENetworkReservationType } from '@ivanzaida/structures'

/**
 * NETWORK:GET_NUM_RESERVED_MISSION_PEDS
 *
 * 0xA0522491D076C1E6

 * 
 * p0 appears to be for MP
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} forAllScripts If true, returns the totla number of reservations for all running scripts, if false, it returns the reservation for this script
 * @param {ENetworkReservationType} reservationType Specifies whether to return the total reservations, localonly reservations, or globalonly reservations
 * @returns {number}  
 */
export function getNumReservedMissionPeds(forAllScripts: boolean = false, reservationType: ENetworkReservationType | number = 0): number {
	const getNumReservedMissionPeds_result = Citizen.invokeNative<number>('0xA0522491D076C1E6', forAllScripts, reservationType);
	return getNumReservedMissionPeds_result;
}