/**
 * MONEY:NETWORK_EARN_BEACH_PARTY_LOST_FOUND
 *
 * 0x45D4863471811592

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} item
 * @param {number} missionGiver
 */
export function networkEarnBeachPartyLostFound(amount: number, item: number, missionGiver: number): void {
	const networkEarnBeachPartyLostFound_result = Citizen.invokeNative<void>('0x45D4863471811592', amount, item, missionGiver);
	return networkEarnBeachPartyLostFound_result;
}