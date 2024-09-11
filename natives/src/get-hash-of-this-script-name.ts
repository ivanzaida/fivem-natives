/**
 * SCRIPT:GET_HASH_OF_THIS_SCRIPT_NAME
 *
 * 0x931D15B1D60C81B0

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getHashOfThisScriptName(): number {
	const getHashOfThisScriptName_result = Citizen.invokeNative<number>('0x931D15B1D60C81B0', );
	return getHashOfThisScriptName_result;
}