/**
 * NETWORK:NETWORK_SET_MINIMUM_RANK_FOR_MISSION
 *
 * 0x0A2A73F751726916

 * 
 * ------------------------------------------------------------------
 * @param {number} minimumRank
 */
export function networkSetMinimumRankForMission(minimumRank: number): void {
	const networkSetMinimumRankForMission_result = Citizen.invokeNative<void>('0x0A2A73F751726916', minimumRank);
	return networkSetMinimumRankForMission_result;
}