import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:TRACK_OBJECT_VISIBILITY
 *
 * 0x33D763C13554690A

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} objectID
 */
export function trackObjectVisibility(objectID: ObjectIndex): void {
	const trackObjectVisibility_result = Citizen.invokeNative<void>('0x33D763C13554690A', objectID);
	return trackObjectVisibility_result;
}