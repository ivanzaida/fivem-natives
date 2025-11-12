/**
 * CAM:SET_FIRST_PERSON_SHOOTER_CAMERA_PITCH
 *
 * 0x7E08E86FBA713FE8

 * 
 * If the first person shooter camera is active, does the same thing as SET_GAMEPLAY_CAM_RELATIVE_PITCH.  If not active, the pitch will be set when the camera is created.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} pitch The relative pitch to set, in degrees.
 */
export function setFirstPersonShooterCameraPitch(pitch: number = 0): void {
	const setFirstPersonShooterCameraPitch_result = Citizen.invokeNative<void>('0x7E08E86FBA713FE8', pitch);
	return setFirstPersonShooterCameraPitch_result;
}