/**
 * SOCIALCLUB:SC_TRANSITION_NEWS_SHOW_NEXT_ITEM
 *
 * 0x529DE110B096B460

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function scTransitionNewsShowNextItem(): boolean {
	const scTransitionNewsShowNextItem_result = Citizen.invokeNative<boolean>('0x529DE110B096B460', );
	return scTransitionNewsShowNextItem_result;
}