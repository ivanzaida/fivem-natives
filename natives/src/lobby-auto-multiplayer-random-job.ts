/**
 * LOADINGSCREEN:LOBBY_AUTO_MULTIPLAYER_RANDOM_JOB
 *
 * 0xE90EEDCA654B46A9

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function lobbyAutoMultiplayerRandomJob(): boolean {
	const lobbyAutoMultiplayerRandomJob_result = Citizen.invokeNative<boolean>('0xE90EEDCA654B46A9', );
	return lobbyAutoMultiplayerRandomJob_result;
}