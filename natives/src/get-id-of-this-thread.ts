import { Threadid } from '@ivanzaida/structures'

/**
 * SCRIPT:GET_ID_OF_THIS_THREAD
 *
 * 0x8F76B2250AC806FA

 * 
 * ------------------------------------------------------------------
 * @returns {Threadid}  
 */
export function getIdOfThisThread(): Threadid {
	const getIdOfThisThread_result = Citizen.invokeNative<Threadid>('0x8F76B2250AC806FA', );
	return getIdOfThisThread_result;
}