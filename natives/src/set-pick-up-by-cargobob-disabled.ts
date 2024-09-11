import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_PICK_UP_BY_CARGOBOB_DISABLED
 *
 * 0x70BAF7723F26069A

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} disablePickUp
 */
export function setPickUpByCargobobDisabled(entity: EntityIndex, disablePickUp: boolean): void {
	const setPickUpByCargobobDisabled_result = Citizen.invokeNative<void>('0x70BAF7723F26069A', entity, disablePickUp);
	return setPickUpByCargobobDisabled_result;
}