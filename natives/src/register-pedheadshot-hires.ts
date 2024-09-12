import { PedIndex, PedheadshotId } from '@ivanzaida/structures'

/**
 * PED:REGISTER_PEDHEADSHOT_HIRES
 *
 * 0xA4C84E0CB47D2F16

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {PedheadshotId}  
 */
export function registerPedheadshotHires(ped: PedIndex): PedheadshotId {
	const registerPedheadshotHires_result = Citizen.invokeNative<PedheadshotId>('0xA4C84E0CB47D2F16', ped);
	return registerPedheadshotHires_result;
}