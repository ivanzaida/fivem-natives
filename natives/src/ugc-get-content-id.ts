/**
 * NETWORK:UGC_GET_CONTENT_ID
 *
 * 0x7768894B5FCDF25F

 * 
 * Return the mission id of a job.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @returns {string}  
 */
export function ugcGetContentId(content: number): string {
	const ugcGetContentId_result = Citizen.invokeNative<string>('0x7768894B5FCDF25F', content);
	return ugcGetContentId_result;
}