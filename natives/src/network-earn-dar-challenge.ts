/**
 * MONEY:NETWORK_EARN_DAR_CHALLENGE
 *
 * 0x76B1F7266AE121AC

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} contentid
 */
export function networkEarnDarChallenge(amount: number, contentid: number): void {
	const networkEarnDarChallenge_result = Citizen.invokeNative<void>('0x76B1F7266AE121AC', amount, contentid);
	return networkEarnDarChallenge_result;
}