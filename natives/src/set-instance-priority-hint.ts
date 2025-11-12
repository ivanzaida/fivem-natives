import { EInstanceHint } from '@ivanzaida/structures'

/**
 * MISC:SET_INSTANCE_PRIORITY_HINT
 *
 * 0xF6ECB54A7941386F

 * 
 * provide hint to game to strip out low priority map objects for specific types of missions
 * 
 * Sets an unknown flag used by CScene in determining which entities from CMapData scene nodes to draw, similar to SET_INSTANCE_PRIORITY_MODE.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EInstanceHint} hint
 */
export function setInstancePriorityHint(hint: EInstanceHint | number): void {
	const setInstancePriorityHint_result = Citizen.invokeNative<void>('0xF6ECB54A7941386F', hint);
	return setInstancePriorityHint_result;
}