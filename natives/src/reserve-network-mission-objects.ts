/**
 * NETWORK:RESERVE_NETWORK_MISSION_OBJECTS
 *
 * 0xB7F37A0A1E8A175E

 * 
 * ------------------------------------------------------------------
 * @param {number} numObjectsToReserve
 */
export function reserveNetworkMissionObjects(numObjectsToReserve: number): void {
	const reserveNetworkMissionObjects_result = Citizen.invokeNative<void>('0xB7F37A0A1E8A175E', numObjectsToReserve);
	return reserveNetworkMissionObjects_result;
}