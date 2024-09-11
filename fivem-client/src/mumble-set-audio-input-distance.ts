/**
 * CFX:MUMBLE_SET_AUDIO_INPUT_DISTANCE
 *
 * 0X1B1052E2

 * Sets the current input distance. The player will be able to talk to other players within this distance.
 * 
 * ------------------------------------------------------------------
 * @param {number} distance The input distance.
 */
export function mumbleSetAudioInputDistance(distance: number): void {
	const mumbleSetAudioInputDistance_result = Citizen.invokeNative<void>('0X1B1052E2', distance);
	return mumbleSetAudioInputDistance_result;
}