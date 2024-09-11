import { EBriefType } from '@ivanzaida/structures'

/**
 * GRAPHICS:DOES_LATEST_BRIEF_STRING_EXIST
 *
 * 0x9004B02246EEC817

 * 
 * ------------------------------------------------------------------
 * @param {EBriefType} briefType
 * @returns {boolean}  
 */
export function doesLatestBriefStringExist(briefType: EBriefType | number): boolean {
	const doesLatestBriefStringExist_result = Citizen.invokeNative<boolean>('0x9004B02246EEC817', briefType);
	return doesLatestBriefStringExist_result;
}