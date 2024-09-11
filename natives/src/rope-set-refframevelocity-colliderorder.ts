import { RopeIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:ROPE_SET_REFFRAMEVELOCITY_COLLIDERORDER
 *
 * 0x0A07F53F5EED824F

 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 * @param {number} colliderOrder
 */
export function ropeSetRefframevelocityColliderorder(ropeID: RopeIndex, colliderOrder: number): void {
	const ropeSetRefframevelocityColliderorder_result = Citizen.invokeNative<void>('0x0A07F53F5EED824F', ropeID, colliderOrder);
	return ropeSetRefframevelocityColliderorder_result;
}