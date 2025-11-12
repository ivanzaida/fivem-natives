/**
 * HUD:GET_WARNING_SCREEN_MESSAGE_HASH
 *
 * 0xDA185E42FEAAF76B

 * 
 * Has to do with the confirmation overlay (E.g. confirm exit)
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getWarningScreenMessageHash(): number {
	const getWarningScreenMessageHash_result = Citizen.invokeNative<number>('0xDA185E42FEAAF76B', );
	return getWarningScreenMessageHash_result;
}