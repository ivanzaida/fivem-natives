import { StreamvolId } from '@ivanzaida/structures'

/**
 * STREAMING:STREAMVOL_IS_VALID
 *
 * 0x5561E31B168FA823

 * 
 * Returns true if the stream volume at the specified index is valid and active, false otherwise
 * 
 * 
 * ------------------------------------------------------------------
 * @param {StreamvolId} volume
 * @returns {boolean}  
 */
export function streamvolIsValid(volume: StreamvolId): boolean {
	const streamvolIsValid_result = Citizen.invokeNative<boolean>('0x5561E31B168FA823', volume);
	return streamvolIsValid_result;
}