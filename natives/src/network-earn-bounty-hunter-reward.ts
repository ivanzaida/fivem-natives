/**
 * MONEY:NETWORK_EARN_BOUNTY_HUNTER_REWARD
 *
 * 0xB1C4AF1EA46263A1

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnBountyHunterReward(amount: number): void {
	const networkEarnBountyHunterReward_result = Citizen.invokeNative<void>('0xB1C4AF1EA46263A1', amount);
	return networkEarnBountyHunterReward_result;
}