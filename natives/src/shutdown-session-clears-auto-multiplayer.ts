/**
 * LOADINGSCREEN:SHUTDOWN_SESSION_CLEARS_AUTO_MULTIPLAYER
 *
 * 0x994B0E18137346ED

 * 
 * ------------------------------------------------------------------
 * @param {boolean} clearsAutoMultiplayer
 */
export function shutdownSessionClearsAutoMultiplayer(clearsAutoMultiplayer: boolean): void {
	const shutdownSessionClearsAutoMultiplayer_result = Citizen.invokeNative<void>('0x994B0E18137346ED', clearsAutoMultiplayer);
	return shutdownSessionClearsAutoMultiplayer_result;
}