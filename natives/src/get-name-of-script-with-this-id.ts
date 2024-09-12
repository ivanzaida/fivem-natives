import { Threadid } from '@ivanzaida/structures'

/**
 * SCRIPT:GET_NAME_OF_SCRIPT_WITH_THIS_ID
 *
 * 0xACF74B377C634277

 * 
 * ------------------------------------------------------------------
 * @param {Threadid} thread
 * @returns {string}  
 */
export function getNameOfScriptWithThisId(thread: Threadid): string {
	const getNameOfScriptWithThisId_result = Citizen.invokeNative<string>('0xACF74B377C634277', thread);
	return getNameOfScriptWithThisId_result;
}