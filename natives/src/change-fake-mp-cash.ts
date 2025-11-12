/**
 * HUD:CHANGE_FAKE_MP_CASH
 *
 * 0x29F4FA4B0206645D

 * 
 * Displays cash change notifications on HUD.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} fakeWalletDifference
 * @param {number} fakeBankDifference
 */
export function changeFakeMpCash(fakeWalletDifference: number, fakeBankDifference: number): void {
	const changeFakeMpCash_result = Citizen.invokeNative<void>('0x29F4FA4B0206645D', fakeWalletDifference, fakeBankDifference);
	return changeFakeMpCash_result;
}