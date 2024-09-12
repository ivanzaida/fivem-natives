/**
 * HUD:GET_MINIMAP_FOW_DISCOVERY_RATIO
 *
 * 0x6FF69BB93DBFAF25

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getMinimapFowDiscoveryRatio(): number {
	const getMinimapFowDiscoveryRatio_result = Citizen.invokeNative<number>('0x6FF69BB93DBFAF25', );
	return getMinimapFowDiscoveryRatio_result;
}