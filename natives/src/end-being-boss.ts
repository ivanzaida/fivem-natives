/**
 * STATS:END_BEING_BOSS
 *
 * 0xD9ADAE64ED7472C8

 * 
 * ------------------------------------------------------------------
 * @param {number} endingReason
 * @param {number} time
 */
export function endBeingBoss(endingReason: number, time: number): void {
	const endBeingBoss_result = Citizen.invokeNative<void>('0xD9ADAE64ED7472C8', endingReason, time);
	return endBeingBoss_result;
}