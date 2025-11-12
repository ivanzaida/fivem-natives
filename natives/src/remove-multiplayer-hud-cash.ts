/**
 * HUD:REMOVE_MULTIPLAYER_HUD_CASH
 *
 * 0x3BE4C55385E815B4

 * 
 * Removes multiplayer cash hud each frame
 * 
 * 
 * ------------------------------------------------------------------
 */
export function removeMultiplayerHudCash(): void {
	const removeMultiplayerHudCash_result = Citizen.invokeNative<void>('0x3BE4C55385E815B4', );
	return removeMultiplayerHudCash_result;
}