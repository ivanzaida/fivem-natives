import { Threadid } from '@ivanzaida/structures'

/**
 * SCRIPT:SCRIPT_THREAD_ITERATOR_GET_NEXT_THREAD_ID
 *
 * 0x29637E6F2B8E5690

 * 
 * If the function returns 0, the end of the iteration has been reached.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {Threadid}  
 */
export function scriptThreadIteratorGetNextThreadId(): Threadid {
	const scriptThreadIteratorGetNextThreadId_result = Citizen.invokeNative<Threadid>('0x29637E6F2B8E5690', );
	return scriptThreadIteratorGetNextThreadId_result;
}