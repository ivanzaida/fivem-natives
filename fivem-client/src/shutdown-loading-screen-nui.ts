/**
 * CFX:SHUTDOWN_LOADING_SCREEN_NUI
 *
 * 0XB9234AFB

 * Shuts down the `loadingScreen` NUI frame, similarly to `SHUTDOWN_LOADING_SCREEN`.
 * 
 * ------------------------------------------------------------------
 */
export function shutdownLoadingScreenNui(): void {
	const shutdownLoadingScreenNui_result = Citizen.invokeNative<void>('0XB9234AFB', );
	return shutdownLoadingScreenNui_result;
}