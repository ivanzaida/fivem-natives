import { PtfxId } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_PARTICLE_FX_LOOPED_OFFSETS
 *
 * 0xE1CDA05FEF060763

 * 
 * If the particle effect is attached to an entity (ped, vehicle or object) then the new position is an offset from that entity.
 * If the particle effect is not attached to an entity (ped, vehicle or object) then the new position is a world position.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PtfxId} ptfxId
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {number} vecRotationX
 * @param {number} vecRotationY
 * @param {number} vecRotationZ
 */
export function setParticleFxLoopedOffsets(ptfxId: PtfxId, positionX: number, positionY: number, positionZ: number, vecRotationX: number, vecRotationY: number, vecRotationZ: number): void {
	const setParticleFxLoopedOffsets_result = Citizen.invokeNative<void>('0xE1CDA05FEF060763', ptfxId, positionX, positionY, positionZ, vecRotationX, vecRotationY, vecRotationZ);
	return setParticleFxLoopedOffsets_result;
}