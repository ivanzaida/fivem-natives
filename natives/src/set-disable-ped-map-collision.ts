import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_DISABLE_PED_MAP_COLLISION
 *
 * 0x7EF0501CDC9F69F6

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function setDisablePedMapCollision(ped: PedIndex): void {
	const setDisablePedMapCollision_result = Citizen.invokeNative<void>('0x7EF0501CDC9F69F6', ped);
	return setDisablePedMapCollision_result;
}