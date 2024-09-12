/**
 * HUD:REMOVE_MULTIPLAYER_WALLET_CASH
 *
 * 0x0B54862B1B49F2EA

 * 
 * ------------------------------------------------------------------
 */
export function removeMultiplayerWalletCash(): void {
	const removeMultiplayerWalletCash_result = Citizen.invokeNative<void>('0x0B54862B1B49F2EA', );
	return removeMultiplayerWalletCash_result;
}