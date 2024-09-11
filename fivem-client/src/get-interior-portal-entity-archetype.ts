/**
 * CFX:GET_INTERIOR_PORTAL_ENTITY_ARCHETYPE
 *
 * 0X9A0E1700

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} portalIndex Interior portal index.
 * @param {number} entityIndex Portal entity index.
 * @returns {number}  Portal entity archetype.
 */
export function getInteriorPortalEntityArchetype(interiorId: number, portalIndex: number, entityIndex: number): number {
	const getInteriorPortalEntityArchetype_result = Citizen.invokeNative<number>('0X9A0E1700', interiorId, portalIndex, entityIndex);
	return getInteriorPortalEntityArchetype_result;
}