/**
 * CFX:MUMBLE_SET_AUDIO_OUTPUT_DISTANCE
 *
 * 0X74C597D9

 * Sets the current output distance. The player will be able to hear other players talking within this distance.
 * 
 * ------------------------------------------------------------------
 * @param {number} distance The output distance.
 */
export function mumbleSetAudioOutputDistance(distance: number): void {
	const mumbleSetAudioOutputDistance_result = Citizen.invokeNative<void>('0X74C597D9', distance);
	return mumbleSetAudioOutputDistance_result;
}