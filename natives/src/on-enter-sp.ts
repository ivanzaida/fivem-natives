/**
 * DLC:ON_ENTER_SP
 *
 * 0xCD2016D0514F1788

 * 
 * Tells code that script has made an irreversable transition to SP
 * 
 * Unloads GROUP_MAP (GTAO/MP) DLC data and loads GROUP_MAP_SP DLC. Neither are loaded by default, ON_ENTER_MP is a cognate to this function and loads MP DLC (and unloads SP DLC by extension).
 * Works in singleplayer.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function onEnterSp(): void {
	const onEnterSp_result = Citizen.invokeNative<void>('0xCD2016D0514F1788', );
	return onEnterSp_result;
}