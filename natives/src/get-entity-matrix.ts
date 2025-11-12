import { EntityIndex, Vector3 } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * ENTITY:GET_ENTITY_MATRIX
 *
 * 0xAAB58D9C726404C0

 * 
 * Fills out the given vectors with the components of the entity's world transformation matrix.
 * This effectively gives you the forwards, right hand and up unit direction vectors as well as the entity's position
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {Vector3} front [Ref]
 * @param {Vector3} side [Ref]
 * @param {Vector3} up [Ref]
 * @param {Vector3} pos [Ref]
 */
export function getEntityMatrix(entity: EntityIndex, front: Vector3 /* ptr */, side: Vector3 /* ptr */, up: Vector3 /* ptr */, pos: Vector3 /* ptr */): void {
	const frontPtr = new Vector3Ref();
	const sidePtr = new Vector3Ref();
	const upPtr = new Vector3Ref();
	const posPtr = new Vector3Ref();
	const getEntityMatrix_result = Citizen.invokeNative<void>('0xAAB58D9C726404C0', entity, frontPtr.dataView, sidePtr.dataView, upPtr.dataView, posPtr.dataView);
	frontPtr.copyToVector(front);
	sidePtr.copyToVector(side);
	upPtr.copyToVector(up);
	posPtr.copyToVector(pos);
	return getEntityMatrix_result;
}