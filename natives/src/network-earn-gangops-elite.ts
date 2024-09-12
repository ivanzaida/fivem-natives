import { EGangopsEliteType } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_EARN_GANGOPS_ELITE
 *
 * 0x90C7361D0621A3B6

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {string} matchId
 * @param {EGangopsEliteType} challenge
 */
export function networkEarnGangopsElite(amount: number, matchId: string, challenge: EGangopsEliteType | number): void {
	const networkEarnGangopsElite_result = Citizen.invokeNative<void>('0x90C7361D0621A3B6', amount, matchId, challenge);
	return networkEarnGangopsElite_result;
}