/**
 * CAM:DISABLE_CINEMATIC_BONNET_CAMERA_THIS_UPDATE
 *
 * 0x48392085C5B52584

 * 
 * ------------------------------------------------------------------
 */
export function disableCinematicBonnetCameraThisUpdate(): void {
	const disableCinematicBonnetCameraThisUpdate_result = Citizen.invokeNative<void>('0x48392085C5B52584', );
	return disableCinematicBonnetCameraThisUpdate_result;
}