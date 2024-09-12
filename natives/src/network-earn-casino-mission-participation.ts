/**
 * MONEY:NETWORK_EARN_CASINO_MISSION_PARTICIPATION
 *
 * 0xFF9E4D74FE360E69

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnCasinoMissionParticipation(amount: number): void {
	const networkEarnCasinoMissionParticipation_result = Citizen.invokeNative<void>('0xFF9E4D74FE360E69', amount);
	return networkEarnCasinoMissionParticipation_result;
}