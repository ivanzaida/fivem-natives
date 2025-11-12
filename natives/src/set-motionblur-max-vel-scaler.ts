/**
 * GRAPHICS:SET_MOTIONBLUR_MAX_VEL_SCALER
 *
 * 0x23A6A0C736CAD705

 * 
 * Setter for GET_MOTIONBLUR_MAX_VEL_SCALER
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} scaler
 */
export function setMotionblurMaxVelScaler(scaler: number): void {
	const setMotionblurMaxVelScaler_result = Citizen.invokeNative<void>('0x23A6A0C736CAD705', scaler);
	return setMotionblurMaxVelScaler_result;
}