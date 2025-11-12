/**
 * GRAPHICS:GET_MOTIONBLUR_MAX_VEL_SCALER
 *
 * 0x69AFCC77DCADB9BE

 * 
 * Getter for SET_MOTIONBLUR_MAX_VEL_SCALER
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getMotionblurMaxVelScaler(): number {
	const getMotionblurMaxVelScaler_result = Citizen.invokeNative<number>('0x69AFCC77DCADB9BE', );
	return getMotionblurMaxVelScaler_result;
}