import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_ENABLE_HANDCUFFS
 *
 * 0x590E598CA58BADDE

 * 
 * ped can not pull out a weapon when true
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enable
 */
export function setEnableHandcuffs(ped: PedIndex, enable: boolean): void {
	const setEnableHandcuffs_result = Citizen.invokeNative<void>('0x590E598CA58BADDE', ped, enable);
	return setEnableHandcuffs_result;
}