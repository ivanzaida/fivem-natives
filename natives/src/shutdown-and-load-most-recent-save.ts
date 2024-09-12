/**
 * NETWORK:SHUTDOWN_AND_LOAD_MOST_RECENT_SAVE
 *
 * 0xC41B72952BCE3731

 * Attempts to start a new single player game and load the most recent single player savegame.
 * The code must first queue a savegame operation. If that fails then this command will behave like SHUTDOWN_AND_LAUNCH_SINGLE_PLAYER_GAME(). It will also return FALSE.
 * If the savegame operation can be queued then this command will return TRUE. It will take a number of frames to find the most recent save so this command won't be as immediate as SHUTDOWN_AND_LAUNCH_SINGLE_PLAYER_GAME()
 * In singleplayer this will re-load your game.
 * In FiveM / GTA:Online this disconnects you from the session, and starts loading single player, however you still remain connected to the server (only if you're the host, if you're not then you also (most likely) get disconnected from the server) and other players will not be able to join until you exit the game.
 * You might need to DoScreenFadeIn and ShutdownLoadingScreen otherwise you probably won't end up loading into SP at all.
 * Somewhat related note: opening the pause menu after loading into this 'singleplayer' mode crashes the game.
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function shutdownAndLoadMostRecentSave(): boolean {
	const shutdownAndLoadMostRecentSave_result = Citizen.invokeNative<boolean>('0xC41B72952BCE3731', );
	return shutdownAndLoadMostRecentSave_result;
}