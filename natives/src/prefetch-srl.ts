/**
 * STREAMING:PREFETCH_SRL
 *
 * 0xADF8AA2F22A19163

 * 
 * Tells the system to load a streaming request list and load all the assets needed for the first frame of
 * its cutscene.
 * Call this function several seconds before the cutscene is meant to be played, and wait until HAS_SRL_LOADED
 * before beginning the cutscene and calling BEGIN_SRL.
 * 
 * This native is used to attribute the SRL that BEGIN_SRL is going to load. This is usually used for 'in-game' cinematics (not cutscenes but camera stuff) instead of SET_FOCUS_POS_AND_VEL because it loads a specific area of the map which is pretty useful when the camera moves from distant areas.
 * For instance, GTA:O opening cutscene.
 * https://pastebin.com/2EeKVeLA : a list of SRL found in srllist.meta
 * https://pastebin.com/zd9XYUWY here is the content of a SRL file opened with codewalker.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} cutsceneName
 */
export function prefetchSrl(cutsceneName: string): void {
	const prefetchSrl_result = Citizen.invokeNative<void>('0xADF8AA2F22A19163', cutsceneName);
	return prefetchSrl_result;
}