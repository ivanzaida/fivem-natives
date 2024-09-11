/**
 * STATS:PLAYSTATS_DRONE_USAGE
 *
 * 0x4836A505A59A567B

 * 
 * ------------------------------------------------------------------
 * @param {number} time
 * @param {number} endReason
 * @param {number} totalDroneTases
 */
export function playstatsDroneUsage(time: number, endReason: number, totalDroneTases: number): void {
	const playstatsDroneUsage_result = Citizen.invokeNative<void>('0x4836A505A59A567B', time, endReason, totalDroneTases);
	return playstatsDroneUsage_result;
}