import { PedIndex, EVehicleKnockoff } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_BE_KNOCKED_OFF_VEHICLE
 *
 * 0x68F395D64BC35E68

 * 
 * state: https://alloc8or.re/gta5/doc/enums/eKnockOffVehicle.txt
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EVehicleKnockoff} canBeKnockedOffFlag
 */
export function setPedCanBeKnockedOffVehicle(ped: PedIndex, canBeKnockedOffFlag: EVehicleKnockoff | number): void {
	const setPedCanBeKnockedOffVehicle_result = Citizen.invokeNative<void>('0x68F395D64BC35E68', ped, canBeKnockedOffFlag);
	return setPedCanBeKnockedOffVehicle_result;
}