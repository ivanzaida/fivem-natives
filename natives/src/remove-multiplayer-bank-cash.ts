/**
 * HUD:REMOVE_MULTIPLAYER_BANK_CASH
 *
 * 0x674C05E89511D49B

 * 
 * ------------------------------------------------------------------
 */
export function removeMultiplayerBankCash(): void {
	const removeMultiplayerBankCash_result = Citizen.invokeNative<void>('0x674C05E89511D49B', );
	return removeMultiplayerBankCash_result;
}