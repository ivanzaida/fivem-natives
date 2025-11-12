/**
 * CAM:SET_FIRST_PERSON_SHOOTER_CAMERA_HEADING
 *
 * 0xE0A23567157E9B5E

 * 
 * If the first person shooter camera is active, does the same thing as SET_GAMEPLAY_CAM_RELATIVE_HEADING.  If not active, the heading will be set when the camera is created.
 * 
 * Does nothing
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} heading The relative heading to set, in degrees.
 */
export function setFirstPersonShooterCameraHeading(heading: number = 0): void {
	const setFirstPersonShooterCameraHeading_result = Citizen.invokeNative<void>('0xE0A23567157E9B5E', heading);
	return setFirstPersonShooterCameraHeading_result;
}