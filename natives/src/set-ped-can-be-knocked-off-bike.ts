import { PedIndex, EBikeKnockoff } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_BE_KNOCKED_OFF_BIKE
 *
 * 0xE57B0AA791ADBC93

 * 
 * This native does absolutely nothing, just a nullsub
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EBikeKnockoff} canBeKnockedOffFlag
 */
export function setPedCanBeKnockedOffBike(ped: PedIndex, canBeKnockedOffFlag: EBikeKnockoff | number): void {
	const setPedCanBeKnockedOffBike_result = Citizen.invokeNative<void>('0xE57B0AA791ADBC93', ped, canBeKnockedOffFlag);
	return setPedCanBeKnockedOffBike_result;
}