/**
 * NETWORK:RESERVE_LOCAL_NETWORK_MISSION_PEDS
 *
 * 0x7E46D691B4F4B711

 * 
 * Reserves space in the population pool for the given number of peds.
 * This space will only be reserved locally, and will be added to the reservation in RESERVE_NETWORK_MISSION_PEDS. Use this if you don't want the reservations
 * affecting the populations of nearby players who are not running the script
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} numPedsToReserve
 */
export function reserveLocalNetworkMissionPeds(numPedsToReserve: number): void {
	const reserveLocalNetworkMissionPeds_result = Citizen.invokeNative<void>('0x7E46D691B4F4B711', numPedsToReserve);
	return reserveLocalNetworkMissionPeds_result;
}