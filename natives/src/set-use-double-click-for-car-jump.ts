/**
 * VEHICLE:SET_USE_DOUBLE_CLICK_FOR_CAR_JUMP
 *
 * 0x7619E49E996C8A15

 * 
 * Changes the car jump control to require a double-tap to activate.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} useDoubleClick
 */
export function setUseDoubleClickForCarJump(useDoubleClick: boolean): void {
	const setUseDoubleClickForCarJump_result = Citizen.invokeNative<void>('0x7619E49E996C8A15', useDoubleClick);
	return setUseDoubleClickForCarJump_result;
}