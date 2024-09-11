import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_UPPER_BODY_DAMAGE_ONLY
 *
 * 0xEFD4518EFFDFB602

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enableUpperBodyDamageOnly
 */
export function setPedUpperBodyDamageOnly(ped: PedIndex, enableUpperBodyDamageOnly: boolean): void {
	const setPedUpperBodyDamageOnly_result = Citizen.invokeNative<void>('0xEFD4518EFFDFB602', ped, enableUpperBodyDamageOnly);
	return setPedUpperBodyDamageOnly_result;
}