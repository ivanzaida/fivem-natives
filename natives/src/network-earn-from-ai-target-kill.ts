/**
 * MONEY:NETWORK_EARN_FROM_AI_TARGET_KILL
 *
 * 0x830CE9F43780AC92

 * 
 * DSPORT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} pedhash
 */
export function networkEarnFromAiTargetKill(amount: number, pedhash: number): void {
	const networkEarnFromAiTargetKill_result = Citizen.invokeNative<void>('0x830CE9F43780AC92', amount, pedhash);
	return networkEarnFromAiTargetKill_result;
}