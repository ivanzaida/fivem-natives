/**
 * STATS:PLAYSTATS_MISSION_STARTED
 *
 * 0x048963DA591ECAAF

 * 
 * ------------------------------------------------------------------
 * @param {string} missionName
 * @param {number} variant
 * @param {number} checkpoint
 * @param {boolean} replaying
 */
export function playstatsMissionStarted(missionName: string, variant: number = 0, checkpoint: number = 0, replaying: boolean = false): void {
	const playstatsMissionStarted_result = Citizen.invokeNative<void>('0x048963DA591ECAAF', missionName, variant, checkpoint, replaying);
	return playstatsMissionStarted_result;
}