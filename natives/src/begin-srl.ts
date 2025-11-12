/**
 * STREAMING:BEGIN_SRL
 *
 * 0x89EAF23AE72CD8A8

 * 
 * Marks the beginning of a streaming request list. This can be called before playing back a scripted cutscene.
 * If recording is enabled in RAG, the system will record all visible assets and save them to a file once the
 * SRL is done (after the call to END_SRL).
 * If recording is disabled (which is normally the case), the recorded assets from the SRL will be requested
 * as the scripted cutscene plays.
 * You must call PREFETCH_SRL before calling this function!
 * 
 * 
 * ------------------------------------------------------------------
 */
export function beginSrl(): void {
	const beginSrl_result = Citizen.invokeNative<void>('0x89EAF23AE72CD8A8', );
	return beginSrl_result;
}