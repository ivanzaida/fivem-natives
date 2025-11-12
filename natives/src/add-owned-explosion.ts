import { EntityIndex, EExplosionTag } from '@ivanzaida/structures'

/**
 * FIRE:ADD_OWNED_EXPLOSION
 *
 * 0x8F03CD462437C002

 * 
 * Creates an explosion at the co-ordinates owned by a specific ped.
 * Size scale between 0.01 and 1.0
 * 
 * isAudible: If explosion makes a sound.
 * isInvisible: If the explosion is invisible or not.
 * explosionType: See ADD_EXPLOSION.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} explosionOwner
 * @param {number} explosionPosX
 * @param {number} explosionPosY
 * @param {number} explosionPosZ
 * @param {EExplosionTag} explosionTag
 * @param {number} sizeScale
 * @param {boolean} makeSound
 * @param {boolean} noFx
 * @param {number} camShakeMultiplier
 */
export function addOwnedExplosion(explosionOwner: EntityIndex, explosionPosX: number, explosionPosY: number, explosionPosZ: number, explosionTag: EExplosionTag | number, sizeScale: number = 0.5, makeSound: boolean = true, noFx: boolean = false, camShakeMultiplier: number = 1): void {
	const addOwnedExplosion_result = Citizen.invokeNative<void>('0x8F03CD462437C002', explosionOwner, explosionPosX, explosionPosY, explosionPosZ, explosionTag, sizeScale, makeSound, noFx, camShakeMultiplier);
	return addOwnedExplosion_result;
}