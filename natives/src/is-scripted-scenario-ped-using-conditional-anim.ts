import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_SCRIPTED_SCENARIO_PED_USING_CONDITIONAL_ANIM
 *
 * 0xA23312A0DE89348E

 * 
 * If the given ped is currently using a scenario and using anim from the given dictionary and the given base clip
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} conditionalAnimDictName
 * @param {string} conditionalAnimClipName
 * @returns {boolean}  
 */
export function isScriptedScenarioPedUsingConditionalAnim(ped: PedIndex, conditionalAnimDictName: string, conditionalAnimClipName: string): boolean {
	const isScriptedScenarioPedUsingConditionalAnim_result = Citizen.invokeNative<boolean>('0xA23312A0DE89348E', ped, conditionalAnimDictName, conditionalAnimClipName);
	return isScriptedScenarioPedUsingConditionalAnim_result;
}