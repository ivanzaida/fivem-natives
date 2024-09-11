/**
 * MONEY:NETWORK_SPEND_ARCADE_MGMT
 *
 * 0x65093A8F4C502F7F

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} cabinet
 * @param {number} cabinetAmount
 */
export function networkSpendArcadeMgmt(amount: number, fromBank: boolean, fromBankAndWallet: boolean, cabinet: number, cabinetAmount: number): void {
	const networkSpendArcadeMgmt_result = Citizen.invokeNative<void>('0x65093A8F4C502F7F', amount, fromBank, fromBankAndWallet, cabinet, cabinetAmount);
	return networkSpendArcadeMgmt_result;
}