/**
 * SCRIPT:GET_NUMBER_OF_THREADS_RUNNING_THE_SCRIPT_WITH_THIS_HASH
 *
 * 0x486FF5D06E9659F1

 * 
 * Gets the number of instances of the specified script is currently running.
 * 
 * Actually returns numRefs - 1.
 * if (program)
 * 	v3 = rage::scrProgram::GetNumRefs(program) - 1;
 * return v3;
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} hashOfScriptName
 * @returns {number}  
 */
export function getNumberOfThreadsRunningTheScriptWithThisHash(hashOfScriptName: number): number {
	const getNumberOfThreadsRunningTheScriptWithThisHash_result = Citizen.invokeNative<number>('0x486FF5D06E9659F1', hashOfScriptName);
	return getNumberOfThreadsRunningTheScriptWithThisHash_result;
}