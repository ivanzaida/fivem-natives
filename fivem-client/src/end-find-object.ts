/**
 * CFX:END_FIND_OBJECT
 *
 * 0XDEDA4E50

 * 
 * ------------------------------------------------------------------
 * @param {number} findHandle
 */
export function endFindObject(findHandle: number): void {
	const endFindObject_result = Citizen.invokeNative<void>('0XDEDA4E50', findHandle);
	return endFindObject_result;
}