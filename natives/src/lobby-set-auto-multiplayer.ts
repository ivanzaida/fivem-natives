/**
 * LOADINGSCREEN:LOBBY_SET_AUTO_MULTIPLAYER
 *
 * 0xD0DC425AC19B966E

 * 
 * ------------------------------------------------------------------
 * @param {boolean} isAuto
 */
export function lobbySetAutoMultiplayer(isAuto: boolean): void {
	const lobbySetAutoMultiplayer_result = Citizen.invokeNative<void>('0xD0DC425AC19B966E', isAuto);
	return lobbySetAutoMultiplayer_result;
}