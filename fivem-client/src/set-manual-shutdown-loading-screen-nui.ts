/**
 * CFX:SET_MANUAL_SHUTDOWN_LOADING_SCREEN_NUI
 *
 * 0X1722C938

 * Sets whether or not `SHUTDOWN_LOADING_SCREEN` automatically shuts down the NUI frame for the loading screen. If this is enabled,you will have to manually invoke `SHUTDOWN_LOADING_SCREEN_NUI` whenever you want to hide the NUI loading screen.
 * 
 * ------------------------------------------------------------------
 * @param {boolean} manualShutdown TRUE to manually shut down the loading screen NUI.
 */
export function setManualShutdownLoadingScreenNui(manualShutdown: boolean): void {
	const setManualShutdownLoadingScreenNui_result = Citizen.invokeNative<void>('0X1722C938', manualShutdown);
	return setManualShutdownLoadingScreenNui_result;
}