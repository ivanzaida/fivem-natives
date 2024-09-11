/**
 * HUD:SET_MULTIPLAYER_BANK_CASH
 *
 * 0x06C86CAF67357C8B

 * 
 * ------------------------------------------------------------------
 */
export function setMultiplayerBankCash(): void {
	const setMultiplayerBankCash_result = Citizen.invokeNative<void>('0x06C86CAF67357C8B', );
	return setMultiplayerBankCash_result;
}