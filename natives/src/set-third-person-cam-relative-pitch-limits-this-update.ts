/**
 * CAM:SET_THIRD_PERSON_CAM_RELATIVE_PITCH_LIMITS_THIS_UPDATE
 *
 * 0xE4C00EFAE138F020

 * 
 * minimum: Degrees between -90f and 90f.
 * maximum: Degrees between -90f and 90f.
 * 
 * Clamps the gameplay camera's current pitch.
 * 
 * Eg. SET_THIRD_PERSON_CAM_RELATIVE_PITCH_LIMITS_THIS_UPDATE(0.0f, 0.0f) will set the vertical angle directly behind the player.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minRelativePitch
 * @param {number} maxRelativePitch
 */
export function setThirdPersonCamRelativePitchLimitsThisUpdate(minRelativePitch: number, maxRelativePitch: number): void {
	const setThirdPersonCamRelativePitchLimitsThisUpdate_result = Citizen.invokeNative<void>('0xE4C00EFAE138F020', minRelativePitch, maxRelativePitch);
	return setThirdPersonCamRelativePitchLimitsThisUpdate_result;
}