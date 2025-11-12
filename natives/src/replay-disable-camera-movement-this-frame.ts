/**
 * RECORDING:REPLAY_DISABLE_CAMERA_MOVEMENT_THIS_FRAME
 *
 * 0x9D0B099EEAD74270

 * 
 * This will disable the ability to make camera changes in R Editor.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function replayDisableCameraMovementThisFrame(): void {
	const replayDisableCameraMovementThisFrame_result = Citizen.invokeNative<void>('0x9D0B099EEAD74270', );
	return replayDisableCameraMovementThisFrame_result;
}