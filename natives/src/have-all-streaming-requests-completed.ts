import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:HAVE_ALL_STREAMING_REQUESTS_COMPLETED
 *
 * 0x69CD279BFCFE278E

 * 
 * When a new variation is set on a streamed ped this function can be called right after and returns true when all components
 * have loaded and the ped is ready for render.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function haveAllStreamingRequestsCompleted(ped: PedIndex): boolean {
	const haveAllStreamingRequestsCompleted_result = Citizen.invokeNative<boolean>('0x69CD279BFCFE278E', ped);
	return haveAllStreamingRequestsCompleted_result;
}