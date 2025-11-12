import { PtfxId } from '@ivanzaida/structures'

/**
 * GRAPHICS:START_PARTICLE_FX_LOOPED_AT_COORD
 *
 * 0x56E8A6AA712B10C2

 * 
 * Triggers a named particle effect at an world position.
 * This should only be used with infinitely looping particle effects.
 * The particle effect will then start playing and will need to be stopped by calling STOP_PTFX.
 * The returned id of the particle effect needs to be passed into any other function that needs to be called on it.
 * 
 * GRAPHICS::START_PARTICLE_FX_LOOPED_AT_COORD("scr_fbi_falling_debris", 93.7743f, -749.4572f, 70.86904f, 0f, 0f, 0f, 0x3F800000, 0, 0, 0, 0)
 * 
 * 
 * p11 seems to be always 0
 * 
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} fxName
 * @param {number} vecPositionX
 * @param {number} vecPositionY
 * @param {number} vecPositionZ
 * @param {number} vecRotationX
 * @param {number} vecRotationY
 * @param {number} vecRotationZ
 * @param {number} scale Size scale of the effect (default size = 1.0) INT  the id of the created particle effect  this will be 0 if creation fails
 * @param {boolean} invertAxisX
 * @param {boolean} invertAxisY
 * @param {boolean} invertAxisZ
 * @param {boolean} localOnly
 * @returns {PtfxId}  
 */
export function startParticleFxLoopedAtCoord(fxName: string, vecPositionX: number, vecPositionY: number, vecPositionZ: number, vecRotationX: number, vecRotationY: number, vecRotationZ: number, scale: number = 1, invertAxisX: boolean = false, invertAxisY: boolean = false, invertAxisZ: boolean = false, localOnly: boolean = false): PtfxId {
	const startParticleFxLoopedAtCoord_result = Citizen.invokeNative<PtfxId>('0x56E8A6AA712B10C2', fxName, vecPositionX, vecPositionY, vecPositionZ, vecRotationX, vecRotationY, vecRotationZ, scale, invertAxisX, invertAxisY, invertAxisZ, localOnly);
	return startParticleFxLoopedAtCoord_result;
}