/**
 * MISC:GET_SYSTEM_TIME_STEP
 *
 * 0xEC235469207D1121

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getSystemTimeStep(): number {
	const getSystemTimeStep_result = Citizen.invokeNative<number>('0xEC235469207D1121', );
	return getSystemTimeStep_result;
}