/**
 * NETWORK:RESERVE_LOCAL_NETWORK_MISSION_OBJECTS
 *
 * 0x99C26F3C23B37F42

 * 
 * Reserves space in the population pool for the given number of objects.
 * This space will only be reserved locally, and will be added to the reservation in RESERVE_NETWORK_MISSION_OBJECTS. Use this if you don't want the reservations
 * affecting the populations of nearby players who are not running the script
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} numObjectsToReserve
 */
export function reserveLocalNetworkMissionObjects(numObjectsToReserve: number): void {
	const reserveLocalNetworkMissionObjects_result = Citizen.invokeNative<void>('0x99C26F3C23B37F42', numObjectsToReserve);
	return reserveLocalNetworkMissionObjects_result;
}