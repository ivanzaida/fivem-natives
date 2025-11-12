import { ENetworkReservationType } from '@ivanzaida/structures'

/**
 * NETWORK:GET_NUM_RESERVED_MISSION_OBJECTS
 *
 * 0xD1797191721E17CE

 * 
 * p0 appears to be for MP
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} forAllScripts If true, returns the totla number of reservations for all running scripts, if false, it returns the reservation for this script
 * @param {ENetworkReservationType} reservationType Specifies whether to return the total reservations, localonly reservations, or globalonly reservations
 * @returns {number}  
 */
export function getNumReservedMissionObjects(forAllScripts: boolean = false, reservationType: ENetworkReservationType | number = 0): number {
	const getNumReservedMissionObjects_result = Citizen.invokeNative<number>('0xD1797191721E17CE', forAllScripts, reservationType);
	return getNumReservedMissionObjects_result;
}