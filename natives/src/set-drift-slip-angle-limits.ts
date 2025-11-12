/**
 * VEHICLE:_SET_DRIFT_SLIP_ANGLE_LIMITS
 *
 * 0xDAF4C98C18AC6F06

 * 
 * First two floats relate to rumble, the last is a threshold
 * 
 * 
 * ------------------------------------------------------------------
 */
export function setDriftSlipAngleLimits(): void {
	const setDriftSlipAngleLimits_result = Citizen.invokeNative<void>('0xDAF4C98C18AC6F06', );
	return setDriftSlipAngleLimits_result;
}