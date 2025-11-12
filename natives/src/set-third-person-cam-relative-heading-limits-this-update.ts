/**
 * CAM:SET_THIRD_PERSON_CAM_RELATIVE_HEADING_LIMITS_THIS_UPDATE
 *
 * 0x19D0C4621093F82B

 * 
 * minimum: Degrees between -180f and 180f.
 * maximum: Degrees between -180f and 180f.
 * 
 * Clamps the gameplay camera's current yaw.
 * 
 * Eg. SET_THIRD_PERSON_CAM_RELATIVE_HEADING_LIMITS_THIS_UPDATE(0.0f, 0.0f) will set the horizontal angle directly behind the player.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minRelativeHeading
 * @param {number} maxRelativeHeading
 */
export function setThirdPersonCamRelativeHeadingLimitsThisUpdate(minRelativeHeading: number, maxRelativeHeading: number): void {
	const setThirdPersonCamRelativeHeadingLimitsThisUpdate_result = Citizen.invokeNative<void>('0x19D0C4621093F82B', minRelativeHeading, maxRelativeHeading);
	return setThirdPersonCamRelativeHeadingLimitsThisUpdate_result;
}