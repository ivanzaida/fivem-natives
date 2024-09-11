/**
 * CFX:MUMBLE_SET_AUDIO_INPUT_INTENT
 *
 * 0X6383526B

 * Use this native to disable noise suppression and high pass filters.The possible intents for this are as follows (backticks are used to represent hashes):| Index | Description ||-|-|| \`speech\` | Default intent || \`music\` | Disable noise suppression and high pass filter |
 * 
 * ------------------------------------------------------------------
 * @param {number} intentHash The intent hash.
 */
export function mumbleSetAudioInputIntent(intentHash: number): void {
	const mumbleSetAudioInputIntent_result = Citizen.invokeNative<void>('0X6383526B', intentHash);
	return mumbleSetAudioInputIntent_result;
}