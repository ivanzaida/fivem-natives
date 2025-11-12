import { StringRef } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CLAN_CREWINFO_GET_STRING_VALUE
 *
 * 0xB22FD03174DE49A7

 * 
 * Only documented...
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @param {StringRef} outValue [Ref]
 * @returns {boolean}  
 */
export function networkClanCrewinfoGetStringValue(name: string, outValue: StringRef /* ptr */): boolean {
	const networkClanCrewinfoGetStringValue_result = Citizen.invokeNative<boolean>('0xB22FD03174DE49A7', name, outValue.dataView);
	return networkClanCrewinfoGetStringValue_result;
}