import { SpendHangar } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_UPGRADE_HANGAR
 *
 * 0x74A9433D624A129B

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpendHangar} data [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentUpgradeHangar(amount: number, data: SpendHangar /* ptr */, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentUpgradeHangar_result = Citizen.invokeNative<void>('0x74A9433D624A129B', amount, data.dataView, fromBank, fromBankAndWallet);
	return networkSpentUpgradeHangar_result;
}