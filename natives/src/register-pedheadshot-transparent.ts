import { PedIndex, PedheadshotId } from '@ivanzaida/structures'

/**
 * PED:REGISTER_PEDHEADSHOT_TRANSPARENT
 *
 * 0xD993C02BC3A99162

 * 
 * Registers a ped to have its headshot taken with a transparent background
 * There's only one slot available for transparent headshots; if it's already in use,
 * this request will fail
 * 
 * Similar to REGISTER_PEDHEADSHOT but creates a transparent background instead of black. Example: https://i.imgur.com/iHz8ztn.png
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {PedheadshotId}  
 */
export function registerPedheadshotTransparent(ped: PedIndex): PedheadshotId {
	const registerPedheadshotTransparent_result = Citizen.invokeNative<PedheadshotId>('0xD993C02BC3A99162', ped);
	return registerPedheadshotTransparent_result;
}