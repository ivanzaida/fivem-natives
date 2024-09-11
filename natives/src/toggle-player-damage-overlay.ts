/**
 * GRAPHICS:TOGGLE_PLAYER_DAMAGE_OVERLAY
 *
 * 0xA48EAC4D241222D3

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function togglePlayerDamageOverlay(enable: boolean): void {
	const togglePlayerDamageOverlay_result = Citizen.invokeNative<void>('0xA48EAC4D241222D3', enable);
	return togglePlayerDamageOverlay_result;
}