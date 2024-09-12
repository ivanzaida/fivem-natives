/**
 * CFX:CREATE_AUDIO_SUBMIX
 *
 * 0x658D2BC8

 * Creates an audio submix with the specified name, or gets the existing audio submix by that name.
 * 
 * ------------------------------------------------------------------
 * @param {string} name The audio submix name.
 * @returns {number}  A submix ID, or -1 if the submix could not be created.
 */
export function createAudioSubmix(name: string): number {
	const createAudioSubmix_result = Citizen.invokeNative<number>('0x658D2BC8', name);
	return createAudioSubmix_result;
}