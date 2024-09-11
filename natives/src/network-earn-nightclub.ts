/**
 * MONEY:NETWORK_EARN_NIGHTCLUB
 *
 * 0x1CB79849195B4445

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnNightclub(amount: number): void {
	const networkEarnNightclub_result = Citizen.invokeNative<void>('0x1CB79849195B4445', amount);
	return networkEarnNightclub_result;
}