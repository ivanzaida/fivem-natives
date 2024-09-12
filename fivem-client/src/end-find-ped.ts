/**
 * CFX:END_FIND_PED
 *
 * 0x9615C2AD

 * 
 * ------------------------------------------------------------------
 * @param {number} findHandle
 */
export function endFindPed(findHandle: number): void {
	const endFindPed_result = Citizen.invokeNative<void>('0x9615C2AD', findHandle);
	return endFindPed_result;
}