import { RopeIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:PIN_ROPE_VERTEX
 *
 * 0x537D4AFC3C6E5A9B

 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 * @param {number} vtx
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 */
export function pinRopeVertex(ropeID: RopeIndex, vtx: number, posX: number, posY: number, posZ: number): void {
	const pinRopeVertex_result = Citizen.invokeNative<void>('0x537D4AFC3C6E5A9B', ropeID, vtx, posX, posY, posZ);
	return pinRopeVertex_result;
}