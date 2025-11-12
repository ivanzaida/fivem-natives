/**
 * AUDIO:LOAD_STREAM
 *
 * 0xB3157976738FC0C0

 * 
 * Example:
 * AUDIO::LOAD_STREAM("CAR_STEAL_1_PASSBY", "CAR_STEAL_1_SOUNDSET");
 * 
 * All found occurrences in the b678d decompiled scripts: https://pastebin.com/3rma6w5w
 * 
 * Stream names often ends with "_MASTER", "_SMALL" or "_STREAM". Also "_IN", "_OUT" and numbers.
 * 
 * soundSet is often set to 0 in the scripts. These are common to end the soundSets: "_SOUNDS", "_SOUNDSET" and numbers.
 * 
 * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} streamName
 * @param {string} setName
 * @returns {boolean}  
 */
export function loadStream(streamName: string, setName: string = null!): boolean {
	const loadStream_result = Citizen.invokeNative<boolean>('0xB3157976738FC0C0', streamName, setName);
	return loadStream_result;
}