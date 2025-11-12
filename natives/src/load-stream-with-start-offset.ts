/**
 * AUDIO:LOAD_STREAM_WITH_START_OFFSET
 *
 * 0xCC32CFCCD0223A2F

 * 
 * Example:
 * AUDIO::LOAD_STREAM_WITH_START_OFFSET("STASH_TOXIN_STREAM", 2400, "FBI_05_SOUNDS");
 * 
 * Only called a few times in the scripts.
 * 
 * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} streamName
 * @param {number} startOffset
 * @param {string} setName
 * @returns {boolean}  
 */
export function loadStreamWithStartOffset(streamName: string, startOffset: number, setName: string = null!): boolean {
	const loadStreamWithStartOffset_result = Citizen.invokeNative<boolean>('0xCC32CFCCD0223A2F', streamName, startOffset, setName);
	return loadStreamWithStartOffset_result;
}