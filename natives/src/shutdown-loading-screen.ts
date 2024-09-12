/**
 * SCRIPT:SHUTDOWN_LOADING_SCREEN
 *
 * 0xCD17096A98584C2B

 * 
 * ------------------------------------------------------------------
 */
export function shutdownLoadingScreen(): void {
	const shutdownLoadingScreen_result = Citizen.invokeNative<void>('0xCD17096A98584C2B', );
	return shutdownLoadingScreen_result;
}