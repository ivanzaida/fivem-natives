/**
 * LOADINGSCREEN:LOBBY_AUTO_MULTIPLAYER_MENU
 *
 * 0x8EE7901EEE84F67E

 * 
 * This function is hard-coded to always return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function lobbyAutoMultiplayerMenu(): boolean {
	const lobbyAutoMultiplayerMenu_result = Citizen.invokeNative<boolean>('0x8EE7901EEE84F67E', );
	return lobbyAutoMultiplayerMenu_result;
}