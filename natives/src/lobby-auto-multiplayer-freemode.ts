/**
 * LOADINGSCREEN:LOBBY_AUTO_MULTIPLAYER_FREEMODE
 *
 * 0xA7D416B098808337

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function lobbyAutoMultiplayerFreemode(): boolean {
	const lobbyAutoMultiplayerFreemode_result = Citizen.invokeNative<boolean>('0xA7D416B098808337', );
	return lobbyAutoMultiplayerFreemode_result;
}