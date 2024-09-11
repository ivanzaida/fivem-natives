/**
 * MONEY:NETWORK_EARN_FROM_CLUB_MANAGEMENT_PARTICIPATION
 *
 * 0xE57ED256E47D44C1

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} missionId
 */
export function networkEarnFromClubManagementParticipation(amount: number, missionId: number): void {
	const networkEarnFromClubManagementParticipation_result = Citizen.invokeNative<void>('0xE57ED256E47D44C1', amount, missionId);
	return networkEarnFromClubManagementParticipation_result;
}