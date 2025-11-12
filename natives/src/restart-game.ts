/**
 * MISC:RESTART_GAME
 *
 * 0xF86F13F66FC06EDF

 * 
 * In singleplayer it does exactly what the name implies. In FiveM / GTA:Online it shows `Disconnecting from GTA Online` HUD and then quits the game.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function restartGame(): void {
	const restartGame_result = Citizen.invokeNative<void>('0xF86F13F66FC06EDF', );
	return restartGame_result;
}