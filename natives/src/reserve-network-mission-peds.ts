/**
 * NETWORK:RESERVE_NETWORK_MISSION_PEDS
 *
 * 0x17C7D9B3979F5759

 * 
 * ------------------------------------------------------------------
 * @param {number} numPedsToReserve
 */
export function reserveNetworkMissionPeds(numPedsToReserve: number): void {
	const reserveNetworkMissionPeds_result = Citizen.invokeNative<void>('0x17C7D9B3979F5759', numPedsToReserve);
	return reserveNetworkMissionPeds_result;
}