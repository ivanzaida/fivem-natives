/**
 * PAD:SET_USE_ADJUSTED_MOUSE_COORDS
 *
 * 0x88C44A9692A5A3A0

 * 
 * ------------------------------------------------------------------
 * @param {boolean} control
 */
export function setUseAdjustedMouseCoords(control: boolean): void {
	const setUseAdjustedMouseCoords_result = Citizen.invokeNative<void>('0x88C44A9692A5A3A0', control);
	return setUseAdjustedMouseCoords_result;
}