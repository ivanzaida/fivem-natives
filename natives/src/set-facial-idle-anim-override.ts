import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_FACIAL_IDLE_ANIM_OVERRIDE
 *
 * 0x2C09C6B54CFCFAF1

 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} overrideIdleClipName
 * @param {string} overrideIdleClipDictName
 */
export function setFacialIdleAnimOverride(ped: PedIndex, overrideIdleClipName: string, overrideIdleClipDictName: string = null!): void {
	const setFacialIdleAnimOverride_result = Citizen.invokeNative<void>('0x2C09C6B54CFCFAF1', ped, overrideIdleClipName, overrideIdleClipDictName);
	return setFacialIdleAnimOverride_result;
}