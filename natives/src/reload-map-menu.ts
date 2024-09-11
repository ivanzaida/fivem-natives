/**
 * HUD:RELOAD_MAP_MENU
 *
 * 0x95A329CAEBBB3E76

 * 
 * ------------------------------------------------------------------
 */
export function reloadMapMenu(): void {
	const reloadMapMenu_result = Citizen.invokeNative<void>('0x95A329CAEBBB3E76', );
	return reloadMapMenu_result;
}