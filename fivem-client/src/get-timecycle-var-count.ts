/**
 * CFX:GET_TIMECYCLE_VAR_COUNT
 *
 * 0X838B34D8

 * Returns the amount of variables available to be applied on timecycle modifiers.
 * 
 * ------------------------------------------------------------------
 * @returns {number}  The amount of available variables for timecycle modifiers.
 */
export function getTimecycleVarCount(): number {
	const getTimecycleVarCount_result = Citizen.invokeNative<number>('0X838B34D8', );
	return getTimecycleVarCount_result;
}