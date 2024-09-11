import { Threadid } from '@ivanzaida/structures'

/**
 * SCRIPT:IS_THREAD_ACTIVE
 *
 * 0xF40767E41852FB72

 * 
 * ------------------------------------------------------------------
 * @param {Threadid} thread
 * @returns {boolean}  
 */
export function isThreadActive(thread: Threadid): boolean {
	const isThreadActive_result = Citizen.invokeNative<boolean>('0xF40767E41852FB72', thread);
	return isThreadActive_result;
}