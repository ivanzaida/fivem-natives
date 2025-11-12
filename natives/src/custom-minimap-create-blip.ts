/**
 * HUD:CUSTOM_MINIMAP_CREATE_BLIP
 *
 * 0xCD644A03314C3DF9

 * 
 * Add a BLIP_GALLERY at the specific coordinate. Used in fm_maintain_transition_players to display race track points.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @returns {number}  
 */
export function customMinimapCreateBlip(positionX: number, positionY: number, positionZ: number): number {
	const customMinimapCreateBlip_result = Citizen.invokeNative<number>('0xCD644A03314C3DF9', positionX, positionY, positionZ);
	return customMinimapCreateBlip_result;
}