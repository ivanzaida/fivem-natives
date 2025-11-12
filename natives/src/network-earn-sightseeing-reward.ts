/**
 * MONEY:NETWORK_EARN_SIGHTSEEING_REWARD
 *
 * 0x4D488739F6C82163

 * 
 * Reward when the player photographs a new location
 * Amount is the base reward amount, locBonus and milBonus is for the extra amount for a bonus photograph (location and military UFO thing). I'll sum them up together on code side
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} locBonus
 * @param {number} milBonus
 * @param {number} location
 */
export function networkEarnSightseeingReward(amount: number, locBonus: number, milBonus: number, location: number): void {
	const networkEarnSightseeingReward_result = Citizen.invokeNative<void>('0x4D488739F6C82163', amount, locBonus, milBonus, location);
	return networkEarnSightseeingReward_result;
}