/**
 * MONEY:NETWORK_SPENT_PA_SERVICE_HELI
 *
 * 0x4F12D7F9E2049590

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} anotherMember
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentPaServiceHeli(amount: number, anotherMember: boolean, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentPaServiceHeli_result = Citizen.invokeNative<void>('0x4F12D7F9E2049590', amount, anotherMember, fromBank, fromBankAndWallet);
	return networkSpentPaServiceHeli_result;
}