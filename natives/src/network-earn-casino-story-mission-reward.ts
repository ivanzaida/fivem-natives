/**
 * MONEY:NETWORK_EARN_CASINO_STORY_MISSION_REWARD
 *
 * 0xCC4DAB4ED0FA0069

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnCasinoStoryMissionReward(amount: number): void {
	const networkEarnCasinoStoryMissionReward_result = Citizen.invokeNative<void>('0xCC4DAB4ED0FA0069', amount);
	return networkEarnCasinoStoryMissionReward_result;
}