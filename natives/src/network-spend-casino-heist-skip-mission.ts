/**
 * MONEY:NETWORK_SPEND_CASINO_HEIST_SKIP_MISSION
 *
 * 0x47051CE8E3FBF361

 * 
 * ------------------------------------------------------------------
 * @param {number} mission
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpendCasinoHeistSkipMission(mission: number, amount: number, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpendCasinoHeistSkipMission_result = Citizen.invokeNative<void>('0x47051CE8E3FBF361', mission, amount, fromBank, fromBankAndWallet);
	return networkSpendCasinoHeistSkipMission_result;
}