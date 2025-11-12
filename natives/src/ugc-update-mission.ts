import { UgcDescription } from '@ivanzaida/structures'

/**
 * DATAFILE:UGC_UPDATE_MISSION
 *
 * 0x605AAC6915C9EFC7

 * 
 * Update a UGC file - (optionally) build an updated UGC header using datafile commands before calling this.
 * The parameters are all optional. Pass in NULL for any that should not be updated.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} szContentID
 * @param {string} szDisplayName
 * @param {UgcDescription} szDesc [Ref]
 * @param {UgcDescription} szTags [Ref]
 * @param {string} szContentType
 * @param {number} datafile Index  Datafile slot containing the data you want to save
 * @returns {boolean}  
 */
export function ugcUpdateMission(szContentID: string, szDisplayName: string, szDesc: UgcDescription /* ptr */, szTags: UgcDescription /* ptr */, szContentType: string, datafile: number = 0): boolean {
	const ugcUpdateMission_result = Citizen.invokeNative<boolean>('0x605AAC6915C9EFC7', szContentID, szDisplayName, szDesc.dataView, szTags.dataView, szContentType, datafile);
	return ugcUpdateMission_result;
}