/**
 * HUD:SET_MULTIPLAYER_WALLET_CASH
 *
 * 0x6DB41C6D84391C64

 * 
 * ------------------------------------------------------------------
 */
export function setMultiplayerWalletCash(): void {
	const setMultiplayerWalletCash_result = Citizen.invokeNative<void>('0x6DB41C6D84391C64', );
	return setMultiplayerWalletCash_result;
}