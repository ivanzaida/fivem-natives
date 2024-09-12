/**
 * STATS:PLAYSTATS_MISSION_OVER
 *
 * 0x1A6EB10909EB6840

 * 
 * ------------------------------------------------------------------
 * @param {string} missionName
 * @param {number} variant
 * @param {number} checkpoint
 * @param {boolean} failed
 * @param {boolean} canceled
 * @param {boolean} skipped
 */
export function playstatsMissionOver(missionName: string, variant: number = 0, checkpoint: number = 0, failed: boolean = false, canceled: boolean = false, skipped: boolean = false): void {
	const playstatsMissionOver_result = Citizen.invokeNative<void>('0x1A6EB10909EB6840', missionName, variant, checkpoint, failed, canceled, skipped);
	return playstatsMissionOver_result;
}