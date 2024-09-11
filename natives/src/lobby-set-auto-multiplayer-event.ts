/**
 * LOADINGSCREEN:LOBBY_SET_AUTO_MULTIPLAYER_EVENT
 *
 * 0x7F2A9FAB60E93DB0

 * 
 * ------------------------------------------------------------------
 * @param {boolean} isAuto
 */
export function lobbySetAutoMultiplayerEvent(isAuto: boolean): void {
	const lobbySetAutoMultiplayerEvent_result = Citizen.invokeNative<void>('0x7F2A9FAB60E93DB0', isAuto);
	return lobbySetAutoMultiplayerEvent_result;
}