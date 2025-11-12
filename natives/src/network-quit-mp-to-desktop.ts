/**
 * NETWORK:NETWORK_QUIT_MP_TO_DESKTOP
 *
 * 0x1BA57F70810F53CD

 * 
 * Properly quits the multiplayer, then shows the confirmation warning.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkQuitMpToDesktop(): void {
	const networkQuitMpToDesktop_result = Citizen.invokeNative<void>('0x1BA57F70810F53CD', );
	return networkQuitMpToDesktop_result;
}