/**
 * STATS:CHANGE_GOON_LOOKING_FOR_WORK
 *
 * 0x941DD7AC53C9EC22

 * 
 * ------------------------------------------------------------------
 * @param {boolean} value
 */
export function changeGoonLookingForWork(value: boolean): void {
	const changeGoonLookingForWork_result = Citizen.invokeNative<void>('0x941DD7AC53C9EC22', value);
	return changeGoonLookingForWork_result;
}