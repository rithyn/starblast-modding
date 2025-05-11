'use strict';
import crypto, { UUID } from 'crypto';
export default function createUUID(): string {
	return crypto.randomUUID({ disableEntropyCache: true }).toUpperCase()
}