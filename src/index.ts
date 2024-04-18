import { getResolver } from './resolver'
import { MoonDidController } from './controller'
import {
  bytes32toString,
  DEFAULT_REGISTRY_ADDRESS,
  Errors,
  identifierMatcher,
  interpretIdentifier,
  legacyAlgoMap,
  legacyAttrTypes,
  stringToBytes32,
  verificationMethodTypes,
  MetaSignature,
} from './helpers'

import { default as MoonbeamDIDRegistry } from './config/MoonbeamDIDRegistry.json'

export {
  DEFAULT_REGISTRY_ADDRESS as REGISTRY,
  getResolver,
  bytes32toString,
  stringToBytes32,
  MoonDidController,
  /**@deprecated */
  legacyAlgoMap as delegateTypes,
  /**@deprecated */
  legacyAttrTypes as attrTypes,
  verificationMethodTypes,
  identifierMatcher,
  interpretIdentifier,
  Errors,
  MoonbeamDIDRegistry,
  MetaSignature,
}

export { deployments, MoonDidRegistryDeployment } from './config/deployments'
