/**
 * NETWORK:SHUTDOWN_AND_LAUNCH_SINGLE_PLAYER_GAME
 *
 * 0x597D3F733B15F96E

 * 
 * Starts a new singleplayer game (at the prologue).
 * 
 * 
 * ------------------------------------------------------------------
 */
export function shutdownAndLaunchSinglePlayerGame(): void {
	const shutdownAndLaunchSinglePlayerGame_result = Citizen.invokeNative<void>('0x597D3F733B15F96E', );
	return shutdownAndLaunchSinglePlayerGame_result;
}