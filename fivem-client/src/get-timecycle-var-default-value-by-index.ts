/**
 * CFX:GET_TIMECYCLE_VAR_DEFAULT_VALUE_BY_INDEX
 *
 * 0X3B90238

 * See [GET_TIMECYCLE_VAR_COUNT](#_0x838B34D8).
 * 
 * ------------------------------------------------------------------
 * @param {number} varIndex The index of variable.
 * @returns {number}  The default value of a timecycle variable.
 */
export function getTimecycleVarDefaultValueByIndex(varIndex: number): number {
	const getTimecycleVarDefaultValueByIndex_result = Citizen.invokeNative<number>('0X3B90238', varIndex);
	return getTimecycleVarDefaultValueByIndex_result;
}