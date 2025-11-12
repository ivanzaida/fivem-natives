import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CREATE_RANDOM_PED
 *
 * 0x7F179394883885FA

 * 
 * vb.net
 * Dim ped_handle As Integer
 *                     With Game.Player.Character
 *                         Dim pos As Vector3 = .Position + .ForwardVector  3
 *                         ped_handle = Native.Function.Call(Of Integer)(Hash.CREATE_RANDOM_PED, pos.X, pos.Y, pos.Z)
 *                     End With
 * 
 * Creates a Ped at the specified location, returns the Ped Handle.
 * Ped will not act until SET_PED_AS_NO_LONGER_NEEDED is called.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 * @returns {PedIndex}  
 */
export function createRandomPed(newCoorsX: number, newCoorsY: number, newCoorsZ: number): PedIndex {
	const createRandomPed_result = Citizen.invokeNative<PedIndex>('0x7F179394883885FA', newCoorsX, newCoorsY, newCoorsZ);
	return createRandomPed_result;
}