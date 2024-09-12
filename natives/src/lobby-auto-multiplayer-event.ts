/**
 * LOADINGSCREEN:LOBBY_AUTO_MULTIPLAYER_EVENT
 *
 * 0x7B661ACC29FA795E

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function lobbyAutoMultiplayerEvent(): boolean {
	const lobbyAutoMultiplayerEvent_result = Citizen.invokeNative<boolean>('0x7B661ACC29FA795E', );
	return lobbyAutoMultiplayerEvent_result;
}