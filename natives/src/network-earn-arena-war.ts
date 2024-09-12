/**
 * MONEY:NETWORK_EARN_ARENA_WAR
 *
 * 0x9025AEE080F84A1B

 * 
 * ------------------------------------------------------------------
 * @param {number} matchEarnings
 * @param {number} premiumEarnings
 * @param {number} careerAward
 * @param {number} skillAward
 */
export function networkEarnArenaWar(matchEarnings: number, premiumEarnings: number, careerAward: number, skillAward: number): void {
	const networkEarnArenaWar_result = Citizen.invokeNative<void>('0x9025AEE080F84A1B', matchEarnings, premiumEarnings, careerAward, skillAward);
	return networkEarnArenaWar_result;
}