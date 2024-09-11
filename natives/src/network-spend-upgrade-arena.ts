import { SpentOnArena } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPEND_UPGRADE_ARENA
 *
 * 0x56EA8C6ED5821F2B

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {SpentOnArena} data [Ref]
 */
export function networkSpendUpgradeArena(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: SpentOnArena /* ptr */): void {
	const networkSpendUpgradeArena_result = Citizen.invokeNative<void>('0x56EA8C6ED5821F2B', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpendUpgradeArena_result;
}