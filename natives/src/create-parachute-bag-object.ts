import { PedIndex, ObjectIndex } from '@ivanzaida/structures'

/**
 * PED:CREATE_PARACHUTE_BAG_OBJECT
 *
 * 0xF3DC3DD7A741C1D5

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} attach
 * @param {boolean} clearVariation
 * @returns {ObjectIndex}  
 */
export function createParachuteBagObject(ped: PedIndex, attach: boolean, clearVariation: boolean): ObjectIndex {
	const createParachuteBagObject_result = Citizen.invokeNative<ObjectIndex>('0xF3DC3DD7A741C1D5', ped, attach, clearVariation);
	return createParachuteBagObject_result;
}