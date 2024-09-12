/**
 * MONEY:NETWORK_EARN_ARENA_CAREER_PROGRESSION
 *
 * 0xC7D8414269660FC0

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} tier
 */
export function networkEarnArenaCareerProgression(amount: number, tier: number): void {
	const networkEarnArenaCareerProgression_result = Citizen.invokeNative<void>('0xC7D8414269660FC0', amount, tier);
	return networkEarnArenaCareerProgression_result;
}