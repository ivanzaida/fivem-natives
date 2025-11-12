/**
 * STREAMING:IS_SRL_LOADED
 *
 * 0xEBCB9138B2CABF20

 * 
 * Check to see whether or not the SRL prefetched with PREFETCH_SRL has finished loading all assets for the
 * the cutscene. You should wait with playing back the scripted cutscene until this returns true, or else there
 * might be assets popping in and out.
 * 
 * Returns true when the srl from BEGIN_SRL is loaded.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isSrlLoaded(): boolean {
	const isSrlLoaded_result = Citizen.invokeNative<boolean>('0xEBCB9138B2CABF20', );
	return isSrlLoaded_result;
}