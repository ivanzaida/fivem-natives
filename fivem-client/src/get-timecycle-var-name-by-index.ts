/**
 * CFX:GET_TIMECYCLE_VAR_NAME_BY_INDEX
 *
 * 0XC6C55AAF

 * See [GET_TIMECYCLE_VAR_COUNT](#_0x838B34D8).
 * 
 * ------------------------------------------------------------------
 * @param {number} varIndex The index of variable.
 * @returns {string}  The name of a timecycle variable.
 */
export function getTimecycleVarNameByIndex(varIndex: number): string {
	const getTimecycleVarNameByIndex_result = Citizen.invokeNative<string>('0XC6C55AAF', varIndex);
	return getTimecycleVarNameByIndex_result;
}