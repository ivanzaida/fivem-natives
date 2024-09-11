import { Threadid } from '@ivanzaida/structures'

/**
 * SCRIPT:TERMINATE_THREAD
 *
 * 0xC3CF96F73FC43848

 * 
 * ------------------------------------------------------------------
 * @param {Threadid} thread
 */
export function terminateThread(thread: Threadid): void {
	const terminateThread_result = Citizen.invokeNative<void>('0xC3CF96F73FC43848', thread);
	return terminateThread_result;
}