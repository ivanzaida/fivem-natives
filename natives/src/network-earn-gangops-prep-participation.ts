/**
 * MONEY:NETWORK_EARN_GANGOPS_PREP_PARTICIPATION
 *
 * 0x1320A36B594CBEC2

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnGangopsPrepParticipation(amount: number): void {
	const networkEarnGangopsPrepParticipation_result = Citizen.invokeNative<void>('0x1320A36B594CBEC2', amount);
	return networkEarnGangopsPrepParticipation_result;
}