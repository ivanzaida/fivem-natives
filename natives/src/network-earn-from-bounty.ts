import { GamerHandle } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_EARN_FROM_BOUNTY
 *
 * 0xFED8EC9FDD58021A

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {GamerHandle} gamerPlaced [Ref]
 * @param {GamerHandle} gamerTarget [Ref]
 * @param {number} flags
 */
export function networkEarnFromBounty(amount: number, gamerPlaced: GamerHandle /* ptr */, gamerTarget: GamerHandle /* ptr */, flags: number): void {
	const networkEarnFromBounty_result = Citizen.invokeNative<void>('0xFED8EC9FDD58021A', amount, gamerPlaced.dataView, gamerTarget.dataView, flags);
	return networkEarnFromBounty_result;
}