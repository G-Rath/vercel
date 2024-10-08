# CreateEdgeConfigTokenRequest

## Example Usage

```typescript
import { CreateEdgeConfigTokenRequest } from "@vercel/sdk/models/operations/createedgeconfigtoken.js";

let value: CreateEdgeConfigTokenRequest = {
  edgeConfigId: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `edgeConfigId`                                                                                             | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `teamId`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The Team identifier to perform the request on behalf of.                                                   |
| `slug`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The Team slug to perform the request on behalf of.                                                         |
| `requestBody`                                                                                              | [operations.CreateEdgeConfigTokenRequestBody](../../models/operations/createedgeconfigtokenrequestbody.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |