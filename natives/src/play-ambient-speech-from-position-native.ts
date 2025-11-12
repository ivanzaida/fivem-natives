/**
 * AUDIO:PLAY_AMBIENT_SPEECH_FROM_POSITION_NATIVE
 *
 * 0xF4129180F5858D16

 * 
 * Full list of speeches and voices names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/speeches.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} context
 * @param {string} voiceName
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {string} speechParams
 */
export function playAmbientSpeechFromPositionNative(context: string, voiceName: string, positionX: number, positionY: number, positionZ: number, speechParams: string): void {
	const playAmbientSpeechFromPositionNative_result = Citizen.invokeNative<void>('0xF4129180F5858D16', context, voiceName, positionX, positionY, positionZ, speechParams);
	return playAmbientSpeechFromPositionNative_result;
}