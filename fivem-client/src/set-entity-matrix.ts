import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_ENTITY_MATRIX
 *
 * 0XFB0639B

 * Sets an entity's matrix. Arguments are in the same order as with GET_ENTITY_MATRIX.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity A valid entity handle.
 * @param {number} forwardX
 * @param {number} forwardY
 * @param {number} forwardZ
 * @param {number} rightX
 * @param {number} rightY
 * @param {number} rightZ
 * @param {number} upX
 * @param {number} upY
 * @param {number} upZ
 * @param {number} atX
 * @param {number} atY
 * @param {number} atZ
 */
export function setEntityMatrix(entity: EntityIndex, forwardX: number, forwardY: number, forwardZ: number, rightX: number, rightY: number, rightZ: number, upX: number, upY: number, upZ: number, atX: number, atY: number, atZ: number): void {
	const setEntityMatrix_result = Citizen.invokeNative<void>('0XFB0639B', entity, forwardX, forwardY, forwardZ, rightX, rightY, rightZ, upX, upY, upZ, atX, atY, atZ);
	return setEntityMatrix_result;
}