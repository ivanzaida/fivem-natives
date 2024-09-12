/**
 * GRAPHICS:SET_SKIDMARK_RANGE_SCALE
 *
 * 0x19270EAC91F9CFA8

 * 
 * ------------------------------------------------------------------
 * @param {number} scale
 */
export function setSkidmarkRangeScale(scale: number): void {
	const setSkidmarkRangeScale_result = Citizen.invokeNative<void>('0x19270EAC91F9CFA8', scale);
	return setSkidmarkRangeScale_result;
}