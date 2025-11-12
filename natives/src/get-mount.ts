import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_MOUNT
 *
 * 0x92875FEB15AFF7C7

 * 
 * Function just returns 0
 * void __fastcall ped__get_mount(NativeContext a1)
 * {
 *   NativeContext v1; // rbx@1
 * 
 *   v1 = a1;
 *   GetAddressOfPedFromScriptHandle(a1->Args->Arg1);
 *   v1->Returns->Item1= 0;
 * }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {PedIndex}  
 */
export function getMount(ped: PedIndex): PedIndex {
	const getMount_result = Citizen.invokeNative<PedIndex>('0x92875FEB15AFF7C7', ped);
	return getMount_result;
}