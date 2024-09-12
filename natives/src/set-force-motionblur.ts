/**
 * GRAPHICS:SET_FORCE_MOTIONBLUR
 *
 * 0xB13A0D3DD3B674C6

 * 
 * ------------------------------------------------------------------
 * @param {boolean} force
 */
export function setForceMotionblur(force: boolean): void {
	const setForceMotionblur_result = Citizen.invokeNative<void>('0xB13A0D3DD3B674C6', force);
	return setForceMotionblur_result;
}