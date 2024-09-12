import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:DROP_AMBIENT_PROP
 *
 * 0x5A5573FECDE27C3C

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function dropAmbientProp(ped: PedIndex): void {
	const dropAmbientProp_result = Citizen.invokeNative<void>('0x5A5573FECDE27C3C', ped);
	return dropAmbientProp_result;
}