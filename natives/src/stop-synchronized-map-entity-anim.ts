import { ModelNames } from '@ivanzaida/structures'

/**
 * ENTITY:STOP_SYNCHRONIZED_MAP_ENTITY_ANIM
 *
 * 0xDA2A1BB9D3A890AC

 * 
 * Use this to remove an entity from a synchronized scene
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} radius
 * @param {ModelNames} modelHash
 * @param {number} blendDelta
 * @returns {boolean}  
 */
export function stopSynchronizedMapEntityAnim(posX: number, posY: number, posZ: number, radius: number, modelHash: ModelNames, blendDelta: number): boolean {
	const stopSynchronizedMapEntityAnim_result = Citizen.invokeNative<boolean>('0xDA2A1BB9D3A890AC', posX, posY, posZ, radius, modelHash, blendDelta);
	return stopSynchronizedMapEntityAnim_result;
}