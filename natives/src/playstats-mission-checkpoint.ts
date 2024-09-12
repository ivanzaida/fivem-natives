/**
 * STATS:PLAYSTATS_MISSION_CHECKPOINT
 *
 * 0x375B1B37EF136A49

 * 
 * ------------------------------------------------------------------
 * @param {string} missionName
 * @param {number} variant
 * @param {number} previousCheckpoint
 * @param {number} checkpoint
 */
export function playstatsMissionCheckpoint(missionName: string, variant: number = 0, previousCheckpoint: number = 0, checkpoint: number = 0): void {
	const playstatsMissionCheckpoint_result = Citizen.invokeNative<void>('0x375B1B37EF136A49', missionName, variant, previousCheckpoint, checkpoint);
	return playstatsMissionCheckpoint_result;
}