import { StreamvolId } from '@ivanzaida/structures'

/**
 * STREAMING:STREAMVOL_HAS_LOADED
 *
 * 0xE945B67B28139DA2

 * 
 * Returns true if the stream volume at the specified index has been fulled satisfied, false otherwise.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {StreamvolId} volume
 * @returns {boolean}  
 */
export function streamvolHasLoaded(volume: StreamvolId): boolean {
	const streamvolHasLoaded_result = Citizen.invokeNative<boolean>('0xE945B67B28139DA2', volume);
	return streamvolHasLoaded_result;
}