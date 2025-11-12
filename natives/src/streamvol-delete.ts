import { StreamvolId } from '@ivanzaida/structures'

/**
 * STREAMING:STREAMVOL_DELETE
 *
 * 0x6C730FCE8A68AF6F

 * 
 * Destroys an existing stream volume which is no longer required.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {StreamvolId} volume
 */
export function streamvolDelete(volume: StreamvolId): void {
	const streamvolDelete_result = Citizen.invokeNative<void>('0x6C730FCE8A68AF6F', volume);
	return streamvolDelete_result;
}