/**
 * MONEY:NETWORK_EARN_COLLECTABLES_ACTION_FIGURES
 *
 * 0xDE5641418FF92887

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnCollectablesActionFigures(amount: number): void {
	const networkEarnCollectablesActionFigures_result = Citizen.invokeNative<void>('0xDE5641418FF92887', amount);
	return networkEarnCollectablesActionFigures_result;
}