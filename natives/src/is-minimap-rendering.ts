/**
 * HUD:IS_MINIMAP_RENDERING
 *
 * 0x6DA5456258FF887A

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isMinimapRendering(): boolean {
	const isMinimapRendering_result = Citizen.invokeNative<boolean>('0x6DA5456258FF887A', );
	return isMinimapRendering_result;
}