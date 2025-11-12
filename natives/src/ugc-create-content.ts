import { UgcPathsStruct, UgcDescription } from '@ivanzaida/structures'

/**
 * DATAFILE:UGC_CREATE_CONTENT
 *
 * 0x58977C73F104C1B2

 * 
 * Create a UGC file - build the UGC header using datafile commands before calling this.
 * szFilePaths - Array of file paths
 * nFiles - How many files are in the array
 * szDisplayName - Front facing content name ("My Awesome Mission!")
 * szDesc - Description of this mission ("Are you a bad enough dude to rescue the President?")
 * szTags - Comma separated tags to describe searchable tags
 * nType - Of type UGC_TYPE
 * bPublish - Publish this mission on creation (push to Rockstar candidate)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {UgcPathsStruct} szFilePaths [Ref]
 * @param {number} files
 * @param {string} szDisplayName
 * @param {UgcDescription} szDesc [Ref]
 * @param {UgcDescription} szTags [Ref]
 * @param {string} szContentType
 * @param {boolean} publish
 * @param {number} datafile
 * @returns {boolean}  
 */
export function ugcCreateContent(szFilePaths: UgcPathsStruct /* ptr */, files: number, szDisplayName: string, szDesc: UgcDescription /* ptr */, szTags: UgcDescription /* ptr */, szContentType: string, publish: boolean, datafile: number = 0): boolean {
	const ugcCreateContent_result = Citizen.invokeNative<boolean>('0x58977C73F104C1B2', szFilePaths.dataView, files, szDisplayName, szDesc.dataView, szTags.dataView, szContentType, publish, datafile);
	return ugcCreateContent_result;
}