import { UgcPathsStruct, UgcDescription } from '@ivanzaida/structures'

/**
 * DATAFILE:UGC_UPDATE_CONTENT
 *
 * 0xC87EAB233B259C6E

 * 
 * Update a UGC file - (optionally) build an updated UGC header using datafile commands before calling this.
 * The parameters are all optional. Pass in NULL for any that should not be updated.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} szContentID
 * @param {UgcPathsStruct} szFilePaths [Ref]
 * @param {number} files
 * @param {string} szDisplayName
 * @param {UgcDescription} szDesc [Ref]
 * @param {UgcDescription} szTags [Ref]
 * @param {string} szContentType
 * @param {number} datafile Index  Datafile slot containing the data you want to save
 * @returns {boolean}  
 */
export function ugcUpdateContent(szContentID: string, szFilePaths: UgcPathsStruct /* ptr */, files: number, szDisplayName: string, szDesc: UgcDescription /* ptr */, szTags: UgcDescription /* ptr */, szContentType: string, datafile: number = 0): boolean {
	const ugcUpdateContent_result = Citizen.invokeNative<boolean>('0xC87EAB233B259C6E', szContentID, szFilePaths.dataView, files, szDisplayName, szDesc.dataView, szTags.dataView, szContentType, datafile);
	return ugcUpdateContent_result;
}