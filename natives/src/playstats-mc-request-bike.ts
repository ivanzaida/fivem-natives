/**
 * STATS:PLAYSTATS_MC_REQUEST_BIKE
 *
 * 0x50F77CF468D67786

 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} matchId1
 * @param {number} matchId2
 * @param {number} vehicleHash
 */
export function playstatsMcRequestBike(bossId1: number, bossId2: number, matchId1: number, matchId2: number, vehicleHash: number): void {
	const playstatsMcRequestBike_result = Citizen.invokeNative<void>('0x50F77CF468D67786', bossId1, bossId2, matchId1, matchId2, vehicleHash);
	return playstatsMcRequestBike_result;
}