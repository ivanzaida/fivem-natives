/**
 * HUD:SET_DESCRIPTION_FOR_UGC_MISSION_EIGHT_STRINGS
 *
 * 0xB8D32DDBA1727607

 * 
 * ------------------------------------------------------------------
 * @param {boolean} active
 * @param {string} string1
 * @param {string} string2
 * @param {string} string3
 * @param {string} string4
 * @param {string} string5
 * @param {string} string6
 * @param {string} string7
 * @param {string} string8
 */
export function setDescriptionForUgcMissionEightStrings(active: boolean, string1: string = null!, string2: string = null!, string3: string = null!, string4: string = null!, string5: string = null!, string6: string = null!, string7: string = null!, string8: string = null!): void {
	const setDescriptionForUgcMissionEightStrings_result = Citizen.invokeNative<void>('0xB8D32DDBA1727607', active, string1, string2, string3, string4, string5, string6, string7, string8);
	return setDescriptionForUgcMissionEightStrings_result;
}