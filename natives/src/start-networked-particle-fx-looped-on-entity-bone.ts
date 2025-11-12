import { EntityIndex, PtfxId } from '@ivanzaida/structures'

/**
 * GRAPHICS:START_NETWORKED_PARTICLE_FX_LOOPED_ON_ENTITY_BONE
 *
 * 0x9BE6297091AF1898

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
 * @param {number} bone
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
export function startNetworkedParticleFxLoopedOnEntityBone(fxName: string, entity: EntityIndex, vecPositionX: number, vecPositionY: number, vecPositionZ: number, vecRotationX: number, vecRotationY: number, vecRotationZ: number, bone: number = 1, scale: number = 1, invertAxisX: boolean = false, invertAxisY: boolean = false, invertAxisZ: boolean = false, colorR: number = 1, colorG: number = 1, colorB: number = 1, terminateOnOwnerLeave: boolean = false): PtfxId {
	const startNetworkedParticleFxLoopedOnEntityBone_result = Citizen.invokeNative<PtfxId>('0x9BE6297091AF1898', fxName, entity, vecPositionX, vecPositionY, vecPositionZ, vecRotationX, vecRotationY, vecRotationZ, bone, scale, invertAxisX, invertAxisY, invertAxisZ, colorR, colorG, colorB, terminateOnOwnerLeave);
	return startNetworkedParticleFxLoopedOnEntityBone_result;
}