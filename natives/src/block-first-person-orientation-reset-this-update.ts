/**
 * CAM:BLOCK_FIRST_PERSON_ORIENTATION_RESET_THIS_UPDATE
 *
 * 0xE71B1E03F658C30C

 * 
 * Special case native to disable the reorient of the first person camera when we switch to another view (scripted camera) and the controls are disabled. This will be useful for example for table games in the casino.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function blockFirstPersonOrientationResetThisUpdate(): void {
	const blockFirstPersonOrientationResetThisUpdate_result = Citizen.invokeNative<void>('0xE71B1E03F658C30C', );
	return blockFirstPersonOrientationResetThisUpdate_result;
}