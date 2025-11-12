import { EStreamvolAssetTypes, StreamvolId } from '@ivanzaida/structures'

/**
 * STREAMING:STREAMVOL_CREATE_LINE
 *
 * 0xDA771B84868AEA60

 * 
 * A streaming volume is a volume of the map which issues streaming requests for the specified assets,
 * as a method for pre-streaming collisions or map data. this is an extremely expensive thing to do, so it is important
 * to destroy the volume when no longer needed
 * Creates a new line-segment streaming volume for the specified asset types.
 * Returns index of volume if successful, or -1 otherwise
 * 
 * Always returns zero.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} pos1X
 * @param {number} pos1Y
 * @param {number} pos1Z
 * @param {number} pos2X
 * @param {number} pos2Y
 * @param {number} pos2Z
 * @param {EStreamvolAssetTypes} assetFlags
 * @returns {StreamvolId}  
 */
export function streamvolCreateLine(pos1X: number, pos1Y: number, pos1Z: number, pos2X: number, pos2Y: number, pos2Z: number, assetFlags: EStreamvolAssetTypes | number): StreamvolId {
	const streamvolCreateLine_result = Citizen.invokeNative<StreamvolId>('0xDA771B84868AEA60', pos1X, pos1Y, pos1Z, pos2X, pos2Y, pos2Z, assetFlags);
	return streamvolCreateLine_result;
}