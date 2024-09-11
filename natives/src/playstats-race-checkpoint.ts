/**
 * STATS:PLAYSTATS_RACE_CHECKPOINT
 *
 * 0x8316C9B9D1E7C6F9

 * 
 * ------------------------------------------------------------------
 * @param {number} vehicleId
 * @param {number} checkpointId
 * @param {number} racePos
 * @param {number} raceTime
 * @param {number} checkpointTime
 */
export function playstatsRaceCheckpoint(vehicleId: number, checkpointId: number, racePos: number, raceTime: number, checkpointTime: number): void {
	const playstatsRaceCheckpoint_result = Citizen.invokeNative<void>('0x8316C9B9D1E7C6F9', vehicleId, checkpointId, racePos, raceTime, checkpointTime);
	return playstatsRaceCheckpoint_result;
}