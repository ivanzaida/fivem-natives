/**
 * CAM:SET_THIRD_PERSON_CAM_ORBIT_DISTANCE_LIMITS_THIS_UPDATE
 *
 * 0xE3270F1A682CF48C

 * 
 * Seems to animate the gameplay camera zoom.
 * 
 * Eg. SET_THIRD_PERSON_CAM_ORBIT_DISTANCE_LIMITS_THIS_UPDATE(1f, 1000f);
 * will animate the camera zooming in from 1000 meters away.
 * 
 * Game scripts use it like this:
 * 
 * // Setting this to 1 prevents V key from changing zoom
 * PLAYER::SET_PLAYER_FORCED_ZOOM(PLAYER::PLAYER_ID(), 1);
 * 
 * // These restrict how far you can move cam up/down left/right
 * CAM::SET_THIRD_PERSON_CAM_RELATIVE_HEADING_LIMITS_THIS_UPDATE(-20f, 50f);
 * CAM::SET_THIRD_PERSON_CAM_RELATIVE_PITCH_LIMITS_THIS_UPDATE(-60f, 0f);
 * 
 * CAM::SET_THIRD_PERSON_CAM_ORBIT_DISTANCE_LIMITS_THIS_UPDATE(1f, 1f);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minDistance
 * @param {number} maxDistance
 */
export function setThirdPersonCamOrbitDistanceLimitsThisUpdate(minDistance: number, maxDistance: number): void {
	const setThirdPersonCamOrbitDistanceLimitsThisUpdate_result = Citizen.invokeNative<void>('0xE3270F1A682CF48C', minDistance, maxDistance);
	return setThirdPersonCamOrbitDistanceLimitsThisUpdate_result;
}