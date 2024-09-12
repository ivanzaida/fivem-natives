import { EUgcBoolOption } from '@ivanzaida/structures'

/**
 * NETWORK:UGC_QUERY_MY_CONTENT
 *
 * 0x3F784BD38F0D94BA

 * 
 * ------------------------------------------------------------------
 * @param {number} offset
 * @param {number} maxCount
 * @param {string} szContentType
 * @param {EUgcBoolOption} publishedOption
 * @param {number} missionType
 * @param {EUgcBoolOption} openOption
 * @returns {boolean}  
 */
export function ugcQueryMyContent(offset: number, maxCount: number, szContentType: string, publishedOption: EUgcBoolOption | number, missionType: number, openOption: EUgcBoolOption | number): boolean {
	const ugcQueryMyContent_result = Citizen.invokeNative<boolean>('0x3F784BD38F0D94BA', offset, maxCount, szContentType, publishedOption, missionType, openOption);
	return ugcQueryMyContent_result;
}