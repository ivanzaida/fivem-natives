/**
 * MONEY:NETWORK_SPEND_BOUNTY_HUNTER_MISSION
 *
 * 0x86156182084D56A1

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpendBountyHunterMission(amount: number, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpendBountyHunterMission_result = Citizen.invokeNative<void>('0x86156182084D56A1', amount, fromBank, fromBankAndWallet);
	return networkSpendBountyHunterMission_result;
}