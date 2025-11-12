import { EExplosionTag } from '@ivanzaida/structures'

/**
 * FIRE:ADD_EXPLOSION
 *
 * 0xD2FD15A3D9DEE4CC

 * 
 * Creates an explosion at the co-ordinates.
 * Size scale between 0.01 and 1.0
 * 
 * BOOL isAudible = If explosion makes a sound.
 * BOOL isInvisible = If the explosion is invisible or not.
 * 
 * explosionType: https://alloc8or.re/gta5/doc/enums/eExplosionTag.txt
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} explosionPosX
 * @param {number} explosionPosY
 * @param {number} explosionPosZ
 * @param {EExplosionTag} explosionTag
 * @param {number} sizeScale
 * @param {boolean} makeSound
 * @param {boolean} noFx
 * @param {number} camShakeMultiplier
 * @param {boolean} noDamage
 */
export function addExplosion(explosionPosX: number, explosionPosY: number, explosionPosZ: number, explosionTag: EExplosionTag | number, sizeScale: number = 0.5, makeSound: boolean = true, noFx: boolean = false, camShakeMultiplier: number = 1, noDamage: boolean = false): void {
	const addExplosion_result = Citizen.invokeNative<void>('0xD2FD15A3D9DEE4CC', explosionPosX, explosionPosY, explosionPosZ, explosionTag, sizeScale, makeSound, noFx, camShakeMultiplier, noDamage);
	return addExplosion_result;
}