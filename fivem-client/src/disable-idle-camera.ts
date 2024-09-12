/**
 * CFX:DISABLE_IDLE_CAMERA
 *
 * 0x3D5AB7F0

 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity.
 * 
 * ------------------------------------------------------------------
 * @param {boolean} state On/Off
 */
export function disableIdleCamera(state: boolean): void {
	const disableIdleCamera_result = Citizen.invokeNative<void>('0x3D5AB7F0', state);
	return disableIdleCamera_result;
}