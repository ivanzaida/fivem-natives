/**
 * HUD:CUSTOM_MINIMAP_CLEAR_BLIPS
 *
 * 0x4F44B8341D970185

 * 
 * ------------------------------------------------------------------
 */
export function customMinimapClearBlips(): void {
	const customMinimapClearBlips_result = Citizen.invokeNative<void>('0x4F44B8341D970185', );
	return customMinimapClearBlips_result;
}