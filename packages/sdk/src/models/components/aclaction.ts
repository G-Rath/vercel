/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Enum containing the actions that can be performed against a resource. Group operations are included.
 */
export const ACLAction = {
  Create: "create",
  Delete: "delete",
  Read: "read",
  Update: "update",
  List: "list",
} as const;
/**
 * Enum containing the actions that can be performed against a resource. Group operations are included.
 */
export type ACLAction = ClosedEnum<typeof ACLAction>;

/** @internal */
export const ACLAction$inboundSchema: z.ZodNativeEnum<typeof ACLAction> = z
  .nativeEnum(ACLAction);

/** @internal */
export const ACLAction$outboundSchema: z.ZodNativeEnum<typeof ACLAction> =
  ACLAction$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ACLAction$ {
  /** @deprecated use `ACLAction$inboundSchema` instead. */
  export const inboundSchema = ACLAction$inboundSchema;
  /** @deprecated use `ACLAction$outboundSchema` instead. */
  export const outboundSchema = ACLAction$outboundSchema;
}
