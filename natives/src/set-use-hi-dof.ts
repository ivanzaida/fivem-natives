/**
 * CAM:SET_USE_HI_DOF
 *
 * 0xB6387DEFC12580A6

 * 
 * ------------------------------------------------------------------
 */
export function setUseHiDof(): void {
	const setUseHiDof_result = Citizen.invokeNative<void>('0xB6387DEFC12580A6', );
	return setUseHiDof_result;
}