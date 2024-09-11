/**
 * MONEY:NETWORK_EARN_CASINO_MISSION_REWARD
 *
 * 0xE073EC11C22D5CB5

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnCasinoMissionReward(amount: number): void {
	const networkEarnCasinoMissionReward_result = Citizen.invokeNative<void>('0xE073EC11C22D5CB5', amount);
	return networkEarnCasinoMissionReward_result;
}