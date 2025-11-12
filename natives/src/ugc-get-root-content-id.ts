/**
 * NETWORK:UGC_GET_ROOT_CONTENT_ID
 *
 * 0x7BA63240A50FC6C7

 * 
 * Return the root content id of a job.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @returns {string}  
 */
export function ugcGetRootContentId(content: number): string {
	const ugcGetRootContentId_result = Citizen.invokeNative<string>('0x7BA63240A50FC6C7', content);
	return ugcGetRootContentId_result;
}