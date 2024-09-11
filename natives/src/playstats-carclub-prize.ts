/**
 * STATS:PLAYSTATS_CARCLUB_PRIZE
 *
 * 0x492808CC0E1DB266

 * 
 * ------------------------------------------------------------------
 * @param {number} missionName
 * @param {number} vehicle
 */
export function playstatsCarclubPrize(missionName: number, vehicle: number): void {
	const playstatsCarclubPrize_result = Citizen.invokeNative<void>('0x492808CC0E1DB266', missionName, vehicle);
	return playstatsCarclubPrize_result;
}