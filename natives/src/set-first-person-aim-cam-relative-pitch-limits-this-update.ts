/**
 * CAM:SET_FIRST_PERSON_AIM_CAM_RELATIVE_PITCH_LIMITS_THIS_UPDATE
 *
 * 0x5842BDBDE92FEEB1

 * 
 * ------------------------------------------------------------------
 * @param {number} minRelativePitch
 * @param {number} maxRelativePitch
 */
export function setFirstPersonAimCamRelativePitchLimitsThisUpdate(minRelativePitch: number, maxRelativePitch: number): void {
	const setFirstPersonAimCamRelativePitchLimitsThisUpdate_result = Citizen.invokeNative<void>('0x5842BDBDE92FEEB1', minRelativePitch, maxRelativePitch);
	return setFirstPersonAimCamRelativePitchLimitsThisUpdate_result;
}