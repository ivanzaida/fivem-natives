/**
 * NETWORK:CLOUD_DELETE_MEMBER_FILE
 *
 * 0x595BC3CB7A842B33

 * 
 * Deletes a cloud file (szFilename) from the member namespace.
 * This returns an INT that can be used to track this request.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} szFilename
 * @returns {number}  
 */
export function cloudDeleteMemberFile(szFilename: string): number {
	const cloudDeleteMemberFile_result = Citizen.invokeNative<number>('0x595BC3CB7A842B33', szFilename);
	return cloudDeleteMemberFile_result;
}