import { EntityIndex, PtfxId } from '@ivanzaida/structures'

/**
 * GRAPHICS:START_NETWORKED_PARTICLE_FX_LOOPED_ON_ENTITY
 *
 * 0xB5BD5079F58A395F

 * 
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} fxName
 * @param {EntityIndex} entity
 * @param {number} vecPositionX
 * @param {number} vecPositionY
 * @param {number} vecPositionZ
 * @param {number} vecRotationX
 * @param {number} vecRotationY
 * @param {number} vecRotationZ
 * @param {number} scale
 * @param {boolean} invertAxisX
 * @param {boolean} invertAxisY
 * @param {boolean} invertAxisZ
 * @param {number} colorR
 * @param {number} colorG
 * @param {number} colorB
 * @param {boolean} terminateOnOwnerLeave
 * @returns {PtfxId}  
 */
export function startNetworkedParticleFxLoopedOnEntity(fxName: string, entity: EntityIndex, vecPositionX: number, vecPositionY: number, vecPositionZ: number, vecRotationX: number, vecRotationY: number, vecRotationZ: number, scale: number = 1, invertAxisX: boolean = false, invertAxisY: boolean = false, invertAxisZ: boolean = false, colorR: number = 1, colorG: number = 1, colorB: number = 1, terminateOnOwnerLeave: boolean = false): PtfxId {
	const startNetworkedParticleFxLoopedOnEntity_result = Citizen.invokeNative<PtfxId>('0xB5BD5079F58A395F', fxName, entity, vecPositionX, vecPositionY, vecPositionZ, vecRotationX, vecRotationY, vecRotationZ, scale, invertAxisX, invertAxisY, invertAxisZ, colorR, colorG, colorB, terminateOnOwnerLeave);
	return startNetworkedParticleFxLoopedOnEntity_result;
}