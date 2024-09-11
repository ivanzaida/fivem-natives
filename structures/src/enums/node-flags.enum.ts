export enum ENodeFlags {
	NfNone, // No flags
	NfIncludeSwitchedOffNodes, // Include switched off nodes in any search
	NfIncludeBoatNodes, // Include boat nodes
	NfIgnoreSliplanes = 4, // Ignore sliplanes
	NfIgnoreSwitchedOffDeadends = 8, // Ignore dead-ends, only if they're switched off. If NF_INCLUDE_SWITCHED_OFF_NODES is false this won't find anything to ignore
}