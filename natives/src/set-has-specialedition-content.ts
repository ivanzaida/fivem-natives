/**
 * STATS:SET_HAS_SPECIALEDITION_CONTENT
 *
 * 0xED11291F7127888E

 * 
 * Sets profile setting 866
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} value
 */
export function setHasSpecialeditionContent(value: number): void {
	const setHasSpecialeditionContent_result = Citizen.invokeNative<void>('0xED11291F7127888E', value);
	return setHasSpecialeditionContent_result;
}