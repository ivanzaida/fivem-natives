import { EExplosionTag } from '@ivanzaida/structures'

/**
 * FIRE:ADD_EXPLOSION_WITH_USER_VFX
 *
 * 0x4F2F5C4D814331B7

 * 
 * Creates an explosion at the co-ordinates.
 * Size scale between 0.01 and 1.0
 * 
 * isAudible: If explosion makes a sound.
 * isInvisible: If the explosion is invisible or not.
 * explosionType: See ADD_EXPLOSION.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} explosionPosX
 * @param {number} explosionPosY
 * @param {number} explosionPosZ
 * @param {EExplosionTag} explosionTag
 * @param {number} vfxTagHash
 * @param {number} sizeScale
 * @param {boolean} makeSound
 * @param {boolean} noFx
 * @param {number} camShakeMultiplier
 */
export function addExplosionWithUserVfx(explosionPosX: number, explosionPosY: number, explosionPosZ: number, explosionTag: EExplosionTag | number, vfxTagHash: number, sizeScale: number = 0.5, makeSound: boolean = true, noFx: boolean = false, camShakeMultiplier: number = 1): void {
	const addExplosionWithUserVfx_result = Citizen.invokeNative<void>('0x4F2F5C4D814331B7', explosionPosX, explosionPosY, explosionPosZ, explosionTag, vfxTagHash, sizeScale, makeSound, noFx, camShakeMultiplier);
	return addExplosionWithUserVfx_result;
}