/**
 * CAM:SET_FIRST_PERSON_AIM_CAM_RELATIVE_HEADING_LIMITS_THIS_UPDATE
 *
 * 0xBB76112874174E25

 * 
 * ------------------------------------------------------------------
 * @param {number} minRelativeHeading
 * @param {number} maxRelativeHeading
 */
export function setFirstPersonAimCamRelativeHeadingLimitsThisUpdate(minRelativeHeading: number, maxRelativeHeading: number): void {
	const setFirstPersonAimCamRelativeHeadingLimitsThisUpdate_result = Citizen.invokeNative<void>('0xBB76112874174E25', minRelativeHeading, maxRelativeHeading);
	return setFirstPersonAimCamRelativeHeadingLimitsThisUpdate_result;
}