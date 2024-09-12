import { EGangopsAwardType } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_EARN_GANGOPS_AWARD
 *
 * 0xA32B695D90B1EA0E

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {string} matchId
 * @param {EGangopsAwardType} challenge
 */
export function networkEarnGangopsAward(amount: number, matchId: string, challenge: EGangopsAwardType | number): void {
	const networkEarnGangopsAward_result = Citizen.invokeNative<void>('0xA32B695D90B1EA0E', amount, matchId, challenge);
	return networkEarnGangopsAward_result;
}