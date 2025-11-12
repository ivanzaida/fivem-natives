import { UgcDescription } from '@ivanzaida/structures'

/**
 * DATAFILE:UGC_CREATE_MISSION
 *
 * 0xF3AB7B665999602E

 * 
 * Create a UGC mission - build the UGC header using datafile commands before calling this. Sideline that using DATAFILE_STORE_MISSION_HEADER.
 * And then build the mission data using the datafile commands
 * szDisplayName - Front facing content name ("My Awesome Mission!")
 * szDesc - Description of this mission ("Are you a bad enough dude to rescue the President?")
 * szTags - Comma separated tags to describe searchable tags
 * nType - Of type UGC_TYPE
 * bPublish - Publish this mission on creation (push to Rockstar candidate)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} szDisplayName
 * @param {UgcDescription} szDesc [Ref]
 * @param {UgcDescription} szTags [Ref]
 * @param {string} szContentType
 * @param {boolean} publish
 * @param {number} datafile
 * @returns {boolean}  
 */
export function ugcCreateMission(szDisplayName: string, szDesc: UgcDescription /* ptr */, szTags: UgcDescription /* ptr */, szContentType: string, publish: boolean, datafile: number = 0): boolean {
	const ugcCreateMission_result = Citizen.invokeNative<boolean>('0xF3AB7B665999602E', szDisplayName, szDesc.dataView, szTags.dataView, szContentType, publish, datafile);
	return ugcCreateMission_result;
}