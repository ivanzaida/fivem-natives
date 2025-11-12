import { EStreamvolAssetTypes, EStreamvolLodFlags, StreamvolId } from '@ivanzaida/structures'

/**
 * STREAMING:STREAMVOL_CREATE_FRUSTUM
 *
 * 0x4F6F8824BE43F1F7

 * 
 * A streaming volume is a volume of the map which issues streaming requests for the specified assets,
 * as a method for pre-streaming collisions or map data. this is an extremely expensive thing to do, so it is important
 * to destroy the volume when no longer needed
 * Creates a new frustum streaming volume for the specified asset types.
 * Returns index of volume if successful, or -1 otherwise
 * 
 * Always returns zero.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} dirX
 * @param {number} dirY
 * @param {number} dirZ
 * @param {number} farClip
 * @param {EStreamvolAssetTypes} assetFlags
 * @param {EStreamvolLodFlags} lodFlags
 * @returns {StreamvolId}  
 */
export function streamvolCreateFrustum(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, farClip: number, assetFlags: EStreamvolAssetTypes | number, lodFlags: EStreamvolLodFlags | number = 127): StreamvolId {
	const streamvolCreateFrustum_result = Citizen.invokeNative<StreamvolId>('0x4F6F8824BE43F1F7', posX, posY, posZ, dirX, dirY, dirZ, farClip, assetFlags, lodFlags);
	return streamvolCreateFrustum_result;
}