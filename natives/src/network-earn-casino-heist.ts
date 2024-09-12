/**
 * MONEY:NETWORK_EARN_CASINO_HEIST
 *
 * 0x814E3AEA72604174

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} generalPrep
 * @param {number} generalPrepAmount
 * @param {number} setup
 * @param {number} setupAmount
 * @param {number} finale
 * @param {number} finaleAmount
 */
export function networkEarnCasinoHeist(amount: number, generalPrep: number, generalPrepAmount: number, setup: number, setupAmount: number, finale: number, finaleAmount: number): void {
	const networkEarnCasinoHeist_result = Citizen.invokeNative<void>('0x814E3AEA72604174', amount, generalPrep, generalPrepAmount, setup, setupAmount, finale, finaleAmount);
	return networkEarnCasinoHeist_result;
}