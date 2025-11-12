/**
 * MISC:CLEANUP_ASYNC_INSTALL
 *
 * 0x129E6CC3506106AC

 * 
 * Call to clean up after the async install, and reboot into the full game
 * 
 * 
 * ------------------------------------------------------------------
 */
export function cleanupAsyncInstall(): void {
	const cleanupAsyncInstall_result = Citizen.invokeNative<void>('0x129E6CC3506106AC', );
	return cleanupAsyncInstall_result;
}