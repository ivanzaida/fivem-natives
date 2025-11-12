import { EStreamvolAssetTypes, EStreamvolLodFlags, StreamvolId } from '@ivanzaida/structures'

/**
 * STREAMING:STREAMVOL_CREATE_SPHERE
 *
 * 0xE9D3D741E2195673

 * 
 * A streaming volume is a volume of the map which issues streaming requests for the specified assets,
 * as a method for pre-streaming collisions or map data. this is an extremely expensive thing to do, so it is important
 * to destroy the volume when no longer needed
 * Creates a new spherical streaming volume for the specified asset types.
 * Returns index of volume if successful, or -1 otherwise
 * 
 * Always returns zero.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} radius
 * @param {EStreamvolAssetTypes} assetFlags
 * @param {EStreamvolLodFlags} lodFlags
 * @returns {StreamvolId}  
 */
export function streamvolCreateSphere(posX: number, posY: number, posZ: number, radius: number, assetFlags: EStreamvolAssetTypes | number, lodFlags: EStreamvolLodFlags | number = 127): StreamvolId {
	const streamvolCreateSphere_result = Citizen.invokeNative<StreamvolId>('0xE9D3D741E2195673', posX, posY, posZ, radius, assetFlags, lodFlags);
	return streamvolCreateSphere_result;
}