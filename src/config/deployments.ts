/**
 * Represents metadata for a deployment of the ERC1056 registry contract.
 *
 * This can be used to correctly connect DIDs anchored on a particular network to the known registry for that network.
 */
export type MoonDidRegistryDeployment = {
  /**
   * The chain ID of the ethereum-like network for this deployment.
   *
   * The HEX encoding of this value gets used to construct DIDs anchored on this network when the `name` property is
   * not set. Example: `did:ethr:<0xHexChainId>:0x...`
   */
  chainId: number | bigint
  /**
   * The ERC1056 contract address on this network
   */
  registry: string
  /**
   * The name of the network.
   * This is used to construct DIDs on this network: `did:ethr:<name>:0x...`.
   * If this is omitted, DIDs for this network are constructed using the HEX encoding of the chainID
   */
  name?: string
  description?: string
  /**
   * A JSON-RPC endpoint that can be used to broadcast transactions or queries to this network
   */
  rpcUrl?: string
  /**
   * Contracts prior to ethr-did-registry@0.0.3 track nonces differently for meta-transactions
   *
   * @see https://github.com/decentralized-identity/ethr-did-resolver/pull/164
   */
  legacyNonce?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
}

/**
 * Represents the known deployments of the ERC1056 registry contract.
 */
export const deployments: MoonDidRegistryDeployment[] = [
  {
    name: 'mainnet',
    chainId: 1284,
    registry: '0xeCCF09329968e51aC509500D95f171E40AAE0F3B',
  },
  {
    name: 'alpha',
    chainId: 1287,
    registry: '0x1205411db2cC925253A57299f3313075DDD48439',
    legacyNonce: false,
  },
  {
    name: 'dev',
    chainId: 1281,
    registry: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  },
]
